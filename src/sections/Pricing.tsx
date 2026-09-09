import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Découverte',
    price: '1 500',
    credits: '100 crédits',
    note: '≈ 30 images ou 6 vidéos courtes',
    features: ['Tous les modèles image', 'Export HD', 'Historique 30 jours'],
    featured: false,
    cta: 'Choisir',
  },
  {
    name: 'Créateur',
    price: '4 500',
    credits: '400 crédits',
    note: '350 crédits + 50 offerts',
    features: [
      'Modèles image et vidéo',
      'File d’attente prioritaire',
      'Usage commercial inclus',
      'Support FR / AR',
    ],
    featured: true,
    cta: 'Choisir Créateur',
  },
  {
    name: 'Studio',
    price: '12 000',
    credits: '1 000 crédits',
    note: 'Pour agences et équipes',
    features: ['Comptes multi-utilisateurs', 'Facture entreprise en DZD', 'Accès API'],
    featured: false,
    cta: 'Contacter l’équipe',
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="border-t border-white/[0.06] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-white sm:text-[34px]">
            Des crédits, pas des abonnements imposés
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
            Les crédits se consomment selon le modèle utilisé. Rechargez quand vous en avez besoin.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-6 ${
                plan.featured
                  ? 'border-indigo-400/40 bg-gradient-to-b from-indigo-500/[0.14] via-ink-850 to-ink-850 shadow-glow'
                  : 'border-white/[0.08] bg-ink-850'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold text-white">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-[11px] font-semibold text-indigo-300">
                    Populaire
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1.5 text-white">
                <span className="text-[34px] font-bold tracking-tight">{plan.price}</span>
                <span className="text-[14px] font-semibold text-slate-400">DA</span>
              </div>
              <p className={`mt-1 text-[13px] font-semibold ${plan.featured ? 'text-indigo-200' : 'text-slate-200'}`}>
                {plan.credits}
              </p>
              <p className="text-[12px] text-slate-500">{plan.note}</p>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px]">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-indigo-400' : 'text-slate-300'}`}
                      strokeWidth={2.4}
                    />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-7 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-white text-slate-900 hover:bg-slate-200'
                    : 'border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
