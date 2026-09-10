import type { BrandId } from '../data/models';

interface ModelMarkProps {
  brand: BrandId;
  size?: number;
}

const BRANDS: Record<BrandId, { bg: string; label: string }> = {
  flux: { bg: '#2b2f36', label: 'F' },
  kling: { bg: '#6d5efc', label: 'K' },
  seedance: { bg: '#325ab4', label: 'S' },
  'nano-banana': { bg: '#1a73e8', label: '' },
  'gpt-image': { bg: '#10a37f', label: '' },
  minimax: { bg: '#f04438', label: 'M' },
  runway: { bg: '#0a0a0a', label: 'R' },
  ideogram: { bg: '#ff4f8b', label: 'I' },
};

/** Brand mark for each AI model, drawn as a real vector tile (no emoji fallbacks). */
export default function ModelMark({ brand, size = 40 }: ModelMarkProps) {
  const { bg, label } = BRANDS[brand];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill={bg} />

      {brand === 'nano-banana' && (
        <path
          d="M20 8.5c1.6 4.7 3.4 6.5 8 8-4.6 1.5-6.4 3.3-8 8-1.6-4.7-3.4-6.5-8-8 4.6-1.5 6.4-3.3 8-8Z"
          fill="#ffffff"
        />
      )}

      {brand === 'gpt-image' && (
        <g stroke="#ffffff" strokeWidth="1.9" fill="none">
          <ellipse cx="20" cy="20" rx="4.3" ry="9" />
          <ellipse cx="20" cy="20" rx="4.3" ry="9" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="4.3" ry="9" transform="rotate(120 20 20)" />
        </g>
      )}

      {label && (
        <text
          x="20"
          y="20.5"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Inter, ui-sans-serif, sans-serif"
          fontSize="17"
          fontWeight="800"
          letterSpacing="-0.5"
          fill="#ffffff"
        >
          {label}
        </text>
      )}
    </svg>
  );
}
