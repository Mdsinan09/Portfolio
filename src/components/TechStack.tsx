import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { renderTechIcon } from './Icons';

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-[#e7e5e4]" id="skills">
      <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#574cc6] block mb-1">
            Technical Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#121314] font-display">
            Tools I Work With
          </h2>
          <p className="text-base text-[#52525b] mt-2">
            Curated engineering toolkit, frameworks, and foundational platforms.
          </p>
        </div>
        <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-sm bg-white border border-[#e7e5e4] text-[#52525b] font-mono self-start md:self-auto">
          Interactive Matrix
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group relative p-4 rounded-sm bg-white border border-[#e7e5e4] hover:border-[#121314] hover:shadow-sm transition-all duration-200 flex flex-col items-center justify-center text-center active:scale-95 sm:active:scale-100"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
              {renderTechIcon(skill.iconType, "w-7 h-7")}
            </div>
            <span className="text-[0.85rem] font-semibold text-[#121314] truncate w-full">
              {skill.name}
            </span>
            <span className="text-[0.7rem] text-[#71717a] mt-0.5 font-mono truncate w-full">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

