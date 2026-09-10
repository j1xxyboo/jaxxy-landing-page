import { Film, Image as ImageIcon } from 'lucide-react';
import { MODELS } from '../data/models';
import ModelMark from '../components/ModelMark';

export default function Models() {
  return (
    <section id="modeles" className="px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">Modèles</p>
          <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-inkline sm:text-[38px]">
            Un compte. Tous les meilleurs modèles.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 sm:text-[16px]">
            Choisissez un modèle, écrivez votre prompt, générez. Sans multiplier les abonnements ni
            les cartes bancaires étrangères.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODELS.map((model) => {
            const KindIcon = model.kind === 'image' ? ImageIcon : Film;
            return (
              <div
                key={model.id}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <ModelMark brand={model.id} size={40} />
                  <span className="flex items-center gap-1.5 rounded-full bg-panel px-2.5 py-1 text-[11px] font-semibold text-neutral-500">
                    <KindIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
                    {model.kind === 'image' ? 'Image' : 'Vidéo'}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-inkline">{model.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">{model.summary}</p>
                <p className="mt-3 text-[12px] font-medium text-neutral-400">
                  {model.credits} crédits / génération
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
