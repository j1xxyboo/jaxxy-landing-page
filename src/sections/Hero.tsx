import { Paperclip, ArrowUp, Sparkles } from 'lucide-react';

const chips = ['Suggestion one', 'Suggestion two', 'Suggestion three', 'Suggestion four'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tightest text-white sm:text-6xl">
          Your headline{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            goes here
          </span>
          <span className="animate-pulse text-white/40">|</span>
        </h1>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left shadow-panel backdrop-blur">
          <div className="min-h-[72px] px-2 pt-2">
            <p className="text-white/35">Describe what you want to create…</p>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white">
              <Paperclip className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {chips.map((chip) => (
            <button
              key={chip}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 transition hover:bg-white/[0.07] hover:text-white"
            >
              <Sparkles className="h-3.5 w-3.5" /> {chip}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
