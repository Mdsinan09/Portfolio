import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-[#e7e5e4]" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Origin & Focus */}
        <div className="lg:col-span-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#574cc6] block mb-1">
            Background &amp; Origin
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#121314] font-display">
            A little about me.
          </h2>

          <div className="mt-6 md:mt-8 space-y-4">
            <div className="p-4 bg-white border border-[#e7e5e4] rounded-sm">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#71717a] font-mono block">
                  Education
                </span>
                <span className="text-xs font-mono text-[#574cc6] font-medium">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
              <p className="text-[0.95rem] font-medium text-[#121314]">
                {PERSONAL_INFO.education.degree}
              </p>
            </div>

            <div className="p-4 bg-white border border-[#e7e5e4] rounded-sm">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#71717a] font-mono block">
                Focus Areas
              </span>
              <p className="text-[0.95rem] text-[#52525b] mt-1 leading-relaxed">
                {PERSONAL_INFO.education.focus}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-8 text-[1rem] sm:text-[1.05rem] text-[#52525b] leading-[1.7] space-y-5 flex flex-col justify-center">
          <p>
            I am a Computer Science Engineering student focused on building dependable, performant software. Rather than treating code as disconnected syntax, I approach engineering as an exercise in clarity—designing systems that solve concrete problems without unnecessary friction.
          </p>
          <p>
            Much of my time is spent between writing frontend applications with clean ergonomics, structuring backend microservices, and experimenting with applied AI systems like automated testing and accessible speech pipelines.
          </p>
          <p>
            I believe in rigorous fundamentals, readable abstractions, and continuous iteration. I am actively looking for full-time software engineering roles where I can contribute to meaningful infrastructure and learn alongside high-caliber engineering teams.
          </p>
        </div>
      </div>
    </section>
  );
};

