/**
 * ម៉ូឌុលគ្រប់គ្រងការបកប្រែភាសា ខ្មែរ 🇰🇭 និង អង់គ្លេស 🇬🇧 (Bilingual System)
 * ផ្ទុកឃ្លាំងពាក្យទាំងអស់ និងមុខងារផ្លាស់ប្តូរភាសាលើផ្ទាំងកម្មវិធីទាំងមូល
 */

const TRANSLATIONS = {
  km: {
    nav_home: "ទំព័រដើម",
    nav_quadratic: "សមីការដឺក្រេទី២",
    nav_cubic: "សមីការដឺក្រេទី៣",
    nav_formulas: "រូបមន្តគណិតវិទ្យា",
    nav_history: "ប្រវត្តិគណនា",
    nav_team: "ក្រុមការងារ",
    nav_about: "អំពីកម្មវិធី",
    sidebar_level: "កម្រិតវិទ្យាល័យ",
    sidebar_subject: "គណិតវិទ្យា និងព័ត៌មានវិទ្យា",
    theme_dark: "ងងឹត",
    theme_light: "ភ្លឺ",
    hero_tag: "ឧបករណ៍សិក្សាគណិតវិទ្យាទំនើប",
    hero_title: "ដោះស្រាយសមីការដឺក្រេទី២ និងទី៣ ប្រកបដោយភាពជាក់លាក់",
    hero_desc: "គណនាឫសពិត ឫសកុំផ្លិច ឫសឌុប និងករណីពិសេសគ្រប់លក្ខខណ្ឌ ព្រមទាំងបង្ហាញរូបមន្ត និងជំហានដោះស្រាយលម្អិតជាភាសាខ្មែរ និងអង់គ្លេស។",
    btn_start_quad: "ដោះស្រាយដឺក្រេទី២",
    btn_start_cubic: "ដោះស្រាយដឺក្រេទី៣",
    feat1_title: "សមីការដឺក្រេទី២",
    feat1_desc: "គណនាតាមឌីសគ្រីមីណង់ (Δ) គាំទ្រទាំង Δ > 0, Δ = 0, Δ < 0 និងករណី a = 0។",
    feat2_title: "សមីការដឺក្រេទី៣",
    feat2_desc: "ប្រើវិធីសាស្ត្រ Cardano & Trigonometric ដើម្បីរកឫសពិតទាំង ៣ ឬឫសកុំផ្លិចឆ្លាស់។",
    feat3_title: "បណ្ណាល័យរូបមន្ត",
    feat3_desc: "សង្ខេបរូបមន្តសំខាន់ៗ ទំនាក់ទំនងរវាងឫស និងមេគុណ (Viète) សម្រាប់សិស្សវិទ្យាល័យ។",
    feat4_title: "ក្រុមការងារគម្រោង",
    feat4_desc: "ស្គាល់ប្រធានក្រុម និងសមាជិកទាំង ៤ រូប ដែលបានចូលរួមអភិវឌ្ឍកម្មវិធីនេះ។",
    quad_heading: "ដោះស្រាយសមីការ 𝑎𝑥² + 𝑏𝑥 + 𝑐 = 0",
    cubic_heading: "ដោះស្រាយសមីការ 𝑎𝑥³ + 𝑏𝑥² + 𝑐𝑥 + 𝑑 = 0",
    coeff_a: "មេគុណ",
    coeff_b: "មេគុណ",
    coeff_c: "ចំនួនថេរ",
    btn_calculate: "គណនា (Calculate)",
    btn_clear: "សម្អាត (Clear)",
    examples_label: "ឧទាហរណ៍សាកល្បងគ្រប់ករណី៖",
    ex_q_two_real: "២ ឫសពិត (Δ > 0)",
    ex_q_double: "ឫសឌុប (Δ = 0)",
    ex_q_complex: "២ ឫសកុំផ្លិច (Δ < 0)",
    ex_q_linear: "សមីការដឺក្រេទី១ (a = 0)",
    ex_q_nosol: "គ្មានចម្លើយ (0 = 5)",
    ex_q_inf: "ចម្លើយរាប់មិនអស់ (0 = 0)",
    ex_c_three_real: "៣ ឫសពិតផ្សេងគ្នា",
    ex_c_triple: "ឫសបីជាន់ (x = 1)",
    ex_c_double_real: "១ ឫសពិត & ១ ឫសឌុប",
    ex_c_one_complex: "១ ឫសពិត & ២ កុំផ្លិច",
    ex_c_quad: "បម្លែងជាដឺក្រេទី២ (a = 0)",
    ex_c_linear: "សមីការដឺក្រេទី១ (a=b=0)",
    ex_c_nosol: "គ្មានចម្លើយ",
    ex_c_inf: "ចម្លើយរាប់មិនអស់",
    result_heading: "លទ្ធផល និងជំហានដោះស្រាយ",
    form_quad_title: "រូបមន្តសមីការដឺក្រេទី២",
    form_q_gt0: "សមីការមានឫសពិតពីរផ្សេងគ្នា៖",
    form_q_eq0: "សមីការមានឫសឌុប (ឫសពិតពីរស្មើគ្នា)៖",
    form_q_lt0: "សមីការមានឫសកុំផ្លិចឆ្លាស់ពីរ៖",
    form_cubic_title: "រូបមន្តសមីការដឺក្រេទី៣ (Cardano)",
    form_c_gt0: "មានឫសពិត ១ និងឫសកុំផ្លិចឆ្លាស់ ២ (រូបមន្ត Cardano)។",
    form_c_eq0: "ឫសទាំងអស់ជាចំនួនពិត ហើយមានឫសឌុប ឬឫសបីជាន់។",
    form_c_lt0: "មានឫសពិត ៣ ផ្សេងគ្នា (ដោះស្រាយតាមត្រីកោណមាត្រ cos/arccos)។",
    hist_title: "ប្រវត្តិនៃការគណនាសមីការ",
    btn_clear_history: "លុបប្រវត្តិទាំងអស់",
    hist_empty: "មិនទាន់មានប្រវត្តិគណនានៅឡើយទេ។ សូមសាកល្បងដោះស្រាយសមីការ!",
    team_title: "សមាជិកក្រុមអភិវឌ្ឍន៍គម្រោង",
    team_subtitle: "ក្រុមសិស្សវិទ្យាល័យចំនួន ៥ រូប (ប្រធានក្រុម ១ រូប និងសមាជិក ៤ រូប) ដែលបានសហការគ្នាបង្កើតកម្មវិធីនេះ។",
    about_title: "អំពី Equation Solver Pro",
    about_desc: "Equation Solver Pro គឺជាកម្មវិធីគេហទំព័រអប់រំដែលត្រូវបានរចនាឡើងជាពិសេសសម្រាប់សិស្សានុសិស្សកម្រិតវិទ្យាល័យ ដើម្បីងាយស្រួលក្នុងការផ្ទៀងផ្ទាត់ចម្លើយ និងសិក្សាពីជំហានដោះស្រាយសមីការដឺក្រេទី២ និងសមីការដឺក្រេទី៣។",
    about_tech_title: "🛠️ បច្ចេកវិទ្យាប្រើប្រាស់",
    about_feat_title: "✨ លក្ខណៈពិសេស",
    about_li1: "គាំទ្រភាសាខ្មែរ 🇰🇭 និងអង់គ្លេស 🇬🇧 ពេញលេញ",
    about_li2: "ដោះស្រាយគ្រប់ករណីពិសេស (a=0, Δ<0, ឫសឌុប, គ្មានចម្លើយ)",
    about_li3: "ប្តូរពន្លឺ Light Mode និង ងងឹត Dark Mode",
    about_li4: "ដំណើរការលើកុំព្យូទ័រ ថេប្លេត និងទូរស័ព្ទដៃ"
  },
  en: {
    nav_home: "Home",
    nav_quadratic: "Quadratic Solver",
    nav_cubic: "Cubic Solver",
    nav_formulas: "Formulas",
    nav_history: "History",
    nav_team: "Team Work",
    nav_about: "About",
    sidebar_level: "High School Level",
    sidebar_subject: "Mathematics & Computer Science",
    theme_dark: "Dark",
    theme_light: "Light",
    hero_tag: "Modern Educational Math Tool",
    hero_title: "Solve Quadratic & Cubic Equations with Precision",
    hero_desc: "Compute real roots, complex conjugate roots, repeated roots, and degenerate edge cases with full formulas and step-by-step explanations in Khmer and English.",
    btn_start_quad: "Solve Quadratic",
    btn_start_cubic: "Solve Cubic",
    feat1_title: "Quadratic Equations",
    feat1_desc: "Discriminant method (Δ) supporting Δ > 0, Δ = 0, Δ < 0, linear fallback (a = 0), and edge cases.",
    feat2_title: "Cubic Equations",
    feat2_desc: "Cardano & Trigonometric methods to compute all 3 real roots or complex conjugate pairs.",
    feat3_title: "Formula Reference",
    feat3_desc: "Essential algebraic formulas, discriminant rules, and Viète's relations for high school students.",
    feat4_title: "Project Team",
    feat4_desc: "Meet our Team Leader and 4 Members who designed, coded, and tested this application.",
    quad_heading: "Solve Equation 𝑎𝑥² + 𝑏𝑥 + 𝑐 = 0",
    cubic_heading: "Solve Equation 𝑎𝑥³ + 𝑏𝑥² + 𝑐𝑥 + 𝑑 = 0",
    coeff_a: "Coeff",
    coeff_b: "Coeff",
    coeff_c: "Constant",
    btn_calculate: "Calculate",
    btn_clear: "Clear",
    examples_label: "Test Preset Examples (All Conditions):",
    ex_q_two_real: "2 Real Roots (Δ > 0)",
    ex_q_double: "Repeated Root (Δ = 0)",
    ex_q_complex: "2 Complex Roots (Δ < 0)",
    ex_q_linear: "Linear Equation (a = 0)",
    ex_q_nosol: "No Solution (0 = 5)",
    ex_q_inf: "Infinite Solutions (0 = 0)",
    ex_c_three_real: "3 Distinct Real Roots",
    ex_c_triple: "Triple Root (x = 1)",
    ex_c_double_real: "1 Real & 1 Double Root",
    ex_c_one_complex: "1 Real & 2 Complex Roots",
    ex_c_quad: "Quadratic Fallback (a = 0)",
    ex_c_linear: "Linear Fallback (a=b=0)",
    ex_c_nosol: "No Solution",
    ex_c_inf: "Infinite Solutions",
    result_heading: "Result & Step-by-Step Solution",
    form_quad_title: "Quadratic Equation Formulas",
    form_q_gt0: "Two distinct real roots:",
    form_q_eq0: "One repeated real root (double root):",
    form_q_lt0: "Two complex conjugate roots:",
    form_cubic_title: "Cubic Equation Formulas (Cardano)",
    form_c_gt0: "One real root and two complex conjugate roots (Cardano's formula).",
    form_c_eq0: "All roots are real with at least one repeated root (double or triple).",
    form_c_lt0: "Three distinct real roots (solved via trigonometric method).",
    hist_title: "Calculation History",
    btn_clear_history: "Clear All History",
    hist_empty: "No calculations recorded yet. Try solving an equation!",
    team_title: "Project Development Team",
    team_subtitle: "A team of 5 high school students (1 Leader and 4 Members) collaborating to build this web application.",
    about_title: "About Equation Solver Pro",
    about_desc: "Equation Solver Pro is an educational web application crafted for high school students to verify answers and understand step-by-step solutions for quadratic and cubic equations.",
    about_tech_title: "🛠️ Technologies Used",
    about_feat_title: "✨ Key Highlights",
    about_li1: "Full Khmer 🇰🇭 & English 🇬🇧 bilingual support",
    about_li2: "Handles all mathematical edge cases (a=0, Δ<0, repeated roots, no solution)",
    about_li3: "Smooth Light Mode and Dark Mode themes",
    about_li4: "Fully responsive on Desktop, Tablet, and Mobile"
  }
};

// ភាសាបច្ចុប្បន្ន (លំនាំដើមគឺភាសាខ្មែរ 'km')
let currentLang = localStorage.getItem("esp_lang") || "km";

/**
 * អនុគមន៍ទាញយកអត្ថបទតាមកូនសោ (Key) និងភាសាបច្ចុប្បន្ន
 */
function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key;
}

/**
 * អនុគមន៍អនុវត្តការបកប្រែលើគ្រប់ធាតុ HTML ដែលមាន attribute [data-i18n]
 */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("esp_lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // ធ្វើបច្ចុប្បន្នភាពទង់ជាតិ និងអក្សរលើប៊ូតុងប្តូរភាសា
  const langFlag = document.getElementById("langFlag");
  const langText = document.getElementById("langText");
  if (langFlag && langText) {
    langFlag.textContent = lang === "km" ? "🇰🇭" : "🇬🇧";
    langText.textContent = lang === "km" ? "ខ្មែរ / EN" : "EN / ខ្មែរ";
  }

  // ធ្វើបច្ចុប្បន្នភាពចំណងជើងទំព័របច្ចុប្បន្នលើ Topbar
  const activeNav = document.querySelector(".nav-item.active");
  const pageHeading = document.getElementById("currentPageTitle");
  if (activeNav && pageHeading) {
    const pageKey = "nav_" + activeNav.getAttribute("data-page");
    pageHeading.textContent = t(pageKey);
  }
}
