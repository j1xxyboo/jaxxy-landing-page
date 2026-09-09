import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function UseCases() {
  const chips = Array.from({ length: 12 });
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tightest text-white sm:text-5xl">
          Section Heading
        </h2>
        <div className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 shadow-card sm:p-12">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold text-white">Subheading here</h3>
            <p className="mt-3 text-white/50">
              Placeholder paragraph describing this group of use cases. Replace with your own
              copy.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {chips.map((_, i) => (
              <button
                key={i}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60 transition hover:bg-white/[0.09] hover:text-white"
              >
                <Sparkles className="h-3.5 w-3.5" /> Use case
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-end gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
