import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  ExternalLink, 
  Github, 
  Activity, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight,
  Eye
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenPostureDemo: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenPostureDemo }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Featured' | 'AI / Computer Vision' | 'Web Development' | 'Software Engineering'>('All');

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return p.featured;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 / FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Projects & Engineering Work
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              From real-time Computer Vision landmark detection in Python to responsive web applications and Java software systems.
            </p>
          </div>

          {/* Posture Demo Direct Banner CTA */}
          <button
            id="projects-launch-posture-demo-btn"
            onClick={onOpenPostureDemo}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors shadow-xs cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Interactive Posture AI Simulator</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {(['All', 'Featured', 'AI / Computer Vision', 'Web Development', 'Software Engineering'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between shadow-xs transition-all ${
                project.featured
                  ? 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500'
                  : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div>
                {/* Category & Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                        Flagship
                      </span>
                    )}
                  </div>

                  {project.id === 'bad-posture-detection' && (
                    <button
                      onClick={onOpenPostureDemo}
                      className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Live Simulator
                    </button>
                  )}
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullets directly from resume */}
                <div className="space-y-2 mb-5">
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800 mb-4">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies & Links Footer */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  {project.id === 'bad-posture-detection' ? (
                    <button
                      onClick={onOpenPostureDemo}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Test Simulation</span>
                    </button>
                  ) : (
                    <a
                      href={portfolioData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                    >
                      <span>View details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
