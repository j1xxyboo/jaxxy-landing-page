import { useState } from 'react';
import { MODELS } from '../data/models';
import type { ModelKind } from '../data/models';
import ModelMark from '../components/ModelMark';

const TABS: { id: 'all' | ModelKind; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Vidéo' },
];

export default function Models() {
  const [tab, setTab] = useState<'all' | ModelKind>('all');
  const visible = tab === 'all' ? MODELS : MODELS.filter((model) => model.kind === tab);

  return (
    <section id="modeles" className="border-y border-white/[0.06] bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-bold tracking-tight text-white sm:text-[34px]">
              Le catalogue complet
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
              Chaque modèle garde ses points forts. Passez de l’un à l’autre sans créer de nouveau
              compte ni payer un nouvel abonnement.
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-1">
            {TABS.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`rounded-lg px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                  tab === item.id ? 'bg-white/[0.12] text-white shadow-sm' : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((model) => (
            <article
              key={model.id}
              className="group rounded-2xl border border-white/[0.08] bg-ink-850 p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                  <ModelMark shape={model.shape} tone={model.tone} size={20} />
                </span>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] font-semibold text-slate-400">
                  {model.kind === 'image' ? 'Image' : 'Vidéo'}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-white">{model.name}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{model.summary}</p>
              <p className="mt-4 border-t border-white/[0.06] pt-3 text-[12px] font-semibold text-slate-300">
                {model.credits} crédits / génération
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
