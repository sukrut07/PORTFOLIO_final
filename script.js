const githubUser = "sukrut07";
const featuredProjectContainer = document.querySelector("#featured-projects-container");
const moreProjectList = document.querySelector("#more-project-list") || document.querySelector("#project-list");
const kpiProjectGrid = document.querySelector("#projects-kpi-grid");
const contactModal = document.querySelector("#contact-modal");
const projectModal = document.querySelector("#project-modal");
const certLightboxModal = document.querySelector("#cert-lightbox-modal");
let lastFocusedElement = null;

// Use projectsData if loaded from projects-data.js
const portfolioProjects = typeof projectsData !== "undefined" ? projectsData : [];

let activeCategory = "all";

// ── Dedicated Project Icon Map (Lucide-style SVGs) ─────────────────────────
function getProjectIcon(project) {
  const iconMap = {
    "sentinel-ai": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    "sanchay": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="10" width="18" height="11" rx="2"/><path d="M3 10l9-7 9 7"/><path d="M9 21v-6h6v6"/></svg>`,
    "sml-code-optimiser": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    "gravity": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg>`,
    "paperloop": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
    "the-debuggers-underwriting": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    "healthguard": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`,
    "clubsync": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "attendance-management-system": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`,
    "deepfake-detection": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="M10 9h.01"/><path d="M14 9h.01"/></svg>`,
    "ecotechcycle-connect": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    "fixmyspot": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    "educore": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    "tracera": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
    "manim-butterfly-curve": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c2.5-4 5.5-4 8 0s5.5 4 8 0 4.5-2 4-2"/><path d="M2 16c2.5-4 5.5-4 8 0s5.5 4 8 0 4.5-2 4-2"/></svg>`
  };

  if (project.id && iconMap[project.id]) {
    return iconMap[project.id];
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`;
}

const ACCENT_COLORS = ["var(--lime)","var(--purple)","var(--pink)","var(--cyan)","var(--neon-orange)","var(--electric-blue)","var(--neon-mint)"];

function createFeaturedCard(project, index = 0) {
  const card = document.createElement("article");
  card.className = "featured-card reveal visible";
  card.dataset.category = project.category;

  const accent = project.badgeColor || ACCENT_COLORS[index % ACCENT_COLORS.length];
  const iconSvg = getProjectIcon(project);

  const categoryHtml = project.categoryLabel
    ? `<span class="category-tag">${project.categoryLabel}</span>`
    : "";

  const techPillsHtml = (project.technologies || [])
    .slice(0, 5)
    .map((tech) => `<span class="tech-pill">${tech}</span>`)
    .join("");

  let actionButtonsHtml = "";

  if (project.githubUrl) {
    actionButtonsHtml += `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary" aria-label="GitHub Repository for ${project.title}">
        <span>GitHub</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    `;
  }

  actionButtonsHtml += `
    <button type="button" class="btn-action btn-primary" data-open-casestudy="${project.id}">
      <span>Case Study</span>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
  `;

  if (project.liveUrl) {
    actionButtonsHtml += `
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-dark" aria-label="Live Demo for ${project.title}">
        <span>Live Demo</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
    <div class="featured-card-content">
      <div class="featured-card-header">
        <div class="featured-header-left">
          <span class="featured-card-num">${String(index + 1).padStart(2, "0")}</span>
          ${categoryHtml}
        </div>
        <div class="kpi-card-icon" style="background: ${accent};" aria-hidden="true">
          ${iconSvg}
        </div>
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

// ── Category icon map (SVG paths per project category) ─────────────────────
const CATEGORY_ICONS = {
  "ai-ml": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  "full-stack": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  "computer-vision": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  "tools": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
};

function createKpiProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "proj-kpi-card reveal visible";
  card.dataset.category = project.category;

  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const iconSvg = CATEGORY_ICONS[project.category] || CATEGORY_ICONS["tools"];

  const techTags = (project.technologies || [])
    .slice(0, 4)
    .map((t) => `<span class="proj-kpi-tech">${t}</span>`)
    .join("");

  const githubBtn = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
         class="proj-kpi-github"
         aria-label="View GitHub repository for ${project.title}">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
         View GitHub
       </a>`
    : "";

  const caseStudyBtn = `<button type="button" class="proj-kpi-casestudy" data-open-casestudy="${project.id}"
      aria-label="Open case study for ${project.title}">Case Study →</button>`;

  card.innerHTML = `
    <div class="proj-kpi-top">
      <span class="proj-kpi-num">${String(index + 1).padStart(2, "0")}</span>
      <span class="proj-kpi-icon" style="background:${accent};" aria-hidden="true">${iconSvg}</span>
    </div>
    <div class="proj-kpi-body">
      <span class="proj-kpi-category">${project.categoryLabel || ""}</span>
      <h3 class="proj-kpi-title">${project.title}</h3>
      <p class="proj-kpi-tagline">${project.tagline}</p>
      <div class="proj-kpi-stack">${techTags}</div>
    </div>
    <div class="proj-kpi-actions">
      ${githubBtn}
      ${caseStudyBtn}
    </div>
  `;

  card.querySelector("[data-open-casestudy]")?.addEventListener("click", () => {
    openCaseStudyModal(project);
  });

  return card;
}

function filterAndRenderProjects() {
  // Legacy containers (non-projects pages ignore this)
  if (featuredProjectContainer) {
    const featured = portfolioProjects.filter((p) => p.featured);
    const filteredFeatured = activeCategory === "all"
      ? featured
      : featured.filter((p) => p.category === activeCategory);
    featuredProjectContainer.replaceChildren(...filteredFeatured.map(createFeaturedCard));
    const featuredSection = featuredProjectContainer.closest(".featured-section");
    if (featuredSection) featuredSection.style.display = filteredFeatured.length ? "block" : "none";
  }
  if (moreProjectList) {
    const more = portfolioProjects.filter((p) => !p.featured);
    const filteredMore = activeCategory === "all" ? more : more.filter((p) => p.category === activeCategory);
    moreProjectList.replaceChildren(...filteredMore.map(createMoreProjectCard));
  }

  // ── Unified KPI grid (projects page) ──
  if (kpiProjectGrid) {
    const filtered = activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);
    kpiProjectGrid.replaceChildren(...filtered.map((p, i) => createKpiProjectCard(p, i)));
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

// Simultaneous count-up animation for hero stat numbers (15+, 10+, 30+)
function setupHeroStatCounters() {
  const statElements = document.querySelectorAll(".hero-stat-number[data-target]");
  if (!statElements.length) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const duration = 1000;

  function animateSimultaneously() {
    let startTimestamp = null;
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      statElements.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target"), 10);
        const current = Math.floor(easeOut * target);
        el.textContent = `${current}+`;
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        statElements.forEach((el) => {
          const target = el.getAttribute("data-target");
          el.textContent = `${target}+`;
        });
      }
    }
    requestAnimationFrame(step);
  }

  const statsGrid = document.querySelector(".hero-stats-grid");
  if (!statsGrid || !("IntersectionObserver" in window)) {
    animateSimultaneously();
    return;
  }

  let animated = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          window.setTimeout(animateSimultaneously, 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(statsGrid);
}

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupActiveNavigation();
  setupAccordions();
  setupModals();
  setupAboutJump();
  setupDynamicProfile();
  setupHeroStatCounters();
  setupImagePerformance();
  setupRevealAnimations();
  setupImageFallback();
  setupCategoryFilters();
  filterAndRenderProjects();
});
