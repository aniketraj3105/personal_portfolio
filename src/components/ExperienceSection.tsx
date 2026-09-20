import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 / PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Internships & Practical Industry Work
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Real-world software engineering and web development internships at CSDT IT Solution, building production-oriented applications.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 max-w-4xl">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {exp.type}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                    {exp.role}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    <Building2 className="w-4 h-4 text-zinc-500" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                {exp.summary}
              </p>

              {/* Bullets */}
              <div className="space-y-2 mb-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-1">
                  Technologies:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
