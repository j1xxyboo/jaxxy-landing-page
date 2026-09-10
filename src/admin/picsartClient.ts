import type { AdminModel } from './models';

const KEY_STORAGE = 'jaxxy.admin.picsartKey';

/**
 * In dev we go through the Vite proxy (`/picsart`) because the gateway does not
 * send CORS headers for browser origins. In a build, point at the API directly —
 * or better, put your own server in front of it.
 */
const BASE = import.meta.env.DEV ? '/picsart' : 'https://api.picsart.com';

const POLL_INTERVAL_MS = 2500;
const POLL_TIMEOUT_MS = 5 * 60 * 1000;

export interface GenerationResult {
  taskId: string;
  urls: string[];
  credits?: number;
  raw: unknown;
}

export function getStoredKey(): string {
  return localStorage.getItem(KEY_STORAGE) || import.meta.env.VITE_PICSART_API_KEY || '';
}

export function setStoredKey(key: string): void {
  if (key) localStorage.setItem(KEY_STORAGE, key);
  else localStorage.removeItem(KEY_STORAGE);
}

async function request(path: string, key: string, body?: unknown): Promise<any> {
  const res = await fetch(`${BASE}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${key}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let json: any = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    /* non-JSON body — fall through to the status-based message */
  }

  if (!res.ok) {
    const detail = json?.message || json?.detail || json?.error || text?.slice(0, 200);
    throw new Error(`API ${res.status} — ${detail || 'requête refusée'}`);
  }

  return json;
}

function extract(response: any): GenerationResult {
  const result = response?.result ?? {};
  const items: string[] = Array.isArray(result.items)
    ? result.items.map((item: any) => item?.url).filter(Boolean)
    : [];
  const urls = items.length ? items : [result.url].filter(Boolean);

  return {
    taskId: response?.id ?? '',
    urls,
    credits: response?.usage?.credits,
    raw: response,
  };
}

async function poll(
  taskId: string,
  key: string,
  onTick?: (elapsedMs: number) => void,
): Promise<GenerationResult> {
  const startedAt = Date.now();

  for (;;) {
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));

    const body = await request(`/workflows/v1/models/${taskId}/result`, key);
    const response = body?.response ?? {};

    if (response.status === 'COMPLETED') return extract(response);
    if (response.status === 'FAILED') {
      throw new Error(response.error?.message || response.message || 'La génération a échoué.');
    }

    const elapsed = Date.now() - startedAt;
    onTick?.(elapsed);
    if (elapsed > POLL_TIMEOUT_MS) throw new Error('Délai dépassé — la tâche est toujours en cours.');
  }
}

export async function generate(
  model: AdminModel,
  params: Record<string, unknown>,
  key: string,
  onTick?: (elapsedMs: number) => void,
): Promise<GenerationResult> {
  const endpoint = model.async ? 'submit' : 'execute';
  const body = await request(`/workflows/v1/models/${endpoint}`, key, {
    params: { model: model.id, params },
  });

  const response = body?.response ?? {};

  if (response.status === 'COMPLETED' || response.result) return extract(response);
  if (!response.id) throw new Error('Réponse inattendue de l’API.');

  return poll(response.id, key, onTick);
}
