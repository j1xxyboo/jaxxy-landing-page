import { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  Coins,
  Download,
  Eye,
  EyeOff,
  Film,
  Image as ImageIcon,
  KeyRound,
  Loader2,
  LogOut,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { ADMIN_MODELS, buildParams, defaultValues, type AdminModel, type Field } from './models';
import { generate, getStoredKey, setStoredKey } from './picsartClient';

const JOBS_STORAGE = 'jaxxy.admin.jobs';

interface Job {
  uid: string;
  taskId?: string;
  modelId: string;
  modelName: string;
  kind: 'image' | 'video';
  prompt: string;
  status: 'RUNNING' | 'COMPLETED' | 'FAILED';
  urls: string[];
  credits?: number;
  error?: string;
  createdAt: number;
}

function loadJobs(): Job[] {
  try {
    const raw = localStorage.getItem(JOBS_STORAGE);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((job: Job) =>
      job.status === 'RUNNING'
        ? { ...job, status: 'FAILED' as const, error: 'Interrompu par un rechargement.' }
        : job,
    );
  } catch {
    return [];
  }
}

interface AdminDashboardProps {
  onLock: () => void;
}

export default function AdminDashboard({ onLock }: AdminDashboardProps) {
  const [model, setModel] = useState<AdminModel>(ADMIN_MODELS[0]);
  const [values, setValues] = useState(() => defaultValues(ADMIN_MODELS[0]));
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [busy, setBusy] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    setApiKey(getStoredKey());
    setJobs(loadJobs());
  }, []);

  useEffect(() => {
    localStorage.setItem(JOBS_STORAGE, JSON.stringify(jobs.slice(0, 40)));
  }, [jobs]);

  const spentCredits = useMemo(
    () => jobs.reduce((total, job) => total + (job.credits ?? 0), 0),
    [jobs],
  );

  function pickModel(next: AdminModel) {
    setModel(next);
    setValues(defaultValues(next));
    setError('');
  }

  function set(key: string, value: string | number | boolean) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function saveKey(next: string) {
    setApiKey(next);
    setStoredKey(next.trim());
  }

  async function run() {
    const key = apiKey.trim();
    if (!key) {
      setError('Renseignez la clé API Picsart.');
      return;
    }
    if (!String(values.prompt ?? '').trim()) {
      setError('Le prompt est obligatoire.');
      return;
    }

    const uid = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const job: Job = {
      uid,
      modelId: model.id,
      modelName: model.name,
      kind: model.kind,
      prompt: String(values.prompt),
      status: 'RUNNING',
      urls: [],
      createdAt: Date.now(),
    };

    setError('');
    setBusy(true);
    setElapsed(0);
    setJobs((prev) => [job, ...prev]);

    try {
      const result = await generate(model, buildParams(model, values), key, setElapsed);
      setJobs((prev) =>
        prev.map((item) =>
          item.uid === uid
            ? {
                ...item,
                status: 'COMPLETED' as const,
                taskId: result.taskId,
                urls: result.urls,
                credits: result.credits,
              }
            : item,
        ),
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erreur inconnue.';
      setError(message);
      setJobs((prev) =>
        prev.map((item) =>
          item.uid === uid ? { ...item, status: 'FAILED' as const, error: message } : item,
        ),
      );
    } finally {
      setBusy(false);
      setElapsed(0);
    }
  }

  return (
    <div className="min-h-screen bg-canvas px-3 py-3 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-white shadow-frame">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-[15px] font-semibold tracking-tight text-inkline">
                Jaxxy · Console de test
              </p>
              <p className="text-[12px] text-neutral-400">Accès administrateur — non public</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-panel px-3 py-1.5 text-[12px] font-semibold text-neutral-600">
              <Coins className="h-3.5 w-3.5" strokeWidth={2.2} /> {spentCredits} crédits utilisés
            </span>
            <a
              href="#top"
              className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-500 transition hover:text-inkline"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.2} /> Site
            </a>
            <button
              onClick={onLock}
              className="flex items-center gap-1.5 rounded-xl border border-neutral-200 px-3 py-2 text-[13px] font-semibold text-inkline transition hover:border-neutral-300"
            >
              <LogOut className="h-4 w-4" strokeWidth={2.2} /> Verrouiller
            </button>
          </div>
        </header>

        <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[380px_1fr]">
          {/* Panneau de génération */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-neutral-200 p-4">
              <label className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-neutral-500">
                <KeyRound className="h-3.5 w-3.5" strokeWidth={2.2} /> Clé API Picsart
              </label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(event) => saveKey(event.target.value)}
                  placeholder="paat-…"
                  className="w-full rounded-xl border border-neutral-200 px-3 py-2.5 text-[13px] text-inkline outline-none transition focus:border-accent"
                />
                <button
                  onClick={() => setShowKey((prev) => !prev)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 transition hover:text-inkline"
                  aria-label={showKey ? 'Masquer la clé' : 'Afficher la clé'}
                >
                  {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-neutral-400">
                Stockée uniquement dans ce navigateur. En production, faites passer les appels par
                votre propre serveur.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {ADMIN_MODELS.map((item) => {
                const KindIcon = item.kind === 'image' ? ImageIcon : Film;
                const active = item.id === model.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => pickModel(item)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      active
                        ? 'border-accent bg-accent/[0.06]'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        active ? 'bg-accent text-white' : 'bg-panel text-neutral-500'
                      }`}
                    >
                      <KindIcon className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    <p className="mt-3 text-[13.5px] font-semibold text-inkline">{item.name}</p>
                    <p className="text-[11.5px] text-neutral-400">{item.vendor}</p>
                    <p className="mt-1.5 text-[11.5px] leading-relaxed text-neutral-500">
                      {item.blurb}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="space-y-3.5 rounded-2xl border border-neutral-200 p-4">
              {model.fields.map((field) => (
                <FieldControl
                  key={field.key}
                  field={field}
                  value={values[field.key]}
                  onChange={(value) => set(field.key, value)}
                />
              ))}
            </div>

            {error && (
              <p className="flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-[12.5px] font-medium leading-relaxed text-red-600">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} /> {error}
              </p>
            )}

            <button
              onClick={run}
              disabled={busy}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-[14px] font-semibold text-white transition hover:bg-accent-dark disabled:opacity-60"
            >
              {busy ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.4} />
                  Génération… {elapsed > 0 ? `${Math.round(elapsed / 1000)}s` : ''}
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" strokeWidth={2.2} /> Générer
                </>
              )}
            </button>
          </div>

          {/* Résultats */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] font-semibold tracking-tight text-inkline">
                Résultats ({jobs.length})
              </h2>
              {jobs.length > 0 && (
                <button
                  onClick={() => setJobs([])}
                  className="flex items-center gap-1.5 text-[12.5px] font-medium text-neutral-400 transition hover:text-red-500"
                >
                  <Trash2 className="h-3.5 w-3.5" strokeWidth={2.2} /> Vider
                </button>
              )}
            </div>

            {jobs.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-dashed border-neutral-200 px-6 py-20 text-center">
                <p className="text-[13.5px] text-neutral-400">
                  Aucune génération pour l’instant. Choisissez un modèle et lancez un test.
                </p>
              </div>
            ) : (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {jobs.map((job) => (
                  <JobCard key={job.uid} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldControl({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
}) {
  if (field.type === 'boolean') {
    return (
      <label className="flex cursor-pointer items-center justify-between gap-3">
        <span className="text-[13px] font-medium text-inkline">{field.label}</span>
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          className="h-4 w-4 accent-accent"
        />
      </label>
    );
  }

  return (
    <div>
      <label className="text-[12px] font-semibold uppercase tracking-wide text-neutral-500">
        {field.label}
        {field.required && <span className="text-accent"> *</span>}
      </label>

      {field.type === 'enum' && (
        <select
          value={String(value ?? '')}
          onChange={(event) => onChange(event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[13px] text-inkline outline-none transition focus:border-accent"
        >
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {field.type === 'range' && (
        <div className="mt-1.5 flex items-center gap-3">
          <input
            type="range"
            min={field.min}
            max={field.max}
            step={field.step}
            value={Number(value ?? field.min ?? 0)}
            onChange={(event) => onChange(Number(event.target.value))}
            className="w-full accent-accent"
          />
          <span className="w-10 shrink-0 text-right text-[13px] font-semibold text-inkline">
            {String(value)}
          </span>
        </div>
      )}

      {(field.type === 'text' || field.type === 'urlList') && (
        <textarea
          value={String(value ?? '')}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          rows={field.key === 'prompt' ? 4 : 2}
          className="mt-1.5 w-full resize-y rounded-xl border border-neutral-200 px-3 py-2.5 text-[13px] leading-relaxed text-inkline outline-none transition focus:border-accent"
        />
      )}

      {field.hint && <p className="mt-1 text-[11px] text-neutral-400">{field.hint}</p>}
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const KindIcon = job.kind === 'image' ? ImageIcon : Film;

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="flex items-center justify-between gap-2 px-4 pt-4">
        <span className="flex items-center gap-1.5 text-[12px] font-semibold text-inkline">
          <KindIcon className="h-3.5 w-3.5 text-neutral-400" strokeWidth={2.2} /> {job.modelName}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide ${
            job.status === 'COMPLETED'
              ? 'bg-emerald-50 text-emerald-600'
              : job.status === 'FAILED'
                ? 'bg-red-50 text-red-600'
                : 'bg-panel text-neutral-500'
          }`}
        >
          {job.status === 'RUNNING' ? 'en cours' : job.status === 'COMPLETED' ? 'terminé' : 'échec'}
        </span>
      </div>

      <p className="px-4 pt-2 text-[12px] leading-relaxed text-neutral-500">{job.prompt}</p>

      <div className="mt-3 px-4">
        {job.status === 'RUNNING' && (
          <div className="flex aspect-video items-center justify-center rounded-xl bg-panel">
            <Loader2 className="h-5 w-5 animate-spin text-neutral-400" strokeWidth={2.4} />
          </div>
        )}

        {job.status === 'FAILED' && (
          <p className="rounded-xl bg-red-50 px-3 py-2.5 text-[11.5px] leading-relaxed text-red-600">
            {job.error}
          </p>
        )}

        {job.status === 'COMPLETED' &&
          (job.kind === 'video' ? (
            <video
              src={job.urls[0]}
              controls
              className="w-full rounded-xl bg-black"
              preload="metadata"
            />
          ) : (
            <div className={`grid gap-2 ${job.urls.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {job.urls.map((url) => (
                <img key={url} src={url} alt="" className="w-full rounded-xl bg-panel" />
              ))}
            </div>
          ))}
      </div>

      <div className="flex items-center justify-between px-4 py-3.5">
        <span className="text-[11px] text-neutral-400">
          {job.credits !== undefined ? `${job.credits} crédits` : '—'}
        </span>
        {job.urls[0] && (
          <a
            href={job.urls[0]}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-accent transition hover:text-accent-dark"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={2.2} /> Télécharger
          </a>
        )}
      </div>
    </div>
  );
}
