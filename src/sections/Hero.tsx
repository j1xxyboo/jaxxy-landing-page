import { MODELS, PROVIDER_WORDMARKS } from '../data/models';
import ModelMark from '../components/ModelMark';

const RINGS = [340, 520, 700, 880, 1060, 1240];

const ACTIVITY = [
  {
    initials: 'AB',
    title: 'Amine B.',
    action: 'a généré 4 visuels',
    meta: 'Flux 1.1 Pro · il y a 2 min',
  },
  {
    initials: 'SN',
    title: 'Studio Nord',
    action: 'a rendu une vidéo 10 s',
    meta: 'Kling 1.6 · 1080p',
  },
  {
    initials: 'SM',
    title: 'Sara M.',
    action: 'a livré la campagne client',
    meta: 'Seedance 2.0 · export HD',
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center" aria-hidden="true">
        <div className="relative h-[900px] w-full max-w-[1240px]">
          <div className="absolute left-1/2 top-[-160px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[140px]" />
          <div className="absolute left-[70%] top-[140px] h-[260px] w-[380px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
          {RINGS.map((size) => (
            <div
              key={size}
              className="absolute left-1/2 top-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
              style={{ width: size, height: size }}
            />
          ))}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1240 900" fill="none">
            <path d="M232 470c-28-120 8-236 96-318" stroke="#818cf8" strokeOpacity="0.5" strokeWidth="1.3" />
            <path d="M1010 250c58 118 52 240-14 336" stroke="#818cf8" strokeOpacity="0.45" strokeWidth="1.3" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-5 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2 text-[13px] font-medium backdrop-blur">
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-white">4.8</span>
            <span className="text-slate-500">Google</span>
          </span>
          <span className="h-3.5 w-px bg-white/10" />
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-white">12 000+</span>
            <span className="text-slate-500">créateurs en Algérie</span>
          </span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-[40px] font-bold leading-[1.05] tracking-tightest text-transparent sm:text-[58px]">
          Tous les modèles IA,
          <br />
          un seul compte
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
          Images et vidéos générées avec les meilleurs modèles du marché, depuis une seule interface
          et payables en dinars.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 sm:w-auto">
            Commencer gratuitement
          </button>
          <button className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.08] sm:w-auto">
            Parler à l’équipe
          </button>
        </div>
      </div>

      {/* Orbit badges */}
      <div className="relative mx-auto mt-12 hidden h-[300px] max-w-[1180px] lg:block">
        {MODELS.map((model) => (
          <div
            key={model.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-floaty"
            style={{ top: model.orbit.top, left: model.orbit.left }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-ink-800 shadow-badge">
              <ModelMark shape={model.shape} tone={model.tone} size={24} />
            </div>
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2">
          <ActivityStack />
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-md lg:hidden">
        <ActivityStack />
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl text-center">
        <p className="text-[13px] text-slate-500">Modèles disponibles dès aujourd’hui</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
          {PROVIDER_WORDMARKS.map((name) => (
            <span key={name} className="text-[17px] font-semibold tracking-tight text-slate-600">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityStack() {
  return (
    <div className="relative">
      <div className="absolute inset-x-6 -bottom-6 h-24 rounded-full bg-indigo-500/20 blur-2xl" aria-hidden="true" />
      <div className="relative space-y-[-10px]">
        {ACTIVITY.map((item, index) => (
          <div
            key={item.initials}
            className="rounded-2xl border border-white/[0.08] bg-ink-800/90 px-4 py-3 shadow-card backdrop-blur"
            style={{
              marginLeft: index * 16,
              marginRight: index * 4,
              opacity: 1 - index * 0.12,
              zIndex: ACTIVITY.length - index,
              position: 'relative',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-[11px] font-semibold text-white">
                {item.initials}
              </span>
              <div className="min-w-0 text-left">
                <p className="truncate text-[13px] text-white">
                  <span className="font-semibold">{item.title}</span>{' '}
                  <span className="text-slate-400">{item.action}</span>
                </p>
                <p className="truncate text-[12px] text-slate-500">{item.meta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
