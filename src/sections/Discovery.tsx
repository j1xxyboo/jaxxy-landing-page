import { Play } from 'lucide-react';
import FeatureSection from '../components/FeatureSection';

export default function Discovery() {
  return (
    <FeatureSection
      titleTop="Section"
      titleBottom="Heading"
      gradient="from-emerald-400 to-cyan-400"
      cta="Try it out"
    >
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <Play className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </FeatureSection>
  );
}
