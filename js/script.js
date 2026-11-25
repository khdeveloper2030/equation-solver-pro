/**
 * ឯកសារ JavaScript មេសម្រាប់គ្រប់គ្រងដំណើរការកម្មវិធី Equation Solver Pro
 * រួមមាន៖ ការប្តូរទំព័រ (Navigation), ម៉ឺនុយទូរស័ព្ទ (Mobile Menu), Theme, ប្រវត្តិគណនា និងព្រឹត្តិការណ៍ប៊ូតុង
 */

document.addEventListener("DOMContentLoaded", () => {
  // ទាញយកធាតុ DOM សំខាន់ៗ
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const navItems = document.querySelectorAll(".nav-item");
  const pageSections = document.querySelectorAll(".page-section");
  const currentPageTitle = document.getElementById("currentPageTitle");
  const langToggleBtn = document.getElementById("langToggleBtn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  // ប្រវត្តិគណនារក្សាទុកក្នុង LocalStorage
  let calcHistory = JSON.parse(localStorage.getItem("esp_history") || "[]");

  /* ========================================================================
     ១. មុខងារបើក និងបិទម៉ឺនុយចំហៀងលើទូរស័ព្ទ (Mobile Hamburger Menu)
     ======================================================================== */
  function openMobileMenu() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
  }

  function closeMobileMenu() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
  }

  hamburgerBtn.addEventListener("click", openMobileMenu);
  closeSidebarBtn.addEventListener("click", closeMobileMenu);
  sidebarOverlay.addEventListener("click", closeMobileMenu);

  /* ========================================================================
     ២. មុខងារផ្លាស់ប្តូរទំព័រ (SPA Navigation & Active Menu Highlighting)
     ======================================================================== */
  function navigateTo(pageName) {
    // ដក active ចេញពីម៉ឺនុយទាំងអស់ ហើយដាក់លើម៉ឺនុយដែលបានចុច
    navItems.forEach((btn) => {
      const isMatch = btn.getAttribute("data-page") === pageName;
      btn.classList.toggle("active", isMatch);
    });

    // បង្ហាញទំព័រដែលត្រូវគ្នា
    pageSections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === `page-${pageName}`);
    });

    // ប្តូរចំណងជើងលើ Topbar
    currentPageTitle.textContent = t(`nav_${pageName}`);
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      navigateTo(btn.getAttribute("data-page"));
    });
  });

  // ប៊ូតុងផ្លូវកាត់នៅលើទំព័រដើម (Quick Action Buttons)
  document.querySelectorAll("[data-goto]").forEach((el) => {
    el.addEventListener("click", () => {
      navigateTo(el.getAttribute("data-goto"));
    });
  });

  /* ========================================================================
     ៣. មុខងារប្តូរ Light Mode / Dark Mode
     ======================================================================== */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("esp_theme", theme);
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");
    if (theme === "dark") {
      themeIcon.textContent = "☀️";
      themeText.setAttribute("data-i18n", "theme_light");
      themeText.textContent = t("theme_light");
    } else {
      themeIcon.textContent = "🌙";
      themeText.setAttribute("data-i18n", "theme_dark");
      themeText.textContent = t("theme_dark");
    }
  }

  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* ========================================================================
     ៤. មុខងារបង្ហាញលទ្ធផលសមីការ និងរក្សាទុកក្នុងប្រវត្តិ (History)
     ======================================================================== */
  function renderSolutionHTML(result) {
    const isKm = currentLang === "km";
    const stepsHTML = result.steps
      .map(
        (s) => `
        <div class="step-item">
          <div class="step-title">${s.title}</div>
          <div class="step-math">${s.math}</div>
        </div>`
      )
      .join("");

    const rootsHTML = result.roots.map((r) => `<div class="root-line">${r}</div>`).join("");

    return `
      <div class="condition-banner ${result.badgeClass}">${result.condition}</div>
      ${stepsHTML}
      <div class="final-roots-box">
        <h4>${isKm ? "ចម្លើយចុងក្រោយ (Final Answer)៖" : "Final Answer:"}</h4>
        ${rootsHTML}
      </div>
    `;
  }

  function addToHistory(type, equation, roots) {
    calcHistory.unshift({
      type,
      equation,
      roots: roots.join("  |  "),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });
    if (calcHistory.length > 25) calcHistory.pop();
    localStorage.setItem("esp_history", JSON.stringify(calcHistory));
    renderHistory();
  }

  function renderHistory() {
    const listEl = document.getElementById("historyList");
    const badgeEl = document.getElementById("historyBadge");
    badgeEl.textContent = calcHistory.length;

    if (calcHistory.length === 0) {
      listEl.innerHTML = `<p style="color: var(--text-muted); text-align:center; padding: 1.5rem;">${t("hist_empty")}</p>`;
      return;
    }

    listEl.innerHTML = calcHistory
      .map(
        (item) => `
        <div class="history-item">
          <div>
            <span class="badge-pill ${item.type === "Cubic" ? "purple" : ""}">${item.type}</span>
            <div class="history-eq">${item.equation}</div>
          </div>
          <div class="history-res">
            <strong>${item.roots}</strong>
            <span style="margin-left:0.6rem; font-size:0.8rem; opacity:0.7;">(${item.time})</span>
          </div>
        </div>`
      )
      .join("");
  }

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    calcHistory = [];
    localStorage.removeItem("esp_history");
    renderHistory();
  });

  /* ========================================================================
     ៥. ព្រឹត្តិការណ៍សម្រាប់សមីការដឺក្រេទី២ (Quadratic Solver Events)
     ======================================================================== */
  const qA = document.getElementById("quadA");
  const qB = document.getElementById("quadB");
  const qC = document.getElementById("quadC");
  const qPreview = document.getElementById("quadPreview");
  const qResultBox = document.getElementById("quadResultContainer");

  function updateQuadPreview() {
    const a = parseFloat(qA.value) || 0;
    const b = parseFloat(qB.value) || 0;
    const c = parseFloat(qC.value) || 0;
    qPreview.textContent = formatQuadraticEquation(a, b, c);
  }

  function runQuadraticSolver(saveRecord = true) {
    const a = parseFloat(qA.value) || 0;
    const b = parseFloat(qB.value) || 0;
    const c = parseFloat(qC.value) || 0;
    updateQuadPreview();
    const res = solveQuadratic(a, b, c, currentLang);
    qResultBox.innerHTML = renderSolutionHTML(res);
    if (saveRecord) addToHistory("Quadratic", res.equation, res.roots);
  }

  [qA, qB, qC].forEach((inp) => inp.addEventListener("input", updateQuadPreview));
  document.getElementById("solveQuadBtn").addEventListener("click", () => runQuadraticSolver(true));

  document.getElementById("clearQuadBtn").addEventListener("click", () => {
    qA.value = "0";
    qB.value = "0";
    qC.value = "0";
    updateQuadPreview();
    runQuadraticSolver(false);
  });

  document.querySelectorAll(".quad-ex").forEach((chip) => {
    chip.addEventListener("click", () => {
      qA.value = chip.dataset.a;
      qB.value = chip.dataset.b;
      qC.value = chip.dataset.c;
      runQuadraticSolver(true);
    });
  });

  /* ========================================================================
     ៦. ព្រឹត្តិការណ៍សម្រាប់សមីការដឺក្រេទី៣ (Cubic Solver Events)
     ======================================================================== */
  const cA = document.getElementById("cubicA");
  const cB = document.getElementById("cubicB");
  const cC = document.getElementById("cubicC");
  const cD = document.getElementById("cubicD");
  const cPreview = document.getElementById("cubicPreview");
  const cResultBox = document.getElementById("cubicResultContainer");

  function updateCubicPreview() {
    const a = parseFloat(cA.value) || 0;
    const b = parseFloat(cB.value) || 0;
    const c = parseFloat(cC.value) || 0;
    const d = parseFloat(cD.value) || 0;
    cPreview.textContent = formatCubicEquation(a, b, c, d);
  }

  function runCubicSolver(saveRecord = true) {
    const a = parseFloat(cA.value) || 0;
    const b = parseFloat(cB.value) || 0;
    const c = parseFloat(cC.value) || 0;
    const d = parseFloat(cD.value) || 0;
    updateCubicPreview();
    const res = solveCubic(a, b, c, d, currentLang);
    cResultBox.innerHTML = renderSolutionHTML(res);
    if (saveRecord) addToHistory("Cubic", res.equation, res.roots);
  }

  [cA, cB, cC, cD].forEach((inp) => inp.addEventListener("input", updateCubicPreview));
  document.getElementById("solveCubicBtn").addEventListener("click", () => runCubicSolver(true));

  document.getElementById("clearCubicBtn").addEventListener("click", () => {
    cA.value = "0";
    cB.value = "0";
    cC.value = "0";
    cD.value = "0";
    updateCubicPreview();
    runCubicSolver(false);
  });

  document.querySelectorAll(".cubic-ex").forEach((chip) => {
    chip.addEventListener("click", () => {
      cA.value = chip.dataset.a;
      cB.value = chip.dataset.b;
      cC.value = chip.dataset.c;
      cD.value = chip.dataset.d;
      runCubicSolver(true);
    });
  });

  /* ========================================================================
     ៧. ព្រឹត្តិការណ៍ប្តូរភាសា ខ្មែរ 🇰🇭 / អង់គ្លេស 🇬🇧 និងចាប់ផ្តើមកម្មវិធី
     ======================================================================== */
  langToggleBtn.addEventListener("click", () => {
    const nextLang = currentLang === "km" ? "en" : "km";
    applyLanguage(nextLang);
    renderTeamCards(nextLang);
    renderHistory();
    runQuadraticSolver(false);
    runCubicSolver(false);
  });

  // ចាប់ផ្តើមដំណើរការដំបូង (Initial Setup)
  const savedTheme = localStorage.getItem("esp_theme") || "light";
  applyTheme(savedTheme);
  applyLanguage(currentLang);
  renderTeamCards(currentLang);
  renderHistory();
  runQuadraticSolver(false);
  runCubicSolver(false);
});
