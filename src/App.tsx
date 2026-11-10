import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricStrip } from './components/MetricStrip';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { AnimeQuote } from './components/AnimeQuote';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#121314] flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full pt-16 flex-1">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Hero />
          <MetricStrip />
          <Projects />
          <TechStack />
          <About />
          <Contact />
          <AnimeQuote />
        </div>
      </main>

      {/* Understated Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default App;

