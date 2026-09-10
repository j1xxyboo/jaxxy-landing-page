export type ModelKind = 'image' | 'video';

export type BrandId =
  | 'flux'
  | 'kling'
  | 'seedance'
  | 'nano-banana'
  | 'gpt-image'
  | 'minimax'
  | 'runway'
  | 'ideogram';

export interface AiModel {
  id: BrandId;
  name: string;
  kind: ModelKind;
  summary: string;
  credits: number;
}

export const MODELS: AiModel[] = [
  {
    id: 'flux',
    name: 'Flux 1.1 Pro',
    kind: 'image',
    summary: 'Photographie publicitaire et rendus produit très nets.',
    credits: 3,
  },
  {
    id: 'kling',
    name: 'Kling 1.6',
    kind: 'video',
    summary: 'Vidéo fluide jusqu’à 10 s, mouvements de caméra maîtrisés.',
    credits: 18,
  },
  {
    id: 'seedance',
    name: 'Seedance 2.0',
    kind: 'video',
    summary: 'Clips courts et dynamiques pensés pour les réseaux.',
    credits: 14,
  },
  {
    id: 'nano-banana',
    name: 'Nano Banana',
    kind: 'image',
    summary: 'Retouche et variations en quelques secondes.',
    credits: 2,
  },
  {
    id: 'gpt-image',
    name: 'GPT Image',
    kind: 'image',
    summary: 'Compréhension fine des prompts longs et du texte affiché.',
    credits: 4,
  },
  {
    id: 'minimax',
    name: 'MiniMax Hailuo',
    kind: 'video',
    summary: 'Rendu cinématographique, idéal pour les spots de marque.',
    credits: 16,
  },
  {
    id: 'runway',
    name: 'Runway Gen-3',
    kind: 'video',
    summary: 'Image-vers-vidéo et effets visuels avancés.',
    credits: 20,
  },
  {
    id: 'ideogram',
    name: 'Ideogram 3.0',
    kind: 'image',
    summary: 'Typographie et logos lisibles en arabe comme en latin.',
    credits: 3,
  },
];

export const PROMPT_SAMPLES = [
  'Portrait éditorial, karakou modernisé, lumière de fin de journée sur la baie d’Alger, 85mm, grain fin',
  'Plan aérien du Tassili n’Ajjer au lever du jour, brume basse, mouvement de caméra lent',
  'Packshot studio d’une bouteille d’huile d’olive, fond sable, ombres douces, format 1:1',
];
