import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Models from './sections/Models';
import Features from './sections/Features';
import Local from './sections/Local';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-canvas px-3 py-3 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-white shadow-frame">
        <Navbar />
        <main>
          <Hero />
          <Models />
          <Features />
          <Local />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}
