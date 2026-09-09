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
    <section id="entreprises" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
              Conçu en Algérie
            </p>
            <h2 className="mt-3 text-[28px] font-bold tracking-tight text-slate-900 sm:text-[34px]">
              La première plateforme IA créative pensée pour le marché local
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Les plateformes internationales ignorent nos moyens de paiement, nos langues et nos
              budgets. Jaxxy part de l’inverse.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {PAYMENTS.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {POINTS.map((point) => (
              <div key={point.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-[15px] font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
