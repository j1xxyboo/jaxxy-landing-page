import { Play, Share2, Pencil, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import FeatureSection from '../components/FeatureSection';

const bars = [8, 16, 24, 14, 28, 20, 10, 26, 18, 12, 22, 16, 8, 20, 26, 14, 10, 24, 18, 12];

export default function Reimagine() {
  return (
    <FeatureSection
      titleTop="Section"
      titleBottom="Heading"
      gradient="from-indigo-400 to-cyan-400"
      cta="Try it out"
      reverse
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-card">
        {[0, 1].map((row) => (
          <div
            key={row}
            className={`flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-ink-900 p-4 ${
              row === 1 ? 'mt-4' : ''
            }`}
          >
            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90">
              <Play className="h-4 w-4" />
            </button>
            <div className="flex h-10 flex-1 items-center gap-[3px]">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-indigo-400/60"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <Share2 className="h-4 w-4" />
              <Pencil className="h-4 w-4" />
              <MoreVertical className="h-4 w-4" />
            </div>
          </div>
        ))}
        <div className="mt-5 flex items-center justify-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </FeatureSection>
  );
}
