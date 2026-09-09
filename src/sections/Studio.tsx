export default function Studio() {
  const tabs = ['Tab one', 'Tab two', 'Tab three', 'Tab four'];
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tightest text-white sm:text-6xl">
          Section
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Heading
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/50">
          Placeholder description for this section. Replace this text with your own copy.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
            Primary action
          </button>
          <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
            Secondary action
          </button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/50 transition hover:bg-white/[0.07] hover:text-white"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-panel">
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="grid gap-2 p-4 sm:p-6">
            {[0, 1, 2, 3].map((row) => (
              <div key={row} className="flex items-center gap-2">
                <div className="h-12 w-24 shrink-0 rounded-lg bg-white/[0.05]" />
                <div
                  className="h-12 rounded-lg bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/20"
                  style={{ width: `${[65, 45, 80, 55][row]}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
