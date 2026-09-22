const githubUser = "sukrut07";
const featuredProjectContainer = document.querySelector("#featured-projects-container");
const moreProjectList = document.querySelector("#more-project-list") || document.querySelector("#project-list");
const contactModal = document.querySelector("#contact-modal");
const projectModal = document.querySelector("#project-modal");
let lastFocusedElement = null;

// Use projectsData if loaded from projects-data.js, otherwise provide core verified fallback
const portfolioProjects = typeof projectsData !== "undefined" ? projectsData : [
  {
    id: "sentinel-ai",
    title: "Sentinel AI",
    tagline: "AI-powered fraud detection and risk intelligence platform.",
    category: "ai-ml",
    categoryLabel: "AI / Machine Learning",
    featured: true,
    achievementBadge: "🥇 1st Place — GirlScript Pune Datathon 2026",
    shortDescription: "An intelligent fraud detection and investigation platform built to detect complex financial anomalies and provide automated decision support.",
    problem: "Financial workflows face sophisticated fraudulent schemes and anomalous behavioral patterns that static rules miss.",
    solution: "End-to-end fraud pipeline combining unsupervised anomaly detection with supervised risk scoring and explainable factors.",
    architecture: ["Data Ingestion with schema validation", "Feature extraction & behavioral embeddings", "Isolation Forest & XGBoost risk ensemble", "Investigator dashboard with explainable factor scoring"],
    technologies: ["Python", "Scikit-learn", "Anomaly Detection", "XGBoost", "FastAPI", "Pandas", "NumPy"],
    githubUrl: "https://github.com/sukrut07",
    liveUrl: null,
    badgeColor: "var(--lime)"
  },
  {
    id: "sanchay",
    title: "SANCHAY",
    tagline: "AI-powered MPLADS Risk Intelligence & Audit Platform.",
    category: "ai-ml",
    categoryLabel: "AI / Multi-Agent Systems",
    featured: true,
    achievementBadge: "🚀 SIH Internal Rounds Selection — Team Agastya",
    shortDescription: "An AI-powered public governance audit platform detecting financial anomalies, procurement irregularities, and duplicate works in MPLADS projects.",
    problem: "MPLADS fund allocations across disparate works make identifying duplicate projects and procurement irregularities difficult manually.",
    solution: "Multi-agent audit system combining LangGraph, RAG, and geospatial cross-referencing to inspect project documentation transparently.",
    architecture: ["Multi-modal DPR and sanction order ingestion", "Specialized AI agents for compliance, finance, and geospatial validation", "RAG pipeline with regulatory clauses", "Audit scorecard with verifiable evidence"],
    technologies: ["Python", "LangChain", "LangGraph", "RAG", "Multi-Agent Systems", "NLP", "FastAPI", "React"],
    githubUrl: "https://github.com/sukrut07",
    liveUrl: null,
    badgeColor: "var(--purple)"
  }
];

let activeCategory = "all";

function createFeaturedCard(project) {
  const card = document.createElement("article");
  card.className = "featured-card reveal visible";
  card.dataset.category = project.category;

  const badgeHtml = project.achievementBadge
    ? `<span class="achievement-tag" style="background: ${project.badgeColor || 'var(--lime)'};">${project.achievementBadge}</span>`
    : "";

  const categoryHtml = project.categoryLabel
    ? `<span class="category-tag">${project.categoryLabel}</span>`
    : "";

  const techPillsHtml = (project.technologies || [])
    .slice(0, 6)
    .map((tech) => `<span class="tech-pill">${tech}</span>`)
    .join("");

  card.innerHTML = `
    <div>
      <div class="badge-row">
        ${badgeHtml}
        ${categoryHtml}
      </div>
      <h3>${project.title}</h3>
      <p class="tagline">${project.tagline}</p>
      <p class="summary">${project.shortDescription}</p>
      <div class="tech-pills">${techPillsHtml}</div>
    </div>
    <div class="project-actions">
      <button type="button" class="btn-action btn-primary" data-open-casestudy="${project.id}">
        <span>Case Study & Architecture</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="btn-action btn-secondary">
          <span>GitHub Code</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>` : ""}
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="btn-action btn-dark">
          <span>Live App</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>` : ""}
    </div>
  `;

  card.querySelector("[data-open-casestudy]")?.addEventListener("click", () => {
    openCaseStudyModal(project);
  });

  return card;
}

function createMoreProjectCard(project) {
  const item = document.createElement("article");
  item.className = "project-item";
  item.dataset.category = project.category;

  const button = document.createElement("button");
  button.className = "project-toggle";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = `<span>${project.title}</span><span>+</span>`;

  const body = document.createElement("div");
  body.className = "project-body";
  
  const techPills = (project.technologies || [])
    .slice(0, 5)
    .map((t) => `<span class="tech-pill" style="font-size: 0.72rem; padding: 2px 6px;">${t}</span>`)
    .join(" ");

  const badgeSpan = project.achievementBadge
    ? `<span style="font-size: 0.75rem; font-weight: 700; border: 2px solid var(--black); padding: 0.15rem 0.5rem; border-radius: 4px; background: ${project.badgeColor || 'var(--lime)'}; color: var(--black);">${project.achievementBadge}</span>`
    : "";

  body.innerHTML = `
    <div class="project-inner">
      <p style="font-weight: 600; margin-bottom: 6px;">${project.tagline || ""}</p>
      <p>${project.shortDescription || project.description || "Production-ready engineering repository."}</p>
      <div style="display: flex; flex-wrap: wrap; gap: 4px; margin: 10px 0;">${techPills}</div>
      <div class="project-meta">
        ${badgeSpan}
        ${project.categoryLabel ? `<span style="font-size: 0.75rem; font-weight: 700; color: var(--black);">${project.categoryLabel}</span>` : ""}
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noreferrer">Repo link</a>` : ""}
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer" style="background: var(--lime); color: var(--black); padding: 2px 6px; border: 2px solid var(--black); border-radius: 4px;">Live App</a>` : ""}
      </div>
    </div>
  `;

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.lastElementChild.textContent = isOpen ? "-" : "+";
  });

  item.append(button, body);
  return item;
}

function openCaseStudyModal(project) {
  if (!projectModal) return;
  lastFocusedElement = document.activeElement;

  const titleEl = projectModal.querySelector("#case-study-title");
  const taglineEl = projectModal.querySelector("#case-study-tagline");
  const badgeEl = projectModal.querySelector("#case-study-badge");
  const problemEl = projectModal.querySelector("#case-study-problem");
  const solutionEl = projectModal.querySelector("#case-study-solution");
  const architectureListEl = projectModal.querySelector("#case-study-architecture");
  const stackListEl = projectModal.querySelector("#case-study-stack");
  const actionsEl = projectModal.querySelector("#case-study-actions");

  if (titleEl) titleEl.textContent = project.title;
  if (taglineEl) taglineEl.textContent = project.tagline;

  if (badgeEl) {
    badgeEl.innerHTML = `
      ${project.achievementBadge ? `<span class="achievement-tag" style="background: ${project.badgeColor || 'var(--lime)'};">${project.achievementBadge}</span>` : ""}
      ${project.categoryLabel ? `<span class="category-tag">${project.categoryLabel}</span>` : ""}
    `;
  }

  if (problemEl) problemEl.textContent = project.problem || project.shortDescription;
  if (solutionEl) solutionEl.textContent = project.solution || project.shortDescription;

  if (architectureListEl) {
    architectureListEl.innerHTML = "";
    const steps = project.architecture && project.architecture.length
      ? project.architecture
      : [
          "Data Ingestion & Verification: Pre-processing input parameters and streaming data.",
          "Core Computational Pipeline: High-performance inference and logic execution.",
          "Output Visualization: Responsive user feedback and telemetry presentation."
        ];
    steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      architectureListEl.appendChild(li);
    });
  }

  if (stackListEl) {
    stackListEl.innerHTML = (project.technologies || [])
      .map((tech) => `<span class="tech-pill">${tech}</span>`)
      .join("");
  }

  if (actionsEl) {
    actionsEl.innerHTML = `
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="btn-action btn-secondary" style="font-size: 0.95rem; padding: 10px 18px;">
          <span>Explore GitHub Repository</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>` : ""}
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="btn-action btn-primary" style="font-size: 0.95rem; padding: 10px 18px;">
          <span>Open Live Application</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>` : ""}
    `;
  }

  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  const modalPanel = projectModal.querySelector(".modal-panel");
  modalPanel?.focus();
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
}

function filterAndRenderProjects() {
  const featured = portfolioProjects.filter((p) => p.featured);
  const more = portfolioProjects.filter((p) => !p.featured);

  if (featuredProjectContainer) {
    const filteredFeatured = activeCategory === "all"
      ? featured
      : featured.filter((p) => p.category === activeCategory);

    featuredProjectContainer.replaceChildren(
      ...filteredFeatured.map(createFeaturedCard)
    );

    const featuredSection = featuredProjectContainer.closest(".featured-section");
    if (featuredSection) {
      featuredSection.style.display = filteredFeatured.length ? "block" : "none";
    }
  }

  if (moreProjectList) {
    const filteredMore = activeCategory === "all"
      ? more
      : more.filter((p) => p.category === activeCategory);

    moreProjectList.replaceChildren(
      ...filteredMore.map(createMoreProjectCard)
    );
  }
}

function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll("[data-category-filter]");
  if (!filterButtons.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.categoryFilter;
      filterAndRenderProjects();
    });
  });
}

function setupAccordions() {
  document.querySelectorAll("[data-accordion] .accordion-item").forEach((item) => {
    const button = item.querySelector("button");
    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.lastElementChild.textContent = isOpen ? "-" : "+";
    });
  });

  document.querySelectorAll(".cert-collapsible").forEach((item) => {
    const button = item.querySelector(".cert-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      const icon = button.querySelector(".cert-icon");
      if (icon) icon.textContent = isOpen ? "-" : "+";
    });
  });
}

function openModal() {
  if (!contactModal) return;
  lastFocusedElement = document.activeElement;
  contactModal.hidden = false;
  document.body.classList.add("modal-open");
  contactModal.querySelector(".modal-panel")?.focus();
}

function closeModal() {
  if (!contactModal) return;
  contactModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
}

function setupModals() {
  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", openModal);
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      closeModal();
      closeProjectModal();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (contactModal && !contactModal.hidden) closeModal();
      if (projectModal && !projectModal.hidden) closeProjectModal();
    }
  });
}

function setupAboutJump() {
  document.querySelector("[data-open-about]")?.addEventListener("click", () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function setupActiveNavigation() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupDynamicProfile() {
  const status = document.querySelector("#profile-status");
  const score = document.querySelector("#profile-score");
  const rolePlacard = document.querySelector("#role-placard");
  const tagline = document.querySelector("#profile-tagline");

  if (!status || !score) return;

  const states = [
    ["AI/ML Engineer", "Training intelligent systems", "96%", "Python | Scikit-learn | PyTorch | Anomaly Detection"],
    ["Full-Stack Developer", "Shipping production workflows", "95%", "Next.js | React | TypeScript | Node.js | REST APIs"],
    ["Computer Vision & Agents", "Bridging perception to action", "93%", "OpenCV | MediaPipe | LangGraph | Multi-Agent AI"],
    ["Competitive Builder", "Winning Datathons & Hackathons", "98%", "1st Place Datathon 2026 | PVG Ignition Runner-Up | SIH"],
    ["Software Engineer", "Engineering clean architectures", "94%", "FastAPI | Express | MongoDB | Microservices"]
  ];

  let index = 0;

  window.setInterval(() => {
    index = (index + 1) % states.length;
    [rolePlacard, status, score, tagline].forEach((element) => element?.classList.add("changing"));

    window.setTimeout(() => {
      if (rolePlacard) rolePlacard.textContent = states[index][0];
      if (status) status.textContent = states[index][1];
      if (score) score.textContent = states[index][2];
      if (tagline) tagline.textContent = states[index][3];
    }, 150);

    window.setTimeout(() => {
      [rolePlacard, status, score, tagline].forEach((element) => element?.classList.remove("changing"));
    }, 380);
  }, 2200);
}

function setupThemeToggle() {
  const navbar = document.querySelector(".navbar");
  const touchButton = document.querySelector(".touch-button");
  if (!navbar || !touchButton || document.querySelector(".theme-toggle")) return;

  const button = document.createElement("button");
  button.className = "theme-toggle";
  button.type = "button";
  button.setAttribute("aria-label", "Toggle dark mode");
  touchButton.insertAdjacentElement("beforebegin", button);

  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);
    button.textContent = isDark ? "LT" : "DK";
    button.setAttribute("aria-pressed", String(isDark));
    localStorage.setItem("portfolio-theme", theme);
  };

  applyTheme(localStorage.getItem("portfolio-theme") || "light");
  button.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
  });
}

function setupCursorEffects() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const trail = document.createElement("div");
  trail.className = "cursor-trail";

  const dot = document.createElement("span");
  dot.className = "cursor-trail-dot";
  dot.style.width = "18px";
  dot.style.height = "18px";
  trail.append(dot);

  document.body.append(trail);

  let active = false;
  let queued = false;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;

  const moveTrail = () => {
    queued = false;
    dot.style.transform = `translate(${pointerX}px, ${pointerY}px) translate(-50%, -50%)`;
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!active) {
      active = true;
      trail.classList.add("active");
    }
    if (!queued) {
      queued = true;
      window.requestAnimationFrame(moveTrail);
    }
  });
}

function setupImagePerformance() {
  document.querySelectorAll("img").forEach((image, index) => {
    image.decoding = "async";
    if (index > 3) {
      image.loading = "lazy";
      image.fetchPriority = "low";
    } else {
      image.loading = "eager";
      image.fetchPriority = "high";
    }
  });
}

function setupRevealAnimations() {
  const cards = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${(index % 8) * 60}ms`;
    observer.observe(card);
  });
}

function setupImageFallback() {
  const profileImage = document.querySelector(".profile-frame img");
  profileImage?.addEventListener("error", () => {
    profileImage.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupActiveNavigation();
  setupAccordions();
  setupModals();
  setupAboutJump();
  setupDynamicProfile();
  setupCursorEffects();
  setupImagePerformance();
  setupRevealAnimations();
  setupImageFallback();
  setupCategoryFilters();
  filterAndRenderProjects();
});
