import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { DockerLogo } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Desktop flip state
  const [isFlipped, setIsFlipped] = useState(false);
  // Mobile tab state: 'overview' | 'spec'
  const [mobileTab, setMobileTab] = useState<'overview' | 'spec'>('overview');

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="py-8 md:py-12 first:pt-0 last:pb-0">
      {/* ================= DESKTOP 3D FLIP CARD (>= lg) ================= */}
      <div className="hidden lg:block perspective-1000 min-h-[380px]">
        <div
          className={`transform-style-preserve relative w-full ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT FACE */}
          <div className="backface-hidden grid grid-cols-12 gap-8 items-center bg-[#faf9f6]">
            <div className="col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 text-[0.85rem] font-medium text-[#71717a] mb-2 font-mono">
                  <span className="text-[#121314] font-semibold">{project.number}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#121314] mb-3 font-display">
                  {project.title}
                </h3>
                <p className="text-[0.95rem] text-[#52525b] leading-relaxed mb-6 font-sans">
                  {project.fullDescription}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={toggleFlip}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#d4d4d4] text-[#121314] text-[0.85rem] font-medium rounded-sm hover:bg-[#f4f4f5] transition-colors cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-[#121314]"
                  aria-label={`View technical specifications for ${project.title}`}
                >
                  <span>Know More</span>
                  <span className="text-neutral-400 font-mono" aria-hidden="true">⤾</span>
                </button>
              </div>
            </div>
            <div className="col-span-7 border border-[#e7e5e4] rounded-sm overflow-hidden bg-white shadow-sm group">
              <img
                src={project.desktopImage}
                alt={project.altText}
                className="w-full h-auto aspect-[16/10] object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
                width="800"
                height="500"
                onError={(e) => {
                  if (project.mobileImage && e.currentTarget.src !== project.mobileImage) {
                    e.currentTarget.src = project.mobileImage;
                  }
                }}
              />
            </div>
          </div>

          {/* BACK FACE */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full bg-white border border-[#e7e5e4] p-8 md:p-10 rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e7e5e4] mb-6">
                <div>
                  <span className="text-[0.85rem] font-semibold text-[#121314] font-mono">
                    {project.number} / Stack &amp; Details
                  </span>
                  <h4 className="text-xl font-semibold text-[#121314] mt-0.5 font-display">
                    {project.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={toggleFlip}
                  className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-[#52525b] hover:text-[#121314] transition-colors cursor-pointer py-1 px-2 rounded hover:bg-[#f4f4f5]"
                  aria-label="Flip back to project overview"
                >
                  <span>← Flip Back</span>
                </button>
              </div>

              {/* Technologies Used */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#71717a] mb-3 font-mono">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f4f4f5] border border-[#e4e4e7] text-[#18181b] text-[0.85rem] font-medium rounded-sm"
                    >
                      {tech === 'Docker' && <DockerLogo className="w-3.5 h-3.5 text-[#2496ED]" />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Details */}
              <div className="p-4 bg-[#f9f9f8] border border-[#e7e5e4] rounded-sm mb-4">
                <div className="flex items-center justify-between mb-1.5 font-mono text-xs text-[#71717a]">
                  <span className="uppercase tracking-wider font-semibold text-[#121314]">
                    {project.spec.title}
                  </span>
                  <span className="text-[#574cc6] font-bold">{project.spec.revision}</span>
                </div>
                <p className="text-xs text-[#52525b] leading-relaxed mb-3">
                  {project.spec.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#e7e5e4]">
                  {project.spec.metrics.map((m) => (
                    <div key={m.label} className="p-2 bg-white rounded border border-[#e7e5e4]">
                      <span className="text-[#71717a] block text-[10px] uppercase font-mono">{m.label}</span>
                      <span className="text-[#121314] font-medium font-mono text-xs">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e7e5e4] flex items-center justify-between">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#121314] text-white text-[0.85rem] font-medium rounded-sm hover:bg-neutral-800 transition-colors"
                >
                  <span>View Repository</span>
                  <span className="text-neutral-400 font-mono" aria-hidden="true">↗</span>
                </a>
              )}
              <span className="text-xs text-[#71717a] font-mono">Status: Production-Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET CARD (< lg) ================= */}
      <article className="lg:hidden w-full bg-white border border-[#e7e5e4] rounded-md overflow-hidden shadow-xs flex flex-col">
        {/* Media Header with Tab Overlay */}
        <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
          <img
            src={project.desktopImage || project.mobileImage}
            alt={project.altText}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
            loading="eager"
            decoding="async"
            onError={(e) => {
              if (project.mobileImage && e.currentTarget.src !== project.mobileImage) {
                e.currentTarget.src = project.mobileImage;
              }
            }}
          />
          <div className="absolute top-2.5 left-2.5 px-2 py-1 bg-white/95 backdrop-blur-xs rounded font-mono text-[10px] text-[#121314] font-semibold border border-[#e7e5e4]">
            {project.number} // {project.category.toUpperCase()}
          </div>
          <div className="absolute bottom-2 right-2 flex gap-1">
            <button
              type="button"
              onClick={() => setMobileTab('overview')}
              className={`min-h-[44px] px-3 py-1 text-[11px] font-mono uppercase rounded transition-colors ${
                mobileTab === 'overview'
                  ? 'bg-[#121314] text-white'
                  : 'bg-white/90 backdrop-blur-xs text-[#121314] hover:bg-white'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('spec')}
              className={`min-h-[44px] px-3 py-1 text-[11px] font-mono uppercase rounded transition-colors ${
                mobileTab === 'spec'
                  ? 'bg-[#121314] text-white'
                  : 'bg-white/90 backdrop-blur-xs text-[#121314] hover:bg-white'
              }`}
            >
              Tech Spec
            </button>
          </div>
        </div>

        {/* Card Body: Overview Mode */}
        {mobileTab === 'overview' && (
          <div className="p-4 flex flex-col gap-2.5 bg-white">
            <h3 className="font-display text-base sm:text-lg font-bold text-[#121314] tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              {project.shortDescription}
            </p>
            {/* Tech tag row */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[#f3f4f3] text-[#121314] font-mono text-[10px] rounded-sm flex items-center gap-1"
                >
                  {tech === 'Docker' && <DockerLogo className="w-2.5 h-2.5 text-[#2496ED]" />}
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-3 border-t border-[#e7e5e4] flex items-center justify-between">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#574cc6] hover:underline"
                >
                  <span>View Repository</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              <span className="font-mono text-[10px] text-[#71717a] uppercase">Production-Ready</span>
            </div>
          </div>
        )}

        {/* Card Body: Tech Spec Drawer Mode */}
        {mobileTab === 'spec' && (
          <div className="p-4 flex flex-col gap-3 bg-[#f7f6f2]">
            <div className="flex items-center justify-between text-[#121314] font-mono text-[11px] pb-1 border-b border-[#e7e5e4]">
              <span className="uppercase tracking-wider font-semibold">{project.spec.title}</span>
              <span className="text-[#574cc6] font-bold">{project.spec.revision}</span>
            </div>
            <p className="text-xs text-[#52525b] leading-relaxed">
              {project.spec.description}
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
              {project.spec.metrics.map((m) => (
                <div key={m.label} className="p-2 bg-white rounded border border-[#e7e5e4]">
                  <span className="text-[#71717a] block text-[9px] uppercase">{m.label}</span>
                  <span className="text-[#121314] font-medium">{m.value}</span>
                </div>
              ))}
            </div>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] mt-1 w-full bg-[#121314] text-white py-2 text-center font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1 rounded hover:bg-neutral-800 transition-colors"
              >
                <span>Inspect Architecture Repo</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </article>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-[#e7e5e4]" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12 md:mb-16">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#574cc6] block mb-1">
            Curated Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#121314] font-display">
            Featured Projects
          </h2>
          <p className="text-base text-[#52525b] mt-2">
            Featured systems, developer platforms, and assistive technologies.
          </p>
        </div>
        <span className="text-sm font-medium text-[#71717a] font-mono">
          3 Featured Systems
        </span>
      </div>

      {/* Project Cards Stack */}
      <div className="flex flex-col divide-y divide-[#e7e5e4]">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom Explorer Row */}
      <div className="mt-12 md:mt-16 pt-8 border-t border-[#e7e5e4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-[0.95rem] text-[#52525b]">
          Looking for smaller utilities, benchmarks, or scripts?
        </p>
        <a
          href="https://github.com/Mdsinan09?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.9rem] font-medium text-[#121314] underline underline-offset-4 decoration-[#d4d4d4] hover:decoration-[#121314] transition-colors inline-flex items-center gap-1"
        >
          <span>Explore All Projects</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};
