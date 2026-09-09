import { Share2, Pencil, Heart } from 'lucide-react';
import FeatureSection from '../components/FeatureSection';

export default function Visual() {
  return (
    <FeatureSection
      titleTop="Section"
      titleBottom="Heading"
      gradient="from-fuchsia-400 to-pink-400"
      cta="Try it out"
    >
      <div className="grid grid-cols-2 gap-4">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-card ${
              i === 1 ? 'translate-y-6' : ''
            }`}
          >
            <div className="aspect-square bg-gradient-to-br from-fuchsia-500/15 via-white/[0.05] to-transparent" />
            <div className="flex items-center gap-4 p-3.5 text-white/40">
              <Share2 className="h-4 w-4" />
              <Pencil className="h-4 w-4" />
              <Heart className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </FeatureSection>
  );
}
