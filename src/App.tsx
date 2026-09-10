import { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Models from './sections/Models';
import Features from './sections/Features';
import Local from './sections/Local';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';
import AdminGate from './admin/AdminGate';

/**
 * Matches every reasonable way of typing the console URL:
 * #/admin, #admin, #/admin/, /admin, /admin/ — with or without a trailing slash.
 */
function isAdminRoute(): boolean {
  const hash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
  const path = window.location.pathname.replace(/\/$/, '');
  return hash === 'admin' || path.endsWith('/admin');
}

export default function App() {
  const [admin, setAdmin] = useState(isAdminRoute);

  useEffect(() => {
    const sync = () => setAdmin(isAdminRoute());
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, []);

  if (admin) return <AdminGate />;

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
