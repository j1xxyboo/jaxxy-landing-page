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
    <section id="modeles" className="border-y border-slate-200/80 bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-bold tracking-tight text-slate-900 sm:text-[34px]">
              Le catalogue complet
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              Chaque modèle garde ses points forts. Passez de l’un à l’autre sans créer de nouveau
              compte ni payer un nouvel abonnement.
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
            {TABS.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`rounded-lg px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                  tab === item.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
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
              className="group rounded-2xl border border-slate-200 p-5 transition-colors hover:border-slate-300"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                  <ModelMark shape={model.shape} tone={model.tone} size={20} />
                </span>
                <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                  {model.kind === 'image' ? 'Image' : 'Vidéo'}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-slate-900">{model.name}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{model.summary}</p>
              <p className="mt-4 border-t border-slate-100 pt-3 text-[12px] font-semibold text-slate-700">
                {model.credits} crédits / génération
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
