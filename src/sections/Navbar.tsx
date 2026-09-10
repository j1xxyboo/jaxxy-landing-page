import Logo from '../components/Logo';

const LINKS = [
  { label: 'Modèles', href: '#modeles' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Entreprises', href: '#entreprises' },
  { label: 'Tarifs', href: '#tarifs' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl">
      <nav className="flex h-[72px] items-center justify-between px-5 sm:px-10">
        <Logo />
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14.5px] font-medium text-neutral-600 transition hover:text-inkline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden text-[14.5px] font-medium text-inkline sm:block">
            Se connecter
          </a>
          <a
            href="#"
            className="rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-[14.5px] font-semibold text-inkline shadow-sm transition hover:border-neutral-300"
          >
            Essayer Jaxxy
          </a>
        </div>
      </nav>
    </header>
  );
}
