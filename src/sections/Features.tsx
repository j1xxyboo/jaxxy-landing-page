import { Coins, Images, Wand2 } from 'lucide-react';

const FEATURES = [
  {
    icon: Wand2,
    title: 'Un prompt, un clic',
    body: 'Décrivez votre idée, choisissez le modèle, le format et la résolution. Jaxxy s’occupe du reste.',
  },
  {
    icon: Images,
    title: 'Galerie et historique',
    body: 'Retrouvez, téléchargez et organisez toutes vos générations depuis un seul espace.',
  },
  {
    icon: Coins,
    title: 'Crédits flexibles',
    body: 'Payez uniquement ce que vous générez. Chaque modèle affiche son coût en crédits, en toute transparence.',
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="px-5 pb-24 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-[24px] bg-panel px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
            Fonctionnalités
          </p>
          <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-inkline sm:text-[38px]">
            Pensé pour créer, pas pour configurer
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold text-inkline">{feature.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">{feature.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
