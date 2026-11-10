import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  MailIcon,
  DownloadIcon,
} from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="py-10 md:py-20 lg:py-24 border-b border-[#e7e5e4]">
      {/* ================= MOBILE HERO (Centered Stack < lg) ================= */}
      <div className="flex flex-col items-center text-center lg:hidden">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eeeeed] text-[#44474a] font-mono text-[0.6875rem] font-medium tracking-wide mb-4">
          <span className="w-2 h-2 rounded-full bg-[#4f46e5] animate-pulse" aria-hidden="true"></span>
          <span>{PERSONAL_INFO.statusMobile}</span>
        </div>

        {/* Editorial Heading & Subtitle */}
        <h1 className="font-display text-[2.25rem] sm:text-4xl leading-[1.08] tracking-tight font-bold text-[#121314] uppercase mb-1">
          {PERSONAL_INFO.name}
        </h1>
        <p className="font-sans text-xs sm:text-sm text-[#52525b] tracking-wide font-medium mb-4">
          {PERSONAL_INFO.roleMobile}
        </p>

        {/* Circular Profile Frame */}
        <div className="relative my-3 flex items-center justify-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-neutral-100 border border-[#e7e5e4] shadow-sm p-0.5">
            <img
              src="/images/portrait_mobile.png"
              alt="Mohammed Sinan Portrait"
              className="w-full h-full rounded-full object-cover object-top"
              width="128"
              height="128"
            />
          </div>
          <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-xs border border-[#e7e5e4]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4f46e5]"></span>
          </span>
        </div>

        {/* Supporting Hook & Bio */}
        <h2 className="font-display text-lg sm:text-xl font-semibold text-[#121314] tracking-tight mt-2 mb-2">
          {PERSONAL_INFO.tagline}
        </h2>
        <p className="text-[0.875rem] text-[#52525b] max-w-sm leading-relaxed mb-6">
          {PERSONAL_INFO.bioMobile}
        </p>

        {/* Action CTAs */}
        <div className="w-full flex items-center justify-center gap-2.5 mb-6 max-w-xs">
          <a
            href="#work"
            className="flex-1 min-h-[44px] px-3.5 py-2.5 bg-[#121314] text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-sm hover:bg-neutral-800 transition-colors active:scale-[0.98] shadow-sm"
          >
            <span>Explore Work</span>
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href={PERSONAL_INFO.resumePath}
            download="Mohammed_Sinan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[44px] px-3.5 py-2.5 bg-white border border-[#d4d4d4] text-[#121314] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-sm hover:bg-[#f4f4f5] transition-colors active:scale-[0.98] shadow-sm"
            aria-label="Download Resume PDF"
          >
            <DownloadIcon className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-2 text-[#52525b]">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm"
            aria-label="Instagram Profile"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm"
            aria-label="X (Twitter) Profile"
            title="X (Twitter)"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm"
            aria-label="Send direct email"
            title="Email"
          >
            <MailIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ================= DESKTOP HERO (Two-Column Editorial >= lg) ================= */}
      <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="col-span-7 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#121314] uppercase leading-[1.05] mb-2 whitespace-nowrap font-display tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-neutral-500 mb-3">
            {PERSONAL_INFO.role}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#121314] mb-3">
            {PERSONAL_INFO.tagline}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121314] text-white text-[0.9rem] font-medium rounded-sm hover:bg-neutral-800 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314]"
            >
              <span>Explore My Work</span>
              <span className="text-xs" aria-hidden="true">↓</span>
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Mohammed_Sinan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#d4d4d4] text-[#121314] text-[0.9rem] font-medium rounded-sm hover:bg-[#f4f4f5] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#4f46e5]"
            >
              <span>Download Resume</span>
              <DownloadIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314]"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314]"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314]"
              aria-label="Instagram profile"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314]"
              aria-label="X profile"
              title="X (Twitter)"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-white border border-[#e7e5e4] text-[#121314] hover:border-[#121314] hover:bg-[#f4f4f5] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314]"
              aria-label="Email Mohammed Sinan"
              title="Email"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Real Portrait Image */}
        <div className="col-span-5 flex justify-end">
          <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-full overflow-hidden border border-[#e7e5e4] shadow-sm bg-neutral-100">
            <img
              src="/images/portrait.png"
              alt="Mohammed Sinan"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              width="380"
              height="380"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

