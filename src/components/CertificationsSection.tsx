import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Sparkles, 
  ExternalLink, 
  BookOpen, 
  Cloud, 
  Cpu, 
  MessageSquareQuote
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const certIcons: Record<string, React.ReactNode> = {
    'nptel-iiot': <Cpu className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />,
    'nptel-cloud': <Cloud className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />,
    'nptel-softskills': <MessageSquareQuote className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
  };

  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 / CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            NPTEL & IIT Certifications
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Rigorous assessments completed through NPTEL (National Programme on Technology Enhanced Learning), earning Elite and Elite + Silver accolades.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Header with grade badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    {certIcons[cert.id] || <Award className="w-5 h-5" />}
                  </div>

                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                    cert.type === 'Elite + Silver'
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border border-zinc-700'
                      : cert.type === 'Elite'
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700'
                      : 'bg-zinc-50 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'
                  }`}>
                    {cert.gradeBadge}
                  </span>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tag footer */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
