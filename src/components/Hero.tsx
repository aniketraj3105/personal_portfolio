import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MapPin, 
  FileText, 
  Sparkles, 
  ArrowDown, 
  Check, 
  Copy, 
  ExternalLink,
  Brain,
  Layers,
  Database,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenPostureDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenPostureDemo }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-zinc-700 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Seeking Software Development & Data Analytics Opportunities</span>
          </div>

          {/* Main Title & Bio */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Hi, I'm <span className="underline decoration-zinc-300 dark:decoration-zinc-700 decoration-2 underline-offset-8">{portfolioData.name}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 tracking-tight">
              B.Tech Computer Science & Engineering Undergrad
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                Software Developer
              </span>
              <span className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md">
                <Database className="w-3.5 h-3.5 text-zinc-500" />
                Data Analytics
              </span>
              <span className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md">
                <Brain className="w-3.5 h-3.5 text-zinc-500" />
                AI / Computer Vision
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-3.5 h-3.5" />
                GIFT Autonomous, Bhubaneswar (BPUT)
              </span>
            </div>

            {/* Objective Paragraph */}
            <div className="mt-6 p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-base leading-relaxed max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 font-semibold">
                Professional Objective
              </p>
              {portfolioData.objective}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              id="hero-resume-cta"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm active:scale-98 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View & Print Resume</span>
            </button>

            <button
              id="hero-posture-demo-cta"
              onClick={onOpenPostureDemo}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-sm active:scale-98 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Try Posture AI Demo</span>
            </button>

            <a
              id="hero-projects-cta"
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700/60 transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>

            <a
              id="hero-contact-cta"
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Contact and Links bar */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 w-full flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            {/* Email with copy button */}
            <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg">
              <Mail className="w-4 h-4 text-zinc-500" />
              <a 
                href={`mailto:${portfolioData.email}`} 
                className="hover:text-zinc-900 dark:hover:text-zinc-200 font-mono"
              >
                {portfolioData.email}
              </a>
              <button
                onClick={() => copyToClipboard(portfolioData.email, 'email')}
                className="p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone with copy button */}
            <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg">
              <Phone className="w-4 h-4 text-zinc-500" />
              <a 
                href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} 
                className="hover:text-zinc-900 dark:hover:text-zinc-200 font-mono"
              >
                {portfolioData.phone}
              </a>
              <button
                onClick={() => copyToClipboard(portfolioData.phone, 'phone')}
                className="p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              id="hero-linkedin-link"
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>

            {/* GitHub */}
            <a
              id="hero-github-link"
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>

          {/* Key Metric Highlights strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight font-mono">
                7.23
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                B.Tech CSE CGPA (GIFT / BPUT)
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight font-mono">
                3
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                NPTEL Certifications (IIoT, Cloud, Soft Skills)
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight font-mono">
                2
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                Internships (Web Dev & Java at CSDT)
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight font-mono">
                2
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                Hackathons (CODENEXUS & HackOdisha)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
