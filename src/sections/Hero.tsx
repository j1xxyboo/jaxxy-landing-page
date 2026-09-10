import { Play, Sparkles, Timer } from 'lucide-react';
import ModelMark from '../components/ModelMark';

const JOBS = [
  {
    id: '1',
    badge: 'bg-orange-500',
    title: 'Packshot huile d’olive',
    model: 'Flux 1.1 Pro',
    date: '10 sept.',
    progress: 60,
    bar: 'bg-accent',
  },
  {
    id: '2',
    badge: 'bg-emerald-500',
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
          <div className="relative -rotate-3 rounded-sm bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 shadow-card">
            <span className="absolute left-1/2 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-red-500 shadow-sm" />
            <p className="font-hand text-[20px] font-medium leading-snug text-neutral-800">
              Un seul compte pour Flux, Kling, Seedance et plus — payable en dinars.
            </p>
          </div>
          <div className="ml-2 mt-8 flex h-16 w-16 rotate-6 animate-floaty items-center justify-center rounded-2xl bg-white shadow-card">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
          </div>
        </div>

        {/* Chrono + rendu prêt (haut droite) */}
        <div className="absolute right-8 top-8 hidden w-72 xl:block">
          <div className="flex h-16 w-16 -rotate-6 animate-floaty items-center justify-center rounded-2xl bg-white shadow-card">
            <Timer className="h-7 w-7 text-neutral-700" />
          </div>
          <div className="-mt-6 ml-14 rotate-3 rounded-2xl bg-[#ececea] p-4 shadow-card">
            <p className="px-1 text-[15px] font-semibold text-inkline">Rendus</p>
            <p className="px-1 pt-1 text-right text-[10px] text-neutral-400">Vidéos</p>
            <div className="mt-1.5 rounded-xl bg-white p-4 shadow-sm">
              <p className="text-[13px] font-semibold text-inkline">Clip prêt à télécharger</p>
              <p className="mt-0.5 text-[11px] text-neutral-400">Kling 1.6 — généré à l’instant</p>
              <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-wide text-neutral-400">
                Durée
              </p>
              <div className="mx-auto mt-1.5 flex w-fit items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold text-cyan-700">
                <Play className="h-3 w-3" /> 00:00 – 00:10
              </div>
            </div>
          </div>
        </div>

        {/* Générations du jour (bas gauche) */}
        <div className="absolute -bottom-8 left-8 hidden w-80 -rotate-2 xl:block">
          <div className="rounded-2xl bg-[#ececea] p-4 shadow-card">
            <p className="px-1 pb-3 text-[15px] font-semibold text-inkline">Générations du jour</p>
            <div className="space-y-2.5">
              {JOBS.map((job) => (
                <div key={job.id} className="rounded-xl bg-white p-3.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-bold text-white ${job.badge}`}
                    >
                      {job.id}
                    </span>
                    <p className="text-[12.5px] font-semibold text-inkline">{job.title}</p>
                  </div>
                  <div className="mt-2.5 flex items-center gap-3">
                    <span className="text-[11px] text-neutral-400">{job.date}</span>
                    <div className="h-1.5 flex-1 rounded-full bg-neutral-100">
                      <div className={`h-1.5 rounded-full ${job.bar}`} style={{ width: `${Math.min(job.progress, 100)}%` }} />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-500">{job.progress}%</span>
                  </div>
                  <p className="mt-1.5 text-[10.5px] text-neutral-400">{job.model}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modèles disponibles (bas droite) */}
        <div className="absolute -bottom-6 right-10 hidden w-72 rotate-2 xl:block">
          <div className="rounded-2xl bg-[#ececea] p-5 pb-12 shadow-card">
            <p className="px-1 text-[15px] font-semibold text-inkline">8+ modèles IA</p>
            <div className="mt-4 flex items-center justify-center">
              <div className="flex h-16 w-16 -rotate-6 items-center justify-center rounded-2xl bg-white shadow-tile">
                <ModelMark shape="spark" tone="#fbbf24" size={30} />
              </div>
              <div className="z-10 -mx-2 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-white shadow-card">
                <ModelMark shape="play" tone="#60a5fa" size={34} />
              </div>
              <div className="flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl bg-white shadow-tile">
                <ModelMark shape="flower" tone="#34d399" size={30} />
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
              <path d="M18.2 15.4c.5 1.5 1.3 2.3 2.8 2.8-1.5.5-2.3 1.3-2.8 2.8-.5-1.5-1.3-2.3-2.8-2.8 1.5-.5 2.3-1.3 2.8-2.8Z" fill="#111114" opacity="0.85" />
            </svg>
          </div>
          <h1 className="mt-10 text-[42px] font-semibold leading-[1.06] tracking-tightest text-inkline sm:text-[64px]">
            Imaginez, générez, créez
          </h1>
          <p className="text-[42px] font-semibold leading-[1.06] tracking-tightest text-[#b9b9b5] sm:text-[64px]">
            au même endroit
          </p>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-neutral-600 sm:text-[17px]">
            Les meilleurs modèles IA d’image et de vidéo, réunis sur la première plateforme créative d’Algérie.
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
