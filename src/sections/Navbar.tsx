import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../components/Logo';

const LINKS = [
  { label: 'Modèles', href: '#modeles' },
  { label: 'Studio', href: '#studio' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Entreprises', href: '#entreprises' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 shadow-badge backdrop-blur-xl sm:px-5">
        <Logo />

        <nav className="hidden items-center gap-7 text-[14px] font-medium text-slate-400 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <button className="flex items-center gap-1 transition-colors hover:text-white">
            Paiement local
            <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.2} />
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[13px] font-semibold text-slate-200 transition-colors hover:bg-white/10 sm:block">
            Se connecter
          </button>
          <button className="rounded-xl bg-white px-3.5 py-2 text-[13px] font-semibold text-slate-900 transition-colors hover:bg-slate-200">
            Commencer
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-300 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-4xl rounded-2xl border border-white/[0.08] bg-ink-850 p-3 shadow-badge md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-[14px] font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
