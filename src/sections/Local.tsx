const PAYMENTS = ['CIB', 'Edahabia', 'BaridiMob', 'Virement DZD'];

const POINTS = [
  {
    title: 'Paiement en dinars',
    body: 'Rechargez vos crédits par carte CIB, Edahabia ou virement, sans carte internationale.',
  },
  {
    title: 'Interface FR / AR',
    body: 'Toute la plateforme, la facturation et le support existent en français et en arabe.',
  },
  {
    title: 'Facturation entreprise',
    body: 'Factures conformes en DZD pour les agences, studios et sociétés algériennes.',
  },
];

export default function Local() {
  return (
    <section id="entreprises" className="px-5 pb-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
              Conçu en Algérie
            </p>
            <h2 className="mt-3 text-[28px] font-semibold tracking-tight text-inkline sm:text-[34px]">
              La première plateforme IA créative pensée pour le marché local
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
              Les plateformes internationales ignorent nos moyens de paiement, nos langues et nos
              budgets. Jaxxy part de l’inverse.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {PAYMENTS.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-neutral-200 bg-white px-3.5 py-2 text-[13px] font-semibold text-neutral-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl bg-panel p-5 transition-colors hover:bg-[#eeeeeb]"
              >
                <h3 className="text-[15px] font-semibold text-inkline">{point.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
