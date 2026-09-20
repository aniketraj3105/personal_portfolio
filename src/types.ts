export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  score: string;
  year: string;
  location: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  gradeBadge: string;
  type: 'Elite + Silver' | 'Elite' | 'Certification';
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  technologies: string[];
  category: 'AI / Computer Vision' | 'Web Development' | 'Software Engineering' | 'Data Analytics';
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    context?: string;
  }[];
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitles: string[];
  email: string;
  phone: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  location: string;
  status: string;
  objective: string;
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  skillCategories: SkillCategory[];
}
