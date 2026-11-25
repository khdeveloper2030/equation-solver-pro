/**
 * ម៉ូឌុលដោះស្រាយសមីការដឺក្រេទី២៖ ax² + bx + c = 0
 * គាំទ្រគ្រប់ករណី៖ Δ > 0, Δ = 0, Δ < 0, a = 0 (សមីការដឺក្រេទី១), គ្មានចម្លើយ និងចម្លើយរាប់មិនអស់
 */

const EPSILON = 1e-10;

/**
 * អនុគមន៍សម្រាប់សម្រួលការបង្ហាញលេខទសភាគឱ្យស្អាត (កាត់សូន្យខាងក្រោយដែលមិនចាំបាច់)
 */
function fmtNum(num) {
  if (Math.abs(num) < EPSILON) return "0";
  const rounded = Math.round(num * 1e6) / 1e6;
  return Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(4).replace(/\.?0+$/, "");
}

/**
 * បង្កើតខ្សែអក្សរតំណាងសមីការ ax² + bx + c = 0
 */
function formatQuadraticEquation(a, b, c) {
  const parts = [];
  if (Math.abs(a) >= EPSILON) {
    parts.push(`${a === 1 ? "" : a === -1 ? "-" : fmtNum(a)}x²`);
  }
  if (Math.abs(b) >= EPSILON) {
    const sign = b > 0 && parts.length > 0 ? " + " : b < 0 ? (parts.length > 0 ? " - " : "-") : "";
    const absB = Math.abs(b);
    parts.push(`${sign}${absB === 1 ? "" : fmtNum(absB)}x`);
  }
  if (Math.abs(c) >= EPSILON || parts.length === 0) {
    const sign = c > 0 && parts.length > 0 ? " + " : c < 0 ? (parts.length > 0 ? " - " : "-") : "";
    parts.push(`${sign}${fmtNum(Math.abs(c))}`);
  }
  return `${parts.join("")} = 0`;
}

/**
 * អនុគមន៍គណនាសមីការដឺក្រេទី២ និងបង្កើតជំហានដោះស្រាយជាភាសាខ្មែរ និងអង់គ្លេស
 */
function solveQuadratic(a, b, c, lang = "km") {
  const isKm = lang === "km";
  const eqStr = formatQuadraticEquation(a, b, c);
  const steps = [];
  let condition = "";
  let badgeClass = "success";
  let roots = [];

  // ករណីទី១៖ a = 0 (សមីការក្លាយជាសមីការដឺក្រេទី១ bx + c = 0 ឬករណីពិសេស)
  if (Math.abs(a) < EPSILON) {
    if (Math.abs(b) < EPSILON) {
      if (Math.abs(c) < EPSILON) {
        // 0 = 0 -> ចម្លើយរាប់មិនអស់
        condition = isKm
          ? "ករណីពិសេស៖ a = 0, b = 0, c = 0 (សមីការមានចម្លើយរាប់មិនអស់)"
          : "Special Case: a = 0, b = 0, c = 0 (Infinitely Many Solutions)";
        badgeClass = "purple";
        steps.push({
          title: isKm ? "ជំហានទី ១៖ ពិនិត្យមេគុណ" : "Step 1: Inspect Coefficients",
          math: "0x² + 0x + 0 = 0  ⇒  0 = 0"
        });
        roots.push(isKm ? "∀x ∈ ℝ (គ្រប់ចំនួនពិត x ទាំងអស់)" : "∀x ∈ ℝ (All Real Numbers)");
      } else {
        // 0 = c (c ≠ 0) -> គ្មានចម្លើយ
        condition = isKm
          ? "ករណីពិសេស៖ a = 0, b = 0, c ≠ 0 (សមីការគ្មានចម្លើយ)"
          : "Special Case: a = 0, b = 0, c ≠ 0 (No Solution)";
        badgeClass = "danger";
        steps.push({
          title: isKm ? "ជំហានទី ១៖ ពិនិត្យភាពមិនពិតនៃសមីការ" : "Step 1: Check Contradiction",
          math: `${fmtNum(c)} = 0  (${isKm ? "មិនពិត" : "False"})`
        });
        roots.push(isKm ? "S = ∅ (គ្មានចម្លើយ)" : "S = ∅ (No Solution)");
      }
    } else {
      // សមីការដឺក្រេទី១៖ bx + c = 0 => x = -c / b
      const x = -c / b;
      condition = isKm
        ? "ដោយសារ a = 0 សមីការក្លាយជាសមីការដឺក្រេទី១ (bx + c = 0)"
        : "Since a = 0, this reduces to a Linear Equation (bx + c = 0)";
      badgeClass = "warning";
      steps.push({
        title: isKm ? "ជំហានទី ១៖ សរសេរសមីការដឺក្រេទី១" : "Step 1: Linear Form",
        math: `${fmtNum(b)}x + (${fmtNum(c)}) = 0`
      });
      steps.push({
        title: isKm ? "ជំហានទី ២៖ ទាញរកអញ្ញាត x" : "Step 2: Isolate x",
        math: `x = -(${fmtNum(c)}) / ${fmtNum(b)} = ${fmtNum(x)}`
      });
      roots.push(`x = ${fmtNum(x)}`);
    }

    return { equation: eqStr, condition, badgeClass, steps, roots };
  }

  // ករណីទី២៖ a ≠ 0 (សមីការដឺក្រេទី២ពេញលេញ)
  const delta = b * b - 4 * a * c;

  steps.push({
    title: isKm ? "ជំហានទី ១៖ កំណត់មេគុណ a, b, c" : "Step 1: Identify Coefficients",
    math: `a = ${fmtNum(a)},  b = ${fmtNum(b)},  c = ${fmtNum(c)}`
  });

  steps.push({
    title: isKm ? "ជំហានទី ២៖ គណនាឌីសគ្រីមីណង់ (Δ = b² - 4ac)" : "Step 2: Compute Discriminant (Δ = b² - 4ac)",
    math: `Δ = (${fmtNum(b)})² - 4(${fmtNum(a)})(${fmtNum(c)}) = ${fmtNum(b * b)} - (${fmtNum(4 * a * c)}) = ${fmtNum(delta)}`
  });

  if (delta > EPSILON) {
    // Δ > 0៖ ឫសពិតពីរផ្សេងគ្នា
    const sqrtD = Math.sqrt(delta);
    const x1 = (-b + sqrtD) / (2 * a);
    const x2 = (-b - sqrtD) / (2 * a);

    condition = isKm
      ? "ដោយសារ Δ > 0 សមីការមានឫសពិតពីរផ្សេងគ្នា"
      : "Since Δ > 0, the equation has Two Distinct Real Roots";
    badgeClass = "success";

    steps.push({
      title: isKm ? "ជំហានទី ៣៖ គណនាឫសការេនៃ Δ" : "Step 3: Square Root of Δ",
      math: `√Δ = √${fmtNum(delta)} ≈ ${fmtNum(sqrtD)}`
    });
    steps.push({
      title: isKm ? "ជំហានទី ៤៖ អនុវត្តរូបមន្តឫស x₁ និង x₂" : "Step 4: Apply Quadratic Formula",
      math: `x₁ = (-b + √Δ) / 2a = (${fmtNum(-b)} + ${fmtNum(sqrtD)}) / ${fmtNum(2 * a)} = ${fmtNum(x1)}  |  x₂ = (${fmtNum(-b)} - ${fmtNum(sqrtD)}) / ${fmtNum(2 * a)} = ${fmtNum(x2)}`
    });

    roots.push(`x₁ = ${fmtNum(x1)}`);
    roots.push(`x₂ = ${fmtNum(x2)}`);
  } else if (Math.abs(delta) <= EPSILON) {
    // Δ = 0៖ ឫសឌុប
    const x = -b / (2 * a);
    condition = isKm
      ? "ដោយសារ Δ = 0 សមីការមានឫសឌុប (ឫសពិតពីរស្មើគ្នា)"
      : "Since Δ = 0, the equation has One Repeated Real Root (Double Root)";
    badgeClass = "warning";

    steps.push({
      title: isKm ? "ជំហានទី ៣៖ គណនាឫសឌុប x₁ = x₂ = -b / 2a" : "Step 3: Compute Repeated Root",
      math: `x₁ = x₂ = -(${fmtNum(b)}) / (2 × ${fmtNum(a)}) = ${fmtNum(x)}`
    });

    roots.push(`x₁ = x₂ = ${fmtNum(x)}`);
  } else {
    // Δ < 0៖ ឫសកុំផ្លិចឆ្លាស់ពីរ
    const realPart = -b / (2 * a);
    const imagPart = Math.abs(Math.sqrt(-delta) / (2 * a));

    condition = isKm
      ? "ដោយសារ Δ < 0 សមីការគ្មានឫសពិតទេ តែមានឫសកុំផ្លិចឆ្លាស់ពីរ"
      : "Since Δ < 0, the equation has Two Complex Conjugate Roots";
    badgeClass = "purple";

    steps.push({
      title: isKm ? "ជំហានទី ៣៖ បំបែកផ្នែកពិត និងផ្នែកនិម្មិត (i² = -1)" : "Step 3: Compute Real & Imaginary Parts",
      math: `√Δ = i√${fmtNum(-delta)} ≈ ${fmtNum(Math.sqrt(-delta))}i`
    });
    steps.push({
      title: isKm ? "ជំហានទី ៤៖ សរសេរទម្រង់កុំផ្លិច z = α ± βi" : "Step 4: Write Complex Conjugate Form",
      math: `x₁,₂ = (${fmtNum(-b)} ± ${fmtNum(Math.sqrt(-delta))}i) / ${fmtNum(2 * a)}`
    });

    const realStr = Math.abs(realPart) < EPSILON ? "" : `${fmtNum(realPart)} `;
    const plusSign = Math.abs(realPart) < EPSILON ? "" : "+ ";
    roots.push(`x₁ = ${realStr}${plusSign}${fmtNum(imagPart)}i`);
    roots.push(`x₂ = ${realStr}- ${fmtNum(imagPart)}i`);
  }

  return { equation: eqStr, condition, badgeClass, steps, roots };
}
