import { Terminal } from 'lucide-react';
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 px-5 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <p className="text-[13px] text-neutral-400">
          © 2026 Jaxxy — Plateforme IA créative, Alger.
        </p>
        <div className="flex items-center gap-6 text-[13px] font-medium text-neutral-500">
          <a href="#modeles" className="transition hover:text-inkline">
            Modèles
          </a>
          <a href="#tarifs" className="transition hover:text-inkline">
            Tarifs
          </a>
          <a href="#" className="transition hover:text-inkline">
            Contact
          </a>
          <a
            href="#/admin"
            title="Console interne"
            className="flex items-center gap-1 text-neutral-300 transition hover:text-inkline"
          >
            <Terminal className="h-3.5 w-3.5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
