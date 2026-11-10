import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CopyIcon, CheckIcon, MailIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    });
  };

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="max-w-2xl">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#574cc6] block mb-1">
          Transmission &amp; Inquiries
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#121314] mb-4 font-display">
          Have something interesting in mind?
        </h2>
        <p className="text-base sm:text-lg text-[#52525b] leading-relaxed mb-8">
          I'm actively seeking entry-level software development and full-stack engineering roles. Whether you have an opportunity or just want to discuss software craft, my inbox is always open.
        </p>

        {/* Action Buttons: Direct mailto & Clipboard Copy */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-[#121314] text-white text-[0.9rem] font-medium rounded-sm hover:bg-neutral-800 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314] active:scale-[0.98]"
          >
            <MailIcon className="w-4 h-4" />
            <span className="font-mono text-xs sm:text-sm">{PERSONAL_INFO.email}</span>
            <span className="text-sm" aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-white border border-[#d4d4d4] text-[#121314] text-[0.9rem] font-medium rounded-sm hover:bg-[#f4f4f5] transition-colors cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-[#4f46e5] active:scale-[0.98]"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium font-mono text-xs sm:text-sm">Copied!</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4" />
                <span className="font-mono text-xs sm:text-sm">Copy address</span>
              </>
            )}
          </button>
        </div>

        {/* Text External Links */}
        <div className="flex flex-wrap items-center gap-6 text-[0.9rem] font-medium text-[#52525b]">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#121314] inline-flex items-center gap-1 transition-colors"
          >
            <span>GitHub</span>
            <span className="text-neutral-400 font-mono" aria-hidden="true">↗</span>
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#121314] inline-flex items-center gap-1 transition-colors"
          >
            <span>LinkedIn</span>
            <span className="text-neutral-400 font-mono" aria-hidden="true">↗</span>
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#121314] inline-flex items-center gap-1 transition-colors"
          >
            <span>Instagram</span>
            <span className="text-neutral-400 font-mono" aria-hidden="true">↗</span>
          </a>
          <a
            href={PERSONAL_INFO.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#121314] inline-flex items-center gap-1 transition-colors"
          >
            <span>X (Twitter)</span>
            <span className="text-neutral-400 font-mono" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

