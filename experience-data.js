/**
 * Experience & Education Data Model — Sukrut Dusane
 * Structured, verifiable, outcome-oriented timeline records.
 * 
 * Sources:
 * - Technical Experience: Vicharanashala / IIT Ropar (Samagama Internship Program)
 * - Open Source: Verified GitHub contributions (github.com/sukrut07) & Open Source Connect India
 * - Technical Training: Cisco Networking Academy × MITAOE (Verified Credentials in Modern AI & Python)
 * - Formal Education: MIT Academy of Engineering (B.Tech CSE - AI/ML, 2025–2029)
 */

const experienceItems = [
  {
    id: "internship-vicharanashala",
    date: "2026",
    type: "INTERNSHIP",
    typeLabel: "Internship",
    badgeColor: "var(--lime)",
    title: "Software & Technical Intern",
    organization: "Vicharanashala / IIT Ropar — Samagama Internship Program",
    summary: "Worked on practical software development and introductory machine learning workflows under structured technical mentorship.",
    bullets: [
      "Developed Python-based data analysis and preprocessing workflows using Pandas and NumPy.",
      "Implemented and tested REST API integrations using Node.js and Express.js.",
      "Participated in weekly technical reviews, sprint milestones, and collaborative code walkthroughs."
    ],
    tags: ["Python", "Pandas", "NumPy", "Node.js", "Express.js", "REST APIs", "Git"],
    link: null
  },
  {
    id: "opensource-contributor",
    date: "2025 – 2026",
    type: "OPEN SOURCE",
    typeLabel: "Open Source",
    badgeColor: "var(--pink)",
    title: "Open Source Contributor",
    organization: "Open Source Connect India & Developer Repositories",
    summary: "Contributed bug fixes, documentation, and feature enhancements across student developer tooling and open repositories.",
    bullets: [
      "Triaged repository issues and submitted pull requests adhering to project coding standards and commit conventions.",
      "Collaborated with peers to debug and enhance student developer utilities and web portals.",
      "Authored clean, maintainable technical documentation to improve onboarding for incoming contributors."
    ],
    tags: ["Git & GitHub", "Code Reviews", "Issue Triage", "Technical Documentation", "Open Source"],
    link: {
      url: "https://github.com/sukrut07",
      label: "GitHub Profile",
      external: true
    }
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
