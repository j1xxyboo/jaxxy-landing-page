import { useState } from 'react';
import { ArrowUpRight, Wand2 } from 'lucide-react';
import { MODELS, PROMPT_SAMPLES } from '../data/models';
import ModelMark from '../components/ModelMark';

const RATIOS = ['1:1', '4:5', '16:9', '9:16'];

export default function Studio() {
  const [modelId, setModelId] = useState(MODELS[0].id);
  const [ratio, setRatio] = useState('16:9');
  const [prompt, setPrompt] = useState(PROMPT_SAMPLES[0]);

  const active = MODELS.find((model) => model.id === modelId) ?? MODELS[0];

  return (
    <section id="studio" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-[28px] font-bold tracking-tight text-slate-900 sm:text-[34px]">
            Un studio, tous les moteurs
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Choisissez le modèle, écrivez le prompt, ajustez le format. Le coût en crédits est affiché
            avant chaque génération.
          </p>
        </div>

        <div className="mt-9 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-panel">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                <ModelMark shape={active.shape} tone={active.tone} size={20} />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-slate-900">{active.name}</p>
                <p className="text-[12px] text-slate-500">
                  {active.kind === 'image' ? 'Génération d’image' : 'Génération vidéo'} ·{' '}
                  {active.credits} crédits
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
              {RATIOS.map((item) => (
                <button
                  key={item}
                  onClick={() => setRatio(item)}
                  className={`rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition-colors ${
                    ratio === item ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 px-5 py-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <label className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                rows={4}
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-[14px] leading-relaxed text-slate-800 outline-none transition-colors focus:border-slate-400 focus:bg-white"
              />

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {PROMPT_SAMPLES.map((sample, index) => (
                  <button
                    key={sample}
                    onClick={() => setPrompt(sample)}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                  >
                    Exemple {index + 1}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-slate-800">
                  <Wand2 className="h-4 w-4" strokeWidth={2} />
                  Générer · {active.credits} crédits
                </button>
                <span className="text-[12px] text-slate-500">Solde d’essai : 50 crédits offerts</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                Modèles
              </p>
              <div className="mt-3 space-y-1.5">
                {MODELS.slice(0, 6).map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setModelId(model.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      model.id === modelId ? 'bg-white shadow-sm' : 'hover:bg-white/70'
                    }`}
                  >
                    <ModelMark shape={model.shape} tone={model.tone} size={18} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-semibold text-slate-900">
                        {model.name}
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        {model.kind === 'image' ? 'Image' : 'Vidéo'} · {model.credits} crédits
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              <a
                href="#modeles"
                className="mt-3 flex items-center gap-1 px-3 text-[12px] font-semibold text-slate-700 hover:text-slate-900"
              >
                Voir les 8 modèles
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
