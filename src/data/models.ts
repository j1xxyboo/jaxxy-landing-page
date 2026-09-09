export type ModelKind = 'image' | 'video';
export type MarkShape =
  | 'spark'
  | 'flower'
  | 'wave'
  | 'play'
  | 'grid'
  | 'hex'
  | 'ring'
  | 'prism';

export interface AiModel {
  id: string;
  name: string;
  kind: ModelKind;
  shape: MarkShape;
  tone: string;
  summary: string;
  credits: number;
  /** Orbit placement on large screens, in percent of the hero box. */
  orbit: { top: string; left: string };
}

export const MODELS: AiModel[] = [
  {
    id: 'flux',
    name: 'Flux 1.1 Pro',
    kind: 'image',
    shape: 'spark',
    tone: '#f59e0b',
    summary: 'Photographie publicitaire et rendus produit très nets.',
    credits: 3,
    orbit: { top: '16%', left: '22%' },
  },
  {
    id: 'kling',
    name: 'Kling 1.6',
    kind: 'video',
    shape: 'play',
    tone: '#2563eb',
    summary: 'Vidéo fluide jusqu’à 10 s, mouvements de caméra maîtrisés.',
    credits: 18,
    orbit: { top: '30%', left: '11%' },
  },
  {
    id: 'seedance',
    name: 'Seedance 2.0',
    kind: 'video',
    shape: 'wave',
    tone: '#0d9488',
    summary: 'Clips courts et dynamiques pensés pour les réseaux.',
    credits: 14,
    orbit: { top: '52%', left: '7%' },
  },
  {
    id: 'nano-banana',
    name: 'Nano Banana',
    kind: 'image',
    shape: 'ring',
    tone: '#ca8a04',
    summary: 'Retouche et variations en quelques secondes.',
    credits: 2,
    orbit: { top: '73%', left: '17%' },
  },
  {
    id: 'gpt-image',
    name: 'GPT Image',
    kind: 'image',
    shape: 'flower',
    tone: '#059669',
    summary: 'Compréhension fine des prompts longs et du texte affiché.',
    credits: 4,
    orbit: { top: '16%', left: '76%' },
  },
  {
    id: 'minimax',
    name: 'MiniMax Hailuo',
    kind: 'video',
    shape: 'prism',
    tone: '#7c3aed',
    summary: 'Rendu cinématographique, idéal pour les spots de marque.',
    credits: 16,
    orbit: { top: '32%', left: '87%' },
  },
  {
    id: 'runway',
    name: 'Runway Gen-3',
    kind: 'video',
    shape: 'hex',
    tone: '#0f172a',
    summary: 'Image-vers-vidéo et effets visuels avancés.',
    credits: 20,
    orbit: { top: '55%', left: '90%' },
  },
  {
    id: 'ideogram',
    name: 'Ideogram 3.0',
    kind: 'image',
    shape: 'grid',
    tone: '#e11d48',
    summary: 'Typographie et logos lisibles en arabe comme en latin.',
    credits: 3,
    orbit: { top: '74%', left: '80%' },
  },
];

export const PROVIDER_WORDMARKS = [
  'Flux',
  'Kling',
  'Seedance',
  'Nano Banana',
  'GPT Image',
  'MiniMax',
  'Runway',
  'Ideogram',
];

export const PROMPT_SAMPLES = [
  'Portrait éditorial, karakou modernisé, lumière de fin de journée sur la baie d’Alger, 85mm, grain fin',
  'Plan aérien du Tassili n’Ajjer au lever du jour, brume basse, mouvement de caméra lent',
  'Packshot studio d’une bouteille d’huile d’olive, fond sable, ombres douces, format 1:1',
];
