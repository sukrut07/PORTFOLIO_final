const githubUser = "sukrut07";
const featuredProjectContainer = document.querySelector("#featured-projects-container");
const moreProjectList = document.querySelector("#more-project-list") || document.querySelector("#project-list");
const contactModal = document.querySelector("#contact-modal");
const projectModal = document.querySelector("#project-modal");
const certLightboxModal = document.querySelector("#cert-lightbox-modal");
let lastFocusedElement = null;

// Use projectsData if loaded from projects-data.js
const portfolioProjects = typeof projectsData !== "undefined" ? projectsData : [];

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

  // Only render actions that actually exist
  let actionButtonsHtml = `
    <button type="button" class="btn-action btn-primary" data-open-casestudy="${project.id}">
      <span>Case Study</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
  `;

  if (project.githubUrl) {
    actionButtonsHtml += `
      <a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="btn-action btn-secondary" aria-label="GitHub Repository for ${project.title}">
        <span>GitHub Repository</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
    `;
  }

  if (project.liveUrl) {
    actionButtonsHtml += `
      <a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="btn-action btn-dark" aria-label="Live Demo for ${project.title}">
        <span>Live Demo</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    `;
  }

  const pipelineSteps = getPipelineForProject(project.id);
  const visualFlowHtml = `
    <div class="card-visual-flow" aria-hidden="true">
      <span class="flow-label">Architecture Pipeline</span>
      <div class="flow-tags">
        ${pipelineSteps.map((s, idx) => `<span class="flow-tag">${s.title}</span>${idx < pipelineSteps.length - 1 ? '<span class="flow-sep">➔</span>' : ''}`).join("")}
      </div>
    </div>
  `;

  card.innerHTML = `
    <div>
      <div class="badge-row">
        ${badgeHtml}
        ${categoryHtml}
      </div>
      <h3>${project.title}</h3>
      <p class="tagline">${project.tagline}</p>
      <p class="summary">${project.shortDescription}</p>
      ${visualFlowHtml}
      <div class="tech-pills">${techPillsHtml}</div>
    </div>
    <div class="project-actions">
      ${actionButtonsHtml}
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
  button.innerHTML = `<span>${project.title}</span><span class="toggle-icon">+</span>`;

  const body = document.createElement("div");
  body.className = "project-body";

  const techPills = (project.technologies || [])
    .slice(0, 5)
    .map((t) => `<span class="tech-pill">${t}</span>`)
    .join(" ");

  const badgeSpan = project.achievementBadge
    ? `<span class="achievement-tag-small" style="background: ${project.badgeColor || 'var(--lime)'};">${project.achievementBadge}</span>`
    : "";

  let linksHtml = "";
  if (project.githubUrl) {
    linksHtml += `<a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="project-compact-link">GitHub Repository</a>`;
  }
  if (project.liveUrl) {
    linksHtml += `<a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="project-compact-link live-link">Live Demo</a>`;
  }

  body.innerHTML = `
    <div class="project-inner">
      <p class="project-inner-tagline">${project.tagline || ""}</p>
      <p class="project-inner-desc">${project.shortDescription || project.problem || "Engineered software system."}</p>
      <div class="project-inner-tech">${techPills}</div>
      <div class="project-meta">
        ${badgeSpan}
        ${project.categoryLabel ? `<span class="project-category-name">${project.categoryLabel}</span>` : ""}
        ${linksHtml}
      </div>
    </div>
  `;

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector(".toggle-icon").textContent = isOpen ? "−" : "+";
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
  const pipelineEl = projectModal.querySelector("#case-study-pipeline");
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

  // Visual Pipeline Diagram
  if (pipelineEl) {
    const pipelineSteps = getPipelineForProject(project.id);
    pipelineEl.innerHTML = pipelineSteps.map((step, idx) => `
      <div class="pipeline-node">
        <span class="node-step">0${idx + 1}</span>
        <strong class="node-title">${step.title}</strong>
        <span class="node-desc">${step.desc}</span>
      </div>
      ${idx < pipelineSteps.length - 1 ? '<div class="pipeline-arrow">➔</div>' : ''}
    `).join("");
  }

  if (stackListEl) {
    stackListEl.innerHTML = (project.technologies || [])
      .map((tech) => `<span class="tech-pill">${tech}</span>`)
      .join("");
  }

  if (actionsEl) {
    let actionButtons = "";
    if (project.githubUrl) {
      actionButtons += `
        <a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="btn-action btn-secondary" style="font-size: 0.95rem; padding: 10px 18px;">
          <span>GitHub Repository</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      `;
    }
    if (project.liveUrl) {
      actionButtons += `
        <a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="btn-action btn-primary" style="font-size: 0.95rem; padding: 10px 18px;">
          <span>Live Demo</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      `;
    }
    if (!project.githubUrl && !project.liveUrl) {
      actionButtons += `
        <span class="project-notice">
          🏛️ Institutional Research Prototype • Team Agastya
        </span>
      `;
    }
    actionsEl.innerHTML = actionButtons;
  }

  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  const modalPanel = projectModal.querySelector(".modal-panel");
  modalPanel?.focus();
}

function getPipelineForProject(id) {
  const pipelines = {
    "sentinel-ai": [
      { title: "Ingestion", desc: "FastAPI stream + schema validation" },
      { title: "Features", desc: "Velocity & behavioral embeddings" },
      { title: "Ensemble ML", desc: "Isolation Forest + XGBoost" },
      { title: "Scorecard", desc: "SHAP explainability dashboard" }
    ],
    "sanchay": [
      { title: "DPR Ingestion", desc: "Multi-modal OCR & PDF parsing" },
      { title: "Graph Agents", desc: "Compliance & finance agents" },
      { title: "RAG Retrieval", desc: "Historical audit schedules" },
      { title: "Audit Trail", desc: "Clause-verified scorecards" }
    ],
    "sml-code-optimiser": [
      { title: "Code AST", desc: "Structural syntax tree parsing" },
      { title: "Complexity", desc: "Cyclomatic depth profiling" },
      { title: "LLM Inference", desc: "Structured refactoring patch" },
      { title: "Visual Diff", desc: "Side-by-side Monaco diff" }
    ],
    "gravity": [
      { title: "OpenCV Stream", desc: "30 FPS webcam frame capture" },
      { title: "MediaPipe", desc: "21 3D hand landmarks" },
      { title: "UDP Sockets", desc: "Sub-15ms IPC bridge" },
      { title: "Godot Engine", desc: "Kinematics & game physics" }
    ],
    "paperloop": [
      { title: "Dispatch Order", desc: "Campus waste batch schedule" },
      { title: "Role Auth", desc: "Firebase verified roles" },
      { title: "State Machine", desc: "Pickup milestone tracking" },
      { title: "Impact Report", desc: "NGO certified metrics" }
    ]
  };
  return pipelines[id] || [
    { title: "Input", desc: "Data ingestion & validation" },
    { title: "Processing", desc: "Core computational logic" },
    { title: "Inference", desc: "Machine learning or API pipeline" },
    { title: "Output", desc: "User interface & reporting" }
  ];
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
      button.lastElementChild.textContent = isOpen ? "−" : "+";
    });
  });

  document.querySelectorAll(".cert-collapsible").forEach((item) => {
    const button = item.querySelector(".cert-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      const icon = button.querySelector(".cert-icon");
      if (icon) icon.textContent = isOpen ? "−" : "+";
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

function openCertModal(title, category, meta, certSrc, docSrc) {
  if (!certLightboxModal) return;
  lastFocusedElement = document.activeElement;
  const titleEl = certLightboxModal.querySelector("#cert-modal-title");
  const categoryEl = certLightboxModal.querySelector("#cert-modal-category");
  const metaEl = certLightboxModal.querySelector("#cert-modal-meta");
  const imgEl = certLightboxModal.querySelector("#cert-modal-img");
  const linkEl = certLightboxModal.querySelector("#cert-modal-link");

  if (titleEl) titleEl.textContent = title;
  if (categoryEl) categoryEl.textContent = category || "Certificate";
  if (metaEl) metaEl.textContent = meta || "";
  if (imgEl) {
    imgEl.src = certSrc;
    imgEl.alt = `${title} Certificate`;
  }
  if (linkEl) {
    linkEl.href = docSrc || certSrc;
    linkEl.textContent = (docSrc && docSrc.endsWith(".pdf")) ? "Open Original PDF" : "Open Original Asset";
  }

  certLightboxModal.hidden = false;
  document.body.classList.add("modal-open");
  certLightboxModal.querySelector(".modal-panel")?.focus();
}

function closeCertModal() {
  if (!certLightboxModal) return;
  certLightboxModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
}

// Complete modal setup with keyboard focus trap
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

  // Certificate lightbox trigger for both Competitions and Certifications cards
  document.querySelectorAll(".comp-card[data-cert-src], .compact-cert-card[data-cert-src]").forEach((card) => {
    card.addEventListener("click", (e) => {
      // If clicking directly on a child external link, don't intercept unless wanted
      if (e.target.closest("a") && !e.target.closest(".comp-cert-overlay")) {
        return;
      }
      const title = card.getAttribute("data-cert-title") || card.querySelector(".comp-title, .compact-cert-title")?.textContent?.trim() || "Certificate";
      const category = card.getAttribute("data-cert-category") || card.querySelector(".cert-issuer-badge")?.textContent?.trim() || "Credential";
      const meta = card.getAttribute("data-cert-meta") || card.querySelector(".comp-organizer, .compact-cert-meta")?.textContent?.trim() || "";
      const src = card.getAttribute("data-cert-src");
      const doc = card.getAttribute("data-cert-doc") || src;
      if (src) {
        openCertModal(title, category, meta, src, doc);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (!e.target.closest("a")) {
          e.preventDefault();
          card.click();
        }
      }
    });
  });

  document.querySelectorAll("[data-close-cert-modal]").forEach((button) => {
    button.addEventListener("click", closeCertModal);
  });

  document.addEventListener("keydown", (event) => {
    const isContactOpen = contactModal && !contactModal.hidden;
    const isProjectOpen = projectModal && !projectModal.hidden;
    const isCertOpen = certLightboxModal && !certLightboxModal.hidden;

    if (event.key === "Escape") {
      if (isContactOpen) closeModal();
      if (isProjectOpen) closeProjectModal();
      if (isCertOpen) closeCertModal();
      return;
    }

    // Modal Focus Trap
    if (event.key === "Tab" && (isContactOpen || isProjectOpen || isCertOpen)) {
      const activeModal = isContactOpen ? contactModal : isProjectOpen ? projectModal : certLightboxModal;
      const focusables = activeModal.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;

      const firstFocusable = focusables[0];
      const lastFocusable = focusables[focusables.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          event.preventDefault();
        }
      }
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

// Dynamic profile role shuffling: cycles through distinct roles with neo-brutalist placard flip
function setupDynamicProfile() {
  const status = document.querySelector("#profile-status");
  const score = document.querySelector("#profile-score");
  const rolePlacard = document.querySelector("#role-placard");
  const rolePrefix = document.querySelector("#role-prefix");
  const tagline = document.querySelector("#profile-tagline");

  if (!rolePlacard) return;

  const states = [
    {
      role: "AI/ML Engineer",
      prefix: "I build as an",
      status: "Focus: AI/ML & Deep Learning",
      score: "Active",
      tagline: "Applied Machine Learning · Computer Vision · Full-Stack Systems"
    },
    {
      role: "Full-Stack Developer",
      prefix: "I build as a",
      status: "Focus: Full-Stack Web & APIs",
      score: "Active",
      tagline: "Scalable Web Systems · Distributed APIs · Clean Architectures"
    },
    {
      role: "Computer Vision Engineer",
      prefix: "I build as a",
      status: "Focus: Real-Time CV & Tracking",
      score: "Active",
      tagline: "OpenCV · MediaPipe · Gesture Physics · PyTorch"
    },
    {
      role: "Agentic Systems Builder",
      prefix: "I build as an",
      status: "Focus: Autonomous AI Workflows",
      score: "Active",
      tagline: "LangGraph · Multi-Agent Orchestration · RAG Pipelines"
    }
  ];

  let index = 0;

  window.setInterval(() => {
    index = (index + 1) % states.length;
    const elementsToAnimate = [rolePlacard, rolePrefix, status, tagline].filter(Boolean);
    elementsToAnimate.forEach((element) => element.classList.add("changing"));

    window.setTimeout(() => {
      const state = states[index];
      if (rolePlacard) rolePlacard.textContent = state.role;
      if (rolePrefix) rolePrefix.textContent = state.prefix;
      if (status) status.textContent = state.status;
      if (score) score.textContent = state.score;
      if (tagline) tagline.textContent = state.tagline;
    }, 160);

    window.setTimeout(() => {
      elementsToAnimate.forEach((element) => element.classList.remove("changing"));
    }, 380);
  }, 2400);
}

function setupThemeToggle() {
  const navbar = document.querySelector(".navbar");
  const touchButton = document.querySelector(".touch-button");
  if (!navbar || !touchButton || document.querySelector(".theme-toggle")) return;

  const button = document.createElement("button");
  button.className = "theme-toggle";
  button.type = "button";
  button.title = "Toggle light / dark mode";
  button.setAttribute("aria-label", "Toggle color theme");
  touchButton.insertAdjacentElement("beforebegin", button);

  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);
    button.innerHTML = isDark
      ? '<span aria-hidden="true">☀️</span>'
      : '<span aria-hidden="true">🌙</span>';
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("aria-pressed", String(isDark));
    localStorage.setItem("portfolio-theme", theme);
  };

  const storedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

  button.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
  });
}

function setupImagePerformance() {
  document.querySelectorAll("img").forEach((image) => {
    image.decoding = "async";
    if (!image.hasAttribute("loading")) {
      image.loading = "lazy";
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
    { threshold: 0.1 }
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${Math.min((index % 6) * 50, 250)}ms`;
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
  setupImagePerformance();
  setupRevealAnimations();
  setupImageFallback();
  setupCategoryFilters();
  filterAndRenderProjects();
});
