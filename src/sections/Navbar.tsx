import { ChevronDown, Monitor, MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            <span className="text-lg font-bold tracking-tight text-white">Logo</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <button className="flex items-center gap-1 text-sm font-medium text-white/60 transition hover:text-white">
              Use Cases <ChevronDown className="h-4 w-4" />
            </button>
            <a href="#" className="text-sm font-medium text-white/60 transition hover:text-white">
              Explore
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-medium text-white/60 transition hover:text-white"
            >
              <Monitor className="h-4 w-4" /> Install
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-medium text-white/60 transition hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> Community
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm font-medium text-white/60 transition hover:text-white sm:block">
            Log in
          </a>
          <a
            href="#"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
