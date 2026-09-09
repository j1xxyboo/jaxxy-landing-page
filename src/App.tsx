import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Studio from './sections/Studio';
import Models from './sections/Models';
import Local from './sections/Local';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f1f2f4] py-6 sm:py-10">
      <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[28px] bg-white shadow-panel">
        <Navbar />
        <Hero />
        <Studio />
        <Models />
        <Local />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}
