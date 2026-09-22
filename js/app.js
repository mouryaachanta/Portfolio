/**
 * Portfolio Application Logic - Achanta Mukesh Mourya
 * Handles UI initialization, mobile drawer, scroll animations,
 * interactive modals, contact submission, and clipboard helpers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();
  renderDynamicSections();
  setupNavigation();
  setupContactForm();
  setupResumeModal();
  setupCopyButtons();
});

// Initialize Lucide Icons
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render dynamic sections from PORTFOLIO_DATA
function renderDynamicSections() {
  renderStats();
  renderSkills();
  renderFeaturedProject();
  renderSecondaryProjects();
  renderPublication();
  renderCertifications();
  renderEducation();
  initLucideIcons(); // re-init icons for dynamic elements
}

// 1. Stats Counter
function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container || !PORTFOLIO_DATA.stats) return;

  container.innerHTML = PORTFOLIO_DATA.stats.map(stat => `
    <div class="glass-panel p-5 rounded-2xl text-center glass-panel-hover border border-slate-800/80">
      <div class="text-3xl lg:text-4xl font-extrabold gradient-text-cyan font-mono-code mb-1">
        ${stat.value}
      </div>
      <div class="text-sm font-semibold text-slate-200">${stat.label}</div>
      <div class="text-xs text-slate-400 mt-0.5">${stat.detail}</div>
    </div>
  `).join('');
}

// 2. Skills Categories
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !PORTFOLIO_DATA.skillCategories) return;

  container.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
    <div class="glass-panel p-6 rounded-2xl glass-panel-hover border border-slate-800/80 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-100">${cat.category}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          ${cat.skills.map(skill => `
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
              skill.highlight 
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' 
                : 'bg-slate-800/60 text-slate-300 border border-slate-700/50'
            }">
              ${skill.highlight ? '<span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>' : ''}
              <span>${skill.name}</span>
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Featured Main Project: Predictive Maintenance
function renderFeaturedProject() {
  const container = document.getElementById('featured-project-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === 'predictive-maintenance');
  if (!project) return;

  container.innerHTML = `
    <div class="glass-panel rounded-3xl p-6 lg:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
      <!-- Glow background accent -->
      <div class="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            Main Featured Project
          </span>
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Published in AIJFR (2026)
          </span>
        </div>
        <div class="flex items-center gap-3">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub Repo</span>
          </a>
          <a href="${project.paperUrl}" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition">
            <i data-lucide="external-link" class="w-4 h-4"></i>
            <span>View Paper</span>
          </a>
        </div>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-7 space-y-6">
          <div>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
              ${project.title}
            </h3>
            <p class="text-cyan-400 text-sm font-medium">
              ${project.subtitle}
            </p>
          </div>

          <p class="text-slate-300 leading-relaxed text-sm lg:text-base">
            ${project.overview}
          </p>

          <div class="space-y-2">
            <h4 class="text-xs uppercase tracking-wider font-semibold text-slate-400">Technical Highlights & Contributions</h4>
            <ul class="space-y-2 text-sm text-slate-300">
              ${project.architectureHighlights.map(item => `
                <li class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            ${project.tags.map(tag => `
              <span class="px-2.5 py-1 text-xs rounded-md font-mono-code bg-slate-800/80 text-cyan-300 border border-slate-700">
                #${tag}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <!-- Verified Metrics Box -->
          <div class="glass-panel p-6 rounded-2xl border border-slate-700/60 bg-slate-900/80">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <i data-lucide="award" class="w-4 h-4 text-cyan-400"></i>
                Verified Model Metrics
              </span>
              <span class="text-xs text-emerald-400 font-mono-code bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                NASA FD001
              </span>
            </div>

            <div class="grid grid-cols-3 gap-3 text-center mb-6">
              ${project.metrics.map(m => `
                <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div class="text-2xl font-bold font-mono-code gradient-text-cyan">${m.value}</div>
                  <div class="text-xs font-semibold text-slate-300 mt-1">${m.label}</div>
                  <div class="text-[10px] text-slate-400 leading-tight">${m.desc}</div>
                </div>
              `).join('')}
            </div>

            <!-- Dashboard Health Classification Tiers -->
            <div class="space-y-3">
              <div class="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Flask Dashboard Health State Classifier
              </div>
              <div class="space-y-2">
                <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <span class="font-bold text-emerald-400 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    HEALTHY
                  </span>
                  <span class="font-mono-code text-slate-300">RUL &gt; 50 cycles</span>
                </div>
                <div class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
                  <span class="font-bold text-amber-400 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                    INSPECT
                  </span>
                  <span class="font-mono-code text-slate-300">25 &lt; RUL ≤ 50 cycles</span>
                </div>
                <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between text-xs">
                  <span class="font-bold text-rose-400 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-rose-400"></span>
                    CRITICAL
                  </span>
                  <span class="font-mono-code text-slate-300">RUL ≤ 25 cycles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 4. Secondary Projects: IBM Cloud Project
function renderSecondaryProjects() {
  const container = document.getElementById('secondary-projects-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === 'ibm-cloud-ai');
  if (!project) return;

  container.innerHTML = `
    <div class="glass-panel p-6 lg:p-8 rounded-3xl border border-slate-800 glass-panel-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-4 mb-4">
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            ${project.category}
          </span>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>View Repo</span>
          </a>
        </div>

        <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
        <p class="text-slate-300 text-sm mb-4 leading-relaxed">${project.overview}</p>

        <div class="space-y-2 mb-6">
          ${project.architectureHighlights.map(item => `
            <div class="flex items-start gap-2 text-xs text-slate-400">
              <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5"></i>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="grid grid-cols-3 gap-2 py-3 border-y border-slate-800 text-center mb-4">
          ${project.metrics.map(m => `
            <div>
              <div class="text-xs font-mono-code text-cyan-300 font-semibold">${m.value}</div>
              <div class="text-[10px] text-slate-400">${m.label}</div>
            </div>
          `).join('')}
        </div>

        <div class="flex flex-wrap gap-1.5">
          ${project.tags.map(t => `
            <span class="px-2 py-0.5 text-[11px] rounded bg-slate-800/80 text-slate-300 font-mono-code">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// 5. Research & Publications (Distinct Style)
function renderPublication() {
  const container = document.getElementById('publication-container');
  if (!container || !PORTFOLIO_DATA.publication) return;

  const pub = PORTFOLIO_DATA.publication;

  container.innerHTML = `
    <div class="glass-panel p-6 lg:p-10 rounded-3xl border-2 border-amber-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 shadow-2xl">
      <!-- Top banner badges -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            Peer-Reviewed Research Publication
          </span>
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            E-ISSN: ${pub.eIssn}
          </span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-xs text-amber-400 font-mono-code bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Impact Factor: ${pub.impactFactor}
          </span>
        </div>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-8 space-y-4">
          <h3 class="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
            ${pub.title}
          </h3>

          <div class="text-sm text-cyan-400 font-medium">
            Published in <span class="text-white font-semibold">${pub.journal}</span> — ${pub.volumeIssue} (${pub.publishedDate})
          </div>

          <div class="text-xs text-slate-300 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
            <strong class="text-slate-100">Authors:</strong> ${pub.authors.join(', ')}
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">Abstract</h4>
            <p class="text-slate-300 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
              ${pub.abstract}
            </p>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">Keywords</h4>
            <div class="flex flex-wrap gap-1.5">
              ${pub.keywords.map(kw => `
                <span class="px-2.5 py-1 text-xs rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono-code">
                  ${kw}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
          <div class="glass-panel p-5 rounded-2xl border border-slate-700 bg-slate-900/80 space-y-4 text-center">
            <div class="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
              <i data-lucide="file-text" class="w-7 h-7"></i>
            </div>
            <div>
              <div class="text-base font-bold text-white">Official Journal Record</div>
              <div class="text-xs text-slate-400 mt-1">Directly accessible on AIJFR Open Access Portal</div>
            </div>

            <div class="pt-2 space-y-2.5">
              <a href="${pub.paperUrl}" target="_blank" rel="noopener noreferrer"
                 class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-lg shadow-amber-500/20">
                <i data-lucide="external-link" class="w-4 h-4"></i>
                <span>View Live Article</span>
              </a>
              <a href="${pub.pdfUrl}" target="_blank" rel="noopener noreferrer"
                 class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition">
                <i data-lucide="download" class="w-4 h-4"></i>
                <span>Download Paper PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 6. Certifications
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="glass-panel p-6 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <i data-lucide="shield-check" class="w-3 h-3"></i>
            ${cert.badge}
          </span>
          <span class="text-xs text-slate-400 font-mono-code">${cert.issueDate}</span>
        </div>

        <h3 class="text-lg font-bold text-white mb-1">${cert.title}</h3>
        <p class="text-cyan-400 text-xs font-medium mb-3">${cert.module}</p>
        <p class="text-xs text-slate-400 mb-4"><span class="text-slate-300 font-semibold">Issuer:</span> ${cert.issuer}</p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${cert.skills.map(s => `
            <span class="px-2 py-0.5 text-[11px] rounded bg-slate-800/60 text-slate-300 border border-slate-700/50">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
        <span class="text-[11px] font-mono-code text-slate-400 truncate max-w-[150px]">${cert.certId}</span>
        <a href="${cert.verificationUrl}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition">
          <span>Verify Credential</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// 7. Education Timeline
function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container || !PORTFOLIO_DATA.education) return;

  // Include Scaler course as the current upskilling anchor
  const items = [
    {
      degree: "Data Science & Machine Learning Program",
      institution: "Scaler",
      duration: "06/2026 – Present",
      location: "Bengaluru, India (Online)",
      score: "Currently Pursuing",
      isCurrent: true,
      highlights: [
        "Rigorous specialization curriculum in Python, SQL, Statistics, and Production Machine Learning.",
        "Completed Module: Advanced SQL & AI for Data Professionals (Certificate Verified)."
      ]
    },
    ...PORTFOLIO_DATA.education
  ];

  container.innerHTML = items.map(edu => `
    <div class="relative pl-8 sm:pl-10 pb-8 last:pb-0">
      <!-- Dot indicator -->
      <div class="absolute left-0 top-1.5 w-6 h-6 rounded-full ${edu.isCurrent ? 'bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/20' : 'bg-slate-800 text-cyan-400 border border-slate-700'} flex items-center justify-center text-xs font-bold z-10">
        <i data-lucide="${edu.isCurrent ? 'sparkles' : 'graduation-cap'}" class="w-3 h-3"></i>
      </div>

      <div class="glass-panel p-5 rounded-2xl border border-slate-800 glass-panel-hover">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 class="text-base sm:text-lg font-bold text-white">${edu.degree}</h3>
          <span class="text-xs font-mono-code px-2.5 py-0.5 rounded-full ${edu.isCurrent ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-800 text-slate-300'}">
            ${edu.duration}
          </span>
        </div>

        <div class="text-xs sm:text-sm text-cyan-400 font-medium mb-1">
          ${edu.institution} • <span class="text-slate-400">${edu.location}</span>
        </div>

        <div class="text-xs font-bold text-emerald-400 mb-3">${edu.score}</div>

        <ul class="space-y-1.5 text-xs text-slate-300">
          ${edu.highlights.map(h => `
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Navigation & Active Link Tracking
function setupNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });

  // Scroll spy active nav highlight
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400', 'font-semibold');
      }
    });
  });
}

// Resume Preview Modal
function setupResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openButtons = document.querySelectorAll('.open-resume-modal');
  const closeButton = document.getElementById('close-resume-modal');
  const modalBackdrop = document.getElementById('resume-modal-backdrop');

  if (!modal) return;

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (closeButton) closeButton.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
}

// Contact Form Handler with Mailto fallback
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const submitStatus = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || 'Portfolio Inquiry';
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    // Trigger direct mailto link for direct delivery to Achanta Mukesh Mourya
    const mailtoUrl = `mailto:achantamukeshmourya@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
    
    // Display confirmation and trigger user's default client
    if (submitStatus) {
      submitStatus.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
          Thank you, ${name}! Your email client will now launch with your prepared message to <strong>achantamukeshmourya@gmail.com</strong>.
        </div>
      `;
    }

    showToast('Opening your email client to send message...', 'success');
    window.location.href = mailtoUrl;
    form.reset();
  });
}

// Clipboard copying utility
function setupCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', () => {
      const textToCopy = button.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
      }).catch(() => {
        showToast('Failed to copy to clipboard', 'error');
      });
    });
  });
}

// Toast notification display
function showToast(message, type = 'info') {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2.5 backdrop-blur-lg border transition-all hide';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-emerald-400' : 'bg-cyan-400'} animate-ping"></span>
    <span>${message}</span>
  `;

  if (type === 'success') {
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2.5 backdrop-blur-lg border border-emerald-500/30 bg-slate-900/90 text-emerald-300 show';
  } else {
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2.5 backdrop-blur-lg border border-cyan-500/30 bg-slate-900/90 text-cyan-300 show';
  }

  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
  }, 3500);
}
