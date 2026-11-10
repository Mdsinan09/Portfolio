import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#e7e5e4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Status Indicator */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="text-[1.05rem] font-bold tracking-tight text-[#121314] hover:text-[#4f46e5] transition-colors font-display uppercase"
            aria-label="Mohammed Sinan Homepage"
          >
            {PERSONAL_INFO.shortName}
          </a>
          <div className="hidden sm:inline-flex items-center gap-2 text-[0.8rem] font-medium text-[#52525b]">
            <span className="w-2 h-2 rounded-full bg-[#4f46e5] animate-pulse" aria-hidden="true"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>
        </div>

        {/* Desktop Navigation & CTAs */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-8 text-[0.85rem] font-medium text-[#52525b]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#121314] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f46e5]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Get In Touch Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 min-h-[44px] text-[0.85rem] font-medium text-white bg-[#121314] rounded-sm hover:bg-neutral-800 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#121314] active:scale-[0.98]"
          >
            <span>Get in touch</span>
            <span className="text-[14px] leading-none" aria-hidden="true">→</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[#121314] hover:text-[#4f46e5] focus-visible:outline-2 focus-visible:outline-[#4f46e5]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e7e5e4] bg-[#faf9f6] px-6 py-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3 font-medium text-[0.95rem] text-[#52525b]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#121314] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#e7e5e4] flex items-center gap-2 text-xs text-[#52525b]">
              <span className="w-2 h-2 rounded-full bg-[#4f46e5]"></span>
              <span>{PERSONAL_INFO.statusMobile}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

