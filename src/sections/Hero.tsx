import { Download, Film, Image as ImageIcon, Pin, Play, Sparkles, Timer } from 'lucide-react';
import ModelMark from '../components/ModelMark';

const JOBS = [
  {
    icon: ImageIcon,
    tint: 'bg-orange-100 text-orange-600',
    title: 'Packshot huile d’olive',
    model: 'Flux 1.1 Pro',
    date: '10 sept.',
    progress: 60,
    bar: 'bg-accent',
  },
  {
    icon: Film,
    tint: 'bg-emerald-100 text-emerald-600',
    title: 'Clip Tassili n’Ajjer',
    model: 'Seedance 2.0',
    date: '8 sept.',
    progress: 100,
    bar: 'bg-emerald-500',
  },
];

export default function Hero() {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="dot-grid relative overflow-hidden rounded-[24px] bg-panel px-4 pb-20 pt-20 sm:pt-24 xl:pb-56">
        {/* Post-it + tuile flottante (haut gauche) */}
        <div className="absolute left-8 top-10 hidden w-52 xl:block">
          <div className="relative -rotate-3 rounded-sm bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 pt-6 shadow-card">
            <Pin
              className="absolute left-1/2 top-1.5 h-4 w-4 -translate-x-1/2 rotate-45 text-red-500"
              strokeWidth={2.4}
            />
            <p className="font-hand text-[20px] font-medium leading-snug text-neutral-800">
              Un seul compte pour Flux, Kling, Seedance et plus — payable en dinars.
            </p>
          </div>
          <div className="ml-2 mt-8 flex h-16 w-16 rotate-6 animate-floaty items-center justify-center rounded-2xl bg-white shadow-card">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent">
              <Sparkles className="h-5 w-5 text-white" strokeWidth={2.2} />
            </span>
          </div>
        </div>

        {/* Chrono + rendu prêt (haut droite) */}
        <div className="absolute right-8 top-8 hidden w-72 xl:block">
          <div className="flex h-16 w-16 -rotate-6 animate-floaty items-center justify-center rounded-2xl bg-white shadow-card">
            <Timer className="h-7 w-7 text-neutral-700" strokeWidth={1.8} />
          </div>
          <div className="-mt-6 ml-14 rotate-3 rounded-2xl bg-[#ececea] p-4 shadow-card">
            <p className="px-1 text-[15px] font-semibold text-inkline">Rendus</p>
            <p className="px-1 pt-1 text-right text-[10px] text-neutral-400">Vidéos</p>
            <div className="mt-1.5 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex items-start gap-2">
                <ModelMark brand="kling" size={22} />
                <div>
                  <p className="text-[13px] font-semibold leading-tight text-inkline">
                    Clip prêt à télécharger
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-[11px] text-neutral-400">
                    <Download className="h-3 w-3" strokeWidth={2.2} /> Kling 1.6
                  </p>
                </div>
              </div>
              <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-wide text-neutral-400">
                Durée
              </p>
              <div className="mx-auto mt-1.5 flex w-fit items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold text-cyan-700">
                <Play className="h-3 w-3" strokeWidth={2.4} /> 00:00 – 00:10
              </div>
            </div>
          </div>
        </div>

        {/* Générations du jour (bas gauche) */}
        <div className="absolute -bottom-8 left-8 hidden w-80 -rotate-2 xl:block">
          <div className="rounded-2xl bg-[#ececea] p-4 shadow-card">
            <p className="px-1 pb-3 text-[15px] font-semibold text-inkline">Générations du jour</p>
            <div className="space-y-2.5">
              {JOBS.map((job) => {
                const JobIcon = job.icon;
                return (
                  <div key={job.title} className="rounded-xl bg-white p-3.5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-md ${job.tint}`}
                      >
                        <JobIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </span>
                      <p className="text-[12.5px] font-semibold text-inkline">{job.title}</p>
                    </div>
                    <div className="mt-2.5 flex items-center gap-3">
                      <span className="text-[11px] text-neutral-400">{job.date}</span>
                      <div className="h-1.5 flex-1 rounded-full bg-neutral-100">
                        <div
                          className={`h-1.5 rounded-full ${job.bar}`}
                          style={{ width: `${Math.min(job.progress, 100)}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-neutral-500">
                        {job.progress}%
                      </span>
                    </div>
                    <p className="mt-1.5 text-[10.5px] text-neutral-400">{job.model}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modèles disponibles (bas droite) */}
        <div className="absolute -bottom-6 right-10 hidden w-72 rotate-2 xl:block">
          <div className="rounded-2xl bg-[#ececea] p-5 pb-12 shadow-card">
            <p className="px-1 text-[15px] font-semibold text-inkline">8+ modèles IA</p>
            <div className="mt-4 flex items-center justify-center">
              <div className="flex h-16 w-16 -rotate-6 items-center justify-center rounded-2xl bg-white shadow-tile">
                <ModelMark brand="flux" size={34} />
              </div>
              <div className="z-10 -mx-2 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-white shadow-card">
                <ModelMark brand="nano-banana" size={38} />
              </div>
              <div className="flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl bg-white shadow-tile">
                <ModelMark brand="gpt-image" size={34} />
              </div>
            </div>
          </div>
        </div>

        {/* Contenu central */}
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] bg-white shadow-card">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2.5c1.1 3.2 2.8 4.9 6 6-3.2 1.1-4.9 2.8-6 6-1.1-3.2-2.8-4.9-6-6 3.2-1.1 4.9-2.8 6-6Z"
                fill="#2f6bff"
              />
              <path
                d="M18.2 15.4c.5 1.5 1.3 2.3 2.8 2.8-1.5.5-2.3 1.3-2.8 2.8-.5-1.5-1.3-2.3-2.8-2.8 1.5-.5 2.3-1.3 2.8-2.8Z"
                fill="#111114"
                opacity="0.85"
              />
            </svg>
          </div>
          <h1 className="mt-10 text-[42px] font-semibold leading-[1.06] tracking-tightest text-inkline sm:text-[64px]">
            Imaginez, générez, créez
          </h1>
          <p className="text-[42px] font-semibold leading-[1.06] tracking-tightest text-[#b9b9b5] sm:text-[64px]">
            au même endroit
          </p>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-neutral-600 sm:text-[17px]">
            Les meilleurs modèles IA d’image et de vidéo, réunis sur la première plateforme créative
            d’Algérie.
          </p>
          <a
            href="#tarifs"
            className="mt-9 inline-flex items-center rounded-xl bg-accent px-7 py-3.5 text-[15px] font-semibold text-white shadow-card transition hover:bg-accent-dark"
          >
            Commencer gratuitement
          </a>
        </div>
      </div>
    </section>
  );
}
