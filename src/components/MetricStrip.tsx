import React from 'react';

export const MetricStrip: React.FC = () => {
  return (
    <section className="w-full py-2 bg-[#f3f4f3] border-b border-[#e7e5e4] lg:hidden" aria-label="System Metrics">
      <div className="grid grid-cols-3 divide-x divide-[#c5c6c9]/40 text-center py-2">
        <div className="px-2">
          <p className="font-display text-base font-bold text-[#121314]">3+</p>
          <p className="font-mono text-[0.625rem] text-[#52525b] uppercase tracking-wider">Prod Systems</p>
        </div>
        <div className="px-2">
          <p className="font-display text-base font-bold text-[#121314]">&lt;50ms</p>
          <p className="font-mono text-[0.625rem] text-[#52525b] uppercase tracking-wider">P99 Target</p>
        </div>
        <div className="px-2">
          <p className="font-display text-base font-bold text-[#121314]">2026</p>
          <p className="font-mono text-[0.625rem] text-[#52525b] uppercase tracking-wider">CSE Grad</p>
        </div>
      </div>
    </section>
  );
};

