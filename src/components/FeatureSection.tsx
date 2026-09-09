import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Props = {
  titleTop: string;
  titleBottom: string;
  gradient: string;
  cta: string;
  reverse?: boolean;
  children: ReactNode;
};

export default function FeatureSection({
  titleTop,
  titleBottom,
  gradient,
  cta,
  reverse,
  children,
}: Props) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-12 lg:gap-20 lg:flex-row ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tightest text-white sm:text-6xl">
            {titleTop}
            <br />
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {titleBottom}
            </span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/50">
            Placeholder description for this section. Replace this text with your own copy
            describing the feature shown here.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
            {cta} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="w-full flex-1">{children}</div>
      </div>
    </section>
  );
}
