import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Aniket Raj',
  title: 'B.Tech Computer Science & Engineering Undergraduate',
  subtitles: [
    'Software Developer',
    'Data Analytics Enthusiast',
    'AI & Computer Vision Practitioner'
  ],
  email: 'aniketraj3105@gmail.com',
  phone: '+91 6299591861',
  github: 'https://github.com/aniketraj3105',
  githubUsername: 'aniketraj3105',
  linkedin: 'https://www.linkedin.com/in/aniket-raj-883081294',
  location: 'Bhubaneswar, Odisha / Saran, Bihar, India',
  status: 'Available for Entry-Level Roles & Internships',
  objective:
    'Motivated B.Tech Computer Science and Engineering student seeking an entry-level opportunity in Software Development or Data Analytics. Looking to apply my skills in Python, SQL, Excel, Power BI, HTML, CSS, JavaScript, and React to develop practical solutions, analyze data, and contribute to organizational goals while continuously improving my technical and problem-solving skills.',

  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'GIFT Autonomous, Bhubaneswar',
      affiliation: 'Affiliated to Biju Patnaik University of Technology (BPUT)',
      score: 'CGPA: 7.23',
      year: 'Pursuing (Current)',
      location: 'Bhubaneswar, Odisha',
      highlights: [
        'Core coursework: Data Structures, Algorithms, DBMS, Operating Systems, Object-Oriented Programming, Computer Networks.',
        'Active participant in regional hackathons and technical symposiums.'
      ]
    },
    {
      degree: 'Intermediate (12th Standard - Science)',
      institution: 'YN College Dighwara, Saran',
      affiliation: 'Bihar School Examination Board (BSEB)',
      score: 'Completed',
      year: 'Academic Year 2023',
      location: 'Saran, Bihar',
      highlights: [
        'Major subjects: Physics, Chemistry, Mathematics (PCM).'
      ]
    },
    {
      degree: 'Matriculation (10th Standard)',
      institution: 'Jai Govind High School, Dighwara, Saran',
      affiliation: 'Bihar School Examination Board (BSEB)',
      score: 'Completed',
      year: 'Academic Year 2021',
      location: 'Saran, Bihar',
      highlights: [
        'Foundational science, mathematics, and computer basics.'
      ]
    }
  ],

  certifications: [
    {
      id: 'nptel-iiot',
      title: 'Industrial Internet of Things 4.0',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning) / IIT',
      gradeBadge: 'Elite + Silver',
      type: 'Elite + Silver',
      description:
        'Awarded Elite + Silver certificate for outstanding mastery in IIoT architecture, industrial sensors, sensor networks, cloud protocols, and cyber-physical systems.',
      skills: ['Industrial IoT', 'Sensors & Actuators', 'Network Protocols', 'Edge Computing', 'Industry 4.0']
    },
    {
      id: 'nptel-cloud',
      title: 'Cloud Computing',
      issuer: 'NPTEL / IIT',
      gradeBadge: 'Elite',
      type: 'Elite',
      description:
        'Demonstrated strong proficiency in cloud infrastructure, virtualization, distributed storage, resource provisioning, and scalability patterns.',
      skills: ['Cloud Architecture', 'Virtualization', 'Resource Scheduling', 'SaaS/PaaS/IaaS', 'Distributed Systems']
    },
    {
      id: 'nptel-softskills',
      title: 'Soft Skill Development',
      issuer: 'NPTEL / IIT',
      gradeBadge: 'Certified',
      type: 'Certification',
      description:
        'Focused on professional communication, workplace interpersonal dynamics, collaborative team negotiation, active listening, and technical presentation skills.',
      skills: ['Professional Communication', 'Team Leadership', 'Presentation Skills', 'Conflict Resolution']
    }
  ],

  projects: [
    {
      id: 'bad-posture-detection',
      title: 'Bad Posture Detection Systems',
      subtitle: 'AI & Computer Vision Real-Time Monitoring',
      category: 'AI / Computer Vision',
      featured: true,
      description:
        'An AI-powered posture monitoring system developed for real-time human posture detection, alignment tracking, and instant ergonomic correction alerts.',
      bullets: [
        'AI-powered posture monitoring system designed for real-time posture detection and instantaneous ergonomic correction.',
        'Implemented computer vision techniques using OpenCV and MediaPipe to accurately track 33 anatomical landmarks in real time.',
        'Calculated cervical spine angles, shoulder alignment slope, and ear-to-shoulder alignment metrics to detect slouching, forward head posture, and uneven shoulders.',
        'Engineered an alert feedback mechanism providing visual cues and notifications whenever prolonged bad posture is detected.'
      ],
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Computer Vision', 'NumPy'],
      githubUrl: 'https://github.com/aniketraj3105',
      highlights: [
        'Real-time landmark tracking',
        'Angle geometry calculation',
        'Visual correction alerts',
        'Lightweight inference pipeline'
      ],
      metrics: [
        { label: 'Latency', value: '<35ms per frame' },
        { label: 'Landmarks', value: '33 Keypoints' },
        { label: 'Detection', value: 'Real-Time Alerts' }
      ]
    },
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio Website',
      subtitle: 'Modern Responsive Web Showcase',
      category: 'Web Development',
      featured: true,
      description:
        'Designed and engineered a high-performance, fully responsive portfolio website showcasing technical projects, professional internships, certifications, and educational milestones.',
      bullets: [
        'Designed and developed a responsive portfolio website showcasing technical projects, skills, and NPTEL certifications.',
        'Optimized user experience across desktop, tablet, and mobile devices with fluid layout responsiveness.',
        'Deployed with seamless CI/CD delivery pipelines using GitHub Pages and modern hosting platforms.',
        'Implemented semantic HTML5 structures, elegant modern typography, accessible contrast, and smooth interactive navigation.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'GitHub Pages'],
      githubUrl: 'https://github.com/aniketraj3105',
      liveUrl: 'https://github.com/aniketraj3105',
      highlights: [
        'Mobile-first responsive architecture',
        'Semantic HTML & accessible structure',
        'Automated deployment on GitHub Pages',
        'Fast initial load & zero latency'
      ],
      metrics: [
        { label: 'Responsiveness', value: '100% Adaptive' },
        { label: 'Deployment', value: 'GitHub Pages' }
      ]
    },
    {
      id: 'ecommerce-frontend',
      title: 'Front-End E-Commerce Website',
      subtitle: 'Internship Project at CSDT IT Solution',
      category: 'Web Development',
      featured: false,
      description:
        'Designed and developed a customer-facing e-commerce storefront featuring responsive product grids, interactive shopping cart, category filtering, and checkout layout.',
      bullets: [
        'Engineered a modern, responsive web application during the 45-day Front-End Internship at CSDT IT Solution.',
        'Constructed dynamic product catalogs, search filtering, and client-side shopping cart state management using vanilla JavaScript.',
        'Crafted mobile-optimized UI layouts utilizing CSS Grid and Flexbox for cross-device compatibility.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Git'],
      highlights: [
        'Interactive shopping cart',
        'Product filter & search',
        'Responsive layout for mobile & desktop'
      ]
    },
    {
      id: 'library-management',
      title: 'Library Management System',
      subtitle: 'Java OOP System at CSDT IT Solution',
      category: 'Software Engineering',
      featured: false,
      description:
        'Built a desktop-oriented Library Management System leveraging Java object-oriented principles, modular architecture, and file/database persistence for book tracking.',
      bullets: [
        'Developed an end-to-end library management solution during the Java Programming Internship at CSDT IT Solution.',
        'Implemented core modules for book inventory tracking, student issue/return operations, and overdue penalty calculations.',
        'Applied robust Object-Oriented Programming (OOP) paradigms including encapsulation, inheritance, and polymorphic handlers.'
      ],
      technologies: ['Java', 'Object-Oriented Programming', 'Data Structures', 'File Handling'],
      highlights: [
        'Complete book issue & return lifecycle',
        'Student membership tracking',
        'Modular OOP design'
      ]
    }
  ],

  experience: [
    {
      role: 'Web Developer Intern',
      company: 'CSDT IT Solution',
      location: 'Patna, Bihar',
      period: 'July 2025',
      duration: '45 Days',
      type: 'Internship',
      summary:
        'Completed an intensive Front-End Web Development internship focusing on contemporary web technologies (HTML, CSS, JavaScript).',
      bullets: [
        'Completed a Front-End web development internship with an in-depth focus on modern web standards (HTML5, CSS3, JavaScript).',
        'Designed, built, and implemented a functional front-end E-Commercial Website featuring intuitive navigation, responsive product displays, and client-side interactions.',
        'Collaborated with senior development mentors on clean code hygiene, cross-browser compatibility, and version control workflows.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git']
    },
    {
      role: 'Java Programming Intern',
      company: 'CSDT IT Solution',
      location: 'Patna, Bihar',
      period: 'May 2024 – July 2024',
      duration: '1 Month',
      type: 'Internship',
      summary:
        'Completed practical Java programming internship, mastering OOP patterns and engineering a production-like software application.',
      bullets: [
        'Completed rigorous Java Programming Internship covering core Java, exception handling, data structures, and OOP architecture.',
        'Created a robust Library Management System managing book catalogs, issue/return transactions, and student records.',
        'Documented technical specifications, test workflows, and algorithmic design patterns.'
      ],
      technologies: ['Java', 'OOP', 'Data Structures', 'Exception Handling']
    }
  ],

  achievements: [
    {
      id: 'codenexus-2026',
      title: 'CODENEXUS Hackathon 2026',
      role: 'Participant Registration & Coordination Lead',
      date: '2026',
      description:
        'Managed participant registration and coordination, ensuring smooth registration processes, team formation support, and participant onboarding throughout the hackathon event.',
      tag: 'Event Management & Coordination'
    },
    {
      id: 'hackodisha-2025',
      title: 'HackOdisha 5.0 Hackathon',
      role: 'Hackathon Competitor',
      date: 'September 2025',
      description:
        'Participated in HackOdisha 5.0, one of Eastern India’s premier student hackathons, collaborating on rapid software prototyping and innovative problem-solving under strict time constraints.',
      tag: 'Technical Hackathon'
    }
  ],

  skillCategories: [
    {
      title: 'Programming Languages',
      description: 'Core languages utilized for software development, system scripting, and algorithmic problem solving.',
      skills: [
        { name: 'Python', level: 'Advanced', context: 'OpenCV, MediaPipe, ML, Data Analytics' },
        { name: 'Java', level: 'Proficient', context: 'OOP, Library Management System, Core Java' },
        { name: 'JavaScript', level: 'Proficient', context: 'ES6+, DOM Manipulation, Async/Await' },
        { name: 'React.js', level: 'Proficient', context: 'Component Architecture, Hooks, State' },
        { name: 'SQL', level: 'Proficient', context: 'Queries, Relational Joins, Data Modeling' }
      ]
    },
    {
      title: 'Data Tools & Analytics',
      description: 'Analytics, data wrangling, reporting dashboards, and business intelligence.',
      skills: [
        { name: 'Advance Excel', level: 'Advanced', context: 'Formulas, Pivot Tables, VLOOKUP/XLOOKUP, Data Modeling' },
        { name: 'Data Analytics', level: 'Proficient', context: 'Exploratory Data Analysis, Trend Analysis, Insights' },
        { name: 'Power BI', level: 'Proficient', context: 'Interactive Dashboards, DAX, Visual Reports' }
      ]
    },
    {
      title: 'Web Technologies',
      description: 'Front-end standards for responsive, cross-device web interfaces.',
      skills: [
        { name: 'HTML5', level: 'Advanced', context: 'Semantic Markup, Accessibility, Forms' },
        { name: 'CSS3', level: 'Advanced', context: 'Flexbox, CSS Grid, Media Queries, Modern Animations' },
        { name: 'Tailwind CSS', level: 'Proficient', context: 'Utility-first modern styling' },
        { name: 'Responsive Web Design', level: 'Advanced', context: 'Mobile-first layout precision' }
      ]
    },
    {
      title: 'Tools & Cloud Platforms',
      description: 'Developer tooling, version control, cloud platforms, and IDE environments.',
      skills: [
        { name: 'Git', level: 'Proficient', context: 'Branching, Commits, Version Control' },
        { name: 'GitHub', level: 'Proficient', context: 'Repositories, GitHub Pages, Collaboration' },
        { name: 'Cloud Computing', level: 'Proficient', context: 'NPTEL Elite Certified, Virtualization, IaaS' },
        { name: 'Vercel', level: 'Proficient', context: 'Web Deployment & Hosting' },
        { name: 'VS Code', level: 'Advanced', context: 'Primary Development Environment' },
        { name: 'Jupyter Notebook', level: 'Proficient', context: 'Python Data Analysis & ML Prototyping' }
      ]
    }
  ]
};
