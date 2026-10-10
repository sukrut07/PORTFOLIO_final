/**
 * Skills & Technologies Data Model — Sukrut Dusane
 * Categorized, evidence-based technical competencies across AI/ML,
 * Computer Vision, Programming, Full-Stack, and Systems Engineering.
 */

const skillsData = [
  // ==========================================
  // Category A — AI & MACHINE LEARNING
  // ==========================================
  {
    id: "skill-machine-learning",
    name: "Machine Learning",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Supervised and unsupervised modeling, predictive analytics & anomaly detection pipelines.",
    tags: ["Supervised", "Unsupervised", "Pipelines"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-deep-learning",
    name: "Deep Learning",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Neural network architectures, tensor operations & representation learning for complex media.",
    tags: ["Neural Networks", "Representation", "Tensors"],
    repoUrl: "https://github.com/sukrut07/deepfake_detection",
    repoName: "deepfake_detection"
  },
  {
    id: "skill-scikit-learn",
    name: "scikit-learn",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Tabular classifiers, regression estimators, hyperparameter tuning & evaluation metrics.",
    tags: ["Estimators", "GridSearchCV", "Pipelines"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-pytorch",
    name: "PyTorch",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Autograd tensors, CNN feature extractors, loss functions & model inference loops.",
    tags: ["Autograd", "CNNs", "Tensors"],
    repoUrl: "https://github.com/sukrut07/deepfake_detection",
    repoName: "deepfake_detection"
  },
  {
    id: "skill-xgboost",
    name: "XGBoost",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Gradient boosted decision trees, regularized loss formulation & probability calibration.",
    tags: ["Gradient Boosting", "Trees", "Ensembles"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-lightgbm",
    name: "LightGBM",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Fast leaf-wise tree splitting for high-velocity tabular transaction classification.",
    tags: ["Leaf-Wise", "Boosting", "Fast Inference"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-anomaly-detection",
    name: "Anomaly Detection",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Unsupervised Isolation Forest algorithms isolating non-linear financial transaction outliers.",
    tags: ["Isolation Forest", "Outlier Flagging", "Risk Scoring"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-feature-engineering",
    name: "Feature Engineering",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Velocity metrics, mathematical encodings, coordinate deviation modeling & normalization.",
    tags: ["Encoding", "Scaling", "Feature Extraction"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-model-evaluation",
    name: "Model Evaluation",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Precision-recall curves, ROC-AUC, confusion matrices, F1-scores & cross-validation.",
    tags: ["ROC-AUC", "F1-Score", "Confusion Matrix"],
    repoUrl: "https://github.com/sukrut07/HealthGuard",
    repoName: "HealthGuard"
  },
  {
    id: "skill-supervised-learning",
    name: "Supervised Classification",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    evidence: "PROJECT-USED",
    description: "Binary & multi-class decision boundaries, applicant risk scoring & clinical screening.",
    tags: ["Binary Scoring", "Multi-Class", "Validation"],
    repoUrl: "https://github.com/sukrut07/the-debuggers",
    repoName: "the-debuggers"
  },

  // ==========================================
  // Category B — COMPUTER VISION & IMAGE ANALYSIS
  // ==========================================
  {
    id: "skill-computer-vision",
    name: "Computer Vision",
    category: "computer-vision",
    categoryLabel: "Computer Vision",
    evidence: "PROJECT-USED",
    description: "Real-time webcam stream processing, spatial filtering, geometric transforms & thresholding.",
    tags: ["Vision Pipelines", "Real-Time", "Image Processing"],
    repoUrl: "https://github.com/sukrut07/gravity",
    repoName: "gravity"
  },
  {
    id: "skill-opencv",
    name: "OpenCV",
    category: "computer-vision",
    categoryLabel: "Computer Vision",
    evidence: "PROJECT-USED",
    description: "Video capture frame loops, color conversion, contour boundary analysis & overlay rendering.",
    tags: ["Frame Loops", "Color Spaces", "Overlays"],
    repoUrl: "https://github.com/sukrut07/gravity",
    repoName: "gravity"
  },
  {
    id: "skill-mediapipe",
    name: "MediaPipe",
    category: "computer-vision",
    categoryLabel: "Computer Vision",
    evidence: "PROJECT-USED",
    description: "21 3D hand landmarks coordinate extraction for low-latency contactless gesture control.",
    tags: ["3D Landmarks", "Hand Tracking", "Gestures"],
    repoUrl: "https://github.com/sukrut07/gravity",
    repoName: "gravity"
  },
  {
    id: "skill-deepfake-detection",
    name: "Deepfake Detection",
    category: "computer-vision",
    categoryLabel: "Computer Vision",
    evidence: "PROJECT-USED",
    description: "Facial media landmark micro-inconsistency detection and spectral artifact classification.",
    tags: ["Facial Media", "Frequency Spectrum", "Artifacts"],
    repoUrl: "https://github.com/sukrut07/deepfake_detection",
    repoName: "deepfake_detection"
  },
  {
    id: "skill-image-analysis",
    name: "Visual Data Analysis",
    category: "computer-vision",
    categoryLabel: "Computer Vision",
    evidence: "PROJECT-USED",
    description: "Frame-by-frame temporal consistency checks, video segmentation & facial bounding boxes.",
    tags: ["Video Analysis", "Segmentation", "Bounding Boxes"],
    repoUrl: "https://github.com/sukrut07/deepfake_detection",
    repoName: "deepfake_detection"
  },

  // ==========================================
  // Category C — PROGRAMMING LANGUAGES
  // ==========================================
  {
    id: "skill-python",
    name: "Python",
    category: "programming",
    categoryLabel: "Programming Languages",
    evidence: "PROJECT-USED",
    description: "Core language for ML engineering, computer vision, data pipelines, automation & APIs.",
    tags: ["Scientific Python", "OOP", "Async", "Core"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-cpp",
    name: "C++",
    category: "programming",
    categoryLabel: "Programming Languages",
    evidence: "COURSEWORK",
    description: "Algorithmic problem solving, pointer mechanics, STL containers & memory management.",
    tags: ["STL Containers", "Pointers", "Algorithms"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-javascript",
    name: "JavaScript (ES6+)",
    category: "programming",
    categoryLabel: "Programming Languages",
    evidence: "PROJECT-USED",
    description: "Modern asynchronous workflows, DOM manipulation, Promises, modules & event handling.",
    tags: ["Async/Await", "DOM", "ES6+"],
    repoUrl: "https://github.com/sukrut07/Attendance-management-system-demo",
    repoName: "Attendance-Demo"
  },
  {
    id: "skill-typescript",
    name: "TypeScript",
    category: "programming",
    categoryLabel: "Programming Languages",
    evidence: "PROJECT-USED",
    description: "Type-safe interface modeling, generics, AST node definitions & strict compilation.",
    tags: ["Type Safety", "Generics", "Interfaces"],
    repoUrl: "https://github.com/sukrut07/SML-Code-Optimiser",
    repoName: "SML-Code-Optimiser"
  },
  {
    id: "skill-sql",
    name: "SQL",
    category: "programming",
    categoryLabel: "Programming Languages",
    evidence: "PROJECT-USED",
    description: "Relational queries, multi-table JOINs, group aggregations, indexes & constraints.",
    tags: ["JOINs", "Aggregations", "Constraints"],
    repoUrl: "https://github.com/sukrut07/Attendance-management-system-demo",
    repoName: "Attendance-Demo"
  },
  {
    id: "skill-html-css",
    name: "HTML5 & CSS3",
    category: "programming",
    categoryLabel: "Programming Languages",
    evidence: "PROJECT-USED",
    description: "Accessible semantic structure, responsive CSS Grid/Flexbox & neo-brutalist styling.",
    tags: ["Semantic HTML", "Flexbox", "CSS Grid"],
    repoUrl: "https://github.com/sukrut07/FixMySpot",
    repoName: "FixMySpot"
  },
  {
    id: "skill-gdscript",
    name: "GDScript",
    category: "programming",
    categoryLabel: "Programming Languages",
    evidence: "PROJECT-USED",
    description: "Node lifecycle scripts, signal connections & kinematic player physics in Godot.",
    tags: ["Godot Nodes", "Physics", "Signals"],
    repoUrl: "https://github.com/sukrut07/gravity",
    repoName: "gravity"
  },

  // ==========================================
  // Category D — DATA SCIENCE & ANALYTICS
  // ==========================================
  {
    id: "skill-pandas",
    name: "Pandas",
    category: "data-science",
    categoryLabel: "Data Science & Analytics",
    evidence: "PROJECT-USED",
    description: "DataFrame manipulation, groupby aggregations, merge operations & CSV/JSON IO.",
    tags: ["DataFrames", "GroupBy", "Wrangling"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-numpy",
    name: "NumPy",
    category: "data-science",
    categoryLabel: "Data Science & Analytics",
    evidence: "PROJECT-USED",
    description: "Multidimensional ndarrays, vectorized linear algebra operations & statistical methods.",
    tags: ["Vectorization", "Matrices", "Linear Algebra"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-eda",
    name: "Exploratory Data Analysis",
    category: "data-science",
    categoryLabel: "Data Science & Analytics",
    evidence: "PROJECT-USED",
    description: "Uncovering data distributions, identifying correlation clusters & diagnosing skewness.",
    tags: ["Distributions", "Correlations", "Outliers"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-data-cleaning",
    name: "Data Cleaning & Preprocessing",
    category: "data-science",
    categoryLabel: "Data Science & Analytics",
    evidence: "PROJECT-USED",
    description: "Handling null values, deduplication, type casting & schema integrity enforcement.",
    tags: ["Imputation", "Deduplication", "Pipelines"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-statistics",
    name: "Statistical Analysis",
    category: "data-science",
    categoryLabel: "Data Science & Analytics",
    evidence: "COURSEWORK",
    description: "Probability distributions, variance modeling, hypothesis testing & expectation.",
    tags: ["Probability", "Distributions", "Hypothesis"],
    repoUrl: null,
    repoName: null
  },

  // ==========================================
  // Category E — BACKEND & FULL-STACK DEVELOPMENT
  // ==========================================
  {
    id: "skill-react",
    name: "React",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "Component composition, reactive state hooks, event binding & responsive layouts.",
    tags: ["Components", "Hooks", "UI Architecture"],
    repoUrl: "https://github.com/sukrut07/paperloop",
    repoName: "paperloop"
  },
  {
    id: "skill-nextjs",
    name: "Next.js",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "App Router architecture, client/server boundaries, dynamic routes & performance tuning.",
    tags: ["App Router", "SSR", "Client Components"],
    repoUrl: "https://github.com/sukrut07/SML-Code-Optimiser",
    repoName: "SML-Code-Optimiser"
  },
  {
    id: "skill-nodejs",
    name: "Node.js",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "Asynchronous runtime, file I/O operations, modular packages & HTTP server foundations.",
    tags: ["Runtime", "Async I/O", "npm Modules"],
    repoUrl: "https://github.com/sukrut07/Attendance-management-system-demo",
    repoName: "Attendance-Demo"
  },
  {
    id: "skill-expressjs",
    name: "Express.js",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "REST endpoint routing, custom middleware chains, error boundaries & CORS handling.",
    tags: ["Middleware", "REST Routing", "Controllers"],
    repoUrl: "https://github.com/sukrut07/paperloop",
    repoName: "paperloop"
  },
  {
    id: "skill-fastapi",
    name: "FastAPI",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "Asynchronous Python API routing, Pydantic type validation & OpenAPI documentation.",
    tags: ["Async Python", "Pydantic", "OpenAPI"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-rest-apis",
    name: "REST API Architecture",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "Deterministic HTTP status codes, structured JSON responses & payload validation.",
    tags: ["HTTP Verbs", "JSON Contracts", "Error Codes"],
    repoUrl: "https://github.com/sukrut07/paperloop",
    repoName: "paperloop"
  },
  {
    id: "skill-tailwind",
    name: "Tailwind CSS",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "Utility-first design tokens, responsive breakpoints & custom layout palettes.",
    tags: ["Design System", "Utility Classes", "Responsive"],
    repoUrl: "https://github.com/sukrut07/SML-Code-Optimiser",
    repoName: "SML-Code-Optimiser"
  },
  {
    id: "skill-auth",
    name: "Authentication & Role Guards",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    evidence: "PROJECT-USED",
    description: "Role-based route authorization (Admin, Recycler, Student), Firebase Auth & tokens.",
    tags: ["Firebase Auth", "Role Guards", "Protected Routes"],
    repoUrl: "https://github.com/sukrut07/paperloop",
    repoName: "paperloop"
  },

  // ==========================================
  // Category F — DATABASES & STORAGE
  // ==========================================
  {
    id: "skill-mongodb",
    name: "MongoDB Atlas",
    category: "databases",
    categoryLabel: "Databases & Storage",
    evidence: "PROJECT-USED",
    description: "Document modeling, embedded subdocuments, collection queries & Mongoose schemas.",
    tags: ["NoSQL", "Mongoose", "Atlas Cloud"],
    repoUrl: "https://github.com/sukrut07/paperloop",
    repoName: "paperloop"
  },
  {
    id: "skill-mysql",
    name: "MySQL",
    category: "databases",
    categoryLabel: "Databases & Storage",
    evidence: "PROJECT-USED",
    description: "Relational schema design, primary/foreign key normalization & ACID transactions.",
    tags: ["RDBMS", "Foreign Keys", "Schema Design"],
    repoUrl: "https://github.com/sukrut07/Attendance-management-system-demo",
    repoName: "Attendance-Demo"
  },
  {
    id: "skill-db-design",
    name: "Data Modeling & Schemas",
    category: "databases",
    categoryLabel: "Databases & Storage",
    evidence: "PROJECT-USED",
    description: "Entity relationship mapping, state-machine fields & indexed lookups.",
    tags: ["ER Diagrams", "Indexing", "Normalization"],
    repoUrl: "https://github.com/sukrut07/paperloop",
    repoName: "paperloop"
  },

  // ==========================================
  // Category G — DEVELOPER TOOLS & ENGINEERING
  // ==========================================
  {
    id: "skill-git-github",
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Developer Tools",
    evidence: "PROJECT-USED",
    description: "Feature branching, conventional commits, pull requests, issue triage & CI workflows.",
    tags: ["Branching", "Pull Requests", "Commit Standards"],
    repoUrl: "https://github.com/sukrut07/sentinel",
    repoName: "sentinel"
  },
  {
    id: "skill-vscode",
    name: "VS Code",
    category: "tools",
    categoryLabel: "Developer Tools",
    evidence: "PROJECT-USED",
    description: "Multi-language workspaces, launch configurations, linting & integrated debugging.",
    tags: ["Workspaces", "Debugging", "Extensions"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-postman",
    name: "Postman",
    category: "tools",
    categoryLabel: "Developer Tools",
    evidence: "PROJECT-USED",
    description: "API endpoint mocking, collection testing, payload assertions & environment management.",
    tags: ["Endpoint Testing", "Collections", "Environments"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-linux",
    name: "Linux Fundamentals & CLI",
    category: "tools",
    categoryLabel: "Developer Tools",
    evidence: "TECHNICAL TRAINING",
    description: "Bash commands, file permissions, background jobs, process monitoring & SSH access.",
    tags: ["Bash", "File Permissions", "CLI"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-vercel",
    name: "Vercel & Cloud Deployments",
    category: "tools",
    categoryLabel: "Developer Tools",
    evidence: "PROJECT-USED",
    description: "Git integration continuous deployment, production domain routing & edge caching.",
    tags: ["CI/CD", "Production DNS", "Edge"],
    repoUrl: "https://github.com/sukrut07/clubsync",
    repoName: "clubsync"
  },

  // ==========================================
  // Category H — ADVANCED AI & AGENTS
  // ==========================================
  {
    id: "skill-multi-agent",
    name: "Multi-Agent Orchestration",
    category: "advanced-ai",
    categoryLabel: "Advanced AI & Agents",
    evidence: "PROJECT-USED",
    description: "LangGraph-driven multi-agent workflows coordinating compliance, financial & geo checks.",
    tags: ["LangGraph", "Agent Routing", "Coordination"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-rag",
    name: "RAG & Knowledge Retrieval",
    category: "advanced-ai",
    categoryLabel: "Advanced AI & Agents",
    evidence: "PROJECT-USED",
    description: "Contextual grounding indexing public project documentation against official cost schedules.",
    tags: ["RAG", "Contextual Grounding", "Retrieval"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-ast",
    name: "AST Code Analysis",
    category: "advanced-ai",
    categoryLabel: "Advanced AI & Agents",
    evidence: "PROJECT-USED",
    description: "Abstract Syntax Tree traversal computing cyclomatic complexity & anti-patterns.",
    tags: ["Syntax Trees", "Cyclomatic Complexity", "Static Analysis"],
    repoUrl: "https://github.com/sukrut07/SML-Code-Optimiser",
    repoName: "SML-Code-Optimiser"
  },
  {
    id: "skill-prompt-engineering",
    name: "Prompt Engineering & LLM APIs",
    category: "advanced-ai",
    categoryLabel: "Advanced AI & Agents",
    evidence: "PROJECT-USED",
    description: "Structured JSON schema prompting, high-speed Groq/Anthropic inference & diff generation.",
    tags: ["Structured Outputs", "Groq API", "Inference"],
    repoUrl: "https://github.com/sukrut07/SML-Code-Optimiser",
    repoName: "SML-Code-Optimiser"
  },

  // ==========================================
  // Category I — NETWORKING & SYSTEMS
  // ==========================================
  {
    id: "skill-networking",
    name: "Computer Networking",
    category: "networking",
    categoryLabel: "Networking & Systems",
    evidence: "TECHNICAL TRAINING",
    description: "Layered architecture, IP routing, subnet masks, packet flows & client-server models.",
    tags: ["OSI Model", "Subnets", "Routing"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-tcp-ip",
    name: "TCP/IP & Protocols",
    category: "networking",
    categoryLabel: "Networking & Systems",
    evidence: "TECHNICAL TRAINING",
    description: "TCP reliable handshakes, UDP packet transmission, HTTP/HTTPS & DNS lookups.",
    tags: ["TCP", "UDP", "Packet Inspection"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-sockets",
    name: "Socket Programming (IPC)",
    category: "networking",
    categoryLabel: "Networking & Systems",
    evidence: "PROJECT-USED",
    description: "Non-blocking UDP socket bridges transmitting sub-15ms telemetry from Python to Godot.",
    tags: ["UDP Sockets", "IPC Bridge", "Telemetry"],
    repoUrl: "https://github.com/sukrut07/gravity",
    repoName: "gravity"
  },

  // ==========================================
  // Category J — GAME DEV & VISUALIZATION
  // ==========================================
  {
    id: "skill-godot",
    name: "Godot Engine (2D)",
    category: "game-dev",
    categoryLabel: "Game Dev & Simulation",
    evidence: "PROJECT-USED",
    description: "Scene hierarchies, player kinematics, particle systems & touchless input controllers.",
    tags: ["Scene Trees", "2D Physics", "Particle Systems"],
    repoUrl: "https://github.com/sukrut07/gravity",
    repoName: "gravity"
  },
  {
    id: "skill-manim",
    name: "Manim Animation Engine",
    category: "game-dev",
    categoryLabel: "Game Dev & Simulation",
    evidence: "PROJECT-USED",
    description: "Programmatic mathematical rendering of transcendental curves and harmonic motion.",
    tags: ["Math Visualization", "Parametric Curves", "Animation"],
    repoUrl: "https://github.com/sukrut07/Temple-Fay-s-Butterfly-curve-using-Manim",
    repoName: "Manim-Butterfly"
  },

  // ==========================================
  // Category K — COMPUTER SCIENCE FUNDAMENTALS
  // ==========================================
  {
    id: "skill-dsa",
    name: "Data Structures & Algorithms",
    category: "cs-fundamentals",
    categoryLabel: "CS Fundamentals",
    evidence: "COURSEWORK",
    description: "Asymptotic complexity (Big-O), arrays, linked lists, trees, graphs & sorting algorithms.",
    tags: ["Big-O", "Trees & Graphs", "Sorting"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-oop",
    name: "Object-Oriented Programming",
    category: "cs-fundamentals",
    categoryLabel: "CS Fundamentals",
    evidence: "COURSEWORK",
    description: "Encapsulation, inheritance, polymorphism, abstraction & decoupled software architecture.",
    tags: ["Encapsulation", "Polymorphism", "Clean Architecture"],
    repoUrl: null,
    repoName: null
  },
  {
    id: "skill-os",
    name: "Operating Systems Fundamentals",
    category: "cs-fundamentals",
    categoryLabel: "CS Fundamentals",
    evidence: "COURSEWORK",
    description: "Process scheduling, thread concurrency, memory paging, virtual memory & interrupts.",
    tags: ["Concurrency", "Virtual Memory", "Scheduling"],
    repoUrl: null,
    repoName: null
  },

  // ==========================================
  // Category L — COLLABORATION & PRACTICES
  // ==========================================
  {
    id: "skill-code-reviews",
    name: "Code Reviews & Team Workflows",
    category: "practices",
    categoryLabel: "Engineering Practices",
    evidence: "PROJECT-USED",
    description: "Asynchronous pull request reviews, reproducibility testing & issue triage workflows.",
    tags: ["Pull Requests", "Code Quality", "Collaboration"],
    repoUrl: "https://github.com/sukrut07/PORTFOLIO_final",
    repoName: "Portfolio"
  },
  {
    id: "skill-documentation",
    name: "Technical Documentation",
    category: "practices",
    categoryLabel: "Engineering Practices",
    evidence: "PROJECT-USED",
    description: "Detailed system architectures, API schemas, README guides & problem breakdowns.",
    tags: ["System Specs", "READMEs", "Architecture"],
    repoUrl: "https://github.com/sukrut07/paperloop",
    repoName: "paperloop"
  }
];

// Ordered category metadata definitions with neo-brutalist styling accents
const skillsCategories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    badgeLabel: "Core Specialization",
    badgeColor: "var(--lime)",
    description: "Supervised and unsupervised models, gradient boosted trees, feature engineering, and neural pipelines.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path><circle cx="12" cy="12" r="4"></circle></svg>`
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Image Analysis",
    badgeLabel: "Perception & Spatial",
    badgeColor: "var(--cyan)",
    description: "Real-time webcam telemetry, 3D hand tracking, and deepfake spectral artifact classification.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
  },
  {
    id: "programming",
    title: "Programming Languages",
    badgeLabel: "Core Languages",
    badgeColor: "var(--pink)",
    description: "High-level scripting, statically typed architectures, and low-level algorithmic foundations.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>`
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    badgeLabel: "Analytics & Wrangling",
    badgeColor: "var(--lime)",
    description: "Exploratory data analysis, matrix mathematics, DataFrame manipulation, and statistical evaluation.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><path d="M3 20h18"></path><polyline points="4 9 10 3 16 7 21 2"></polyline></svg>`
  },
  {
    id: "full-stack",
    title: "Backend & Full-Stack Development",
    badgeLabel: "Web & Microservices",
    badgeColor: "var(--purple)",
    description: "Responsive React/Next.js interfaces, Node.js and FastAPI microservices, authentication & REST APIs.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
  },
  {
    id: "databases",
    title: "Databases & Data Management",
    badgeLabel: "Document & Relational",
    badgeColor: "var(--cyan)",
    description: "NoSQL document collections with MongoDB Atlas, relational MySQL schemas, and CRUD architectures.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`
  },
  {
    id: "tools",
    title: "Developer Tools & Software Engineering",
    badgeLabel: "DevOps & Tooling",
    badgeColor: "var(--pink)",
    description: "Version control workflows, Linux CLI, Postman testing, code review cadences, and continuous deployment.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
  },
  {
    id: "advanced-ai",
    title: "AI Systems & Advanced Topics",
    badgeLabel: "Agents & Retrieval",
    badgeColor: "var(--lime)",
    description: "Multi-agent coordination with LangGraph, RAG knowledge indexing, and AST syntax tree analysis.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`
  },
  {
    id: "networking",
    title: "Networking & Systems",
    badgeLabel: "Protocols & Hardware",
    badgeColor: "var(--cyan)",
    description: "Cisco Networking Academy foundations, packet routing, socket programming, and IPC communication.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
  },
  {
    id: "game-dev",
    title: "Game Development & Technical Visualization",
    badgeLabel: "Engines & Graphics",
    badgeColor: "var(--pink)",
    description: "Godot Engine 2D physics integration with computer vision, and programmatic Manim math visualization.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="2"></rect></svg>`
  },
  {
    id: "cs-fundamentals",
    title: "Computer Science Fundamentals",
    badgeLabel: "Core Academic",
    badgeColor: "var(--purple)",
    description: "Undergraduate coursework foundations at MITAOE: Data structures, OOP, operating systems, and logic.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
  },
  {
    id: "practices",
    title: "Collaboration & Engineering Practices",
    badgeLabel: "Methodology",
    badgeColor: "var(--lime)",
    description: "Asynchronous code collaboration, technical documentation, issue triage, and iterative sprint delivery.",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { skillsData, skillsCategories };
}
