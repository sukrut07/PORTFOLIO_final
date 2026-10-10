/**
 * Skills & Technologies Data Model — Sukrut Dusane
 * Categorized, evidence-based technical competencies across AI/ML,
 * Computer Vision, Programming, Full-Stack, and Systems Engineering.
 *
 * Each skill entry includes:
 * - id: unique identifier
 * - name: concise display title
 * - category: parent category id matching skillsCategories
 * - categoryLabel: readable category string
 * - evidence: verified provenance (PROJECT-USED, COURSEWORK, TECHNICAL TRAINING, EXPLORATORY)
 * - explanation: clear, beginner-friendly definition of what the skill means
 * - application: how it is leveraged in AI/ML, data science, or software engineering
 * - example: authentic practical demonstration from Sukrut's projects or coursework
 * - description: summary string preserved for backwards compatibility and search indexing
 * - tags: core sub-topics and conceptual tags
 * - repoUrl: link to GitHub demonstration where applicable (null if coursework/training)
 * - repoName: repository display slug
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
    explanation: "Computational methods and algorithms that learn statistical patterns from historical data to make automated predictions, classifications, or decisions without explicit rule programming.",
    application: "Used across modern intelligent software for credit scoring, churn prediction, recommendation systems, automated medical screening, and fraud prevention.",
    example: "Applied in Sentinel to engineer multi-stage predictive pipelines detecting fraudulent and anomalous transaction behavior.",
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
    explanation: "A subset of machine learning based on multi-layered artificial neural networks capable of learning hierarchical feature representations directly from complex media.",
    application: "Powers modern computer vision, natural language understanding, speech recognition, and generative AI models by extracting latent spatial and temporal patterns.",
    example: "Implemented in the Deepfake Detection project to extract spatial facial representations and detect synthetic artifacts across video frames.",
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
    explanation: "Python's foundational open-source machine learning library providing efficient, production-tested tools for classification, regression, clustering, and data preprocessing.",
    application: "Industry standard for training baseline tabular models, hyperparameter grid tuning, computing validation metrics, and building automated ML pipelines.",
    example: "Utilized in Sentinel and HealthGuard for cross-validated model estimators, data scaling pipelines, and performance evaluation metrics.",
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
    explanation: "An open-source deep learning framework featuring dynamic computational graphs, GPU tensor acceleration, and reverse-mode automatic differentiation (autograd).",
    application: "Widely adopted in AI research and production to construct convolutional neural networks (CNNs), transformer architectures, and custom loss functions.",
    example: "Used in Deepfake Detection for custom tensor manipulations, feature extractor layers, and evaluation inference loops.",
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
    explanation: "An optimized gradient boosted decision tree library designed for high computational speed, cache efficiency, and regularized loss formulations.",
    application: "The gold standard for tabular data prediction problems, financial fraud risk scoring, customer lifetime value modeling, and competitive data science.",
    example: "Trained regularized gradient boosted decision trees in Sentinel to classify high-risk synthetic transaction patterns with low false-positive rates.",
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
    explanation: "A high-performance gradient boosting framework developed by Microsoft that utilizes leaf-wise tree splitting and histogram-based feature binning.",
    application: "Essential for massive, high-velocity datasets where low memory footprint and fast inference latency are mission-critical.",
    example: "Evaluated in Sentinel for high-throughput transaction classification, optimizing training speed on skewed datasets.",
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
    explanation: "Unsupervised and semi-supervised techniques designed to isolate rare observations, behavioral outliers, and patterns that deviate from normal baseline data.",
    application: "Critical in financial fraud monitoring, network intrusion defense, medical screening, and predictive machinery maintenance.",
    example: "Deployed Isolation Forest algorithms in Sentinel to isolate multi-dimensional outliers in high-volume transaction feeds without labeled fraud data.",
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
    explanation: "The process of using domain knowledge to extract, transform, combine, and scale raw data variables into informative mathematical representations.",
    application: "Dramatically boosts machine learning model accuracy by transforming raw timestamps, geolocations, and categorical identifiers into high-signal predictors.",
    example: "Engineered transaction velocity metrics, cyclical time encodings, and user spending deviation ratios in Sentinel.",
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
    explanation: "Rigorous quantitative assessment of predictive models using statistical metrics beyond simple accuracy to evaluate true generalization.",
    application: "Enables ML engineers to prevent data leakage, evaluate class imbalances, and calibrate decision thresholds for production deployment.",
    example: "Assessed precision-recall trade-offs, ROC-AUC curves, confusion matrices, and stratified F1-scores in HealthGuard and Sentinel.",
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
    explanation: "The machine learning paradigm where models learn mathematical mapping functions from input feature vectors to known target ground-truth labels.",
    application: "Standard approach for clinical diagnosis risk scoring, document categorization, sentiment analysis, and credit underwriting.",
    example: "Developed supervised binary and multi-class classification workflows in the-debuggers and HealthGuard.",
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
    explanation: "The field of artificial intelligence enabling computational systems to perceive, extract, process, and understand structured information from digital images and live video.",
    application: "Applied in biometric authentication, spatial computing, autonomous robotics, gesture-controlled user interfaces, and defect inspection.",
    example: "Engineered real-time computer vision pipelines in Gravity converting continuous webcam video into touchless spatial game controllers.",
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
    explanation: "The industry-standard open-source computer vision library providing optimized algorithms for image transformation, filtering, and video stream decoding.",
    application: "Capturing webcam video frames, converting color spaces (RGB/BGR/HSV), thresholding, drawing visual overlays, and contour tracking.",
    example: "Managed camera frame acquisition loops, color normalization, coordinate transformations, and HUD debug overlays in Gravity.",
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
    explanation: "Google’s cross-platform framework providing lightweight, on-device machine learning perception pipelines for spatial tracking.",
    application: "Extracts real-time 3D coordinates for human hands, facial meshes, and body poses with sub-millisecond overhead on standard consumer hardware.",
    example: "Tracked 21 3D hand landmark coordinates in real-time in Gravity to compute pinch distances, finger curls, and spatial tilt vectors.",
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
    explanation: "Forensic analysis and classification techniques aimed at detecting synthetic facial manipulations, face swaps, and AI-generated video artifacts.",
    application: "Vital for digital forensics, media integrity verification, biometric spoofing mitigation, and defending against generative disinformation.",
    example: "Researched and classified subtle facial boundary inconsistencies, warping artifacts, and frequency-domain anomalies in Deepfake Detection.",
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
    explanation: "Quantitative examination of spatial pixel distributions, contrast histograms, edge gradients, and frame-by-frame temporal consistency.",
    application: "Used to inspect visual quality, evaluate image segmentation masks, track moving bounding boxes, and verify media stability.",
    example: "Conducted frame-by-frame temporal consistency checks and facial bounding box segmentation in Deepfake Detection.",
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
    explanation: "A high-level, expressive general-purpose programming language celebrated for clean syntax, versatile libraries, and supreme dominance in AI/ML.",
    application: "The core language for data engineering, scientific computing, deep learning research, computer vision pipelines, automation, and backend APIs.",
    example: "Primary language across Sukrut's portfolio: powering ML in Sentinel, computer vision in Gravity, and data pipelines across projects.",
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
    explanation: "A high-performance compiled language providing low-level memory control, static type safety, and zero-cost abstractions.",
    application: "The backbone of game engines, operating systems, embedded systems, high-frequency finance, and performance-critical AI inference runtimes.",
    example: "Mastered algorithmic problem solving, pointer mechanics, dynamic memory allocation, and STL containers in MITAOE engineering coursework.",
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
    explanation: "The core programming language of the World Wide Web, featuring an asynchronous event-driven runtime across web browsers and Node.js environments.",
    application: "Developing dynamic web user interfaces, full-stack microservices, real-time client-server communication, and single-page applications.",
    example: "Authored asynchronous fetch workflows, DOM interactions, and client-side logic in Attendance-Demo and this portfolio.",
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
    explanation: "A strongly typed superset of JavaScript that introduces static type checking, interfaces, and compile-time verification.",
    application: "Essential for large-scale production codebases, preventing runtime exceptions, establishing clear API contracts, and enhancing IDE refactoring.",
    example: "Implemented type-safe interfaces, AST node structures, and API response models in SML-Code-Optimiser.",
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
    explanation: "Structured Query Language, the universal standard for defining, querying, joining, and maintaining relational databases.",
    application: "Extracting business intelligence, aggregating metrics, establishing primary/foreign key constraints, and executing transactional ACID updates.",
    example: "Designed normalized schemas, foreign key relationships, and attendance aggregation queries in Attendance-management-system-demo.",
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
    explanation: "The foundational markup and styling standards of the modern web for structuring accessible semantic pages and responsive design systems.",
    application: "Crafting responsive layouts with CSS Grid and Flexbox, enforcing WCAG accessibility, handling media queries, and designing modern aesthetics.",
    example: "Built the custom responsive neo-brutalist design system, CSS Grid layouts, and accessible semantic components for this portfolio and FixMySpot.",
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
    explanation: "A high-level, dynamically typed language engineered specifically for the Godot Engine with Python-like syntax and deep node tree integration.",
    application: "Handling game loop iterations, kinematic body collisions, signal event routing, and real-time physics calculations.",
    example: "Programmed player physics, velocity vector math, and UDP network socket listeners in Gravity.",
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
    explanation: "Python's cornerstone data manipulation library providing high-performance DataFrame structures for tabular analysis and data wrangling.",
    application: "Crucial for filtering records, grouping aggregations, joining datasets, reshaping tables, handling missing values, and preprocessing features.",
    example: "Processed raw tabular transaction logs, calculated rolling time-window statistics, and structured training records in Sentinel.",
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
    explanation: "The fundamental package for scientific computing in Python, providing multi-dimensional ndarrays and optimized C-based linear algebra operations.",
    application: "Powers vectorized computations, matrix operations, distance calculations, Fourier transforms, and numerical data manipulation in AI pipelines.",
    example: "Leveraged for vectorized matrix operations, coordinate distance calculations, and fast numerical transforms in Sentinel and Gravity.",
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
    explanation: "The systematic methodology of analyzing and summarizing datasets to uncover underlying structures, anomalies, and feature correlations.",
    application: "Enables engineers to identify data skewness, detect measurement errors, formulate predictive hypotheses, and choose suitable modeling architectures.",
    example: "Diagnosed heavy-tailed transaction distributions, class imbalance, and correlated spending anomalies during development of Sentinel.",
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
    explanation: "Identifying, filtering, and correcting corrupt, incomplete, duplicate, or misformatted records from raw datasets.",
    application: "Guarantees data integrity for production models by handling null value imputation, one-hot encoding, feature normalization, and schema validation.",
    example: "Built automated preprocessing pipelines handling missing values, categorical encoding, and feature scaling in Sentinel.",
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
    explanation: "Mathematical discipline focusing on probability distributions, hypothesis testing, variance estimation, and statistical inference.",
    application: "Underpins A/B testing, confidence intervals, risk assessment, sampling theory, and validating model significance against random noise.",
    example: "Applied probability distributions, expectation formulas, and variance modeling in engineering coursework at MITAOE.",
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
    explanation: "A declarative, component-based JavaScript library for building responsive and modular user interfaces with reactive state management.",
    application: "Creating single-page web applications, interactive dashboards, reusable UI design systems, and fast client-rendered experiences.",
    example: "Built dynamic recycling dashboard components, role-based views, and stateful interfaces in PaperLoop.",
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
    explanation: "The production React framework enabling Server-Side Rendering (SSR), Static Site Generation (SSG), and the modern App Router architecture.",
    application: "Used for production web applications requiring optimal Core Web Vitals, server components, automated route bundling, and SEO performance.",
    example: "Developed the interactive AST code analysis dashboard with dynamic routes in SML-Code-Optimiser.",
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
    explanation: "An open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine that executes JavaScript on the server.",
    application: "Powering asynchronous REST APIs, real-time microservices, command-line developer tooling, and event-driven backends.",
    example: "Implemented asynchronous backend server logic and API routing in Attendance-management-system-demo and PaperLoop.",
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
    explanation: "A fast, minimalist web framework for Node.js providing robust routing mechanisms and modular middleware support.",
    application: "Structuring RESTful API routes, composing middleware for authentication, parsing JSON request bodies, and handling error boundaries.",
    example: "Constructed modular REST endpoints, auth verification middleware, and error-handling controllers for PaperLoop.",
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
    explanation: "A high-performance asynchronous Python web framework built on standard type hints, Starlette, and Pydantic data validation.",
    application: "Serving low-latency machine learning inference APIs, real-time data streaming, and automatically generating interactive OpenAPI documentation.",
    example: "Engineered asynchronous prediction endpoints serving the machine learning model pipeline in Sentinel.",
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
    explanation: "Representational State Transfer, a stateless software architectural style defining standards for web client-server communication over HTTP.",
    application: "Decoupling frontend client interfaces from backend servers using deterministic HTTP status codes and structured JSON schemas.",
    example: "Designed structured JSON payloads, deterministic HTTP status codes, and route handlers across PaperLoop and Sentinel.",
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
    explanation: "A utility-first CSS framework providing composable, low-level utility classes directly within markup for rapid UI development.",
    application: "Standardizing design tokens, building responsive breakpoints, creating dark/light themes, and eliminating unused CSS bundle size in production.",
    example: "Styled the developer dashboard, metric summary cards, and code comparison views in SML-Code-Optimiser.",
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
    explanation: "Security mechanisms for verifying user identity (Authentication) and enforcing access privileges across system resources (Authorization).",
    application: "Safeguarding sensitive endpoints, preventing unauthorized data modification, issuing session tokens, and managing user roles.",
    example: "Configured role-based route guards (Students, Recyclers, Administrators) with Firebase Auth in PaperLoop.",
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
    explanation: "A fully managed cloud database service hosting MongoDB, a leading document-oriented NoSQL database storing flexible BSON/JSON records.",
    application: "Rapid prototyping, managing hierarchical or evolving data schemas, high-velocity operational logging, and cloud-native backends.",
    example: "Modeled user profiles, recycling transaction records, and pickup logs using Mongoose schemas in PaperLoop.",
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
    explanation: "A premier open-source relational database management system (RDBMS) providing structured table storage, primary keys, and ACID transactions.",
    application: "Mission-critical relational data, transactional accounting records, enterprise ERP solutions, and strictly normalized entity storage.",
    example: "Designed normalized schemas, foreign key relationships, and structured attendance records in Attendance-management-system-demo.",
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
    explanation: "The architectural practice of structuring data entities, relationships, constraints, indexes, and normalization rules to optimize system throughput.",
    application: "Prevents data redundancy, eliminates write anomalies, optimizes index lookups, and establishes clear domain boundaries.",
    example: "Constructed Entity-Relationship models and status state machines for tracking pickup states in PaperLoop.",
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
    explanation: "Distributed version control system (Git) and cloud collaboration platform (GitHub) for tracking code history, branching, and team releases.",
    application: "Feature branch workflows, pull request reviews, automated CI/CD actions, release tagging, and distributed open-source collaboration.",
    example: "Managed repositories, structured commit histories, and collaborated across all public projects at github.com/sukrut07.",
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
    explanation: "Modern extensible source code editor providing integrated debugging, language servers, terminal access, and ecosystem extensions.",
    application: "Primary daily development environment for writing Python, TypeScript, C++, web, and cloud runtimes with interactive debugging.",
    example: "Configured multi-language workspaces, Python virtual environment debuggers, and ESLint tooling for engineering workflows.",
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
    explanation: "An industry API platform for mocking, sending requests, debugging payloads, and writing automated integration test assertions for HTTP APIs.",
    application: "Testing REST endpoints before frontend integration, validating status headers, inspecting response latency, and documenting team APIs.",
    example: "Tested backend RESTful endpoints, verified JSON error schemas, and debugged edge cases for the PaperLoop backend.",
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
    explanation: "The Unix-like operating system standard powering cloud infrastructure, production servers, container runtimes, and developer tooling.",
    application: "Navigating remote filesystems, managing POSIX permissions, managing background services, monitoring CPU/memory, and SSH connectivity.",
    example: "Completed hands-on technical training managing shell scripts, file permission hierarchies, process signals, and remote connections.",
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
    explanation: "Cloud platform engineered for frontend frameworks and static websites, providing automated Git deployments, edge caching, and preview channels.",
    application: "Deploying production web apps with zero-configuration build pipelines, SSL certificate management, custom domains, and edge DNS.",
    example: "Deployed and maintained production live versions of ClubSync and this portfolio with continuous Git deployment integration.",
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
    explanation: "The architectural framework coordinating multiple autonomous AI agents, each specializing in distinct sub-tasks, through a shared state graph.",
    application: "Automates complex multi-step reasoning, regulatory compliance auditing, financial verification, and collaborative problem-solving.",
    example: "Explored and architected multi-agent graph workflows coordinating compliance verification, financial validation, and geospatial audits.",
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
    explanation: "Retrieval-Augmented Generation, pairing vector similarity search over private documents with LLM generation to ground responses in factual source material.",
    application: "Eliminates LLM hallucinations, enables private enterprise document search, and grounds AI answers in verified policy manuals.",
    example: "Constructed contextual grounding pipelines indexing public project documentation against reference cost schedules.",
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
    explanation: "Abstract Syntax Tree parsing, which transforms source code into a hierarchical tree representation that compilers and static analyzers inspect.",
    application: "Static code analysis, security auditing, automated refactoring, computing cyclomatic complexity metrics, and identifying anti-patterns.",
    example: "Parsed JavaScript/TypeScript syntax trees in SML-Code-Optimiser to compute cyclomatic complexity and identify structural anti-patterns.",
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
    explanation: "Designing structured instructions, few-shot contexts, and schema constraints to elicit deterministic, high-quality responses from large language models.",
    application: "Integrating LLMs into production software via APIs, generating structured JSON outputs, few-shot prompting, and automated code transformations.",
    example: "Orchestrated Groq API calls with structured JSON output constraints to generate suggested code refactoring diffs in SML-Code-Optimiser.",
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
    explanation: "The fundamental study of communication protocols, packet routing, and network hardware that connect distributed computational systems.",
    application: "Designing reliable client-server architectures, subnetting IP ranges, troubleshooting network latency, and securing communication channels.",
    example: "Completed certified training through the Cisco Networking Academy covering the 7-layer OSI model, IP routing, and LAN/WAN topology.",
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
    explanation: "The foundational suite of internet protocols defining reliable three-way handshakes (TCP), connectionless datagram delivery (UDP), and routing.",
    application: "Selecting appropriate transport protocols for applications (TCP for reliable web data, UDP for real-time game telemetry, video, and audio).",
    example: "Studied packet inspection, TCP handshake states, UDP packet flows, and port addressing through Cisco Networking Academy coursework.",
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
    explanation: "Inter-Process Communication (IPC) utilizing network sockets to transmit continuous raw data packets between separate running processes.",
    application: "Enables low-latency real-time telemetry streaming, multiplayer game networking, hardware sensor bridges, and inter-service data links.",
    example: "Constructed a non-blocking UDP socket bridge in Gravity transmitting sub-15ms hand landmark coordinates from Python into Godot.",
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
    explanation: "A versatile, open-source 2D/3D game engine featuring a flexible scene-tree node architecture and dedicated 2D physics engine.",
    application: "Building interactive 2D games, physics simulations, educational graphics, and custom gesture-driven user interface experiments.",
    example: "Created the interactive 2D gameplay world, collision layers, particle systems, and touchless player kinematics in Gravity.",
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
    explanation: "A programmatic mathematical animation engine created by 3Blue1Brown for rendering precise vector math graphics and parametric curves.",
    application: "Creating rigorous scientific educational animations, visualizing complex mathematical concepts, and rendering geometric proofs.",
    example: "Programmed mathematical animations rendering Temple Fay's parametric butterfly curve in Temple-Fay-s-Butterfly-curve-using-Manim.",
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
    explanation: "Foundational principles governing the efficient storage, organization, and manipulation of data using optimal time and space complexity.",
    application: "Designing high-performance software, optimizing cache locality, writing scalable backend logic, and solving complex algorithmic challenges.",
    example: "Studied Big-O asymptotic analysis, dynamic arrays, linked lists, trees, graphs, sorting, and dynamic programming in MITAOE coursework.",
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
    explanation: "A programming paradigm organized around modular objects containing data and code, leveraging encapsulation, inheritance, and polymorphism.",
    application: "Structuring large software architectures, decoupling modular components, reducing code duplication, and maintaining clean design patterns.",
    example: "Implemented class hierarchies, encapsulation, and modular architectural patterns across C++ and Python coursework at MITAOE.",
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
    explanation: "Core concepts governing system software that manages hardware resources, CPU scheduling, thread concurrency, and virtual memory.",
    application: "Writing thread-safe concurrent software, understanding memory paging, debugging deadlocks, and optimizing I/O system calls.",
    example: "Studied process scheduling algorithms, multithreading synchronization, virtual memory paging, and system calls in MITAOE coursework.",
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
    explanation: "The engineering practice of systematically inspecting teammates' code before merging to uphold code quality, security, and knowledge sharing.",
    application: "Modern agile engineering teams, open-source repositories, preventing production regressions, and maintaining architectural consistency.",
    example: "Practiced pull request reviews, reproducibility testing, clean commit conventions, and issue triage across collaborative projects.",
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
    explanation: "Writing clear, comprehensive explanations of system architectures, installation instructions, API specifications, and design rationale.",
    application: "Accelerating developer onboarding, ensuring system maintainability, enabling open-source adoption, and communicating engineering decisions.",
    example: "Authored detailed README guides, system architecture diagrams, and endpoint specifications for projects like PaperLoop and Sentinel.",
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
