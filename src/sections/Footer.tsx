export default function Footer() {
  const columns = ['Product', 'Company', 'Resources', 'Legal'];
  return (
    <footer className="border-t border-white/[0.06] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
              <span className="text-lg font-bold tracking-tight text-white">Logo</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/40">
              Placeholder tagline goes here.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col}>
              <h4 className="text-sm font-semibold text-white">{col}</h4>
              <ul className="mt-4 space-y-2.5">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-white/40 transition hover:text-white">
                      Link item
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-white/30">© 2026 Placeholder. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[0, 1, 2].map((i) => (
              <a key={i} href="#" className="h-8 w-8 rounded-full border border-white/10 transition hover:bg-white/5" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
