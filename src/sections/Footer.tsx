import Logo from '../components/Logo';

const COLUMNS = [
  {
    title: 'Produit',
    links: ['Modèles', 'Studio', 'Galerie', 'Tarifs'],
  },
  {
    title: 'Ressources',
    links: ['Guide des prompts', 'Crédits et coûts', 'Statut du service'],
  },
  {
    title: 'Société',
    links: ['À propos', 'Contact', 'Conditions', 'Confidentialité'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-500">
              La plateforme IA créative d’Algérie. Générez images et vidéos avec les meilleurs
              modèles, depuis un seul compte.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                  {column.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="text-[13px] text-slate-400 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-slate-500">© 2026 Jaxxy. Alger, Algérie.</p>
          <p className="text-[12px] text-slate-500">Paiement CIB · Edahabia · Virement DZD</p>
        </div>
      </div>
    </footer>
  );
}
