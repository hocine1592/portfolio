(() => {
  const THEME_STORAGE_KEY = "portfolio.theme";
  const LANG_STORAGE_KEY = "portfolio.lang";
  const THEME_ATTR = "data-theme";
  const THEMES = new Set(["light", "dark"]);
  const LANGS = new Set(["ar", "en"]);

  const EN = {
    "common.skip": "Skip to content",
    "common.brandBack": "Back to About page",
    "common.navAria": "Navigation",
    "common.nav.about": "About",
    "common.nav.projects": "Projects",
    "common.nav.contact": "Contact",
    "common.themeToggleAria": "Toggle theme",
    "common.footer.links": "Links",
    "common.github.repos": "Repositories",

    "index.kicker.role": "Computer Science Student — Algeria",
    "index.hero.title": "AI Agents in Python… and fast Vanilla sites from scratch",
    "index.hero.p1": "I'm a computer science student based in Algeria. My technical work focuses on Python (especially AI workflows using CrewAI and LangChain) as well as full‑stack web development with plain HTML/CSS/JS without heavy frameworks.",
    "index.hero.p2": "Before programming, I worked in retail and online sales—running a small shop on Facebook Marketplace and working in local clothing stores taught me how to handle difficult customers, write clear product descriptions, and resolve complaints calmly. I'm looking for a support or development role that uses this mix of tech and real customer experience.",
    "index.hero.cta.projects": "View projects",
    "index.hero.cta.contact": "Contact me",
    "index.hero.cta.services": "What I offer",
    "index.panel.title": "Current focus",
    "index.panel.codeComment": "# A simple mental model",
    "index.panel.p": "I like simple, runnable solutions: clear Python scripts, lightweight websites, and documentation/organization that makes it easy for any team to follow what's happening.",
    "index.services.title": "What I offer",
    "index.services.subtitle": "Three core packages that can be mixed depending on product needs.",
    "index.services.card1.title": "AI Workflows in Python",
    "index.services.card1.desc": "Python agent scripts using CrewAI and LangChain to execute specific tasks autonomously and pass data between agents when needed.",
    "index.services.card2.desc": "Design and build fully responsive websites from scratch using only HTML/CSS/JS to keep load times fast and maintenance simple.",
    "index.services.card3.desc": "Real customer-facing experience: text support, price negotiation, de‑escalation, and increasing average order value (upselling).",
    "index.resume.title": "Resume at a glance",
    "index.resume.subtitle": "A mix of technical skills and real customer experience.",
    "index.resume.tech.title": "Technical skills",
    "index.resume.tech.desc": "Python + AI workflows (CrewAI/LangChain) + Vanilla web development with REST APIs and code management with Git/GitHub.",
    "index.resume.support.title": "Communication & support",
    "index.resume.support.desc": "Strong sales background: text support, negotiation, de‑escalation, and persuasion without pressure.",
    "index.exp.title": "Experience",
    "index.exp.badge": "Sales",
    "index.exp.role1": "Independent online seller",
    "index.exp.role1.li1": "Managed all aspects of a small independent shop.",
    "index.exp.role1.li2": "Answered messages and inquiries and closed sales.",
    "index.exp.role1.li3": "Negotiated prices and coordinated delivery with local buyers.",
    "index.exp.role1.li4": "Solved after‑sales issues (shipping delays/product complaints) while maintaining a good reputation.",
    "index.exp.role2": "Sales assistant",
    "index.exp.role2.li1": "Worked directly with customers in a fast-paced environment.",
    "index.exp.role2.li2": "Helped customers choose items and suggested accessories to increase daily sales.",
    "index.exp.role2.li3": "Handled size complaints and exchange/returns.",
    "index.exp.role2.li4": "Stayed calm during peak times (weekends).",
    "index.edu.title": "Education",
    "index.edu.badge": "University",
    "index.edu.school": "Dr. Moulay Tahar University, Saida",
    "index.edu.focus": "Focus: programming, data structures, algorithms.",
    "index.lang.title": "Languages",
    "index.lang.badge": "Communication",
    "index.lang.note": "Comfortable reading API docs and writing code comments and text support in English.",
    "index.cta.title": "Open to roles: Technical support or development",
    "index.cta.desc": "If your team needs strong written support or implementation in Python/Vanilla Web, send a short brief and I'll reply with a clear plan and actionable steps.",
    "index.cta.contact": "Contact page",
    "index.cta.projects": "Browse projects",

    "projects.kicker.title": "Projects",
    "projects.hero.title": "Work samples",
    "projects.hero.p": "Examples from my work: AI agent workflows, connecting databases with LLMs, Vanilla frontends, and Python automation. All code is on <a class=\"text-link mono\" dir=\"ltr\" href=\"https://github.com/hocine1552\" target=\"_blank\" rel=\"noreferrer\">github.com/hocine1552</a>.",
    "projects.hero.cta.contact": "Contact me",
    "projects.panel.title": "What do I value in projects?",
    "projects.panel.p": "Simplicity, fast load times, and ease of running—then clarity of the idea in both code and UI.",
    "projects.list.title": "Projects",
    "projects.list.subtitle": "Short notes on areas I actually built, with a direct link to GitHub.",
    "projects.card1.desc": "Python scripts using CrewAI to build autonomous agents that pass data between each other to complete specific tasks.",
    "projects.card2.desc": "Apps using LangChain to connect language models to local databases with context management and API calls.",
    "projects.card3.desc": "Design and build fully responsive websites from scratch using HTML/CSS/JS to keep the site lightweight and fast.",
    "projects.card4.desc": "Tooling scripts to automate routine tasks: web scraping and organized local file management.",

    "contact.kicker.title": "Contact",
    "contact.hero.title": "Let's start with a clear problem",
    "contact.hero.p": "If you have a support/development opportunity or a small project, send a short description: the goal, where the data is, and what you expect from the solution.",
    "contact.hero.cta.email": "Email me now",
    "contact.panel.title": "Contact channels",
    "contact.channel.email": "Email",
    "contact.channel.email.badge": "Preferred",
    "contact.channel.phone": "Phone",
    "contact.channel.phone.badge": "Call",
    "contact.form.title": "Send a message",
    "contact.form.subtitle": "Your mail app will open automatically (this template has no backend).",
    "contact.form.aria": "Contact form",
    "contact.form.name.label": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "name@example.com",
    "contact.form.message.label": "Message",
    "contact.form.message.placeholder": "Describe the problem, the goal, and any important links/notes",
    "contact.form.submit": "Send",
    "contact.form.altMail": "Or: Mail",
    "contact.brief.title": "Quick brief (copy/paste)",
    "contact.brief.subtitle": "To speed up my reply, send these points:",
    "contact.brief.goal": "Goal:",
    "contact.brief.data": "Data:",
    "contact.brief.tools": "Tools:",
    "contact.brief.constraints": "Constraints:",
    "contact.brief.success": "Success criteria:",
    "contact.brief.note": "I'll reply with a clear execution plan (scope + phases + risk + delivery).",
  };

  const EN_META = {
    index: {
      title: "About | Hocine Borega",
      description:
        "Hocine Borega — Computer science student from Algeria. Python (CrewAI, LangChain) + Vanilla Web + support/communication experience from sales.",
    },
    projects: {
      title: "Projects | Hocine Borega",
      description: "Hocine Borega projects — Python (CrewAI, LangChain) + Vanilla Web + Automation.",
    },
    contact: {
      title: "Contact | Hocine Borega",
      description: "Contact Hocine Borega — Algeria. Email, phone, GitHub portfolio.",
    },
  };

  const THEME_LABELS = {
    ar: { light: "فاتح", dark: "داكن" },
    en: { light: "Light", dark: "Dark" },
  };

  let currentLang = "ar";
  let currentTheme = "light";

  const originalByEl = new WeakMap();
  const originalMeta = { title: null, description: null };

  function rememberOriginal(el) {
    if (originalByEl.has(el)) return;
    originalByEl.set(el, {
      text: el.textContent,
      html: el.innerHTML,
      placeholder: el.getAttribute("placeholder"),
      ariaLabel: el.getAttribute("aria-label"),
    });
  }

  function tEn(key) {
    return EN[key];
  }

  function getStoredTheme() {
    try {
      const value = localStorage.getItem(THEME_STORAGE_KEY);
      return THEMES.has(value) ? value : null;
    } catch {
      return null;
    }
  }

  function getStoredLang() {
    try {
      const value = localStorage.getItem(LANG_STORAGE_KEY);
      return LANGS.has(value) ? value : null;
    } catch {
      return null;
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  }

  function applyTheme(theme, { persist } = { persist: true }) {
    const safeTheme = THEMES.has(theme) ? theme : "light";
    currentTheme = safeTheme;
    document.documentElement.setAttribute(THEME_ATTR, safeTheme);

    if (persist) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, safeTheme);
      } catch {
        // ignore
      }
    }

    updateThemeToggles(safeTheme);
  }

  function updateThemeToggles(theme) {
    const isDark = theme === "dark";
    const labels = THEME_LABELS[currentLang] || THEME_LABELS.ar;
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(isDark));
      const label = btn.querySelector("[data-theme-label]");
      if (label) label.textContent = isDark ? labels.dark : labels.light;
    });
  }

  function captureOriginalI18nState() {
    document
      .querySelectorAll("[data-i18n], [data-i18n-html], [data-i18n-placeholder], [data-i18n-aria]")
      .forEach((el) => rememberOriginal(el));

    originalMeta.title = document.title;
    const meta = document.querySelector('meta[name="description"]');
    originalMeta.description = meta?.getAttribute("content") || "";
  }

  function translateDocument(lang) {
    const isEnglish = lang === "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      rememberOriginal(el);
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      if (isEnglish) {
        const value = tEn(key);
        if (typeof value === "string") el.textContent = value;
      } else {
        const original = originalByEl.get(el);
        if (original) el.textContent = (original.text || "").trim();
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      rememberOriginal(el);
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;

      if (isEnglish) {
        const value = tEn(key);
        if (typeof value === "string") el.innerHTML = value;
      } else {
        const original = originalByEl.get(el);
        if (original) el.innerHTML = original.html || "";
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      rememberOriginal(el);
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;

      if (isEnglish) {
        const value = tEn(key);
        if (typeof value === "string") el.setAttribute("placeholder", value);
      } else {
        const original = originalByEl.get(el);
        if (original?.placeholder != null) el.setAttribute("placeholder", original.placeholder);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      rememberOriginal(el);
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;

      if (isEnglish) {
        const value = tEn(key);
        if (typeof value === "string") el.setAttribute("aria-label", value);
      } else {
        const original = originalByEl.get(el);
        if (original?.ariaLabel != null) el.setAttribute("aria-label", original.ariaLabel);
      }
    });

    const page = document.body?.dataset?.page;
    const meta = document.querySelector('meta[name="description"]');

    if (isEnglish && page && EN_META[page]) {
      document.title = EN_META[page].title;
      meta?.setAttribute("content", EN_META[page].description);
    } else {
      if (originalMeta.title != null) document.title = originalMeta.title;
      if (meta && originalMeta.description != null) meta.setAttribute("content", originalMeta.description);
    }
  }

  function updateLangToggles(lang) {
    const isEnglish = lang === "en";
    const nextLabel = isEnglish ? "AR" : "EN";
    const aria = isEnglish ? "Switch language to Arabic" : "تحويل اللغة إلى الإنجليزية";

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      const label = btn.querySelector("[data-lang-label]");
      if (label) label.textContent = nextLabel;
      btn.setAttribute("aria-label", aria);
    });
  }

  function applyLanguage(lang, { persist } = { persist: true }) {
    const safeLang = LANGS.has(lang) ? lang : "ar";
    currentLang = safeLang;

    document.documentElement.setAttribute("lang", safeLang);
    document.documentElement.setAttribute("dir", safeLang === "ar" ? "rtl" : "ltr");

    if (persist) {
      try {
        localStorage.setItem(LANG_STORAGE_KEY, safeLang);
      } catch {
        // ignore
      }
    }

    translateDocument(safeLang);
    updateLangToggles(safeLang);
    updateThemeToggles(currentTheme);
  }

  function setupLangToggle() {
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = currentLang === "en" ? "ar" : "en";
        applyLanguage(next, { persist: true });
      });
    });
  }

  function setupThemeToggle() {
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute(THEME_ATTR) || "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next, { persist: true });
      });
    });
  }

  function setupMailtoForm() {
    const form = document.querySelector("[data-mailto-form]");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const to = (form.getAttribute("data-to") || "your.email@example.com").trim();
      const name = (form.querySelector("[name='name']")?.value || "").trim();
      const email = (form.querySelector("[name='email']")?.value || "").trim();
      const message = (form.querySelector("[name='message']")?.value || "").trim();

      const subject =
        currentLang === "en" ? `Message from ${name || "Website visitor"}` : `رسالة من ${name || "زائر الموقع"}`;
      const body =
        currentLang === "en"
          ? `Name: ${name}\nEmail: ${email}\n\n${message}\n`
          : `الاسم: ${name}\nالبريد: ${email}\n\n${message}\n`;
      const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = href;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    captureOriginalI18nState();

    const storedLang = getStoredLang();
    applyLanguage(storedLang || document.documentElement.getAttribute("lang") || "ar", { persist: Boolean(storedLang) });

    const storedTheme = getStoredTheme();
    applyTheme(storedTheme || getSystemTheme(), { persist: Boolean(storedTheme) });

    if (!storedTheme && window.matchMedia) {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener?.("change", () => applyTheme(getSystemTheme(), { persist: false }));
    }

    setupLangToggle();
    setupThemeToggle();
    setupMailtoForm();
  });
})();
