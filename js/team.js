/**
 * ម៉ូឌុលគ្រប់គ្រងទិន្នន័យក្រុមការងារ (Team Work Module)
 * បង្ហាញប្រធានក្រុម ១ រូប និងសមាជិក ៤ រូប ព្រមទាំងរូបភាព JPG តួនាទី និងភារកិច្ច
 */

const TEAM_MEMBERS = [
  {
    isLeader: true,
    image: "assets/images/leader.jpg",
    name_km: "ចាន់ សុខា (Sokha Chan)",
    name_en: "Sokha Chan",
    role_km: "ប្រធានក្រុម (Team Leader)",
    role_en: "Team Leader & System Architect",
    resp_km: "ដឹកនាំគម្រោង រៀបចំរចនាសម្ព័ន្ធកូដ ត្រួតពិនិត្យភាពត្រឹមត្រូវនៃក្បួនដោះស្រាយគណិតវិទ្យា និងសម្របសម្រួលការធ្វើបទបង្ហាញ។",
    resp_en: "Led project planning, designed modular code architecture, verified mathematical algorithms, and coordinated final presentation."
  },
  {
    isLeader: false,
    image: "assets/images/member1.jpg",
    name_km: "មាស តារា (Dara Meas)",
    name_en: "Dara Meas",
    role_km: "សមាជិកទី ១ — អ្នកអភិវឌ្ឍសមីការដឺក្រេទី២",
    role_en: "Member 1 — Quadratic Solver Developer",
    resp_km: "សរសេរកូដ JavaScript សម្រាប់ដោះស្រាយសមីការដឺក្រេទី២ គ្រប់ករណីពិសេស (Δ > 0, Δ = 0, Δ < 0, a = 0) និងជំហានពន្យល់។",
    resp_en: "Developed the JavaScript quadratic equation engine handling all discriminant cases, linear fallbacks, and step-by-step outputs."
  },
  {
    isLeader: false,
    image: "assets/images/member2.jpg",
    name_km: "កែម បុប្ផា (Bopha Kem)",
    name_en: "Bopha Kem",
    role_km: "សមាជិកទី ២ — អ្នកអភិវឌ្ឍសមីការដឺក្រេទី៣",
    role_en: "Member 2 — Cubic Solver Developer",
    resp_km: "ស្រាវជ្រាវ និងសរសេរក្បួនដោះស្រាយរូបមន្ត Cardano និងត្រីកោណមាត្រសម្រាប់សមីការដឺក្រេទី៣ ព្រមទាំងផ្ទៀងផ្ទាត់ឫសកុំផ្លិច។",
    resp_en: "Implemented Cardano's and trigonometric formulas for cubic equations, verifying real, repeated, and complex conjugate roots."
  },
  {
    isLeader: false,
    image: "assets/images/member3.jpg",
    name_km: "ហេង វិសាល (Visal Heng)",
    name_en: "Visal Heng",
    role_km: "សមាជិកទី ៣ — អ្នករចនា UI/UX និង Responsive",
    role_en: "Member 3 — UI/UX & Responsive Designer",
    resp_km: "រចនាផ្ទាំងប្រើប្រាស់ទំនើប ពណ៌ជម្រាល (Gradient) មុខងារ Light/Dark Mode និងធានាថាគេហទំព័រដើរស្អាតលើទូរស័ព្ទដៃ។",
    resp_en: "Crafted modern gradient styling, Light/Dark themes, mathematical icons, and mobile-first responsive CSS layouts."
  },
  {
    isLeader: false,
    image: "assets/images/member4.jpg",
    name_km: "លី ស្រីពេជ្រ (Sreypich Ly)",
    name_en: "Sreypich Ly",
    role_km: "សមាជិកទី ៤ — អ្នកបកប្រែ និងត្រួតពិនិត្យគុណភាព",
    role_en: "Member 4 — Bilingual & QA Specialist",
    resp_km: "រៀបចំប្រព័ន្ធបកប្រែភាសាខ្មែរ-អង់គ្លេស គ្រប់គ្រងប្រវត្តិគណនា (History) និងសាកល្បងគ្រប់លក្ខខណ្ឌដើម្បីការពារកំហុស។",
    resp_en: "Built the Khmer-English translation dictionary, managed calculation history, and tested every edge case for accuracy."
  }
];

/**
 * អនុគមន៍បង្ហាញកាតសមាជិកក្រុមទាំង ៥ រូបលើទំព័រ Team Work
 */
function renderTeamCards(lang = "km") {
  const container = document.getElementById("teamContainer");
  if (!container) return;
  const isKm = lang === "km";

  container.innerHTML = TEAM_MEMBERS.map((m) => `
    <article class="team-card ${m.isLeader ? "leader-card" : ""}">
      <img src="${m.image}" alt="${isKm ? m.name_km : m.name_en}" class="team-avatar" />
      <div class="team-body">
        <span class="role-badge">${isKm ? m.role_km : m.role_en}</span>
        <h3 class="team-name">${isKm ? m.name_km : m.name_en}</h3>
        <p class="team-resp">${isKm ? m.resp_km : m.resp_en}</p>
      </div>
    </article>
  `).join("");
}
