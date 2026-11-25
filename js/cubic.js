/**
 * ម៉ូឌុលដោះស្រាយសមីការដឺក្រេទី៣៖ ax³ + bx² + cx + d = 0
 * ប្រើប្រាស់វិធីសាស្ត្រ Cardano និង ត្រីកោណមាត្រ (Trigonometric Method)
 * ព្រមទាំងគាំទ្រករណី a = 0 (ទម្លាក់មកដឺក្រេទី២ ដឺក្រេទី១ គ្មានចម្លើយ និងចម្លើយរាប់មិនអស់)
 */

/**
 * បង្កើតខ្សែអក្សរតំណាងសមីការ ax³ + bx² + cx + d = 0
 */
function formatCubicEquation(a, b, c, d) {
  const terms = [];
  const addTerm = (coef, suffix) => {
    if (Math.abs(coef) < EPSILON) return;
    const sign = coef > 0 && terms.length > 0 ? " + " : coef < 0 ? (terms.length > 0 ? " - " : "-") : "";
    const absC = Math.abs(coef);
    const numStr = suffix && absC === 1 ? "" : fmtNum(absC);
    terms.push(`${sign}${numStr}${suffix}`);
  };
  addTerm(a, "x³");
  addTerm(b, "x²");
  addTerm(c, "x");
  addTerm(d, "");
  if (terms.length === 0) terms.push("0");
  return `${terms.join("")} = 0`;
}

/**
 * អនុគមន៍គណនាឫសគូបនៃចំនួនពិត (គាំទ្រចំនួនអវិជ្ជមាន)
 */
function cbrt(x) {
  return x < 0 ? -Math.pow(-x, 1 / 3) : Math.pow(x, 1 / 3);
}

/**
 * អនុគមន៍គណនាសមីការដឺក្រេទី៣ និងបង្កើតជំហានដោះស្រាយលម្អិត
 */
function solveCubic(a, b, c, d, lang = "km") {
  const isKm = lang === "km";
  const eqStr = formatCubicEquation(a, b, c, d);
  const steps = [];
  let condition = "";
  let badgeClass = "success";
  let roots = [];

  // ប្រសិនបើ a = 0 សមីការធ្លាក់មកត្រឹមសមីការដឺក្រេទី២ bx² + cx + d = 0
  if (Math.abs(a) < EPSILON) {
    const fallback = solveQuadratic(b, c, d, lang);
    fallback.equation = eqStr;
    fallback.steps.unshift({
      title: isKm ? "ជំហានដំបូង៖ ពិនិត្យមេគុណ a = 0" : "Initial Step: Check Coefficient a = 0",
      math: isKm
        ? "ដោយសារ a = 0 សមីការដឺក្រេទី៣ ក្លាយជាសមីការដឺក្រេទី២ ឬដឺក្រេទី១"
        : "Since a = 0, the cubic equation reduces to a lower-degree equation"
    });
    return fallback;
  }

  // បម្លែងសមីការទៅជាទម្រង់ស្តង់ដារ៖ x³ + Ax² + Bx + C = 0
  const A = b / a;
  const B = c / a;
  const C = d / a;

  steps.push({
    title: isKm ? "ជំហានទី ១៖ ចែកអង្គទាំងពីរនឹង a ដើម្បីបានទម្រង់ x³ + Ax² + Bx + C = 0" : "Step 1: Normalize by dividing by a",
    math: `A = ${fmtNum(A)},  B = ${fmtNum(B)},  C = ${fmtNum(C)}`
  });

  // បម្លែងទៅជា Depressed Cubic: t³ + pt + q = 0 ដោយតាង x = t - A/3
  const shift = A / 3;
  const p = B - (A * A) / 3;
  const q = (2 * Math.pow(A, 3)) / 27 - (A * B) / 3 + C;

  steps.push({
    title: isKm ? "ជំហានទី ២៖ បម្លែងទៅជាសមីការបង្រួម t³ + pt + q = 0 (តាង x = t - b/3a)" : "Step 2: Depressed Cubic t³ + pt + q = 0 (x = t - b/3a)",
    math: `p = ${fmtNum(p)},  q = ${fmtNum(q)},  x = t - (${fmtNum(shift)})`
  });

  // គណនាឌីសគ្រីមីណង់ Cardano: Δ₀ = (q/2)² + (p/3)³
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  steps.push({
    title: isKm ? "ជំហានទី ៣៖ គណនាឌីសគ្រីមីណង់ Δ₀ = (q/2)² + (p/3)³" : "Step 3: Compute Cubic Discriminant Δ₀",
    math: `Δ₀ = (${fmtNum(q / 2)})² + (${fmtNum(p / 3)})³ = ${fmtNum(discriminant)}`
  });

  if (discriminant > EPSILON) {
    // ករណី Δ₀ > 0៖ មានឫសពិត ១ និងឫសកុំផ្លិចឆ្លាស់ ២
    const sqrtD = Math.sqrt(discriminant);
    const u = cbrt(-q / 2 + sqrtD);
    const v = cbrt(-q / 2 - sqrtD);

    const x1 = u + v - shift;
    const realPart = -(u + v) / 2 - shift;
    const imagPart = Math.abs(((u - v) * Math.sqrt(3)) / 2);

    condition = isKm
      ? "ដោយសារ Δ₀ > 0 សមីការមានឫសពិត ១ និងឫសកុំផ្លិចឆ្លាស់ ២"
      : "Since Δ₀ > 0, there is 1 Real Root and 2 Complex Conjugate Roots";
    badgeClass = "purple";

    steps.push({
      title: isKm ? "ជំហានទី ៤៖ អនុវត្តរូបមន្ត Cardano ស្វែងរក u និង v" : "Step 4: Apply Cardano's Formula for u and v",
      math: `u = ∛(-q/2 + √Δ₀) = ${fmtNum(u)}  |  v = ∛(-q/2 - √Δ₀) = ${fmtNum(v)}`
    });

    const realStr = Math.abs(realPart) < EPSILON ? "" : `${fmtNum(realPart)} `;
    const plusSign = Math.abs(realPart) < EPSILON ? "" : "+ ";

    roots.push(`x₁ = ${fmtNum(x1)}`);
    roots.push(`x₂ = ${realStr}${plusSign}${fmtNum(imagPart)}i`);
    roots.push(`x₃ = ${realStr}- ${fmtNum(imagPart)}i`);
  } else if (Math.abs(discriminant) <= EPSILON) {
    // ករណី Δ₀ = 0៖ ឫសទាំងអស់ជាចំនួនពិត (ឫសបីជាន់ ឬ ឫសឌុប)
    if (Math.abs(p) < EPSILON && Math.abs(q) < EPSILON) {
      const x1 = -shift;
      condition = isKm
        ? "ដោយសារ Δ₀ = 0 និង p = q = 0 សមីការមានឫសបីជាន់ (Triple Root)"
        : "Since Δ₀ = 0 and p = q = 0, there is One Triple Real Root";
      badgeClass = "warning";

      steps.push({
        title: isKm ? "ជំហានទី ៤៖ គណនាឫសបីជាន់ x₁ = x₂ = x₃ = -b / 3a" : "Step 4: Compute Triple Root",
        math: `x₁ = x₂ = x₃ = ${fmtNum(x1)}`
      });
      roots.push(`x₁ = x₂ = x₃ = ${fmtNum(x1)}`);
    } else {
      const u = cbrt(-q / 2);
      const x1 = 2 * u - shift;
      const x2 = -u - shift;

      condition = isKm
        ? "ដោយសារ Δ₀ = 0 សមីការមានឫសពិតទាំងអស់ (១ ឫសទោល និង ១ ឫសឌុប)"
        : "Since Δ₀ = 0, all roots are real (1 Simple Root & 1 Double Root)";
      badgeClass = "warning";

      steps.push({
        title: isKm ? "ជំហានទី ៤៖ គណនាឫសពិត និងឫសឌុប" : "Step 4: Compute Simple and Repeated Roots",
        math: `u = ∛(-q/2) = ${fmtNum(u)}  ⇒  x₁ = 2u - b/3a = ${fmtNum(x1)},  x₂ = x₃ = -u - b/3a = ${fmtNum(x2)}`
      });
      roots.push(`x₁ = ${fmtNum(x1)}`);
      roots.push(`x₂ = x₃ = ${fmtNum(x2)}`);
    }
  } else {
    // ករណី Δ₀ < 0៖ មានឫសពិត ៣ ផ្សេងគ្នា (ប្រើរូបមន្តត្រីកោណមាត្រ)
    const r = Math.sqrt(-Math.pow(p / 3, 3));
    let cosPhi = -q / (2 * r);
    cosPhi = Math.max(-1, Math.min(1, cosPhi)); // ការពារកំហុសលេខទសភាគលើស [-1, 1]
    const phi = Math.acos(cosPhi);
    const twoSqrtNegP3 = 2 * Math.sqrt(-p / 3);

    const x1 = twoSqrtNegP3 * Math.cos(phi / 3) - shift;
    const x2 = twoSqrtNegP3 * Math.cos((phi + 2 * Math.PI) / 3) - shift;
    const x3 = twoSqrtNegP3 * Math.cos((phi + 4 * Math.PI) / 3) - shift;

    // តម្រៀបឫសពិតពីតូចទៅធំដើម្បីងាយស្រួលអាន
    const sortedRoots = [x1, x2, x3].sort((m, n) => m - n);

    condition = isKm
      ? "ដោយសារ Δ₀ < 0 សមីការមានឫសពិត ៣ ផ្សេងគ្នា (វិធីត្រីកោណមាត្រ)"
      : "Since Δ₀ < 0, the equation has Three Distinct Real Roots";
    badgeClass = "success";

    steps.push({
      title: isKm ? "ជំហានទី ៤៖ គណនាមុំ φ = arccos(-q / 2√(-p/3)³)" : "Step 4: Compute Angle φ via Trigonometry",
      math: `φ = ${fmtNum(phi)} rad  |  xₖ = 2√(-p/3)·cos((φ + 2kπ)/3) - b/3a`
    });

    roots.push(`x₁ = ${fmtNum(sortedRoots[0])}`);
    roots.push(`x₂ = ${fmtNum(sortedRoots[1])}`);
    roots.push(`x₃ = ${fmtNum(sortedRoots[2])}`);
  }

  return { equation: eqStr, condition, badgeClass, steps, roots };
}
