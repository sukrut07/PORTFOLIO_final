const githubUser = "sukrut07";
const projectList = document.querySelector("#project-list");
const modal = document.querySelector("#contact-modal");
const modalPanel = modal?.querySelector(".modal-panel");
let lastFocusedElement = null;

const fallbackProjects = [
  {
    name: "AI Portfolio Lab",
    description: "A dashboard-style portfolio space for experiments, projects, and technical notes.",
    stargazers_count: 0,
    html_url: "https://github.com/sukrut07",
  },
  {
    name: "Machine Learning Experiments",
    description: "Modeling, notebooks, and applied ML explorations across data-heavy problems.",
    stargazers_count: 0,
    html_url: "https://github.com/sukrut07",
  },
  {
    name: "Chaos Systems",
    description: "Creative coding and complex-system simulations inspired by fractals and nonlinear behavior.",
    stargazers_count: 0,
    html_url: "https://github.com/sukrut07",
  },
];

function createProjectCard(repo, index) {
  const item = document.createElement("article");
  item.className = "project-item";

  const button = document.createElement("button");
  button.className = "project-toggle";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = `<span>${repo.name}</span><span>+</span>`;

  const body = document.createElement("div");
  body.className = "project-body";
  body.innerHTML = `
    <div class="project-inner">
      <p>${repo.description || "No description yet, but the code is ready to be inspected."}</p>
      <div class="project-meta">
        <span>${repo.stargazers_count ?? 0} stars</span>
        ${repo.isContributor ? '<span style="font-size: 0.7rem; font-weight: 600; text-transform: uppercase; border: 2px solid var(--text-color); padding: 0.1rem 0.4rem; border-radius: 4px; background: var(--lime); color: var(--text-color);">Contributor</span>' : ''}
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">Repo link</a>
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

function renderProjects(repos) {
  if (!projectList) return;
  const visibleRepos = repos.slice(0, 8);
  projectList.replaceChildren(...visibleRepos.map(createProjectCard));
}

async function loadProjects() {
  if (!projectList) return;

  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=8`
    );

    if (!response.ok) {
      throw new Error(`GitHub responded with ${response.status}`);
    }

    const repos = await response.json();
    let curatedRepos = repos
      .filter((repo) => !repo.fork && repo.name.toLowerCase() !== "vertex-assignment");

    try {
      const extResponse = await fetch('https://api.github.com/repos/imjayeshjadhav/the-debuggers');
      if (extResponse.ok) {
        const extRepo = await extResponse.json();
        extRepo.isContributor = true;
        curatedRepos.push(extRepo);
      }
      
      const extResponse2 = await fetch('https://api.github.com/repos/sukrut07/Attendance-management-system-demo');
      if (extResponse2.ok) {
        const extRepo2 = await extResponse2.json();
        if (!curatedRepos.find(r => r.id === extRepo2.id)) {
          curatedRepos.push(extRepo2);
        }
      }
    } catch (e) {
      console.warn('Failed to fetch external repo', e);
    }

    curatedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));

    renderProjects(curatedRepos.length ? curatedRepos : fallbackProjects);
  } catch (error) {
    renderProjects(fallbackProjects);
  }
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
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalPanel?.focus();
}

function closeModal() {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
}

function setupModal() {
  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", openModal);
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal?.hidden) {
      closeModal();
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
    ["AI/ML Engineer", "Training intelligent ideas", "94%", "AI Engineer | Model Builder | Developer"],
    ["Machine Learning Engineer", "Tuning learning systems", "92%", "Python | Scikit-learn | Neural Networks"],
    ["Data Systems Developer", "Structuring messy signals", "89%", "Pandas | NumPy | Dashboards"],
    ["Intelligent Systems Enthusiast", "Building intelligent systems", "91%", "AI Agents | Automation | Architecture"],
    ["Full-Stack Builder", "Shipping useful prototypes", "97%", "HTML | CSS | JavaScript | APIs"],
  ];

  let index = 0;

  window.setInterval(() => {
    index = (index + 1) % states.length;
    [rolePlacard, status, score, tagline].forEach((element) => element?.classList.add("changing"));

    window.setTimeout(() => {
      rolePlacard.textContent = states[index][0];
      status.textContent = states[index][1];
      score.textContent = states[index][2];
      tagline.textContent = states[index][3];
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

  // Global Cursor Trail
  const trail = document.createElement("div");
  trail.className = "cursor-trail";

  const dots = Array.from({ length: 1 }, (_, index) => {
    const dot = document.createElement("span");
    dot.className = "cursor-trail-dot";
    dot.style.width = `${20 - index * 3}px`;
    dot.style.height = `${20 - index * 3}px`;
    trail.append(dot);
    return {
      element: dot,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  });

  document.body.append(trail);

  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let active = false;

  const animate = () => {
    let followX = pointerX;
    let followY = pointerY;

    dots.forEach((dot, index) => {
      const easing = 0.34 - index * 0.04;
      dot.x += (followX - dot.x) * easing;
      dot.y += (followY - dot.y) * easing;
      dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;
      followX = dot.x;
      followY = dot.y;
    });

    window.requestAnimationFrame(animate);
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!active) {
      active = true;
      trail.classList.add("active");
    }
  });

  window.requestAnimationFrame(animate);
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
    { threshold: 0.16 }
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 70}ms`;
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
  setupModal();
  setupAboutJump();
  setupDynamicProfile();
  setupCursorEffects();
  setupRevealAnimations();
  setupImageFallback();
  loadProjects();
});
