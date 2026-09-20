import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Download,
  Mail,
  Phone,
  Github,
  Linkedin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `
ANIKET RAJ
Email: ${portfolioData.email} | Phone: ${portfolioData.phone}
GitHub: ${portfolioData.github}
LinkedIn: ${portfolioData.linkedin}

OBJECTIVE
${portfolioData.objective}

EDUCATION
• ${portfolioData.education[0].degree}, ${portfolioData.education[0].institution}, ${portfolioData.education[0].affiliation} (${portfolioData.education[0].score})
• ${portfolioData.education[1].degree}, ${portfolioData.education[1].institution} (${portfolioData.education[1].year})
• ${portfolioData.education[2].degree}, ${portfolioData.education[2].institution} (${portfolioData.education[2].year})

CERTIFICATION COURSES
• NPTEL Elite + Silver certificate in Industrial Internet of Things 4.0
• NPTEL certification Soft Skill Development
• NPTEL Elite in Cloud Computing

PROJECTS
1. Bad Posture Detection Systems
• AI-powered posture monitoring system for real-time posture detection and correction.
• Implemented computer vision techniques using OpenCV and MediaPipe to track body landmarks and generate posture correction alerts.
• Technologies: Python, OpenCV, MediaPipe, Machine Learning.

2. Personal Portfolio Website
• Designed and developed a responsive portfolio website showcasing projects, skills and certifications.
• Optimized user experience across desktop, tablet and mobile devices and deployed using GitHub Pages.
• Technologies: HTML5, CSS3, JavaScript, GitHub Pages.

SKILLS
1. Data Tools: Advance Excel, Data Analytics, Power Bi
2. Programming Languages: Python, Java, JavaScript, React.js, SQL
3. Web Technologies: HTML, CSS
4. Tools & Cloud Platforms: Git, GitHub, Cloud Computing, Vercel, VS Code, Jupyter Notebook

EXPERIENCE
• Web developer Intern, CSDT IT Solution, Patna (July 2025 - 45 Days)
  - Completed a Front-End web development internship with a focus on technologies (HTML, CSS, JavaScript).
  - Designed and implemented front-end E-Commercial Website.
• Java Programming Intern, CSDT IT Solution, Patna (May 2024–July 2024 - 1 Month)
  - Completed Java Programming Internship and created a library management system.

ACHIEVEMENTS
• CODENEXUS Hackathon 2026: Managed participant registration and coordination, ensuring smooth registration and participant onboarding throughout the event.
• HackOdisha 5.0: Participated in HackOdisha 5.0 Hackathon - September 2025.
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden my-6 border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden when printing) */}
        <div className="print:hidden flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-100/80">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-zinc-700" />
            <h2 className="text-sm font-bold text-zinc-800">
              Aniket Raj — Standard Resume Document
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-zinc-700 border border-zinc-300 hover:bg-zinc-50 transition-colors cursor-pointer"
              title="Copy plain text for ATS"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Style Resume Canvas */}
        <div 
          id="printable-resume-body"
          className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto font-sans leading-relaxed text-zinc-900 selection:bg-zinc-200"
        >
          {/* Header */}
          <div className="text-center pb-4 border-b-2 border-zinc-900 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-zinc-950 uppercase">
              {portfolioData.name}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-700 mt-2 font-mono">
              <a href={`mailto:${portfolioData.email}`} className="text-blue-700 underline">
                {portfolioData.email}
              </a>
              <span>|</span>
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                GitHub : github.com/aniketraj3105
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-700 mt-1 font-mono">
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                LinkedIn: linkedin.com/in/aniket-raj-883081294
              </a>
              <span>|</span>
              <span>{portfolioData.phone}</span>
            </div>
          </div>

          {/* Section: Objective */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-400 mb-2">
              Objective
            </h2>
            <p className="text-xs sm:text-[13px] text-zinc-800 leading-relaxed text-justify">
              {portfolioData.objective}
            </p>
          </section>

          {/* Section: Education */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-400 mb-2">
              Education
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs sm:text-[13px] text-zinc-800">
              <li>
                <strong>Pursuing B.Tech in Computer Science and Engineering</strong> at GIFT Autonomous, Bhubaneswar affiliated to Biju Patnaik University of Technology with the CGPA of <strong>7.23</strong>.
              </li>
              <li>
                Completed <strong>Intermediate (12th)</strong> from YN College Dighwara, Saran, from Bihar board in the academic year 2023.
              </li>
              <li>
                Completed <strong>Matriculation (10th)</strong> from Jai Govind High School, Dighwara, Saran from BIHAR board in the academic year 2021.
              </li>
            </ul>
          </section>

          {/* Section: Certification Courses */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-400 mb-2">
              Certification Courses
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-[13px] text-zinc-800">
              <li>
                Achieved <strong>NPTEL Elite + Silver</strong> certificate in <strong>Industrial Internet of Things 4.0</strong>.
              </li>
              <li>
                Achieved <strong>NPTEL certification Soft Skill Development</strong>.
              </li>
              <li>
                Achieved <strong>NPTEL Elite</strong> in <strong>Cloud Computing</strong>.
              </li>
            </ul>
          </section>

          {/* Section: Projects */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-400 mb-2">
              Projects
            </h2>
            
            <div className="space-y-4 text-xs sm:text-[13px] text-zinc-800">
              <div>
                <p className="font-bold text-zinc-950">
                  1. Bad Posture Detection Systems
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1 mt-1 text-zinc-800">
                  <li>AI-powered posture monitoring system for real-time posture detection and correction.</li>
                  <li>Implemented computer vision techniques using OpenCV and MediaPipe to track body landmarks and generate posture correction alerts.</li>
                  <li><strong>Technologies:</strong> Python, OpenCV, MediaPipe, Machine Learning.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-zinc-950">
                  2. Personal Portfolio Website
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1 mt-1 text-zinc-800">
                  <li>Designed and developed a responsive portfolio website showcasing projects, skills and certifications.</li>
                  <li>Optimized user experience across desktop, tablet and mobile devices and deployed using GitHub Pages.</li>
                  <li><strong>Technologies:</strong> HTML5, CSS3, JavaScript, GitHub Pages.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Skills */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-400 mb-2">
              Skills
            </h2>
            <ol className="list-decimal list-outside ml-4 space-y-1 text-xs sm:text-[13px] text-zinc-800">
              <li><strong>Data Tools:</strong> Advance Excel, Data Analytics, Power Bi</li>
              <li><strong>Programming Languages:</strong> Python, Java, JavaScript, React.js, SQL</li>
              <li><strong>Web Technologies:</strong> HTML, CSS</li>
              <li><strong>Tools & Cloud Platforms:</strong> Git, GitHub, Cloud Computing, Vercel, VS Code, Jupyter Notebook</li>
            </ol>
          </section>

          {/* Section: Experience */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-400 mb-2">
              Experience
            </h2>
            
            <div className="space-y-3 text-xs sm:text-[13px] text-zinc-800">
              <div>
                <p className="font-bold text-zinc-950">
                  • Web developer Intern, CSDT IT Solution, Patna July 2025 (45 Days)
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1 mt-1">
                  <li>Completed a Front-End web development internship with a focus on technologies (HTML, CSS, JavaScript).</li>
                  <li>Designed and implemented front-end E-Commercial Website.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-zinc-950">
                  • Java Programming Intern, CSDT IT Solution, Patna May 2024–July 2024 (1 Month)
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1 mt-1">
                  <li>Completed Java Programming Internship and created a library management system.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Achievements */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-400 mb-2">
              Achievements
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-[13px] text-zinc-800">
              <li>
                <strong>CODENEXUS Hackathon 2026:</strong> Managed participant registration and coordination, ensuring smooth registration and participant onboarding throughout the event.
              </li>
              <li>
                <strong>HackOdisha 5.0:</strong> Participated in HackOdisha 5.0 Hackathon – September 2025.
              </li>
            </ul>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="print:hidden px-6 py-3 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between text-xs text-zinc-500">
          <span>Formatted for standard A4 / US-Letter printing and ATS parsers</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
