/**
 * Seif Ghozlani Portfolio - Interactive Logic
 * Features: Multi-language switching (FR/EN), Dynamic rendering, Typewriter effect,
 * Project filtering & modal inspection, Copy-to-clipboard, Toast notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- State ---
  let currentLang = localStorage.getItem('seif_portfolio_lang') || 'fr';
  let activeFilter = 'all';
  let typewriterTimeout = null;

  // --- DOM Elements ---
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const typewriterElement = document.getElementById('typewriter-text');
  const toastContainer = document.getElementById('toast-container');
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // --- Toast Notification Helper ---
  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color: var(--primary); font-weight: bold;">${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Typewriter Effect ---
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function initTypewriter() {
    clearTimeout(typewriterTimeout);
    const roles = portfolioData[currentLang].rolesTypewriter;
    
    function tick() {
      const currentRole = roles[roleIndex % roles.length];
      
      if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2200; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        speed = 400; // Pause before next word
      }

      typewriterTimeout = setTimeout(tick, speed);
    }

    tick();
  }

  // --- Render All Content ---
  function renderContent() {
    const data = portfolioData[currentLang];
    const isFr = currentLang === 'fr';

    // 1. Language Toggle Label
    langLabel.textContent = isFr ? 'FR | EN' : 'EN | FR';

    // 2. Navigation items
    document.querySelector('[data-nav="about"]').textContent = isFr ? "À Propos" : "About";
    document.querySelector('[data-nav="experience"]').textContent = isFr ? "Expérience" : "Experience";
    document.querySelector('[data-nav="skills"]').textContent = isFr ? "Compétences" : "Skills";
    document.querySelector('[data-nav="projects"]').textContent = isFr ? "Projets" : "Projects";
    document.querySelector('[data-nav="education"]').textContent = isFr ? "Formation" : "Education";
    document.querySelector('[data-nav="contact"]').textContent = isFr ? "Contact" : "Contact";

    // 3. Hero Section
    document.getElementById('hero-status').innerHTML = `<span class="status-dot"></span> <span>${data.personal.status}</span>`;
    document.getElementById('hero-greeting').textContent = isFr ? "Bonjour, je suis" : "Hello, I am";
    document.getElementById('hero-name').textContent = data.personal.name;
    document.getElementById('hero-bio').textContent = data.personal.summary;
    
    // Hero Buttons
    document.getElementById('btn-explore-projects').innerHTML = `<span>${isFr ? "Découvrir mes réalisations" : "View My Projects"}</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
    document.getElementById('btn-download-cv').innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> <span>${isFr ? "Imprimer / Télécharger CV" : "Print / Download CV"}</span>`;
    document.getElementById('badge-title-1').textContent = isFr ? "Ingénieur Stagiaire" : "Engineering Intern";
    document.getElementById('badge-sub-1').textContent = isFr ? "Polytechnique Sousse" : "Polytechnique Sousse";
    document.getElementById('badge-title-2').textContent = isFr ? "Expérience Leoni" : "Leoni Experience";
    document.getElementById('badge-sub-2').textContent = isFr ? "2+ ans de pratique" : "2+ years hands-on";

    // Hero Meta
    document.getElementById('meta-location').textContent = data.personal.location;
    document.getElementById('meta-email').textContent = data.personal.email;
    document.getElementById('meta-phone').textContent = data.personal.phone;

    // 4. Stats Section
    const statsContainer = document.getElementById('stats-grid');
    statsContainer.innerHTML = data.stats.map(s => `
      <div class="stat-card">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');

    // 5. Section Titles & Descriptions
    document.getElementById('exp-tag').textContent = isFr ? "Parcours & Réalisations" : "Career & Achievements";
    document.getElementById('exp-title').textContent = isFr ? "Expériences Professionnelles & Stages" : "Work Experience & Internships";
    document.getElementById('exp-desc').textContent = isFr 
      ? "Deux années d'expérience industrielle chez Leoni (Sousse), du développement de solutions IoT sur ligne réelle à l'administration de bases de données et dashboards de pilotage." 
      : "Two years of industrial experience at Leoni (Sousse), from developing IoT line solutions to managing production databases and executive dashboards.";

    document.getElementById('skills-tag').textContent = isFr ? "Expertise Technique" : "Technical Stack";
    document.getElementById('skills-title').textContent = isFr ? "Compétences & Outils Maîtrisés" : "Skills & Technologies";
    document.getElementById('skills-desc').textContent = isFr
      ? "Une double synergie forte entre la programmation bas niveau (embarqué, microcontrôleurs) et l'ingénierie logicielle & data."
      : "A unique blend of low-level embedded hardware engineering and modern software & data architecture.";

    document.getElementById('projects-tag').textContent = isFr ? "Innovations & Cas Concrets" : "Innovations & Case Studies";
    document.getElementById('projects-title').textContent = isFr ? "Projets Phares & Réalisations" : "Featured Projects";
    document.getElementById('projects-desc').textContent = isFr
      ? "Aperçu de mes réalisations clés en atelier industriel, systèmes embarqués et algorithmique avancée."
      : "A curated selection of real-world systems deployed in manufacturing plants and competitive algorithmic solutions.";

    document.getElementById('edu-tag').textContent = isFr ? "Parcours Académique & Mérites" : "Education & Honors";
    document.getElementById('edu-title').textContent = isFr ? "Formation & Distinctions" : "Education & Awards";
    document.getElementById('edu-desc').textContent = isFr
      ? "Un cursus d'ingénieur d'excellence enrichi d'une licence en automatisme et d'une distinction prestigieuse à l'ICPC."
      : "A rigorous engineering track paired with industrial automation foundations and collegiate programming contest recognition.";

    document.getElementById('contact-tag').textContent = isFr ? "Collaborons Ensemble" : "Let's Connect";
    document.getElementById('contact-title').textContent = isFr ? "Contact & Opportunités" : "Contact & Opportunities";
    document.getElementById('contact-desc').textContent = isFr
      ? "Vous recherchez un ingénieur réactif et passionné pour un projet, un stage ou un défi technique ? Discutons-en !"
      : "Looking for a proactive, results-oriented engineer for an internship, project or technical challenge? Let's talk!";

    // 6. Timeline Experiences
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = data.experiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="exp-title">${exp.title}</h3>
              <div class="exp-company">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 11h.01M15 11h.01M9 15h.01M15 15h.01"></path></svg>
                <span>${exp.company} — ${exp.location}</span>
              </div>
            </div>
            <span class="exp-badge">${exp.badge}</span>
          </div>
          <div class="exp-meta">
            <span>📅 ${exp.period}</span>
            <span>•</span>
            <span>${exp.type}</span>
          </div>
          <ul class="exp-list">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
          <div class="tags-cloud">
            ${exp.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    // 7. Skills Matrix
    const skillsContainer = document.getElementById('skills-grid');
    skillsContainer.innerHTML = data.skillsCategories.map(cat => `
      <div class="skill-category-card">
        <div class="cat-header">
          <div class="cat-icon-wrap">
            ${getCategoryIcon(cat.icon)}
          </div>
          <h3 class="cat-title">${cat.title}</h3>
        </div>
        <div class="skill-items-list">
          ${cat.skills.map(s => `
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">${s.name}</span>
                <span class="skill-badge">${s.level}</span>
              </div>
              <p class="skill-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    // 8. Projects Rendering with Category Filter
    renderProjects();

    // 9. Education & ICPC Distinctions
    const eduContainer = document.getElementById('edu-cards-list');
    eduContainer.innerHTML = data.education.map(ed => `
      <div class="edu-card">
        <div class="edu-school">${ed.school}</div>
        <div class="edu-degree">${ed.degree}</div>
        <div class="edu-period">📅 ${ed.period} | 📍 ${ed.location}</div>
        <p class="edu-desc">${ed.description}</p>
      </div>
    `).join('');

    // Distinction Card (ICPC)
    const dist = data.distinctions[0];
    const distContainer = document.getElementById('distinction-box');
    distContainer.innerHTML = `
      <div class="distinction-card">
        <div class="distinction-badge">🏆 ${dist.badge}</div>
        <h3 class="distinction-title">${dist.title}</h3>
        <div class="distinction-contest">${dist.contest}</div>
        <div class="distinction-meta">
          <span>📅 ${dist.date}</span>
          <span>📍 ${dist.location}</span>
        </div>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
          ${dist.description}
        </p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <span class="tech-tag" style="border-color: rgba(217, 70, 239, 0.4); color: #f472b6;">Problem Solving</span>
          <span class="tech-tag" style="border-color: rgba(217, 70, 239, 0.4); color: #f472b6;">C++ Algorithms</span>
          <span class="tech-tag" style="border-color: rgba(217, 70, 239, 0.4); color: #f472b6;">Data Structures</span>
        </div>
      </div>
    `;

    // Languages & Interests
    const langContainer = document.getElementById('languages-list');
    langContainer.innerHTML = `
      <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 1.25rem;">
        🗣️ ${isFr ? "Langues Maîtrisées" : "Languages"}
      </h3>
      ${data.languages.map(l => `
        <div class="lang-item">
          <div class="lang-header">
            <span>${l.name}</span>
            <span style="color: var(--primary); font-family: var(--font-mono); font-size: 0.85rem;">${l.level}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${l.percent}%"></div>
          </div>
        </div>
      `).join('')}
    `;

    const interestContainer = document.getElementById('interests-list');
    interestContainer.innerHTML = `
      <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 1.25rem;">
        🎯 ${isFr ? "Centres d'Intérêt" : "Interests"}
      </h3>
      <div class="interest-pills">
        ${data.interests.map(i => `
          <div class="interest-pill">
            ${getInterestIcon(i.icon)}
            <span>${i.name}</span>
          </div>
        `).join('')}
      </div>
      <div style="margin-top: 2rem; padding: 1rem; border-radius: var(--radius-md); background: rgba(0, 242, 254, 0.04); border: var(--glass-border);">
        <p style="font-size: 0.85rem; color: var(--text-muted);">
          🚗 <strong>${isFr ? "Mobilité" : "Mobility"} :</strong> ${data.personal.license} (${data.personal.location})
        </p>
      </div>
    `;

    // 10. Contact Info Cards
    document.getElementById('contact-email-val').textContent = data.personal.email;
    document.getElementById('contact-phone-val').textContent = data.personal.phone;
    document.getElementById('contact-loc-val').textContent = data.personal.location;
    document.getElementById('contact-github-val').textContent = data.personal.githubUser;

    // Contact Form Placeholders
    document.getElementById('form-name-label').textContent = isFr ? "Votre Nom" : "Your Name";
    document.getElementById('form-email-label').textContent = isFr ? "Votre Email" : "Your Email";
    document.getElementById('form-subject-label').textContent = isFr ? "Sujet du Message" : "Subject";
    document.getElementById('form-msg-label').textContent = isFr ? "Votre Message" : "Your Message";
    document.getElementById('form-submit-btn').innerHTML = `<span>${isFr ? "Envoyer le Message" : "Send Message"}</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;

    // Footer
    document.getElementById('footer-copy').innerHTML = `© ${new Date().getFullYear()} Seif Ghozlani. ${isFr ? "Tous droits réservés. Conçu pour l'excellence d'ingénierie." : "All rights reserved. Engineered for performance."}`;
    
    // Refresh Typewriter with new language
    initTypewriter();
  }

  // --- Project Filtering & Render ---
  function renderProjects() {
    const data = portfolioData[currentLang];
    const isFr = currentLang === 'fr';
    const projectsContainer = document.getElementById('projects-grid');

    const filtered = activeFilter === 'all' 
      ? data.projects 
      : data.projects.filter(p => p.category === activeFilter);

    projectsContainer.innerHTML = filtered.map(p => `
      <div class="project-card" data-project-id="${p.id}">
        <div>
          <div class="project-header">
            <span class="project-badge">${p.badge}</span>
            <span style="color: var(--text-dim); font-size: 0.8rem; font-family: var(--font-mono);">
              ${p.category.toUpperCase()}
            </span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          <div class="project-result-box">
            <strong>💡 Impact :</strong> ${p.results}
          </div>
        </div>
        <div class="project-footer">
          <div class="tags-cloud">
            ${p.techStack.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${p.techStack.length > 3 ? `<span class="tech-tag">+${p.techStack.length - 3}</span>` : ''}
          </div>
          <div class="view-details-link">
            <span>${isFr ? "Détails" : "Details"}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listeners for project modals
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });
  }

  // --- Open Project Modal ---
  function openProjectModal(projectId) {
    const data = portfolioData[currentLang];
    const proj = data.projects.find(p => p.id === projectId);
    if (!proj) return;

    const modalBody = document.getElementById('modal-body-content');
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="project-badge" style="margin-bottom: 0.75rem; display: inline-block;">${proj.badge}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 0.5rem; color: #fff;">${proj.title}</h2>
      </div>
      
      <div style="margin-bottom: 1.5rem; color: var(--text-muted); font-size: 1rem; line-height: 1.7;">
        ${proj.description}
      </div>

      <div style="margin-bottom: 1.5rem; background: rgba(0, 242, 254, 0.08); border-left: 3px solid var(--primary); padding: 1rem 1.25rem; border-radius: var(--radius-sm);">
        <h4 style="color: var(--primary); font-size: 0.9rem; margin-bottom: 0.3rem;">🎯 ${currentLang === 'fr' ? "Résultat & Validation" : "Outcome & Impact"}</h4>
        <p style="color: #e2e8f0; font-size: 0.95rem;">${proj.results}</p>
      </div>

      <div>
        <h4 style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 0.6rem; font-family: var(--font-mono);">
          ${currentLang === 'fr' ? "Technologies Clés :" : "Key Technologies :"}
        </h4>
        <div class="tags-cloud">
          ${proj.techStack.map(t => `<span class="tech-tag" style="background: rgba(0, 242, 254, 0.1); color: var(--primary);">${t}</span>`).join('')}
        </div>
      </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

  // --- Filter Buttons ---
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  // --- Language Toggle Handler ---
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('seif_portfolio_lang', currentLang);
    renderContent();
    showToast(currentLang === 'fr' ? "Langue changée en Français" : "Language switched to English", "🌐");
  });

  // --- Copy to Clipboard Functionality ---
  window.copyToClipboard = function(text, typeName) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${typeName} ${currentLang === 'fr' ? "copié dans le presse-papiers !" : "copied to clipboard!"}`);
      });
    } else {
      // Fallback
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast(`${typeName} ${currentLang === 'fr' ? "copié !" : "copied!"}`);
    }
  };

  // --- Contact Form Submission Simulation ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('form-submit-btn');
      const originalHtml = submitBtn.innerHTML;
      
      submitBtn.innerHTML = `<span>${currentLang === 'fr' ? "Envoi en cours..." : "Sending..."}</span>`;
      submitBtn.style.opacity = '0.7';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalHtml;
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;
        contactForm.reset();
        showToast(
          currentLang === 'fr' 
            ? "Merci pour votre message ! Je vous répondrai dans les plus brefs délais." 
            : "Thank you for reaching out! I will respond promptly.",
          "✉️"
        );
      }, 1000);
    });
  }

  // --- Mobile Menu Toggle ---
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // --- CV Download / Print Trigger ---
  document.getElementById('btn-download-cv').addEventListener('click', () => {
    window.print();
  });

  // --- Helper Icons Generators ---
  function getCategoryIcon(type) {
    if (type === 'cpu') {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    }
    if (type === 'code') {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    }
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
  }

  function getInterestIcon(type) {
    if (type === 'camera') {
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
    }
    if (type === 'zap') {
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
    }
    if (type === 'code') {
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    }
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg>`;
  }

  // --- Initial Render ---
  renderContent();
});
