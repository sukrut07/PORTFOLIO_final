/**
 * Experience & Education Data Model — Sukrut Dusane
 * Structured, verifiable, outcome-oriented timeline records directly synchronized with LinkedIn.
 * 
 * Verified LinkedIn Roles:
 * 1. Founding Engineer — OBLIQ-in (Sep 2026 – Present)
 * 2. Junior Animator — Vertex GDNA (Sep 2025 – Present)
 * 3. Analyst — VANKADEL (Sep 2026 – Present)
 * 4. Contributor - OSCI '26 — Open Source Connect (Sep 2026 – Present)
 * 5. Management Team — E-Cell MITAOE (Sep 2025 – Present)
 * 6. Summer Intern @VLED Labs — Vicharanashala (Lab for Education Design) (May 2026 – Jul 2026)
 */

const experienceItems = [
  {
    id: "founding-engineer",
    date: "Sep 2026 – Present",
    period: "Sep 2026 – Present · 2 mos",
    mode: "Remote",
    type: "FOUNDING ROLE",
    typeLabel: "Founding Role",
    badgeColor: "var(--lime)",
    title: "Founding Engineer",
    organization: "OBLIQ-in · Internship",
    summary: "Spearheading early-stage product engineering, architecture design, and open-source software workflows across distributed contributor teams.",
    bullets: [
      "Driving project management, engineering roadmaps, and agile sprint delivery for early-stage software architecture.",
      "Architecting modular, maintainable full-stack features and establishing collaborative open-source git workflows.",
      "Leading technical code reviews, contributor onboarding, and system design discussions."
    ],
    tags: ["Project Management", "Open-Source Development", "System Design", "Full-Stack Development", "Git", "Agile Execution"],
    link: null
  },
  {
    id: "junior-animator",
    date: "Sep 2025 – Present",
    period: "Sep 2025 – Present · 1 yr 2 mos",
    mode: "On-site",
    type: "ANIMATION & DESIGN",
    typeLabel: "Full-time",
    badgeColor: "var(--purple)",
    title: "Junior Animator",
    organization: "Vertex GDNA",
    summary: "Producing high-impact 2D computer animations, graphic assets, motion sequences, and interactive visual narratives.",
    bullets: [
      "Developing 2D and computer animation sequences, timing curves, and digital asset libraries.",
      "Collaborating on-site with creative directors and design teams to refine motion aesthetics and narrative impact.",
      "Creating keyframes, character animation passes, and motion graphics for digital media productions."
    ],
    tags: ["2D Animation", "Computer Animation", "Motion Graphics", "Visual Storytelling", "Keyframing", "Digital Art"],
    link: null
  },
  {
    id: "analyst-vankadel",
    date: "Sep 2026 – Present",
    period: "Sep 2026 – Present · 2 mos",
    mode: "Remote",
    type: "ANALYST",
    typeLabel: "Analyst",
    badgeColor: "var(--cyan)",
    title: "Analyst",
    organization: "VANKADEL",
    summary: "Conducting data analysis, technology evaluation, and quantitative research to support strategic decision-making and systems optimization.",
    bullets: [
      "Extracting quantitative insights and modeling metrics to evaluate system efficiency and platform performance.",
      "Authoring structured technical briefs, risk evaluations, and process optimization strategies.",
      "Building automated reporting workflows and exploratory data scripts using Python."
    ],
    tags: ["Data Analytics", "Systems Evaluation", "Quantitative Modeling", "Python", "Process Optimization", "Research"],
    link: null
  },
  {
    id: "contributor-osci",
    date: "Sep 2026 – Present",
    period: "Sep 2026 – Present · 2 mos",
    mode: "Remote",
    type: "OPEN SOURCE",
    typeLabel: "Open Source",
    badgeColor: "var(--pink)",
    title: "Contributor - OSCI '26",
    organization: "Open Source Connect",
    summary: "Active contributor across Open Source Connect India (OSCI '26) initiatives, building developer tooling and community web utilities.",
    bullets: [
      "Triaged repository issues, reproduced bugs, and submitted reviewed pull requests following strict upstream commit conventions.",
      "Collaborated asynchronously with maintainers and student developers across India to build transparent developer utilities.",
      "Authored clean setup documentation, architectural breakdowns, and unit tests to ensure high software quality."
    ],
    tags: ["Open-Source Development", "Git & GitHub", "Code Reviews", "Issue Triage", "Technical Documentation", "CI/CD"],
    link: {
      url: "https://github.com/sukrut07",
      label: "GitHub Profile",
      external: true
    }
  },
  {
    id: "management-ecell",
    date: "Sep 2025 – Present",
    period: "Sep 2025 – Present · 1 yr 2 mos",
    mode: "On-site",
    type: "LEADERSHIP & OPERATIONS",
    typeLabel: "Management",
    badgeColor: "var(--neon-orange)",
    title: "Management Team",
    organization: "E-Cell MITAOE",
    summary: "Serving in the core Management Team at the Entrepreneurship Cell of MIT Academy of Engineering, driving campus innovation and venture building.",
    bullets: [
      "Coordinating campus entrepreneurship development initiatives, pitch competitions, and startup workshops.",
      "Managing end-to-end event logistics, industry speaker relations, and cross-functional student operations teams.",
      "Fostering collegiate founder networks and connecting aspiring student entrepreneurs with incubation resources."
    ],
    tags: ["Entrepreneurship", "Entrepreneurship Development", "Event Operations", "Leadership", "Stakeholder Management"],
    link: null
  },
  {
    id: "intern-vled-labs",
    date: "May 2026 – Jul 2026",
    period: "May 2026 – Jul 2026 · 3 mos",
    mode: "Remote",
    type: "INTERNSHIP",
    typeLabel: "Research Intern",
    badgeColor: "var(--electric-blue)",
    title: "Summer Intern @VLED Labs",
    organization: "Vicharanashala (Lab for Education Design)",
    summary: "Engaged in hands-on research and technical development for AI-powered education design prototypes and open-source simulation modules.",
    bullets: [
      "Developed Python-based data processing routines and foundational machine learning workflows.",
      "Engineered and validated REST API backend endpoints for interactive education design platforms.",
      "Participated in weekly research walkthroughs, sprint milestones, and open-source codebase reviews."
    ],
    tags: ["Artificial Intelligence (AI)", "Open-Source Development", "Python", "Machine Learning", "REST APIs", "Git"],
    link: null
  }
];

const trainingItems = [
  {
    id: "training-cisco",
    date: "2025 – 2026",
    type: "TECHNICAL TRAINING",
    typeLabel: "Technical Training",
    badgeColor: "var(--cyan)",
    title: "Technical Trainee",
    organization: "Cisco Networking Academy × MIT Academy of Engineering",
    summary: "Completed structured technical training spanning computer networking, Python programming, automation, and introductory AI.",
    bullets: [
      "Worked with IP routing, packet flows, and client-server/socket communication concepts.",
      "Built Python scripting exercises for data parsing, validation, and basic network automation.",
      "Completed verified Cisco Networking Academy learning tracks in Python Essentials and Modern AI foundations."
    ],
    tags: ["Computer Networks", "Python Scripting", "Automation", "Modern AI", "Socket Programming"],
    link: {
      url: "certifications.html",
      label: "View Credentials",
      external: false
    }
  }
];

const educationItems = [
  {
    id: "edu-mitaoe-btech",
    date: "2025 – Present",
    type: "EDUCATION",
    typeLabel: "B.Tech CSE (AI/ML)",
    badgeColor: "var(--purple)",
    status: "Pursuing (Batch 2025 – 2029)",
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    institution: "MIT Academy of Engineering (MITAOE), Pune",
    affiliation: "Savitribai Phule Pune University (Autonomous)",
    summary: "Undergraduate degree program focusing on core computer science foundations, algorithm design, and applied machine learning systems.",
    focusAreas: [
      "Machine Learning & Deep Learning Foundations",
      "Artificial Intelligence & Multi-Agent Systems",
      "Data Structures & Algorithmic Analysis",
      "Computer Science Fundamentals & Software Engineering"
    ],
    tags: ["Machine Learning", "Artificial Intelligence", "Data Structures & Algorithms", "Python", "Software Engineering"],
    link: {
      url: "https://mitaoe.ac.in/",
      label: "Institution Portal",
      external: true
    }
  }
];

const secondaryEducationItems = [
  {
    id: "edu-hsc",
    date: "2023 – 2025",
    qualification: "Higher Secondary Certificate (HSC)",
    stream: "Science (Physics, Chemistry, Mathematics)",
    institution: "Podar International School, Chinchwad",
    status: "Completed",
    accent: "var(--gray)"
  },
  {
    id: "edu-ssc",
    date: "2016 – 2023",
    qualification: "Secondary School Certificate (SSC)",
    stream: "General Science & Mathematics",
    institution: "Podar International School, Chinchwad",
    status: "Completed",
    accent: "var(--gray)"
  }
];

// Unified Career Timeline (chronological: newest first)
const careerTimelineItems = [...experienceItems, ...trainingItems];

// Expose globally for both static and script usage
if (typeof window !== "undefined") {
  window.experienceItems = experienceItems;
  window.trainingItems = trainingItems;
  window.educationItems = educationItems;
  window.secondaryEducationItems = secondaryEducationItems;
  window.careerTimelineItems = careerTimelineItems;
}
