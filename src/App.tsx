import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Tools from './sections/Tools';
import UseCases from './sections/UseCases';
import Visual from './sections/Visual';
import Reimagine from './sections/Reimagine';
import Studio from './sections/Studio';
import Discovery from './sections/Discovery';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Tools />
        <UseCases />
        <Visual />
        <Reimagine />
        <Studio />
        <Discovery />
      </main>
      <Footer />
    </div>
  );
}
