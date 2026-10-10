const githubUser = "sukrut07";
const featuredProjectContainer = document.querySelector("#featured-projects-container");
const moreProjectList = document.querySelector("#more-project-list") || document.querySelector("#project-list");
const kpiProjectGrid = document.querySelector("#projects-kpi-grid");
const contactModal = document.querySelector("#contact-modal");
const projectModal = document.querySelector("#project-modal");
const certLightboxModal = document.querySelector("#cert-lightbox-modal");
const experienceModal = document.querySelector("#experience-modal");
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block; vertical-align:-2px; margin-right:6px;"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>Institutional Research Prototype • Team Agastya
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

// ── Per-project icon SVG paths ──────────────────────────────────────────────
const PROJECT_ICONS = {
  "sentinel-ai": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  "sanchay": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  "sml-code-optimiser": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  "gravity": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
  "paperloop": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>`,
  "the-debuggers-underwriting": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  "healthguard": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  "clubsync": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  "attendance-management-system": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  "deepfake-detection": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="3" x2="21" y2="21"/></svg>`,
  "ecotechcycle-connect": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>`,
  "fixmyspot": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  "educore": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  "tracera": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  "manim-butterfly-curve": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
};

// Fallback category icons
const CATEGORY_ICONS = {
  "ai-ml": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  "full-stack": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  "computer-vision": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  "tools": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
};

const ACCENT_COLORS = ["var(--lime)","var(--purple)","var(--pink)","var(--cyan)","var(--neon-orange)","var(--electric-blue)","var(--neon-mint)"];

function createKpiProjectCard(project, index, isFeatured) {
  const card = document.createElement("article");
  card.className = isFeatured ? "proj-kpi-card featured" : "proj-kpi-card";
  card.dataset.category = project.category;

  const accent = project.badgeColor || ACCENT_COLORS[index % ACCENT_COLORS.length];
  const iconSvg = PROJECT_ICONS[project.id] || CATEGORY_ICONS[project.category] || CATEGORY_ICONS["tools"];

  const techTags = (project.technologies || [])
    .slice(0, isFeatured ? 5 : 4)
    .map((t) => `<span class="proj-kpi-tech">${t}</span>`)
    .join("");

  const githubBtn = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
         class="proj-kpi-github"
         aria-label="View GitHub repository for ${project.title}">
         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
         GitHub
       </a>`
    : "";

  const liveBtn = project.liveUrl
    ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
         class="proj-kpi-live"
         aria-label="Open live demo for ${project.title}">
         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         Live Demo
       </a>`
    : "";

  const caseStudyBtn = `<button type="button" class="proj-kpi-casestudy" data-open-casestudy="${project.id}"
      aria-label="Open case study for ${project.title}">Case Study</button>`;

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
      ${liveBtn}
      ${caseStudyBtn}
    </div>
  `;

  card.querySelector("[data-open-casestudy]")?.addEventListener("click", () => {
    openCaseStudyModal(project);
  });

  return card;
}

function filterAndRenderProjects() {
  // Legacy containers (home page, other pages — ignored if not present)
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

  // ── Projects page — two-section KPI grid ──
  if (kpiProjectGrid) {
    const filtered = activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

    const featured = filtered.filter((p) => p.featured);
    const engineering = filtered.filter((p) => !p.featured);

    kpiProjectGrid.innerHTML = "";

    // Featured section
    if (featured.length) {
      const featuredLabel = document.createElement("p");
      featuredLabel.className = "proj-section-label";
      featuredLabel.textContent = "Featured Systems";
      kpiProjectGrid.appendChild(featuredLabel);

      const featuredGrid = document.createElement("div");
      featuredGrid.className = "proj-featured-grid";
      featured.forEach((p, i) => featuredGrid.appendChild(createKpiProjectCard(p, i, true)));
      kpiProjectGrid.appendChild(featuredGrid);
    }

    // Engineering projects section
    if (engineering.length) {
      const engLabel = document.createElement("p");
      engLabel.className = "proj-section-label";
      engLabel.textContent = "Engineering Projects";
      kpiProjectGrid.appendChild(engLabel);

      const engGrid = document.createElement("div");
      engGrid.className = "proj-engineering-grid";
      engineering.forEach((p, i) => engGrid.appendChild(createKpiProjectCard(p, featured.length + i, false)));
      kpiProjectGrid.appendChild(engGrid);
    }

    // If all filtered to one category with no featured, show single grid
    if (!featured.length && !engineering.length) {
      const empty = document.createElement("p");
      empty.style.cssText = "opacity:0.5;font-size:0.95rem;padding:40px 0;";
      empty.textContent = "No projects in this category.";
      kpiProjectGrid.appendChild(empty);
    }
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

// Experience Icon SVGs matching Neo-Brutalist vector style
const expSvgs = {
  robot: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"></rect><path d="M12 8V4"></path><circle cx="12" cy="3" r="1" fill="currentColor"></circle><path d="M2 14h2"></path><path d="M20 14h2"></path><circle cx="9" cy="13" r="1" fill="currentColor"></circle><circle cx="15" cy="13" r="1" fill="currentColor"></circle><path d="M9 17h6"></path></svg>`,
  globe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  rocket: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 9V4s3.03.55 4 2c1.08 1.62 0 5 0 5"></path></svg>`,
  zap: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
};

// Experience Data Dictionary
const experienceData = {
  "vicharanashala": {
    id: "vicharanashala",
    role: "Software & Technical Intern",
    org: "Vicharanashala / IIT Ropar (Samagama Internship Program)",
    program: "Applied Machine Learning & Backend Systems",
    typeBadge: "Virtual Traineeship",
    badgeColor: "var(--lime)",
    iconEmoji: "🤖",
    iconSvg: expSvgs.robot,
    iconBg: "var(--lime)",
    period: "June 2025 – August 2025",
    mode: "Remote • Engineering Mentorship",
    overview: "Engaged in structured software development and foundational machine learning modules under direct engineering mentorship at Vicharanashala in collaboration with IIT Ropar. Developed data preprocessing routines, explored predictive models, and integrated scalable REST endpoints for full-stack web applications following agile engineering cadences.",
    deliverables: [
      "Implemented exploratory data analysis (EDA) scripts and robust dataset preprocessing routines in Python utilizing Pandas and NumPy.",
      "Built and tested RESTful endpoint integrations for core web application modules using Node.js and Express.",
      "Participated actively in weekly technical architecture reviews, milestone sprints, and peer code walkthroughs with engineering mentors.",
      "Streamlined data transformation pipelines to ensure clean data ingestion, feature normalization, and deterministic testing routines.",
      "Collaborated using Git version control with clean commit histories, branching workflows, and pull request code reviews."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Data Preprocessing", "Node.js", "Express.js", "REST APIs", "Git", "EDA"],
    keyCompetencies: ["Data Engineering & EDA", "Backend API Integration", "Agile Sprint Delivery", "Collaborative Code Review"]
  },
  "cisco-academy": {
    id: "cisco-academy",
    role: "Virtual Technical Trainee",
    org: "Cisco Networking Academy & MIT Academy of Engineering",
    program: "Systems Networking & Applied AI Training",
    typeBadge: "Technical Training",
    badgeColor: "var(--cyan)",
    iconEmoji: "🌐",
    iconSvg: expSvgs.globe,
    iconBg: "var(--cyan)",
    period: "2025 – 2026",
    mode: "Hybrid / Lab Training • MIT AOE",
    overview: "Completed extensive hands-on technical training through Cisco Networking Academy in partnership with MIT Academy of Engineering. Focused on deep architectural understanding of network topologies, packet analysis, socket communication, automated scripting, and modern artificial intelligence foundations.",
    deliverables: [
      "Analyzed IP routing protocols, packet flows, subnet topologies, and client-server socket communication architectures in simulated network environments.",
      "Developed Python automation scripts for data parsing, network configuration validation, and system telemetry modeling.",
      "Earned verified credentials in Introduction to Modern AI, Python Essentials 1, and Python Essentials 2.",
      "Conducted practical packet inspection labs using protocol analyzers to verify reliable, secure transmission workflows.",
      "Engineered automated validation routines to parse JSON network payloads and test socket connections."
    ],
    technologies: ["Computer Networks", "Python Scripting", "Modern AI", "Socket Programming", "Network Protocols", "TCP/IP", "Wireshark", "Automation"],
    keyCompetencies: ["Network Architecture & Protocols", "Python Systems Automation", "Socket Communication", "Verified Industry Certifications"]
  },
  "open-source": {
    id: "open-source",
    role: "Open Source Contributor",
    org: "Open Source Connect India & Developer Repositories",
    program: "Community Engineering & Student Tooling",
    typeBadge: "Open Source",
    badgeColor: "var(--pink)",
    iconEmoji: "🚀",
    iconSvg: expSvgs.rocket,
    iconBg: "var(--pink)",
    period: "Ongoing Contributor",
    mode: "GitHub Ecosystem • Public Repositories",
    overview: "Active contributor across student developer communities and public repositories under Open Source Connect India. Contributing code enhancements, triaging issues, refining documentation, and collaborating with developers across India to build transparent, accessible developer tooling.",
    deliverables: [
      "Triaged community repository issues, reproduced bugs, and submitted reviewed pull requests adhering to upstream coding standards.",
      "Collaborated with peers and maintainers to debug and enhance student developer utilities and web portals.",
      "Authored clean, maintainable technical documentation, setup guides, and architectural breakdowns to streamline onboarding for incoming contributors.",
      "Practiced continuous integration (CI) workflows, atomic git commits, and responsive code review feedback cycles.",
      "Maintained high standards for reproducible bug reporting and transparent open-source communication."
    ],
    technologies: ["Git & GitHub", "Code Reviews", "Issue Triage", "Technical Documentation", "Open Source Tooling", "Markdown", "CI/CD"],
    keyCompetencies: ["Open Source Contribution", "Asynchronous Code Collaboration", "Technical Documentation", "GitHub Flow & CI/CD"]
  }
};

experienceData["internship-vicharanashala"] = experienceData["vicharanashala"];
experienceData["training-cisco"] = experienceData["cisco-academy"];
experienceData["opensource-contributor"] = experienceData["open-source"];

function openExperienceModal(expId) {
  if (!experienceModal) return;
  const data = experienceData[expId];
  if (!data) return;

  lastFocusedElement = document.activeElement;

  const iconEl = experienceModal.querySelector("#exp-modal-icon");
  const badgeEl = experienceModal.querySelector("#exp-modal-badge");
  const periodEl = experienceModal.querySelector("#exp-modal-period");
  const titleEl = experienceModal.querySelector("#exp-modal-title");
  const orgEl = experienceModal.querySelector("#exp-modal-org");
  const modeEl = experienceModal.querySelector("#exp-modal-mode");
  const overviewEl = experienceModal.querySelector("#exp-modal-overview");
  const deliverablesEl = experienceModal.querySelector("#exp-modal-deliverables");
  const tagsEl = experienceModal.querySelector("#exp-modal-tags");
  const competenciesEl = experienceModal.querySelector("#exp-modal-competencies");

  if (iconEl) {
    iconEl.innerHTML = data.iconSvg || data.iconEmoji || "";
    iconEl.style.background = data.iconBg;
  }
  if (badgeEl) {
    badgeEl.textContent = data.typeBadge;
    badgeEl.style.background = data.badgeColor;
  }
  if (periodEl) periodEl.textContent = data.period;
  if (titleEl) titleEl.textContent = data.role;
  if (orgEl) orgEl.textContent = data.org;
  if (modeEl) modeEl.textContent = data.mode;
  if (overviewEl) overviewEl.textContent = data.overview;

  if (deliverablesEl) {
    deliverablesEl.innerHTML = data.deliverables
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  if (tagsEl) {
    tagsEl.innerHTML = data.technologies
      .map((tech) => `<span class="tech-pill">${tech}</span>`)
      .join("");
  }

  if (competenciesEl) {
    competenciesEl.innerHTML = data.keyCompetencies
      .map((comp) => `<span class="competency-pill">${expSvgs.zap}<span>${comp}</span></span>`)
      .join("");
  }

  experienceModal.hidden = false;
  document.body.classList.add("modal-open");
  experienceModal.querySelector(".modal-panel")?.focus();
}

function closeExperienceModal() {
  if (!experienceModal) return;
  experienceModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
}

let lastFocusedSkillTile = null;

function openSkillModal(skillId, sourceElement) {
  const modal = document.querySelector("#skill-detail-modal");
  if (!modal || typeof skillsData === "undefined") return;

  const skill = skillsData.find((s) => s.id === skillId);
  if (!skill) return;

  lastFocusedSkillTile = sourceElement || document.activeElement;

  const titleEl = modal.querySelector("#skill-modal-title");
  const catEl = modal.querySelector("#skill-modal-category");
  const evidenceEl = modal.querySelector("#skill-modal-evidence");
  const explanationEl = modal.querySelector("#skill-modal-explanation");
  const applicationEl = modal.querySelector("#skill-modal-application");
  const exampleWrap = modal.querySelector("#skill-modal-example-wrap");
  const exampleEl = modal.querySelector("#skill-modal-example");
  const tagsEl = modal.querySelector("#skill-modal-tags");
  const repoWrap = modal.querySelector("#skill-modal-repo-wrap");

  if (titleEl) titleEl.textContent = skill.name;

  if (catEl) {
    catEl.textContent = skill.categoryLabel;
    const catMeta = typeof skillsCategories !== "undefined" ? skillsCategories.find((c) => c.id === skill.category) : null;
    catEl.style.background = catMeta ? catMeta.badgeColor : "var(--lime)";
  }

  if (evidenceEl) {
    evidenceEl.textContent = skill.evidence;
    evidenceEl.className = `evidence-tag evidence-${skill.evidence.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
  }

  if (explanationEl) {
    explanationEl.textContent = skill.explanation || skill.description || "";
  }

  if (applicationEl) {
    applicationEl.textContent = skill.application || "Applied across scalable software workflows, data pipelines, or algorithmic implementations.";
  }

  if (exampleWrap && exampleEl) {
    if (skill.example) {
      exampleWrap.hidden = false;
      exampleEl.textContent = skill.example;
    } else {
      exampleWrap.hidden = true;
    }
  }

  if (tagsEl) {
    tagsEl.innerHTML = (skill.tags || []).map((t) => `<span class="tech-pill">${t}</span>`).join("");
  }

  if (repoWrap) {
    if (skill.repoUrl) {
      repoWrap.innerHTML = `
        <a href="${skill.repoUrl}" target="_blank" rel="noopener noreferrer" class="skill-modal-repo-btn">
          <span>Demonstrated in ${skill.repoName}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      `;
    } else {
      repoWrap.innerHTML = "";
    }
  }

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-panel")?.focus();
}

function closeSkillModal() {
  const modal = document.querySelector("#skill-detail-modal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedSkillTile && typeof lastFocusedSkillTile.focus === "function") {
    lastFocusedSkillTile.focus();
  }
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
      closeExperienceModal();
      closeSkillModal();
    });
  });

  document.querySelectorAll("[data-close-skill-modal]").forEach((button) => {
    button.addEventListener("click", closeSkillModal);
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

  // Experience / Internship cards trigger
  document.querySelectorAll(".experience-card[data-exp-id]").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      const expId = card.getAttribute("data-exp-id");
      if (expId) {
        openExperienceModal(expId);
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

  document.querySelectorAll("[data-close-exp-modal]").forEach((button) => {
    button.addEventListener("click", closeExperienceModal);
  });

  document.addEventListener("keydown", (event) => {
    const isContactOpen = contactModal && !contactModal.hidden;
    const isProjectOpen = projectModal && !projectModal.hidden;
    const isCertOpen = certLightboxModal && !certLightboxModal.hidden;
    const isExpOpen = experienceModal && !experienceModal.hidden;
    const skillModal = document.querySelector("#skill-detail-modal");
    const isSkillOpen = skillModal && !skillModal.hidden;

    if (event.key === "Escape") {
      if (isContactOpen) closeModal();
      if (isProjectOpen) closeProjectModal();
      if (isCertOpen) closeCertModal();
      if (isExpOpen) closeExperienceModal();
      if (isSkillOpen) closeSkillModal();
      return;
    }

    // Modal Focus Trap
    if (event.key === "Tab" && (isContactOpen || isProjectOpen || isCertOpen || isExpOpen || isSkillOpen)) {
      const activeModal = isContactOpen ? contactModal : isProjectOpen ? projectModal : isCertOpen ? certLightboxModal : isExpOpen ? experienceModal : skillModal;
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

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setupSpotifyControl() {
  const navbar = document.querySelector(".navbar");
  const touchButton = document.querySelector(".touch-button");
  if (!navbar) return;

  // Forcibly remove any legacy theme-toggle element
  document.querySelectorAll(".theme-toggle").forEach((el) => el.remove());

  // Find existing static button or dynamically create it
  let button = document.querySelector("#spotify-nav-btn");
  if (!button && touchButton) {
    button = document.createElement("button");
    button.className = "spotify-nav-btn";
    button.type = "button";
    button.id = "spotify-nav-btn";
    button.title = "Spotify Listening Status";
    button.setAttribute("aria-label", "Spotify listening status");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-haspopup", "dialog");
    button.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.52 17.305c-.217.355-.677.47-1.032.253-2.827-1.728-6.386-2.119-10.578-1.162-.405.093-.812-.162-.905-.568-.093-.406.162-.813.568-.906 4.587-1.049 8.528-.606 11.694 1.35.355.217.47.678.253 1.033zm1.474-3.277c-.273.444-.855.588-1.299.315-3.236-1.99-8.169-2.564-11.996-1.401-.5.152-1.03-.133-1.182-.633-.152-.5.133-1.03.633-1.182 4.38-1.33 9.807-.69 13.53 1.602.443.273.587.855.314 1.299zm.126-3.41c-3.88-2.304-10.28-2.516-13.99-1.39-.596.18-1.229-.16-1.41-.756-.18-.596.16-1.229.756-1.41 4.267-1.296 11.333-1.045 15.807 1.61.536.318.712 1.01.394 1.546-.318.536-1.01.712-1.547.394z"/>
      </svg>
    `;
    touchButton.insertAdjacentElement("beforebegin", button);
  }

  if (!button) return;

  // Avoid duplicate event listener attachments
  if (button.dataset.bound === "true") return;
  button.dataset.bound = "true";

  // Create macOS Dynamic Island-style floating panel
  let panel = document.querySelector("#spotify-island-panel");
  if (!panel) {
    panel = document.createElement("div");
    panel.id = "spotify-island-panel";
    panel.className = "spotify-island-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Spotify Playback Status");
    panel.hidden = true;
    panel.innerHTML = `
      <div class="spotify-island-header">
        <div class="spotify-header-left">
          <svg class="spotify-green-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.52 17.305c-.217.355-.677.47-1.032.253-2.827-1.728-6.386-2.119-10.578-1.162-.405.093-.812-.162-.905-.568-.093-.406.162-.813.568-.906 4.587-1.049 8.528-.606 11.694 1.35.355.217.47.678.253 1.033zm1.474-3.277c-.273.444-.855.588-1.299.315-3.236-1.99-8.169-2.564-11.996-1.401-.5.152-1.03-.133-1.182-.633-.152-.5.133-1.03.633-1.182 4.38-1.33 9.807-.69 13.53 1.602.443.273.587.855.314 1.299zm.126-3.41c-3.88-2.304-10.28-2.516-13.99-1.39-.596.18-1.229-.16-1.41-.756-.18-.596.16-1.229.756-1.41 4.267-1.296 11.333-1.045 15.807 1.61.536.318.712 1.01.394 1.546-.318.536-1.01.712-1.547.394z"/>
          </svg>
          <span class="spotify-badge" id="spotify-status-badge">Checking...</span>
        </div>
        <button type="button" class="spotify-island-close" id="spotify-close-btn" aria-label="Close Spotify panel">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="spotify-island-body" id="spotify-island-body">
        <div class="spotify-loading-state">
          <div class="spotify-spinner"></div>
          <span>Connecting to Spotify...</span>
        </div>
      </div>
    `;
    document.body.appendChild(panel);
  }

  let pollInterval = null;
  let isPanelOpen = false;

  const positionPanel = () => {
    if (!button || !panel) return;
    const rect = button.getBoundingClientRect();
    if (window.innerWidth <= 640) {
      panel.style.top = `${Math.round(rect.bottom + 8)}px`;
      panel.style.right = "12px";
      panel.style.left = "12px";
      panel.style.width = "auto";
    } else {
      panel.style.top = `${Math.round(rect.bottom + 8)}px`;
      const rightMargin = Math.max(16, window.innerWidth - rect.right);
      panel.style.right = `${rightMargin}px`;
      panel.style.left = "auto";
      panel.style.width = "380px";
    }
  };

  window.addEventListener("resize", () => {
    if (isPanelOpen) positionPanel();
  });

  const updateUI = (data) => {
    const badge = document.querySelector("#spotify-status-badge");
    const body = document.querySelector("#spotify-island-body");

    if (!badge || !body) return;

    if (!data || data.connected === false) {
      badge.textContent = "Disconnected";
      badge.className = "spotify-badge badge-disconnected";
      button.classList.remove("is-playing");

      const authUrl = data?.authUrl || "/api/spotify-login";
      body.innerHTML = `
        <div class="spotify-empty-state">
          <div class="spotify-empty-icon" aria-hidden="true">&#9835;</div>
          <p class="spotify-empty-title">Connect Spotify</p>
          <p class="spotify-empty-sub">Connect Spotify to see what you're listening to.</p>
          <a href="${authUrl}" target="_blank" rel="noopener noreferrer" class="spotify-connect-action">
            <span>Connect Spotify</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      `;
      return;
    }

    if (!data.title || !data.artist) {
      badge.textContent = "Idle";
      badge.className = "spotify-badge badge-idle";
      button.classList.remove("is-playing");

      body.innerHTML = `
        <div class="spotify-empty-state">
          <div class="spotify-empty-icon" aria-hidden="true">&#9834;</div>
          <p class="spotify-empty-title">Nothing playing right now</p>
          <p class="spotify-empty-sub">Sukrut isn't playing any track on Spotify at the moment.</p>
          <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" class="spotify-open-link">
            <span>Open Spotify</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      `;
      return;
    }

    const isPlaying = Boolean(data.isPlaying);
    badge.textContent = isPlaying ? "● Playing" : "⏸ Paused";
    badge.className = `spotify-badge ${isPlaying ? "badge-playing" : "badge-paused"}`;
    button.classList.toggle("is-playing", isPlaying);

    const artHtml = data.albumArt
      ? `<img src="${data.albumArt}" alt="${escapeHtml(data.album || data.title)} album art" class="spotify-track-art" width="72" height="72" />`
      : `<div class="spotify-track-art spotify-art-placeholder">&#9835;</div>`;

    const openSpotifyLink = data.spotifyUrl
      ? `<a href="${data.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="spotify-track-link" aria-label="Open ${escapeHtml(data.title)} on Spotify">
           <span>Open in Spotify</span>
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
         </a>`
      : "";

    body.innerHTML = `
      <div class="spotify-track-layout">
        <div class="spotify-art-wrap">
          ${artHtml}
        </div>
        <div class="spotify-track-meta">
          <p class="spotify-track-title" title="${escapeHtml(data.title)}">${escapeHtml(data.title)}</p>
          <p class="spotify-track-artist" title="${escapeHtml(data.artist)}">${escapeHtml(data.artist)}</p>
          ${data.album ? `<p class="spotify-track-album" title="${escapeHtml(data.album)}">${escapeHtml(data.album)}</p>` : ""}
          <div class="spotify-track-footer">
            <div class="spotify-footer-status">
              <span class="spotify-indicator-dot ${isPlaying ? "live" : ""}"></span>
              <span class="spotify-status-note">${isPlaying ? "Currently playing on Spotify" : "Paused on Spotify"}</span>
            </div>
            ${openSpotifyLink}
          </div>
        </div>
      </div>
    `;
  };

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/spotify");
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      updateUI(data);
    } catch (err) {
      const badge = document.querySelector("#spotify-status-badge");
      const body = document.querySelector("#spotify-island-body");
      if (badge) {
        badge.textContent = "Offline";
        badge.className = "spotify-badge badge-idle";
      }
      if (body) {
        body.innerHTML = `
          <div class="spotify-empty-state">
            <p class="spotify-empty-title">Connect Spotify</p>
            <p class="spotify-empty-sub">Connect Spotify to see what you're listening to.</p>
            <a href="/api/spotify-login" target="_blank" rel="noopener noreferrer" class="spotify-connect-action">
              <span>Connect Spotify</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        `;
      }
    }
  };

  const openPanel = () => {
    positionPanel();
    isPanelOpen = true;
    panel.hidden = false;
    panel.classList.add("active");
    button.setAttribute("aria-expanded", "true");
    fetchStatus();
    if (pollInterval) clearInterval(pollInterval);
    pollInterval = setInterval(fetchStatus, 10000);
  };

  const closePanel = () => {
    isPanelOpen = false;
    panel.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
    setTimeout(() => {
      if (!isPanelOpen) panel.hidden = true;
    }, 220);
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }
  };

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isPanelOpen) {
      closePanel();
    } else {
      openPanel();
    }
  });

  panel.querySelector("#spotify-close-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    closePanel();
    button.focus();
  });

  document.addEventListener("click", (e) => {
    if (isPanelOpen && !panel.contains(e.target) && !button.contains(e.target)) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isPanelOpen) {
      closePanel();
      button.focus();
    }
  });

  // Initial status check
  fetchStatus();
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
    { threshold: 0.02, rootMargin: "20px" }
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

// ==========================================================================
// Categorized Skills Dashboard Logic
// ==========================================================================
function setupSkillsDashboard() {
  const skillsContainer = document.querySelector("#skills-container");
  if (!skillsContainer || typeof skillsData === "undefined" || typeof skillsCategories === "undefined") return;

  // Calculate dynamic category overview counts
  const aiMlCount = skillsData.filter(s => s.category === "ai-ml").length;
  const devCount = skillsData.filter(s => s.category === "programming" || s.category === "full-stack").length;
  const dataCount = skillsData.filter(s => s.category === "data-science" || s.category === "computer-vision").length;
  const systemsCount = skillsData.filter(s => s.category === "tools" || s.category === "advanced-ai" || s.category === "networking" || s.category === "game-dev" || s.category === "cs-fundamentals" || s.category === "practices").length;
  const totalCount = skillsData.length;

  const countAiEl = document.querySelector("#count-ai-ml");
  const countDevEl = document.querySelector("#count-dev");
  const countDataEl = document.querySelector("#count-data");
  const countSysEl = document.querySelector("#count-systems");
  const totalCountEl = document.querySelector("#total-skills-count");
  const visibleCountEl = document.querySelector("#visible-skills-count");

  if (countAiEl) countAiEl.textContent = `${aiMlCount} Skills`;
  if (countDevEl) countDevEl.textContent = `${devCount} Skills`;
  if (countDataEl) countDataEl.textContent = `${dataCount} Skills`;
  if (countSysEl) countSysEl.textContent = `${systemsCount} Skills`;
  if (totalCountEl) totalCountEl.textContent = totalCount;

  // Render category filter pills dynamically with computed counts
  const filterBar = document.querySelector("#skills-filter-bar");
  if (filterBar) {
    let pillsHtml = `
      <button type="button" class="skill-filter-pill active" data-skill-filter="all">
        All <span class="pill-count">${totalCount}</span>
      </button>
    `;

    skillsCategories.forEach(cat => {
      const catCount = skillsData.filter(s => s.category === cat.id).length;
      pillsHtml += `
        <button type="button" class="skill-filter-pill" data-skill-filter="${cat.id}">
          ${cat.title} <span class="pill-count">${catCount}</span>
        </button>
      `;
    });

    filterBar.innerHTML = pillsHtml;
  }

  // Interactive Filter & Search state
  let activeCategory = "all";
  let searchQuery = "";

  const searchInput = document.querySelector("#skills-search-input");
  const clearSearchBtn = document.querySelector("#skills-clear-search");

  // Colorful neo-brutalist KPI tile palette: Lime, Pink, Cyan, Purple, Orange, Blue
  const colorPalette = [
    "tile-color-lime",
    "tile-color-pink",
    "tile-color-cyan",
    "tile-color-purple",
    "tile-color-orange",
    "tile-color-blue"
  ];

  function renderSkills() {
    const q = searchQuery.trim().toLowerCase();
    let totalVisible = 0;
    let html = "";

    skillsCategories.forEach((cat, catIdx) => {
      // Check if category matches active filter
      if (activeCategory !== "all" && activeCategory !== cat.id) {
        return;
      }

      // Filter skills within category
      const matchedSkills = skillsData.filter((skill) => {
        if (skill.category !== cat.id) return false;
        if (!q) return true;

        const nameMatch = skill.name.toLowerCase().includes(q);
        const descMatch = (skill.explanation || skill.description || "").toLowerCase().includes(q);
        const appMatch = (skill.application || "").toLowerCase().includes(q);
        const exampleMatch = (skill.example || "").toLowerCase().includes(q);
        const tagMatch = (skill.tags || []).some((t) => t.toLowerCase().includes(q));
        const evidenceMatch = (skill.evidence || "").toLowerCase().includes(q);
        const catMatch = (skill.categoryLabel || "").toLowerCase().includes(q);
        return nameMatch || descMatch || appMatch || exampleMatch || tagMatch || evidenceMatch || catMatch;
      });

      if (matchedSkills.length > 0) {
        totalVisible += matchedSkills.length;

        html += `
          <section class="skills-category-block reveal visible" aria-labelledby="cat-${cat.id}">
            <div class="skills-category-header">
              <div class="skills-category-title-wrap">
                <span class="skills-category-icon-badge" style="background: ${cat.badgeColor};" aria-hidden="true">
                  ${cat.iconSvg}
                </span>
                <h2 id="cat-${cat.id}" class="skills-category-title">${cat.title}</h2>
              </div>
              <span class="skills-category-pill" style="background: ${cat.badgeColor};">${cat.badgeLabel}</span>
            </div>
            <p class="skills-category-desc">${cat.description}</p>

            <div class="skills-kpi-grid">
              ${matchedSkills.map((skill, idx) => {
                const colorClass = colorPalette[(catIdx + idx) % colorPalette.length];
                return `
                  <button 
                    type="button" 
                    class="skill-kpi-tile ${colorClass}" 
                    data-skill-id="${skill.id}" 
                    aria-haspopup="dialog" 
                    aria-label="View details for ${skill.name}">
                    <span class="skill-tile-name">${skill.name}</span>
                  </button>
                `;
              }).join("")}
            </div>
          </section>
        `;
      }
    });

    if (visibleCountEl) visibleCountEl.textContent = totalVisible;

    if (totalVisible === 0) {
      skillsContainer.innerHTML = "";
    } else {
      skillsContainer.innerHTML = html;
    }
  }

  // Click delegation for skill tiles
  skillsContainer.addEventListener("click", (e) => {
    const tile = e.target.closest(".skill-kpi-tile");
    if (!tile) return;
    const skillId = tile.getAttribute("data-skill-id");
    if (skillId) {
      openSkillModal(skillId, tile);
    }
  });

  // Filter pill click listener
  filterBar?.addEventListener("click", (e) => {
    const pill = e.target.closest(".skill-filter-pill");
    if (!pill) return;

    filterBar.querySelectorAll(".skill-filter-pill").forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    activeCategory = pill.dataset.skillFilter || "all";
    renderSkills();
  });

  // Search input listener
  searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (clearSearchBtn) {
      clearSearchBtn.hidden = !searchQuery;
    }
    renderSkills();
  });

  // Clear search button
  clearSearchBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.hidden = true;
    searchInput?.focus();
    renderSkills();
  });

  // Initial render
  renderSkills();
}

document.addEventListener("DOMContentLoaded", () => {
  setupSpotifyControl();
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
  setupSkillsDashboard();
});
