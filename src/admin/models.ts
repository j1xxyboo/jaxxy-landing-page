export type FieldType = 'text' | 'enum' | 'range' | 'boolean' | 'urlList';

export interface Field {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  default?: string | number | boolean;
  hint?: string;
}

export interface AdminModel {
  /** Model id sent to the gateway. */
  id: string;
  name: string;
  vendor: string;
  kind: 'image' | 'video';
  /** Long-running models must be submitted and polled instead of executed. */
  async: boolean;
  blurb: string;
  fields: Field[];
}

export const ADMIN_MODELS: AdminModel[] = [
  {
    id: 'seedance-2.5',
    name: 'Seedance 2.5',
    vendor: 'ByteDance',
    kind: 'video',
    async: true,
    blurb: 'Vidéo 4–30 s avec audio généré, jusqu’à 1080p.',
    fields: [
      {
        key: 'prompt',
        label: 'Prompt',
        type: 'text',
        required: true,
        placeholder: 'Plan aérien du Tassili n’Ajjer au lever du jour, brume basse, mouvement de caméra lent',
      },
      {
        key: 'aspectRatio',
        label: 'Format',
        type: 'enum',
        options: ['16:9', '9:16', '1:1', '4:3', '3:4', '21:9', 'adaptive'],
        default: '16:9',
      },
      {
        key: 'resolution',
        label: 'Résolution',
        type: 'enum',
        options: ['480p', '720p', '1080p'],
        default: '1080p',
      },
      {
        key: 'duration',
        label: 'Durée (s)',
        type: 'range',
        min: 4,
        max: 30,
        step: 1,
        default: 5,
      },
      {
        key: 'outputFormat',
        label: 'Fichier',
        type: 'enum',
        options: ['mp4', 'mov'],
        default: 'mp4',
      },
      { key: 'generateAudio', label: 'Générer l’audio', type: 'boolean', default: true },
      { key: 'returnLastFrame', label: 'Retourner la dernière image', type: 'boolean', default: false },
      {
        key: 'imageUrls',
        label: 'Images de référence',
        type: 'urlList',
        placeholder: 'https://… (une URL par ligne)',
        hint: 'Optionnel — URLs publiques.',
      },
      {
        key: 'startFrame',
        label: 'Première image',
        type: 'text',
        placeholder: 'https://… (URL d’image)',
      },
      {
        key: 'endFrame',
        label: 'Dernière image',
        type: 'text',
        placeholder: 'https://… (URL d’image)',
      },
    ],
  },
  {
    id: 'gpt-image-2.5-flare',
    name: 'GPT Image 2.5',
    vendor: 'OpenAI',
    kind: 'image',
    async: false,
    blurb: 'Images fidèles aux prompts longs, jusqu’à 10 variantes par appel.',
    fields: [
      {
        key: 'prompt',
        label: 'Prompt',
        type: 'text',
        required: true,
        placeholder: 'Packshot studio d’une bouteille d’huile d’olive, fond sable, ombres douces',
        hint: '32 000 caractères max.',
      },
      {
        key: 'aspectRatio',
        label: 'Format',
        type: 'enum',
        options: ['1:1', '3:2', '2:3', '16:9', '9:16', '4:3', '3:4', 'auto'],
        default: '1:1',
      },
      {
        key: 'quality',
        label: 'Qualité',
        type: 'enum',
        options: ['max', 'xhigh', 'high', 'medium', 'low'],
        default: 'high',
      },
      {
        key: 'background',
        label: 'Fond',
        type: 'enum',
        options: ['opaque', 'transparent'],
        default: 'opaque',
      },
      {
        key: 'outputFormat',
        label: 'Fichier',
        type: 'enum',
        options: ['png', 'jpeg', 'webp'],
        default: 'png',
      },
      {
        key: 'count',
        label: 'Nombre d’images',
        type: 'enum',
        options: ['1', '2', '4', '6', '8', '10'],
        default: '1',
      },
      {
        key: 'imageUrls',
        label: 'Images source',
        type: 'urlList',
        placeholder: 'https://… (une URL par ligne)',
        hint: 'Optionnel — pour l’édition d’images existantes.',
      },
    ],
  },
];

/** Numeric params the gateway expects as numbers, not strings. */
const NUMERIC_KEYS = new Set(['duration', 'count']);

export function buildParams(
  model: AdminModel,
  values: Record<string, string | number | boolean>,
): Record<string, unknown> {
  const params: Record<string, unknown> = {};

  for (const field of model.fields) {
    const value = values[field.key];

    if (field.type === 'boolean') {
      params[field.key] = Boolean(value);
      continue;
    }

    if (field.type === 'urlList') {
      const urls = String(value ?? '')
        .split(/\s*\n\s*/)
        .map((line) => line.trim())
        .filter(Boolean);
      if (urls.length) params[field.key] = urls;
      continue;
    }

    if (value === undefined || value === null || value === '') continue;

    params[field.key] = NUMERIC_KEYS.has(field.key) ? Number(value) : value;
  }

  return params;
}

export function defaultValues(model: AdminModel): Record<string, string | number | boolean> {
  const values: Record<string, string | number | boolean> = {};
  for (const field of model.fields) {
    values[field.key] = field.default ?? (field.type === 'boolean' ? false : '');
  }
  return values;
}
