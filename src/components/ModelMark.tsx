import type { MarkShape } from '../data/models';

interface ModelMarkProps {
  shape: MarkShape;
  tone: string;
  size?: number;
}

export default function ModelMark({ shape, tone, size = 22 }: ModelMarkProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  switch (shape) {
    case 'spark':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2.5 13.9 9 20.5 11 13.9 13 12 21.5 10.1 13 3.5 11 10.1 9 12 2.5Z" fill={tone} />
        </svg>
      );
    case 'play':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="2.5" y="5" width="19" height="14" rx="4" fill={tone} opacity="0.16" />
          <path d="M10 8.8 16 12l-6 3.2V8.8Z" fill={tone} />
        </svg>
      );
    case 'wave':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M3 15c2.4 0 2.4-6 4.8-6s2.4 6 4.8 6 2.4-6 4.8-6S19.8 15 22 15"
            stroke={tone}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'ring':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke={tone} strokeWidth="2.2" />
          <circle cx="12" cy="12" r="3" fill={tone} />
        </svg>
      );
    case 'flower':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="6.4" r="3.4" fill={tone} opacity="0.9" />
          <circle cx="17" cy="14.4" r="3.4" fill={tone} opacity="0.55" />
          <circle cx="7" cy="14.4" r="3.4" fill={tone} opacity="0.75" />
        </svg>
      );
    case 'prism':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3.2 21 18H3l9-14.8Z" fill={tone} opacity="0.85" />
          <path d="M12 3.2 21 18h-9V3.2Z" fill={tone} opacity="0.45" />
        </svg>
      );
    case 'hex':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z"
            stroke={tone}
            strokeWidth="2"
            fill={tone}
            fillOpacity="0.12"
          />
        </svg>
      );
    case 'grid':
    default:
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3.5" y="3.5" width="7" height="7" rx="2" fill={tone} />
          <rect x="13.5" y="3.5" width="7" height="7" rx="2" fill={tone} opacity="0.45" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="2" fill={tone} opacity="0.45" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="2" fill={tone} />
        </svg>
      );
  }
}
