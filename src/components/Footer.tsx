import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  MailIcon,
} from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#e7e5e4] bg-[#faf9f6]">
      {/* Mobile Dynamic System Revision Bar */}
      <div className="w-full px-4 sm:px-6 py-2 bg-[#f3f4f3] border-b border-[#e7e5e4] flex items-center justify-between text-[10px] font-mono text-[#71717a] lg:hidden">
        <span>LATENCY // 08ms</span>
        <span className="inline-flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#574cc6] animate-pulse"></span>
          <span>SYSTEM STABLE</span>
        </span>
        <span>SINAN © {currentYear}</span>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.85rem] text-[#71717a]">
        <p className="text-center sm:text-left">
          © {currentYear} Mohammed Sinan · Designed and built with care
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-sm text-[#52525b] hover:text-[#121314] hover:bg-[#f4f4f5] transition-colors focus-visible:outline-2 focus-visible:outline-[#121314]"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-sm text-[#52525b] hover:text-[#121314] hover:bg-[#f4f4f5] transition-colors focus-visible:outline-2 focus-visible:outline-[#121314]"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-sm text-[#52525b] hover:text-[#121314] hover:bg-[#f4f4f5] transition-colors focus-visible:outline-2 focus-visible:outline-[#121314]"
            aria-label="Instagram profile"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-sm text-[#52525b] hover:text-[#121314] hover:bg-[#f4f4f5] transition-colors focus-visible:outline-2 focus-visible:outline-[#121314]"
            aria-label="X profile"
            title="X (Twitter)"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-8 h-8 flex items-center justify-center rounded-sm text-[#52525b] hover:text-[#121314] hover:bg-[#f4f4f5] transition-colors focus-visible:outline-2 focus-visible:outline-[#121314]"
            aria-label="Email Mohammed Sinan"
            title="Email"
          >
            <MailIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

