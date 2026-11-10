import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AnimeQuote: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-[#e7e5e4]" aria-label="Philosophy Quote">
      <div className="max-w-2xl">
        <span className="text-[10px] font-mono tracking-widest text-[#574cc6] uppercase block mb-3">
          Philosophy
        </span>
        <blockquote className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-800 leading-snug mb-3 font-display">
          “{PERSONAL_INFO.quote.text}”
        </blockquote>
        <cite className="text-xs sm:text-sm text-neutral-500 font-mono not-italic">
          — {PERSONAL_INFO.quote.author}
        </cite>
      </div>
    </section>
  );
};

