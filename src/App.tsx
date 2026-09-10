import { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Models from './sections/Models';
import Features from './sections/Features';
import Local from './sections/Local';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';
import AdminGate from './admin/AdminGate';

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHashRoute();

  if (hash.startsWith('#/admin')) {
    return <AdminGate />;
  }

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
