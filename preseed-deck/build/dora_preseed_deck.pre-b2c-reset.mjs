// Node-oriented editable pro deck builder.
// Run this after editing SLIDES, SOURCES, and layout functions.
// The init script installs a sibling node_modules/@oai/artifact-tool package link
// and package.json with type=module for shell-run eval builders. Run with the
// Node executable from Codex workspace dependencies or the platform-appropriate
// command emitted by the init script.
// Do not use pnpm exec from the repo root or any Node binary whose module
// lookup cannot resolve the builder's sibling node_modules/@oai/artifact-tool.

const fs = await import("node:fs/promises");
const path = await import("node:path");
const { Presentation, PresentationFile } = await import("@oai/artifact-tool");

const W = 1280;
const H = 720;

const DECK_ID = "dora-preseed-deck";
const OUT_DIR = "/Users/john/Sandbox/Taya_NA_Predict/Taya_Na_Predict/outputs/dora-preseed-deck/final";
const REF_DIR = "/Users/john/Sandbox/Taya_NA_Predict/Taya_Na_Predict/tmp/slides/dora-preseed-deck/reference-images";
const SCRATCH_DIR = path.resolve(process.env.PPTX_SCRATCH_DIR || path.join("tmp", "slides", DECK_ID));
const PREVIEW_DIR = path.join(SCRATCH_DIR, "preview");
const VERIFICATION_DIR = path.join(SCRATCH_DIR, "verification");
const INSPECT_PATH = path.join(SCRATCH_DIR, "inspect.ndjson");
const MAX_RENDER_VERIFY_LOOPS = 3;

const INK = "#F3F9FD";
const GRAPHITE = "#BED0DA";
const MUTED = "#7E99AA";
const PAPER = "#071019";
const PAPER_96 = "#091321EE";
const WHITE = "#FFFFFF";
const ACCENT = "#15E3C0";
const ACCENT_DARK = "#77F3DD";
const GOLD = "#F0A84A";
const CORAL = "#FF7A66";
const TRANSPARENT = "#00000000";

const TITLE_FACE = "Poppins";
const BODY_FACE = "Aptos";
const MONO_FACE = "Aptos Mono";

const FALLBACK_PLATE_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=";

const SOURCES = {
  user:
    "User brief, 2026-04-22: DORA Research, Inc.; AIOps-first iGaming operator building a prediction markets platform; $1M pre-seed SAFE at $10M pre-money; MVP nearing pilot; pilot in Southeast Asia; Founder and CEO John Brackens; expansion focus on Africa, LATAM, and Eastern Europe.",
  north_star:
    "Phoenix North Star, /Users/john/Sandbox/Taya_NA_Predict/reference/v2-prediction/docs/NORTH_STAR.md",
  strategy:
    "Phoenix Prediction Platform Strategy, /Users/john/Sandbox/Taya_NA_Predict/reference/v2-prediction/docs/PREDICTION_PLATFORM_STRATEGY.md",
  execution:
    "Phoenix Pivot Execution Plan, /Users/john/Sandbox/Taya_NA_Predict/reference/v2-prediction/docs/PREDICTION_PLATFORM_EXECUTION_PLAN.md",
  adr1:
    "ADR-001 Domain Boundaries, /Users/john/Sandbox/Taya_NA_Predict/reference/v2-prediction/pivot-adrs/pivot/adrs/ADR-001-domain-boundaries.md",
  adr3:
    "ADR-003 Settlement Source Policy, /Users/john/Sandbox/Taya_NA_Predict/reference/v2-prediction/pivot-adrs/pivot/adrs/ADR-003-settlement-source-policy.md",
  repo:
    "TAYA NA README, /Users/john/Sandbox/Taya_NA_Predict/Taya_Na_Predict/README.md",
  design:
    "Predict design system, /Users/john/Sandbox/Taya_NA_Predict/Taya_Na_Predict/DESIGN.md",
  gvr:
    "Grand View Research, Online Gambling Market Size, Share and Trends Analysis Report, https://www.grandviewresearch.com/industry-analysis/online-gambling-market",
  mckinsey:
    "McKinsey, The economic potential of generative AI: the next productivity frontier, https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
};

const SLIDES = [
  {
    kicker: "DORA RESEARCH, INC.",
    title: "Launch prediction markets without building a large ops team",
    subtitle:
      "DORA is building an AI-native operator stack that helps one partner launch lean first, then scale through repeatable playbooks.",
    moment: "Southeast Asia pilot first",
    notes:
      "Lead with the office-hours version of the story: one partner, one painful workflow, one pilot, then expansion. The point is a better operator model, not a bigger feature list.",
    sources: ["user"],
  },
  {
    kicker: "THE GAP",
    title: "Prediction products still inherit sportsbook-era operating drag",
    subtitle:
      "Legacy operators add people, tools, and handoffs every time they launch a new product or region.",
    cards: [
      [
        "Manual Ops",
        "Onboarding, support, and market workflows still rely on too many humans touching the same queue.",
      ],
      [
        "Stack Sprawl",
        "Vendors, dashboards, and CRM systems multiply instead of becoming one operating layer.",
      ],
      [
        "Margin Drag",
        "New launches become hiring plans, not software rollouts.",
      ],
    ],
    notes:
      "Make the pain economic and operational. The pitch is strongest when investors can see how the current workaround turns every launch into added headcount.",
    sources: ["user", "repo"],
  },
  {
    kicker: "FIRST WEDGE",
    title: "The first sale is one operator, one painful workflow, one pilot",
    subtitle:
      "We are optimizing for the operator leader who wants prediction markets without staffing the old model.",
    metrics: [
      ["1 buyer", "COO or Head of Ops launching prediction markets", "Initial buyer profile"],
      ["1 workflow", "Remove manual support, CRM, and launch-ops handoffs", "First paid pain"],
      ["SE Asia", "Pilot region for the first deployment", "Initial launch market"],
    ],
    notes:
      "This is the key narrowing move. Replace broad geographic and category language with one specific buyer profile and one specific painful workflow.",
    sources: ["user"],
  },
  {
    kicker: "WEDGE",
    title: "The first product is a managed pilot stack, not the whole future-state platform",
    subtitle:
      "DORA only needs to solve the first operator's launch problem well enough to create the repeatable playbook.",
    cards: [
      [
        "Launch Fast",
        "Give one partner the tools to launch prediction markets without building a large ops bench first.",
      ],
      [
        "Run Lean",
        "Use supervised agents across support, lifecycle, and launch workflows from day one.",
      ],
      [
        "Prove Reuse",
        "Turn the pilot into the template for the next region and the next operator.",
      ],
    ],
    notes:
      "Office-hours recommendation: do not oversell the whole future-state platform. Sell the first operator outcome and let the bigger platform emerge as the mechanism behind it.",
    sources: ["user"],
  },
  {
    kicker: "AI OPS",
    title: "AI Ops matters because it attacks the staffing problem directly",
    subtitle:
      "The product gets attention. The operating model is what makes the economics work.",
    cards: [
      [
        "Service Agent",
        "Handles routine account questions and triage so humans stay on exceptions.",
      ],
      [
        "Lifecycle Agent",
        "Runs onboarding, deposit readiness, and reactivation loops without a large CRM team.",
      ],
      [
        "Ops Agent",
        "Monitors feeds, market health, and workflow status so a smaller team can supervise more.",
      ],
    ],
    notes:
      "Stay disciplined here: the promise is not zero people, it is materially more leverage per operator and per launch.",
    sources: ["user", "mckinsey"],
  },
  {
    kicker: "COST TO SERVE",
    title: "The savings show up across the highest-cost workflows",
    subtitle:
      "DORA compresses the parts of the journey that usually force operators to keep hiring.",
    cards: [
      [
        "Onboarding",
        "Guide KYC, deposit readiness, and first-trade confidence without manual handholding.",
      ],
      [
        "Support",
        "Resolve routine account and product questions before they hit a human queue.",
      ],
      [
        "Retention",
        "Run personalized CRM and reactivation flows without building a large lifecycle team.",
      ],
    ],
    notes:
      "This slide turns AI Ops from a buzzword into three concrete cost centers the platform can compress.",
    sources: ["user", "mckinsey"],
  },
  {
    kicker: "PLATFORM",
    title: "The platform exists to make the pilot repeatable",
    subtitle:
      "Under the surface, DORA is building the operating system that lets the first win become the next launch.",
    cards: [
      [
        "Prediction Core",
        "Market templates, risk rails, and deterministic settlement create a clean product surface.",
      ],
      [
        "Operator Layer",
        "Wallet, support, lifecycle, and agent supervision sit in one control plane.",
      ],
      [
        "Reuse Engine",
        "The same stack can be localized and relaunched instead of rebuilt from scratch.",
      ],
    ],
    notes:
      "The platform slide should feel like evidence that the pilot can compound, not a distraction from the wedge.",
    sources: ["strategy", "adr1", "adr3", "execution"],
  },
  {
    kicker: "ROLL OUT",
    title: "Start with a Southeast Asia pilot, then scale through repeatable launch playbooks",
    subtitle:
      "The first pilot is not the destination. It is the template for the next corridor.",
    cards: [
      [
        "Pilot Wedge",
        "Win one operator in Southeast Asia and prove the agent-led model on a live launch.",
      ],
      [
        "Expansion Corridors",
        "Africa, LATAM, and Eastern Europe follow once the launch system is tight.",
      ],
      [
        "Why This Compounds",
        "One reusable stack means each new market should cost less to stand up than the last.",
      ],
    ],
    notes:
      "This is the expansion logic office hours wanted: one pilot, then a repeatable launch system.",
    sources: ["user"],
  },
  {
    kicker: "FIRST SURFACE",
    title: "Prediction markets are the right first product surface",
    subtitle:
      "They give DORA a focused, high-engagement format where operator leverage matters.",
    cards: [
      [
        "Tight Market Set",
        "A focused product surface is easier to launch and supervise than a sprawling sportsbook.",
      ],
      [
        "Repeat Activity",
        "Prediction mechanics create frequent return behavior and a clear engagement loop.",
      ],
      [
        "Good Pilot Story",
        "The format is differentiated enough to matter, but narrow enough to prove quickly.",
      ],
    ],
    notes:
      "Answer the office-hours question directly: why prediction markets first? The slide should make that decision look intentional, not arbitrary.",
    sources: ["user", "strategy", "north_star"],
  },
  {
    kicker: "ECONOMICS",
    title: "Lean economics are designed into the model",
    subtitle:
      "The goal is not zero people. It is materially more operator leverage per launch.",
    cards: [
      [
        "Lower Cost-to-Serve",
        "Replace repetitive support and ops work with supervised agents.",
      ],
      [
        "Faster Launches",
        "Reuse the stack and workflow playbook instead of rebuilding per market.",
      ],
      [
        "Higher Human Leverage",
        "Keep the core team focused on partners, risk, and top users.",
      ],
    ],
    notes:
      "Keep the economics claim structural. The office-hours memo is right that exact margin claims are not the deck's strongest proof point yet.",
    sources: ["user", "mckinsey"],
  },
  {
    kicker: "WHY NOW",
    title: "The market is growing just as AI changes the operating curve",
    subtitle:
      "DORA is entering while online gambling expands and automation becomes good enough to compress cost-to-serve.",
    metrics: [
      ["$78.66B", "Online gambling market size, 2024", "Grand View Research"],
      ["$153.57B", "Projected market size by 2030", "Grand View Research"],
      ["Up to 50%", "Lower human-serviced care volume", "Directional benchmark"],
    ],
    notes:
      "Use the first two metrics as market proof and the third as directional support, not as a DORA result. The slide exists to support timing, not to replace the wedge story.",
    sources: ["user", "gvr", "mckinsey"],
  },
  {
    kicker: "MVP TO PILOT",
    title: "The next milestone is proof, not scale",
    subtitle:
      "The current job is to turn MVP into a pilot that validates the operating model.",
    cards: [
      [
        "Build Readiness",
        "Prediction-market architecture and operator workflows are already defined.",
      ],
      [
        "Pilot Proof",
        "The first real signal is one operator using DORA to launch lean.",
      ],
      [
        "90-Day Goal",
        "Come out of pilot with proof the wedge works, not a vague story about future scale.",
      ],
    ],
    notes:
      "Office-hours theme: proof before scale. This slide should feel like execution discipline, not roadmap bloat.",
    sources: ["user", "strategy", "execution", "adr1", "adr3"],
  },
  {
    kicker: "TEAM",
    title: "This is a founder-led operator bet",
    subtitle:
      "John Brackens is building DORA with iGaming context and software-delivery discipline.",
    cards: [
      [
        "John Brackens",
        "Founder and CEO focused on the first wedge, the first partner, and the operating model.",
      ],
      [
        "Domain Proximity",
        "The team understands operator pain, launch friction, and where staffing drag really lives.",
      ],
      [
        "Execution Bias",
        "DORA is being built by people who care about shipping and operational reality, not just vision.",
      ],
    ],
    notes:
      "The team story should make investors feel this is not a tourist team. The founder's insight into operator pain is the key asset here.",
    sources: ["user"],
  },
  {
    kicker: "THE ROUND",
    title: "Raising $1M on a SAFE at a $10M pre-money valuation",
    subtitle:
      "Use of funds is straightforward: pilot execution, agent infrastructure, and first-launch readiness.",
    metrics: [
      ["$1M", "Pre-seed SAFE", "Current raise"],
      ["$10M", "Pre-money valuation", "User-provided terms"],
      ["12-18 mo.", "Runway to pilot and launch", "Planning assumption"],
    ],
    notes:
      "Keep the use of funds simple and credible. The round should sound disciplined, not oversized for the proof point DORA needs next.",
    sources: ["user"],
  },
  {
    kicker: "THE VISION",
    title: "Win the first pilot, then define the AI-native operator model",
    subtitle:
      "DORA does not need to win the whole market first. It needs one wedge that compounds.",
    cards: [
      [
        "One Buyer",
        "Start with a specific operator and a workflow painful enough to pay for now.",
      ],
      [
        "One Playbook",
        "Turn the Southeast Asia pilot into a repeatable launch system.",
      ],
      [
        "Bigger Company",
        "If that works, DORA becomes more than a product. It becomes the operating model.",
      ],
    ],
    notes:
      "This is the office-hours close in slide form: do not sell the whole future-state company first. Sell the compounding wedge.",
    sources: ["user", "strategy"],
  },
];

const inspectRecords = [];

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readImageBlob(imagePath) {
  const bytes = await fs.readFile(imagePath);
  if (!bytes.byteLength) {
    throw new Error(`Image file is empty: ${imagePath}`);
  }
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

async function normalizeImageConfig(config) {
  if (!config.path) {
    return config;
  }
  const { path: imagePath, ...rest } = config;
  return {
    ...rest,
    blob: await readImageBlob(imagePath),
  };
}

async function ensureDirs() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const obsoleteFinalArtifacts = [
    "preview",
    "verification",
    "inspect.ndjson",
    ["presentation", "proto.json"].join("_"),
    ["quality", "report.json"].join("_"),
  ];
  for (const obsolete of obsoleteFinalArtifacts) {
    await fs.rm(path.join(OUT_DIR, obsolete), { recursive: true, force: true });
  }
  await fs.mkdir(SCRATCH_DIR, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  await fs.mkdir(VERIFICATION_DIR, { recursive: true });
}

function lineConfig(fill = TRANSPARENT, width = 0) {
  return { style: "solid", fill, width };
}

function recordShape(slideNo, shape, role, shapeType, x, y, w, h) {
  if (!slideNo) return;
  inspectRecords.push({
    kind: "shape",
    slide: slideNo,
    id: shape?.id || `slide-${slideNo}-${role}-${inspectRecords.length + 1}`,
    role,
    shapeType,
    bbox: [x, y, w, h],
  });
}

function addShape(slide, geometry, x, y, w, h, fill = TRANSPARENT, line = TRANSPARENT, lineWidth = 0, meta = {}) {
  const shape = slide.shapes.add({
    geometry,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: lineConfig(line, lineWidth),
  });
  recordShape(meta.slideNo, shape, meta.role || geometry, geometry, x, y, w, h);
  return shape;
}

function normalizeText(text) {
  if (Array.isArray(text)) {
    return text.map((item) => String(item ?? "")).join("\n");
  }
  return String(text ?? "");
}

function textLineCount(text) {
  const value = normalizeText(text);
  if (!value.trim()) {
    return 0;
  }
  return Math.max(1, value.split(/\n/).length);
}

function requiredTextHeight(text, fontSize, lineHeight = 1.18, minHeight = 8) {
  const lines = textLineCount(text);
  if (lines === 0) {
    return minHeight;
  }
  return Math.max(minHeight, lines * fontSize * lineHeight);
}

function assertTextFits(text, boxHeight, fontSize, role = "text") {
  const required = requiredTextHeight(text, fontSize);
  const tolerance = Math.max(2, fontSize * 0.08);
  if (normalizeText(text).trim() && boxHeight + tolerance < required) {
    throw new Error(
      `${role} text box is too short: height=${boxHeight.toFixed(1)}, required>=${required.toFixed(1)}, ` +
        `lines=${textLineCount(text)}, fontSize=${fontSize}, text=${JSON.stringify(normalizeText(text).slice(0, 90))}`,
    );
  }
}

function wrapText(text, widthChars) {
  const words = normalizeText(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > widthChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines.join("\n");
}

function recordText(slideNo, shape, role, text, x, y, w, h) {
  const value = normalizeText(text);
  inspectRecords.push({
    kind: "textbox",
    slide: slideNo,
    id: shape?.id || `slide-${slideNo}-${role}-${inspectRecords.length + 1}`,
    role,
    text: value,
    textPreview: value.replace(/\n/g, " | ").slice(0, 180),
    textChars: value.length,
    textLines: textLineCount(value),
    bbox: [x, y, w, h],
  });
}

function recordImage(slideNo, image, role, imagePath, x, y, w, h) {
  inspectRecords.push({
    kind: "image",
    slide: slideNo,
    id: image?.id || `slide-${slideNo}-${role}-${inspectRecords.length + 1}`,
    role,
    path: imagePath,
    bbox: [x, y, w, h],
  });
}

function applyTextStyle(box, text, size, color, bold, face, align, valign, autoFit, listStyle) {
  box.text = text;
  box.text.fontSize = size;
  box.text.color = color;
  box.text.bold = Boolean(bold);
  box.text.alignment = align;
  box.text.verticalAlignment = valign;
  box.text.typeface = face;
  box.text.insets = { left: 0, right: 0, top: 0, bottom: 0 };
  if (autoFit) {
    box.text.autoFit = autoFit;
  }
  if (listStyle) {
    box.text.style = "list";
  }
}

function addText(
  slide,
  slideNo,
  text,
  x,
  y,
  w,
  h,
  {
    size = 22,
    color = INK,
    bold = false,
    face = BODY_FACE,
    align = "left",
    valign = "top",
    fill = TRANSPARENT,
    line = TRANSPARENT,
    lineWidth = 0,
    autoFit = null,
    listStyle = false,
    checkFit = true,
    role = "text",
  } = {},
) {
  if (!checkFit && textLineCount(text) > 1) {
    throw new Error("checkFit=false is only allowed for single-line headers, footers, and captions.");
  }
  if (checkFit) {
    assertTextFits(text, h, size, role);
  }
  const box = addShape(slide, "rect", x, y, w, h, fill, line, lineWidth);
  applyTextStyle(box, text, size, color, bold, face, align, valign, autoFit, listStyle);
  recordText(slideNo, box, role, text, x, y, w, h);
  return box;
}

async function addImage(slide, slideNo, config, position, role, sourcePath = null) {
  const image = slide.images.add(await normalizeImageConfig(config));
  image.position = position;
  recordImage(slideNo, image, role, sourcePath || config.path || config.uri || "inline-data-url", position.left, position.top, position.width, position.height);
  return image;
}

async function addPlate(slide, slideNo, opacityPanel = false) {
  slide.background.fill = PAPER;
  const platePath = path.join(REF_DIR, `slide-${String(slideNo).padStart(2, "0")}.png`);
  if (await pathExists(platePath)) {
    await addImage(
      slide,
      slideNo,
      { path: platePath, fit: "cover", alt: `Text-free art-direction plate for slide ${slideNo}` },
      { left: 0, top: 0, width: W, height: H },
      "art plate",
      platePath,
    );
  } else {
    await addImage(
      slide,
      slideNo,
      { dataUrl: FALLBACK_PLATE_DATA_URL, fit: "cover", alt: `Fallback blank art plate for slide ${slideNo}` },
      { left: 0, top: 0, width: W, height: H },
      "fallback art plate",
      "fallback-data-url",
    );
  }
  if (opacityPanel) {
    addShape(slide, "rect", 0, 0, W, H, "#06111AD0", TRANSPARENT, 0, { slideNo, role: "plate readability overlay" });
  }
}

function addHeader(slide, slideNo, kicker, idx, total) {
  addText(slide, slideNo, String(kicker || "").toUpperCase(), 64, 34, 430, 24, {
    size: 13,
    color: ACCENT_DARK,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "header",
  });
  addText(slide, slideNo, `${String(idx).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, 1114, 34, 104, 24, {
    size: 13,
    color: ACCENT_DARK,
    bold: true,
    face: MONO_FACE,
    align: "right",
    checkFit: false,
    role: "header",
  });
  addShape(slide, "rect", 64, 64, 1152, 2, "#1F4F5C", TRANSPARENT, 0, { slideNo, role: "header rule" });
  addShape(slide, "ellipse", 57, 57, 16, 16, ACCENT, TRANSPARENT, 0, { slideNo, role: "header marker" });
}

function addTitleBlock(slide, slideNo, title, subtitle = null, x = 64, y = 86, w = 780, dark = false) {
  const titleColor = dark ? WHITE : INK;
  const bodyColor = dark ? GRAPHITE : GRAPHITE;
  addText(slide, slideNo, title, x, y, w, 132, {
    size: 38,
    color: titleColor,
    bold: true,
    face: TITLE_FACE,
    role: "title",
  });
  if (subtitle) {
    addText(slide, slideNo, subtitle, x + 2, y + 138, Math.min(w, 720), 82, {
      size: 18,
      color: bodyColor,
      face: BODY_FACE,
      role: "subtitle",
    });
  }
}

function addIconBadge(slide, slideNo, x, y, accent = ACCENT, kind = "signal") {
  addShape(slide, "ellipse", x, y, 54, 54, "#0D1B2AE6", "#31535F", 1.2, { slideNo, role: "icon badge" });
  if (kind === "flow") {
    addShape(slide, "ellipse", x + 13, y + 18, 10, 10, accent, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
    addShape(slide, "ellipse", x + 31, y + 27, 10, 10, accent, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
    addShape(slide, "rect", x + 22, y + 25, 19, 3, ACCENT_DARK, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
  } else if (kind === "layers") {
    addShape(slide, "roundRect", x + 13, y + 15, 26, 13, accent, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
    addShape(slide, "roundRect", x + 18, y + 24, 26, 13, GOLD, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
    addShape(slide, "roundRect", x + 23, y + 33, 20, 10, CORAL, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
  } else {
    addShape(slide, "rect", x + 16, y + 29, 6, 12, accent, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
    addShape(slide, "rect", x + 25, y + 21, 6, 20, accent, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
    addShape(slide, "rect", x + 34, y + 14, 6, 27, accent, TRANSPARENT, 0, { slideNo, role: "icon glyph" });
  }
}

function addCard(slide, slideNo, x, y, w, h, label, body, { accent = ACCENT, fill = "#0B1624EC", line = "#2D5361", iconKind = "signal" } = {}) {
  if (h < 156) {
    throw new Error(`Card is too short for editable pro-deck copy: height=${h.toFixed(1)}, minimum=156.`);
  }
  addShape(slide, "roundRect", x, y, w, h, fill, line, 1.2, { slideNo, role: `card panel: ${label}` });
  addShape(slide, "rect", x, y, 8, h, accent, TRANSPARENT, 0, { slideNo, role: `card accent: ${label}` });
  addIconBadge(slide, slideNo, x + 22, y + 24, accent, iconKind);
  addText(slide, slideNo, label, x + 88, y + 22, w - 108, 28, {
    size: 15,
    color: ACCENT_DARK,
    bold: true,
    face: MONO_FACE,
    role: "card label",
  });
  const wrapped = wrapText(body, Math.max(28, Math.floor(w / 13)));
  const bodyY = y + 86;
  const bodyH = h - (bodyY - y) - 22;
  if (bodyH < 54) {
    throw new Error(`Card body area is too short: height=${bodyH.toFixed(1)}, cardHeight=${h.toFixed(1)}, label=${JSON.stringify(label)}.`);
  }
  addText(slide, slideNo, wrapped, x + 24, bodyY, w - 48, bodyH, {
    size: 16,
    color: INK,
    face: BODY_FACE,
    role: `card body: ${label}`,
  });
}

function addMetricCard(slide, slideNo, x, y, w, h, metric, label, note = null, accent = ACCENT) {
  if (h < 132) {
    throw new Error(`Metric card is too short for editable pro-deck copy: height=${h.toFixed(1)}, minimum=132.`);
  }
  addShape(slide, "roundRect", x, y, w, h, "#0B1624EC", "#2D5361", 1.2, { slideNo, role: `metric panel: ${label}` });
  addShape(slide, "rect", x, y, w, 7, accent, TRANSPARENT, 0, { slideNo, role: `metric accent: ${label}` });
  addText(slide, slideNo, metric, x + 22, y + 24, w - 44, 54, {
    size: 34,
    color: INK,
    bold: true,
    face: TITLE_FACE,
    role: "metric value",
  });
  addText(slide, slideNo, label, x + 24, y + 82, w - 48, 38, {
    size: 16,
    color: GRAPHITE,
    face: BODY_FACE,
    role: "metric label",
  });
  if (note) {
    addText(slide, slideNo, note, x + 24, y + h - 42, w - 48, 22, {
      size: 10,
      color: MUTED,
      face: BODY_FACE,
      role: "metric note",
    });
  }
}

function addNotes(slide, body, sourceKeys) {
  const sourceLines = (sourceKeys || []).map((key) => `- ${SOURCES[key] || key}`).join("\n");
  slide.speakerNotes.setText(`${body || ""}\n\n[Sources]\n${sourceLines}`);
}

function addReferenceCaption(slide, slideNo) {
  return undefined;
}

async function slideCover(presentation) {
  const slideNo = 1;
  const data = SLIDES[0];
  const slide = presentation.slides.add();
  await addPlate(slide, slideNo);
  addShape(slide, "rect", 0, 0, 760, H, "#04111BE0", TRANSPARENT, 0, { slideNo, role: "cover contrast overlay" });
  addShape(slide, "rect", 64, 86, 7, 455, ACCENT, TRANSPARENT, 0, { slideNo, role: "cover accent rule" });
  addText(slide, slideNo, data.kicker, 86, 88, 520, 26, {
    size: 13,
    color: ACCENT_DARK,
    bold: true,
    face: MONO_FACE,
    role: "kicker",
  });
  addText(slide, slideNo, data.title, 82, 130, 785, 184, {
    size: 48,
    color: WHITE,
    bold: true,
    face: TITLE_FACE,
    role: "cover title",
  });
  addText(slide, slideNo, data.subtitle, 86, 326, 610, 86, {
    size: 20,
    color: GRAPHITE,
    face: BODY_FACE,
    role: "cover subtitle",
  });
  addShape(slide, "roundRect", 86, 456, 390, 92, "#0B1725EC", "#2D5361", 1.2, { slideNo, role: "cover moment panel" });
  addText(slide, slideNo, data.moment || "Replace with core idea", 112, 478, 336, 40, {
    size: 23,
    color: WHITE,
    bold: true,
    face: TITLE_FACE,
    role: "cover moment",
  });
  addNotes(slide, data.notes, data.sources);
}

async function slideCards(presentation, idx) {
  const data = SLIDES[idx - 1];
  const slide = presentation.slides.add();
  await addPlate(slide, idx);
  addShape(slide, "rect", 0, 0, W, H, "#03101888", TRANSPARENT, 0, { slideNo: idx, role: "content contrast overlay" });
  addHeader(slide, idx, data.kicker, idx, SLIDES.length);
  addTitleBlock(slide, idx, data.title, data.subtitle, 64, 86, 760, true);
  const cards = data.cards?.length
    ? data.cards
    : [
        ["Replace", "Add a specific, sourced point for this slide."],
        ["Author", "Use native PowerPoint chart objects for charts; use deterministic geometry for cards and callouts."],
        ["Verify", "Render previews, inspect them at readable size, and fix actionable layout issues within 3 total render loops."],
      ];
  const cols = Math.min(3, cards.length);
  const cardW = (1114 - (cols - 1) * 24) / cols;
  const iconKinds = ["signal", "flow", "layers"];
  for (let cardIdx = 0; cardIdx < cols; cardIdx += 1) {
    const [label, body] = cards[cardIdx];
    const x = 84 + cardIdx * (cardW + 24);
    addCard(slide, idx, x, 388, cardW, 216, label, body, { iconKind: iconKinds[cardIdx % iconKinds.length] });
  }
  addNotes(slide, data.notes, data.sources);
}

async function slideMetrics(presentation, idx) {
  const data = SLIDES[idx - 1];
  const slide = presentation.slides.add();
  await addPlate(slide, idx);
  addShape(slide, "rect", 0, 0, W, H, "#03101890", TRANSPARENT, 0, { slideNo: idx, role: "metrics contrast overlay" });
  addHeader(slide, idx, data.kicker, idx, SLIDES.length);
  addTitleBlock(slide, idx, data.title, data.subtitle, 64, 86, 700, true);
  const metrics = data.metrics || [
    ["00", "Replace metric", "Source"],
    ["00", "Replace metric", "Source"],
    ["00", "Replace metric", "Source"],
  ];
  const accents = [ACCENT, GOLD, CORAL];
  for (let metricIdx = 0; metricIdx < Math.min(3, metrics.length); metricIdx += 1) {
    const [metric, label, note] = metrics[metricIdx];
    addMetricCard(slide, idx, 92 + metricIdx * 370, 404, 330, 174, metric, label, note, accents[metricIdx % accents.length]);
  }
  addNotes(slide, data.notes, data.sources);
}

async function createDeck() {
  await ensureDirs();
  if (!SLIDES.length) {
    throw new Error("SLIDES must contain at least one slide.");
  }
  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  await slideCover(presentation);
  for (let idx = 2; idx <= SLIDES.length; idx += 1) {
    const data = SLIDES[idx - 1];
    if (data.metrics) {
      await slideMetrics(presentation, idx);
    } else {
      await slideCards(presentation, idx);
    }
  }
  return presentation;
}

async function saveBlobToFile(blob, filePath) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  await fs.writeFile(filePath, bytes);
}

async function writeInspectArtifact(presentation) {
  inspectRecords.unshift({
    kind: "deck",
    id: DECK_ID,
    slideCount: presentation.slides.count,
    slideSize: { width: W, height: H },
  });
  presentation.slides.items.forEach((slide, index) => {
    inspectRecords.splice(index + 1, 0, {
      kind: "slide",
      slide: index + 1,
      id: slide?.id || `slide-${index + 1}`,
    });
  });
  const lines = inspectRecords.map((record) => JSON.stringify(record)).join("\n") + "\n";
  await fs.writeFile(INSPECT_PATH, lines, "utf8");
}

async function currentRenderLoopCount() {
  const logPath = path.join(VERIFICATION_DIR, "render_verify_loops.ndjson");
  if (!(await pathExists(logPath))) return 0;
  const previous = await fs.readFile(logPath, "utf8");
  return previous.split(/\r?\n/).filter((line) => line.trim()).length;
}

async function nextRenderLoopNumber() {
  return (await currentRenderLoopCount()) + 1;
}

async function appendRenderVerifyLoop(presentation, previewPaths, pptxPath) {
  const logPath = path.join(VERIFICATION_DIR, "render_verify_loops.ndjson");
  const priorCount = await currentRenderLoopCount();
  const record = {
    kind: "render_verify_loop",
    deckId: DECK_ID,
    loop: priorCount + 1,
    maxLoops: MAX_RENDER_VERIFY_LOOPS,
    capReached: priorCount + 1 >= MAX_RENDER_VERIFY_LOOPS,
    timestamp: new Date().toISOString(),
    slideCount: presentation.slides.count,
    previewCount: previewPaths.length,
    previewDir: PREVIEW_DIR,
    inspectPath: INSPECT_PATH,
    pptxPath,
  };
  await fs.appendFile(logPath, JSON.stringify(record) + "\n", "utf8");
  return record;
}

async function verifyAndExport(presentation) {
  await ensureDirs();
  const nextLoop = await nextRenderLoopNumber();
  if (nextLoop > MAX_RENDER_VERIFY_LOOPS) {
    throw new Error(
      `Render/verify/fix loop cap reached: ${MAX_RENDER_VERIFY_LOOPS} total renders are allowed. ` +
        "Do not rerender; note any remaining visual issues in the final response.",
    );
  }
  await writeInspectArtifact(presentation);
  const previewPaths = [];
  for (let idx = 0; idx < presentation.slides.items.length; idx += 1) {
    const slide = presentation.slides.items[idx];
    const preview = await presentation.export({ slide, format: "png", scale: 1 });
    const previewPath = path.join(PREVIEW_DIR, `slide-${String(idx + 1).padStart(2, "0")}.png`);
    await saveBlobToFile(preview, previewPath);
    previewPaths.push(previewPath);
  }
  const pptxBlob = await PresentationFile.exportPptx(presentation);
  const pptxPath = path.join(OUT_DIR, "output.pptx");
  await pptxBlob.save(pptxPath);
  const loopRecord = await appendRenderVerifyLoop(presentation, previewPaths, pptxPath);
  return { pptxPath, loopRecord };
}

const presentation = await createDeck();
const result = await verifyAndExport(presentation);
console.log(result.pptxPath);
