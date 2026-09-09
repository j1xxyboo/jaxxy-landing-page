import { ArrowRight, Music, Image, Mic, Video } from 'lucide-react';

const tools = [
  { icon: Music, title: 'Card title' },
  { icon: Image, title: 'Card title' },
  { icon: Mic, title: 'Card title' },
  { icon: Video, title: 'Card title' },
];

export default function Tools() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tightest text-white sm:text-5xl">
          Section Heading
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-card transition hover:border-white/[0.16] hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Short placeholder description of this tool goes here.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 transition group-hover:gap-2.5">
                Try it <ArrowRight className="h-4 w-4" />
              </span>
              <div className="mt-6 aspect-video rounded-xl bg-gradient-to-br from-white/[0.07] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
