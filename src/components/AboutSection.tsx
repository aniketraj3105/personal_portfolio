import React from 'react';
import { 
  User, 
  Code, 
  Database, 
  LineChart, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const coreStrengths = [
    {
      title: 'Full-Stack & Web Engineering',
      desc: 'Building responsive, accessible web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Solid understanding of component state and DOM dynamics.',
      icon: Code
    },
    {
      title: 'Data Analytics & Insights',
      desc: 'Extracting actionable metrics and business patterns utilizing Python, SQL, Advanced Excel (XLOOKUP, Pivot Tables, Macros), and interactive Power BI dashboards.',
      icon: LineChart
    },
    {
      title: 'AI & Computer Vision Prototyping',
      desc: 'Hands-on practical experience implementing real-time landmark tracking using OpenCV, MediaPipe, and Python for physiological posture detection and alert systems.',
      icon: Sparkles
    },
    {
      title: 'Core Software Principles',
      desc: 'Strong foundation in Object-Oriented Programming (Java), Data Structures, Algorithms, Relational Database querying (SQL), and Git version control.',
      icon: Database
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Passionate About Building Software & Analyzing Data
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            I am a B.Tech Computer Science and Engineering undergraduate at GIFT Autonomous, Bhubaneswar (affiliated with BPUT).
            With a balanced skill set across full-stack development, Python, SQL, and data analytics tools, I bridge code and analytical problem-solving.
          </p>
        </div>

        {/* 2-Column Grid: Narrative on Left, Key Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative / Context Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>Career Vision & Mindset</span>
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I am actively seeking an entry-level software engineer or data analyst role where I can contribute to production-grade codebases, optimize data pipelines, and continuously elevate my engineering standards.
              </p>

              <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Hands-on Experience:</strong> 2 professional internships at CSDT IT Solution covering Front-End web and Java applications.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Certified by IIT/NPTEL:</strong> Elite in Cloud Computing and Elite + Silver in Industrial IoT 4.0.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Collaborative Team Player:</strong> Led participant coordination at CODENEXUS Hackathon 2026 and competed in HackOdisha 5.0.</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 group"
                >
                  <span>Let's discuss how I can contribute to your team</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Education Callout */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">B.Tech in CSE — Current CGPA 7.23</p>
                <p className="text-zinc-500 dark:text-zinc-400">GIFT Autonomous, Bhubaneswar (BPUT affiliated)</p>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Competence */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3.5 text-zinc-800 dark:text-zinc-200">
                    <strength.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
