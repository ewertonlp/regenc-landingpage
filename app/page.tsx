
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Features from './components/Features';

import FAQ from './components/FAQ';
import BeforeAfterSection from './components/BeforeAfterSection';
import PioneerSection from './components/PionnerSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <BeforeAfterSection />
      <PioneerSection/>
      <FAQ />
      <Footer />
    </main>
  );
}