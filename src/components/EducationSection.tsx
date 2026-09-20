import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  School, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 / ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Education & Qualifications
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Strong academic foundation in Computer Science and Engineering, foundational sciences, and mathematics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6 max-w-4xl">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={`${edu.degree}-${edu.year}`}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs relative hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
                      {edu.score}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1.5">
                    {edu.degree}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center sm:justify-end gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>
                </div>
              </div>

              {edu.affiliation && (
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
                  {edu.affiliation}
                </p>
              )}

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-1.5">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
