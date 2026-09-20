import React from 'react';
import { 
  Trophy, 
  Users, 
  Calendar, 
  Tag, 
  Sparkles,
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>07 / ACHIEVEMENTS & HACKATHONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Hackathons & Leadership
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Active engagement in collaborative hackathon problem-solving, developer communities, and event operations.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.achievements.map((ach) => (
            <div
              key={ach.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {ach.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {ach.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {ach.title}
                </h3>

                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  Role: {ach.role}
                </p>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-zinc-500 font-medium">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span>Verified Accomplishment from Resume</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
