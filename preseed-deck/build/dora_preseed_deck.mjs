// Node-oriented editable deck builder for the DORA pre-seed deck.
// The deck is intentionally consumer-first, light editorial, and product-led.

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

const BG_WARM = "#F6F1E8";
const BG_WHITE = "#FEFCF8";
const BG_MINT = "#ECF7F5";
const BG_SKY = "#EEF4F8";
const BG_SAND = "#F7EEE3";
const PANEL = "#FFFFFF";
const PANEL_ALT = "#F8F8F5";
const DARK_PANEL = "#101924";
const DARK_PANEL_2 = "#162230";
const TEXT = "#121826";
const TEXT_SOFT = "#546071";
const TEXT_FAINT = "#8A94A3";
const LINE = "#DBD8D1";
const LINE_STRONG = "#C9C5BD";
const ACCENT = "#10BFA5";
const ACCENT_SOFT = "#D6F7F0";
const YES = "#1EB874";
const NO = "#F05F59";
const ORANGE = "#FF7447";
const GOLD = "#E9B949";
const SKY = "#6BA9D8";
const TRANSPARENT = "#00000000";

const TITLE_FACE = "Outfit";
const BODY_FACE = "Aptos";
const MONO_FACE = "IBM Plex Mono";

const SOURCES = {
  user:
    "User brief, 2026-04-22: DORA Research, Inc.; AIOps-first iGaming operator building a prediction markets platform; B2C consumer framing required; $1M pre-seed SAFE at $10M pre-money; MVP nearing pilot; pilot in Southeast Asia; Founder and CEO John Brackens; expansion focus on Africa, LATAM, and Eastern Europe.",
  claude:
    "Project overview, /Users/john/Sandbox/Taya_NA_Predict/Taya_Na_Predict/CLAUDE.md",
  design:
    "Predict design system, /Users/john/Sandbox/Taya_NA_Predict/Taya_Na_Predict/DESIGN.md",
  preview:
    "Predict design preview, /Users/john/Sandbox/Taya_NA_Predict/Taya_Na_Predict/apps/Phoenix-Predict-Combined/talon-backoffice/packages/app/public/design-preview.html",
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
  gvr:
    "Grand View Research, Online Gambling Market Size, Share and Trends Analysis Report, https://www.grandviewresearch.com/industry-analysis/online-gambling-market",
};

const SLIDES = [
  {
    layout: "cover",
    bg: BG_WARM,
    kicker: "DORA RESEARCH, INC.",
    title: "Prediction markets for mobile sports fans",
    subtitle:
      "DORA is building a consumer-first prediction product that turns live sports attention into simple yes/no markets, with AI-native operations underneath.",
    chips: ["B2C prediction product", "Sports-led wedge", "SE Asia pilot"],
    image: true,
    notes:
      "Reset the story immediately. This is a consumer product deck, not an operator tooling deck. The headline sells the player experience first.",
    sources: ["user", "claude", "design"],
  },
  {
    layout: "comparison",
    bg: BG_WHITE,
    kicker: "THE GAP",
    title: "Sportsbooks overwhelm. Trader-native prediction apps intimidate.",
    subtitle:
      "DORA sits between dense odds boards and pro-trader UX, with a simpler format built for mainstream mobile fans.",
    cards: [
      ["Too dense", "Legacy betting interfaces assume the user already speaks odds, markets, and multi-step ticket flows."],
      ["Too financial", "Many prediction products still feel closer to trading terminals than entertainment products."],
      ["Too much friction", "Casual fans want fast conviction and fast feedback, not a study session before every tap."],
    ],
    notes:
      "This slide answers the framing issue directly: the opportunity is a better consumer format, not a prettier backoffice.",
    sources: ["user", "claude", "design", "preview"],
  },
  {
    layout: "product",
    bg: BG_MINT,
    kicker: "PRODUCT",
    title: "The product experience is built around one-tap conviction",
    subtitle:
      "Discover a live market, buy a side, track the move, and settle without sportsbook complexity.",
    notes:
      "Show the consumer surface clearly. Dark product shells on a light deck make the app feel specific without turning the whole deck into a dark UI demo.",
    sources: ["user", "claude", "design", "preview"],
  },
  {
    layout: "cards",
    bg: BG_SKY,
    kicker: "WHY IT FITS",
    title: "Prediction markets match how mainstream consumers already think",
    subtitle:
      "The format is naturally lighter than a sportsbook and more intuitive than a trading screen.",
    cards: [
      ["Binary by default", "Yes/no questions lower the learning curve and reduce decision fatigue on mobile."],
      ["Fast feedback", "Shorter resolution loops create a tighter entertainment and reward cycle around live events."],
      ["Naturally social", "Prediction questions are easier to discuss, share, and revisit than dense price ladders or parlay sheets."],
    ],
    notes:
      "Make the behavior argument cleanly. The opportunity is that the format itself is easier for mainstream consumers.",
    sources: ["user", "claude", "design"],
  },
  {
    layout: "splitImage",
    bg: BG_SAND,
    kicker: "SPORTS WEDGE",
    title: "Sports is the first wedge because the habit already exists",
    subtitle:
      "Recurring calendars, emotional peaks, and natural yes/no questions make sports the fastest path to repeat behavior.",
    cards: [
      ["Recurring cadence", "There is always another event, which gives the product a built-in rhythm for reactivation."],
      ["High emotion", "Sports creates conviction, rivalry, and instant reasons to take a side."],
      ["Perfect question format", "Will they win? Will they score first? Will they close the series? Sports naturally fits binary markets."],
    ],
    image: true,
    notes:
      "Tie the imagery and the story to real sports behavior. This is where the prior deck drifted furthest away from the actual company.",
    sources: ["user", "claude"],
  },
  {
    layout: "flow",
    bg: BG_WARM,
    kicker: "CONSUMER LOOP",
    title: "The consumer loop compounds around every event",
    subtitle:
      "DORA is designed for a simple repeat cycle that starts with attention and ends with another reason to return.",
    steps: [
      ["Watch", "The user arrives because the event already matters."],
      ["Predict", "They take a side in a fast yes/no market with low cognitive load."],
      ["Track", "Live updates keep the position emotionally attached to the event."],
      ["Settle and return", "Fast resolution creates the next moment to re-engage."],
    ],
    notes:
      "Show the loop as a consumer behavior engine, not a SaaS workflow.",
    sources: ["user", "claude", "design"],
  },
  {
    layout: "ops",
    bg: BG_WHITE,
    kicker: "AI OPS",
    title: "AI Ops is the hidden margin advantage beneath the consumer product",
    subtitle:
      "Agents keep support, CRM, moderation, and market ops lean so the consumer product scales without legacy staffing overhead.",
    cards: [
      ["Support agent", "Handles routine account and help requests around the clock so humans stay on exceptions."],
      ["Lifecycle agent", "Runs onboarding, reactivation, and personalized CRM journeys without a bloated retention team."],
      ["Moderation and trust", "Flags unusual behavior, escalations, and integrity issues before they become expensive support burdens."],
      ["Market ops agent", "Monitors market health, feeds, and workflow exceptions so a smaller team can supervise more activity."],
    ],
    notes:
      "Keep AI Ops in service of the consumer story: lower cost-to-serve and better operational leverage.",
    sources: ["user", "claude", "strategy", "adr3"],
  },
  {
    layout: "chart",
    bg: BG_MINT,
    kicker: "WHY NOW",
    title: "Market growth, sports demand, and better operating economics are lining up",
    subtitle:
      "Online gambling keeps expanding, sports betting already dominates the category, and AI changes the cost curve for consumer support and CRM.",
    metrics: [
      ["$78.66B", "Global online gambling market, 2024", "Grand View Research"],
      ["$153.57B", "Projected market size, 2030", "Grand View Research"],
      [">50%", "Sports betting share of online gambling, 2024", "Grand View Research"],
    ],
    notes:
      "Use current market sizing to support timing, not to replace the product story. The point is that the category is big and sports already matters.",
    sources: ["gvr"],
  },
  {
    layout: "pilot",
    bg: BG_SAND,
    kicker: "PILOT",
    title: "Pilot in Southeast Asia where mobile behavior and live-sports energy already fit",
    subtitle:
      "The first launch market is designed to learn fast on real event cadence before expanding the playbook.",
    cards: [
      ["Mobile-first usage", "The product is built for fast, repeat interactions on mobile, not desktop complexity."],
      ["Live sports culture", "The region offers natural event rhythms and high engagement around sports-driven attention."],
      ["Fast learning loop", "A focused first market gives DORA the fastest path from MVP to live product proof."],
    ],
    image: true,
    notes:
      "Keep this market-specific but not over-quantified. The slide should explain why the pilot geography makes practical sense.",
    sources: ["user", "gvr"],
  },
  {
    layout: "regions",
    bg: BG_SKY,
    kicker: "ROLL OUT",
    title: "Then localize the playbook across Africa, LATAM, and Eastern Europe",
    subtitle:
      "The expansion motion is consumer-led: repeat the product loop, adapt payments and content, keep the operating stack centralized.",
    regions: [
      ["Southeast Asia", "Pilot market and first live operating playbook."],
      ["Africa", "Mobile engagement and community-led growth patterns support localized consumer products."],
      ["LATAM", "High sports intensity and repeat event behavior can support strong retention loops."],
      ["Eastern Europe", "A strong sports culture and cross-category curiosity can widen the market surface over time."],
    ],
    notes:
      "Expansion should feel like repeating a working consumer playbook, not entering every geography at once.",
    sources: ["user"],
  },
  {
    layout: "stack",
    bg: BG_WHITE,
    kicker: "TRUST STACK",
    title: "Trust is part of the consumer product",
    subtitle:
      "Prediction markets only feel fun when creation, pricing, wallet movement, and settlement feel fast and reliable.",
    cards: [
      ["Real-time markets", "Live pricing, position updates, and market movement keep the product feeling active."],
      ["Wallet + ledger", "The system already carries wallet and ledger foundations forward into the prediction experience."],
      ["Deterministic settlement", "Markets are designed to resolve against objective, declared sources."],
      ["Operator controls", "Backoffice workflows, monitoring, and risk rails keep the live product governable."],
    ],
    notes:
      "This is the light version of the infra story. Investors should feel there is real operating depth without getting dragged into architecture for architecture's sake.",
    sources: ["claude", "strategy", "adr1", "adr3"],
  },
  {
    layout: "cards",
    bg: BG_MINT,
    kicker: "MODEL",
    title: "The model compounds as activity density rises",
    subtitle:
      "More live events and more repeat participation improve engagement while the engine already supports fee rails and lean operating workflows.",
    cards: [
      ["Transaction rails", "The market engine already supports fee-rate controls and the mechanics required for prediction-market economics."],
      ["Event cadence", "Sports-led usage creates frequent return moments, which can grow activity density without reinventing the product every week."],
      ["Cost discipline", "AI-led support and lifecycle workflows aim to hold cost-to-serve down as the player base grows."],
    ],
    notes:
      "This slide should feel disciplined and plausible. No speculative five-year financial theater.",
    sources: ["user", "claude"],
  },
  {
    layout: "team",
    bg: BG_WARM,
    kicker: "TEAM",
    title: "Built by operators who understand gaming and software delivery",
    subtitle:
      "John Brackens leads DORA with domain proximity, execution bias, and a clear view of how consumer gaming products actually have to run.",
    notes:
      "The team slide should feel founder-led and credible, not inflated. Stay close to what the user actually told us.",
    sources: ["user"],
  },
  {
    layout: "raise",
    bg: BG_WHITE,
    kicker: "THE ROUND",
    title: "Raising $1M on a SAFE at a $10M pre-money valuation",
    subtitle:
      "Use of funds is focused: product polish, Southeast Asia pilot execution, and the AI Ops foundation that keeps cost-to-serve lean.",
    metrics: [
      ["$1M", "Pre-seed SAFE", "Current raise"],
      ["$10M", "Pre-money valuation", "Current terms"],
      ["MVP → Pilot", "Primary milestone", "Immediate focus"],
    ],
    notes:
      "The round slide should feel clean and intentional. Investors should know exactly what this money is for.",
    sources: ["user"],
  },
  {
    layout: "close",
    bg: BG_SAND,
    kicker: "THE BET",
    title: "Prediction markets should feel like fandom, not financial trading",
    subtitle:
      "DORA is building a consumer product that is simpler to play, faster to understand, and structurally cheaper to operate than legacy alternatives.",
    chips: ["Consumer-first product", "Sports-led launch", "AI-native operations"],
    image: true,
    notes:
      "Close on the product and category belief, not a generic platform slogan.",
    sources: ["user", "claude"],
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

function normalizeText(text) {
  if (Array.isArray(text)) {
    return text.map((item) => String(item ?? "")).join("\n");
  }
  return String(text ?? "");
}

function textLineCount(text) {
  const value = normalizeText(text);
  if (!value.trim()) return 0;
  return Math.max(1, value.split(/\n/).length);
}

function requiredTextHeight(text, fontSize, lineHeight = 1.18, minHeight = 8) {
  const lines = textLineCount(text);
  if (lines === 0) return minHeight;
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
  if (current) lines.push(current);
  return lines.join("\n");
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

function applyTextStyle(box, text, size, color, bold, face, align, valign, autoFit, insets) {
  box.text = text;
  box.text.fontSize = size;
  box.text.color = color;
  box.text.bold = Boolean(bold);
  box.text.alignment = align;
  box.text.verticalAlignment = valign;
  box.text.typeface = face;
  box.text.insets = insets || { left: 0, right: 0, top: 0, bottom: 0 };
  if (autoFit) {
    box.text.autoFit = autoFit;
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
    color = TEXT,
    bold = false,
    face = BODY_FACE,
    align = "left",
    valign = "top",
    fill = TRANSPARENT,
    line = TRANSPARENT,
    lineWidth = 0,
    autoFit = null,
    checkFit = true,
    role = "text",
    insets = null,
  } = {},
) {
  if (checkFit) {
    assertTextFits(text, h, size, role);
  }
  const box = addShape(slide, "rect", x, y, w, h, fill, line, lineWidth, { slideNo, role });
  applyTextStyle(box, text, size, color, bold, face, align, valign, autoFit, insets);
  recordText(slideNo, box, role, text, x, y, w, h);
  return box;
}

async function addImage(slide, slideNo, config, position, role, sourcePath = null) {
  const image = slide.images.add(await normalizeImageConfig(config));
  image.position = position;
  recordImage(
    slideNo,
    image,
    role,
    sourcePath || config.path || config.uri || "inline-image",
    position.left,
    position.top,
    position.width,
    position.height,
  );
  return image;
}

function addNotes(slide, body, sourceKeys) {
  const sourceLines = (sourceKeys || []).map((key) => `- ${SOURCES[key] || key}`).join("\n");
  slide.speakerNotes.setText(`${body || ""}\n\n[Sources]\n${sourceLines}`);
}

function setBackground(slide, color) {
  slide.background.fill = color;
}

function decorateBackground(slide, slideNo, bg) {
  if (bg === BG_WARM) {
    addShape(slide, "ellipse", 975, -110, 360, 360, "#FFE4D0", TRANSPARENT, 0, { slideNo, role: "bg glow" });
    addShape(slide, "ellipse", -140, 540, 250, 250, "#DCF6EF", TRANSPARENT, 0, { slideNo, role: "bg glow" });
  } else if (bg === BG_MINT) {
    addShape(slide, "ellipse", 960, -120, 380, 380, "#DDF5F0", TRANSPARENT, 0, { slideNo, role: "bg glow" });
    addShape(slide, "ellipse", -180, 570, 280, 280, "#DDE9F5", TRANSPARENT, 0, { slideNo, role: "bg glow" });
  } else if (bg === BG_SKY) {
    addShape(slide, "ellipse", 980, -130, 360, 360, "#E4EDF6", TRANSPARENT, 0, { slideNo, role: "bg glow" });
    addShape(slide, "ellipse", -160, 575, 260, 260, "#DFF5EF", TRANSPARENT, 0, { slideNo, role: "bg glow" });
  } else if (bg === BG_SAND) {
    addShape(slide, "ellipse", 985, -120, 360, 360, "#FFE8D7", TRANSPARENT, 0, { slideNo, role: "bg glow" });
    addShape(slide, "ellipse", -160, 560, 270, 270, "#E8F3F5", TRANSPARENT, 0, { slideNo, role: "bg glow" });
  }
  addShape(slide, "rect", 64, 654, 1152, 1, "#D9D6D0", TRANSPARENT, 0, { slideNo, role: "footer rule" });
}

function addSlideMeta(slide, slideNo, kicker, total) {
  addShape(slide, "ellipse", 64, 44, 10, 10, ACCENT, TRANSPARENT, 0, { slideNo, role: "meta dot" });
  addText(slide, slideNo, String(kicker || "").toUpperCase(), 82, 36, 360, 24, {
    size: 12,
    color: TEXT_SOFT,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "kicker",
  });
  addText(slide, slideNo, `${String(slideNo).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, 1128, 36, 88, 24, {
    size: 12,
    color: TEXT_SOFT,
    bold: true,
    face: MONO_FACE,
    align: "right",
    checkFit: false,
    role: "page number",
  });
}

function addTitleBlock(slide, slideNo, title, subtitle, x, y, w, titleSize = 44) {
  addText(slide, slideNo, title, x, y, w, 170, {
    size: titleSize,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
    role: "title",
  });
  if (subtitle) {
    addText(slide, slideNo, subtitle, x, y + 176, w, 72, {
      size: 18,
      color: TEXT_SOFT,
      face: BODY_FACE,
      role: "subtitle",
    });
  }
}

function addPill(slide, slideNo, x, y, label, { fill = PANEL, line = LINE, color = TEXT, width = null } = {}) {
  const w = width || Math.max(118, Math.min(260, 28 + label.length * 7));
  addShape(slide, "roundRect", x, y, w, 34, fill, line, 1, { slideNo, role: `pill: ${label}` });
  addText(slide, slideNo, label, x + 14, y + 8, w - 28, 18, {
    size: 12,
    color,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "pill label",
  });
  return w;
}

function addSoftCard(slide, slideNo, x, y, w, h, label, body, accent = ACCENT) {
  const compact = h < 120;
  const labelSize = compact ? 12 : 14;
  const bodySize = compact ? 11 : 13;
  const labelY = y + (compact ? 18 : 20);
  const bodyY = y + (compact ? 40 : 50);
  const bodyH = h - (compact ? 52 : 60);
  addShape(slide, "roundRect", x, y, w, h, PANEL, LINE, 1, { slideNo, role: `soft card: ${label}` });
  addShape(slide, "rect", x, y, w, 6, accent, TRANSPARENT, 0, { slideNo, role: `soft card accent: ${label}` });
  addText(slide, slideNo, label, x + 22, labelY, w - 44, 20, {
    size: labelSize,
    color: TEXT,
    bold: true,
    face: MONO_FACE,
    role: "soft card label",
  });
  const wrapped = wrapText(body, Math.max(28, Math.floor(w / 10)));
  addText(slide, slideNo, wrapped, x + 22, bodyY, w - 44, bodyH, {
    size: bodySize,
    color: TEXT_SOFT,
    face: BODY_FACE,
    role: "soft card body",
  });
}

function addMetricCard(slide, slideNo, x, y, w, h, metric, label, note, accent = ACCENT) {
  addShape(slide, "roundRect", x, y, w, h, PANEL, LINE, 1, { slideNo, role: `metric card: ${label}` });
  addShape(slide, "rect", x, y, w, 6, accent, TRANSPARENT, 0, { slideNo, role: `metric card accent: ${label}` });
  addText(slide, slideNo, metric, x + 22, y + 24, w - 44, 50, {
    size: 34,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
    role: "metric value",
  });
  addText(slide, slideNo, label, x + 22, y + 82, w - 44, 42, {
    size: 16,
    color: TEXT_SOFT,
    face: BODY_FACE,
    role: "metric label",
  });
  if (note) {
    addText(slide, slideNo, note, x + 22, y + h - 26, w - 44, 18, {
      size: 10,
      color: TEXT_FAINT,
      face: BODY_FACE,
      checkFit: false,
      role: "metric note",
    });
  }
}

function drawPredictionCard(slide, slideNo, x, y, w, h, { category, question, yes, no, meta, delta, live = false }, compact = false) {
  const pad = compact ? 14 : 18;
  const questionSize = compact ? 12 : 16;
  const priceSize = compact ? 15 : 18;
  addShape(slide, "roundRect", x, y, w, h, DARK_PANEL, "#263242", 1.2, { slideNo, role: `prediction card: ${question}` });
  if (live) {
    addShape(slide, "roundRect", x + pad, y + pad, 48, 20, "#FDE6E3", TRANSPARENT, 0, { slideNo, role: "live pill" });
    addText(slide, slideNo, "LIVE", x + pad + 10, y + pad + 5, 30, 12, {
      size: 10,
      color: NO,
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "live label",
    });
  } else {
    addShape(slide, "roundRect", x + pad, y + pad, 74, 20, "#202B38", TRANSPARENT, 0, { slideNo, role: "category pill" });
    addText(slide, slideNo, category, x + pad + 8, y + pad + 5, 58, 12, {
      size: 10,
      color: TEXT_FAINT,
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "category label",
    });
  }
  addText(slide, slideNo, wrapText(question, compact ? 32 : 30), x + pad, y + (live ? pad + 30 : pad + 32), w - pad * 2, compact ? 54 : 72, {
    size: questionSize,
    color: "#F7FAFD",
    bold: true,
    face: TITLE_FACE,
    role: "prediction question",
  });
  const buttonY = y + h - (compact ? 54 : 64);
  const buttonW = (w - pad * 2 - 10) / 2;
  addShape(slide, "roundRect", x + pad, buttonY, buttonW, compact ? 38 : 44, "#182430", YES, 1, { slideNo, role: "yes button" });
  addShape(slide, "roundRect", x + pad + buttonW + 10, buttonY, buttonW, compact ? 38 : 44, "#182430", NO, 1, { slideNo, role: "no button" });
  addText(slide, slideNo, "YES", x + pad + 12, buttonY + 7, 36, 14, {
    size: 10,
    color: YES,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "yes label",
  });
  addText(slide, slideNo, yes, x + pad + 12, buttonY + (compact ? 18 : 22), 80, 18, {
    size: priceSize,
    color: "#FFFFFF",
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "yes price",
  });
  addText(slide, slideNo, "NO", x + pad + buttonW + 22, buttonY + 7, 26, 14, {
    size: 10,
    color: NO,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "no label",
  });
  addText(slide, slideNo, no, x + pad + buttonW + 22, buttonY + (compact ? 18 : 22), 80, 18, {
    size: priceSize,
    color: "#FFFFFF",
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "no price",
  });
  if (meta) {
    addText(slide, slideNo, meta, x + pad, y + h - (compact ? 86 : 96), w - pad * 2, 14, {
      size: 10,
      color: TEXT_FAINT,
      face: MONO_FACE,
      checkFit: false,
      role: "prediction meta",
    });
  }
  if (delta) {
    addText(slide, slideNo, delta, x + w - pad - 56, y + h - (compact ? 86 : 96), 56, 14, {
      size: 10,
      color: YES,
      bold: true,
      face: MONO_FACE,
      align: "right",
      checkFit: false,
      role: "prediction delta",
    });
  }
}

function drawPhoneShell(slide, slideNo, x, y, w, h, variant) {
  addShape(slide, "roundRect", x, y, w, h, "#0B1118", "#1D2836", 2, { slideNo, role: `phone shell ${variant}` });
  addShape(slide, "roundRect", x + 14, y + 14, w - 28, h - 28, DARK_PANEL, "#243141", 1, { slideNo, role: `phone screen ${variant}` });
  addShape(slide, "roundRect", x + w / 2 - 36, y + 22, 72, 8, "#1E2835", TRANSPARENT, 0, { slideNo, role: "phone notch" });

  const sx = x + 26;
  const sy = y + 42;
  const sw = w - 52;
  const sh = h - 58;

  addText(slide, slideNo, variant === "discover" ? "LIVE MARKETS" : variant === "market" ? "MARKET DETAIL" : "PORTFOLIO", sx, sy, sw, 16, {
    size: 10,
    color: TEXT_FAINT,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "phone eyebrow",
  });

  if (variant === "discover") {
    addShape(slide, "roundRect", sx, sy + 24, sw, 26, "#182430", TRANSPARENT, 0, { slideNo, role: "search bar" });
    addText(slide, slideNo, "Search markets", sx + 12, sy + 32, sw - 24, 12, {
      size: 10,
      color: TEXT_FAINT,
      face: BODY_FACE,
      checkFit: false,
      role: "search placeholder",
    });
    addPill(slide, slideNo, sx, sy + 62, "Soccer", { fill: "#1A2A2E", line: TRANSPARENT, color: ACCENT, width: 74 });
    addPill(slide, slideNo, sx + 82, sy + 62, "Live", { fill: "#2A1B1A", line: TRANSPARENT, color: NO, width: 60 });
    drawPredictionCard(slide, slideNo, sx, sy + 110, sw, 108, {
      category: "SOCCER",
      question: "Will the home side win tonight?",
      yes: "61¢",
      no: "39¢",
      meta: "Vol $12.4K",
      delta: "+4¢",
      live: true,
    }, true);
    drawPredictionCard(slide, slideNo, sx, sy + 228, sw, 108, {
      category: "BASKETBALL",
      question: "Will the total go over 212.5?",
      yes: "54¢",
      no: "46¢",
      meta: "Vol $8.1K",
      delta: "+2¢",
    }, true);
  } else if (variant === "market") {
    addShape(slide, "roundRect", sx, sy + 24, 74, 20, "#FDE6E3", TRANSPARENT, 0, { slideNo, role: "market live pill" });
    addText(slide, slideNo, "LIVE", sx + 12, sy + 29, 40, 10, {
      size: 10,
      color: NO,
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "market live label",
    });
    addText(slide, slideNo, wrapText("Will there be a goal before halftime?", 24), sx, sy + 58, sw, 64, {
      size: 20,
      color: "#FFFFFF",
      bold: true,
      face: TITLE_FACE,
      role: "market title",
    });
    addText(slide, slideNo, "Soccer  |  Live  |  27'", sx, sy + 128, sw, 12, {
      size: 10,
      color: TEXT_FAINT,
      face: MONO_FACE,
      checkFit: false,
      role: "market meta",
    });
    addShape(slide, "roundRect", sx, sy + 154, sw, 52, "#182430", YES, 1, { slideNo, role: "market yes" });
    addShape(slide, "roundRect", sx, sy + 216, sw, 52, "#182430", NO, 1, { slideNo, role: "market no" });
    addText(slide, slideNo, "YES  58¢", sx + 14, sy + 171, sw - 28, 18, {
      size: 18,
      color: "#FFFFFF",
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "market yes value",
    });
    addText(slide, slideNo, "NO   42¢", sx + 14, sy + 233, sw - 28, 18, {
      size: 18,
      color: "#FFFFFF",
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "market no value",
    });
    addShape(slide, "roundRect", sx, sy + 286, sw, 54, "#162230", TRANSPARENT, 0, { slideNo, role: "chart block" });
    addShape(slide, "rect", sx + 14, sy + 318, 24, 6, ACCENT, TRANSPARENT, 0, { slideNo, role: "spark block" });
    addShape(slide, "rect", sx + 44, sy + 306, 24, 18, ACCENT, TRANSPARENT, 0, { slideNo, role: "spark block" });
    addShape(slide, "rect", sx + 74, sy + 296, 24, 28, ACCENT, TRANSPARENT, 0, { slideNo, role: "spark block" });
    addShape(slide, "rect", sx + 104, sy + 300, 24, 24, ORANGE, TRANSPARENT, 0, { slideNo, role: "spark block" });
    addShape(slide, "rect", sx + 134, sy + 288, 24, 36, ACCENT, TRANSPARENT, 0, { slideNo, role: "spark block" });
  } else {
    addShape(slide, "roundRect", sx, sy + 24, sw, 74, "#182430", TRANSPARENT, 0, { slideNo, role: "balance card" });
    addText(slide, slideNo, "Available balance", sx + 14, sy + 38, sw - 28, 14, {
      size: 10,
      color: TEXT_FAINT,
      face: MONO_FACE,
      checkFit: false,
      role: "balance label",
    });
    addText(slide, slideNo, "$428.40", sx + 14, sy + 58, sw - 28, 24, {
      size: 22,
      color: "#FFFFFF",
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "balance value",
    });
    addText(slide, slideNo, "OPEN POSITIONS", sx, sy + 120, sw, 16, {
      size: 10,
      color: TEXT_FAINT,
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "positions label",
    });
    drawPredictionCard(slide, slideNo, sx, sy + 148, sw, 96, {
      category: "SOCCER",
      question: "Will Team A win tonight?",
      yes: "61¢",
      no: "39¢",
      meta: "Entry 56¢",
      delta: "+5¢",
    }, true);
    drawPredictionCard(slide, slideNo, sx, sy + 254, sw, 96, {
      category: "BASKETBALL",
      question: "Will there be a goal before halftime?",
      yes: "58¢",
      no: "42¢",
      meta: "Entry 52¢",
      delta: "+6¢",
    }, true);
  }
}

function drawDenseLegacyBoard(slide, slideNo, x, y, w, h) {
  addShape(slide, "roundRect", x, y, w, h, "#1A2230", "#2B384A", 1, { slideNo, role: "dense board" });
  addText(slide, slideNo, "Typical sportsbook / trader screen", x + 18, y + 18, w - 36, 16, {
    size: 10,
    color: TEXT_FAINT,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "dense board title",
  });
  for (let row = 0; row < 4; row += 1) {
    const rowY = y + 52 + row * 42;
    addShape(slide, "rect", x + 18, rowY, w - 36, 1, "#263242", TRANSPARENT, 0, { slideNo, role: "dense row line" });
    addText(slide, slideNo, row === 0 ? "Team A v Team B" : row === 1 ? "Parlay builder" : row === 2 ? "Spread / total / side" : "More markets / filters", x + 18, rowY + 8, 160, 14, {
      size: 10,
      color: "#DDE5EE",
      face: BODY_FACE,
      checkFit: false,
      role: "dense text",
    });
    for (let col = 0; col < 5; col += 1) {
      const cellX = x + 188 + col * 58;
      addShape(slide, "roundRect", cellX, rowY + 6, 50, 24, "#202B38", "#334154", 1, { slideNo, role: "dense cell" });
      addText(slide, slideNo, col % 2 === 0 ? "2.10" : "+140", cellX + 8, rowY + 13, 34, 10, {
        size: 9,
        color: col % 2 === 0 ? "#FFFFFF" : TEXT_FAINT,
        bold: col % 2 === 0,
        face: MONO_FACE,
        checkFit: false,
        role: "dense cell text",
      });
    }
  }
  addShape(slide, "roundRect", x + 18, y + h - 54, w - 36, 30, "#202B38", TRANSPARENT, 0, { slideNo, role: "dense footer" });
  addText(slide, slideNo, "More markets · odds formats · slips · filters · ladders", x + 28, y + h - 45, w - 56, 12, {
    size: 9,
    color: TEXT_FAINT,
    face: MONO_FACE,
    checkFit: false,
    role: "dense footer text",
  });
}

async function addPhotoPanel(slide, slideNo, x, y, w, h) {
  const imagePath = path.join(REF_DIR, `slide-${String(slideNo).padStart(2, "0")}.png`);
  addShape(slide, "roundRect", x - 10, y - 10, w + 20, h + 20, "#FFFFFFA0", TRANSPARENT, 0, { slideNo, role: "photo frame backer" });
  if (await pathExists(imagePath)) {
    await addImage(
      slide,
      slideNo,
      { path: imagePath, fit: "cover", alt: `Photo plate for slide ${slideNo}` },
      { left: x, top: y, width: w, height: h },
      "photo panel",
      imagePath,
    );
  } else {
    addShape(slide, "rect", x, y, w, h, "#EAE6DE", TRANSPARENT, 0, { slideNo, role: "photo placeholder" });
  }
  addShape(slide, "roundRect", x, y, w, h, TRANSPARENT, LINE_STRONG, 1, { slideNo, role: "photo frame" });
}

function addMiniLabel(slide, slideNo, x, y, label, color = TEXT_SOFT) {
  addText(slide, slideNo, label.toUpperCase(), x, y, 220, 16, {
    size: 10,
    color,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "mini label",
  });
}

function renderCover(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 94, 610, 46);
  let chipX = 64;
  for (const chip of data.chips || []) {
    const used = addPill(slide, slideNo, chipX, 386, chip, {
      fill: PANEL,
      line: LINE,
      color: TEXT,
    });
    chipX += used + 12;
  }
  addMetricCard(slide, slideNo, 64, 440, 210, 132, "MVP", "Current stage", "Nearing pilot", ACCENT);
  addMetricCard(slide, slideNo, 290, 440, 210, 132, "$1M", "SAFE raise", "$10M pre-money", ORANGE);
  addMetricCard(slide, slideNo, 516, 440, 210, 132, "SE Asia", "First launch", "Consumer pilot market", GOLD);
  drawPredictionCard(slide, slideNo, 744, 450, 428, 170, {
    category: "SOCCER LIVE",
    question: "Will the home side win tonight?",
    yes: "61¢",
    no: "39¢",
    meta: "Vol $12.4K",
    delta: "+4¢",
    live: true,
  });
}

function renderComparison(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 520, 36);
  const accents = [ACCENT, ORANGE, GOLD];
  for (let i = 0; i < data.cards.length; i += 1) {
    addSoftCard(slide, slideNo, 64, 320 + i * 108, 520, 92, data.cards[i][0], data.cards[i][1], accents[i % accents.length]);
  }
  addMiniLabel(slide, slideNo, 688, 86, "What people get today");
  drawDenseLegacyBoard(slide, slideNo, 688, 116, 528, 250);
  addMiniLabel(slide, slideNo, 688, 396, "What DORA should feel like", ACCENT);
  drawPredictionCard(slide, slideNo, 688, 422, 528, 170, {
    category: "SOCCER",
    question: "Will there be a goal before halftime?",
    yes: "58¢",
    no: "42¢",
    meta: "Simple yes / no question, clean mobile decision",
    delta: "+6¢",
    live: true,
  });
}

function renderProduct(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 560, 38);
  addPill(slide, slideNo, 64, 300, "Discover", { fill: ACCENT_SOFT, line: TRANSPARENT, color: ACCENT, width: 90 });
  addPill(slide, slideNo, 164, 300, "Trade", { fill: "#FFE8DE", line: TRANSPARENT, color: ORANGE, width: 74 });
  addPill(slide, slideNo, 248, 300, "Track", { fill: "#FFF1D5", line: TRANSPARENT, color: GOLD, width: 74 });
  addPill(slide, slideNo, 332, 300, "Settle", { fill: "#E1EFF8", line: TRANSPARENT, color: SKY, width: 80 });

  drawPhoneShell(slide, slideNo, 648, 136, 186, 450, "discover");
  drawPhoneShell(slide, slideNo, 858, 112, 202, 498, "market");
  drawPhoneShell(slide, slideNo, 1078, 136, 186, 450, "portfolio");

  addSoftCard(slide, slideNo, 64, 366, 520, 124, "What changes", "The player never needs to think in sportsbook complexity. DORA reduces the surface area of the decision to a fast, emotionally clear prediction.", ACCENT);
  addSoftCard(slide, slideNo, 64, 510, 520, 124, "What stays engaging", "Live movement, clear positions, and quick settlement keep the product feeling active without becoming intimidating.", ORANGE);
}

function renderCards(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 720, 38);
  const cardY = 318;
  const gap = 22;
  const cardW = 356;
  const accents = [ACCENT, ORANGE, GOLD];
  for (let i = 0; i < data.cards.length; i += 1) {
    addSoftCard(slide, slideNo, 64 + i * (cardW + gap), cardY, cardW, 216, data.cards[i][0], data.cards[i][1], accents[i % accents.length]);
  }
  if (slideNo === 12) {
    drawPredictionCard(slide, slideNo, 452, 548, 376, 120, {
      category: "ENGINE",
      question: "Fee rails and market controls already belong inside the platform core.",
      yes: "2.0%",
      no: "0.0%",
      meta: "Illustrative engine economics concept",
      delta: "fee rate bps",
    }, true);
  }
}

function renderSplitImage(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 564, 36);
  const accents = [ACCENT, ORANGE, GOLD];
  for (let i = 0; i < data.cards.length; i += 1) {
    addSoftCard(slide, slideNo, 64, 336 + i * 108, 560, 92, data.cards[i][0], data.cards[i][1], accents[i % accents.length]);
  }
}

function renderFlow(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 740, 36);
  const startX = 72;
  const stepW = 270;
  const stepY = 316;
  for (let i = 0; i < data.steps.length; i += 1) {
    const x = startX + i * 298;
    addShape(slide, "roundRect", x, stepY, stepW, 180, PANEL, LINE, 1, { slideNo, role: `step card ${i + 1}` });
    addShape(slide, "ellipse", x + 18, stepY + 20, 34, 34, i === 0 ? ACCENT_SOFT : i === 1 ? "#FFE9DF" : i === 2 ? "#FFF1D8" : "#E4F0F8", TRANSPARENT, 0, { slideNo, role: "step marker" });
    addText(slide, slideNo, String(i + 1), x + 29, stepY + 29, 10, 10, {
      size: 10,
      color: i === 0 ? ACCENT : i === 1 ? ORANGE : i === 2 ? GOLD : SKY,
      bold: true,
      face: MONO_FACE,
      checkFit: false,
      role: "step number",
    });
    addText(slide, slideNo, data.steps[i][0], x + 66, stepY + 22, stepW - 88, 22, {
      size: 18,
      color: TEXT,
      bold: true,
      face: TITLE_FACE,
      role: "step title",
    });
    addText(slide, slideNo, wrapText(data.steps[i][1], 27), x + 22, stepY + 74, stepW - 44, 82, {
      size: 16,
      color: TEXT_SOFT,
      face: BODY_FACE,
      role: "step body",
    });
    if (i < data.steps.length - 1) {
      addShape(slide, "rect", x + stepW, stepY + 88, 28, 2, LINE_STRONG, TRANSPARENT, 0, { slideNo, role: "flow connector" });
      addShape(slide, "ellipse", x + stepW + 28, stepY + 82, 12, 12, LINE_STRONG, TRANSPARENT, 0, { slideNo, role: "flow node" });
    }
  }
  drawPredictionCard(slide, slideNo, 356, 520, 568, 126, {
    category: "MATCHDAY LOOP",
    question: "Every event creates a new moment to arrive, take a side, settle, and return.",
    yes: "Live",
    no: "Pre-match",
    meta: "Product cadence as retention engine",
    delta: "repeat",
    live: true,
  }, true);
}

function renderOps(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 720, 32);
  addShape(slide, "roundRect", 410, 314, 460, 210, DARK_PANEL, "#243141", 1.2, { slideNo, role: "runtime core" });
  addText(slide, slideNo, "CONSUMER RUNTIME", 560, 340, 160, 16, {
    size: 10,
    color: TEXT_FAINT,
    bold: true,
    face: MONO_FACE,
    align: "center",
    checkFit: false,
    role: "runtime eyebrow",
  });
  drawPredictionCard(slide, slideNo, 442, 372, 396, 120, {
    category: "PLAYER VIEW",
    question: "The player sees live markets, quick support, timely prompts, and fast settlement.",
    yes: "Fast",
    no: "Cluttered",
    meta: "AI Ops improves the surface by improving the machine behind it",
    delta: "lean ops",
  }, true);

  const positions = [
    [84, 294, data.cards[0], ACCENT],
    [900, 294, data.cards[1], ORANGE],
    [84, 530, data.cards[2], GOLD],
    [900, 530, data.cards[3], SKY],
  ];
  for (const [x, y, card, accent] of positions) {
    addSoftCard(slide, slideNo, x, y, 300, 124, card[0], card[1], accent);
  }
  addShape(slide, "rect", 384, 378, 26, 2, LINE_STRONG, TRANSPARENT, 0, { slideNo, role: "ops connector" });
  addShape(slide, "rect", 870, 378, 30, 2, LINE_STRONG, TRANSPARENT, 0, { slideNo, role: "ops connector" });
  addShape(slide, "rect", 534, 524, 2, 26, LINE_STRONG, TRANSPARENT, 0, { slideNo, role: "ops connector" });
  addShape(slide, "rect", 744, 524, 2, 26, LINE_STRONG, TRANSPARENT, 0, { slideNo, role: "ops connector" });
}

function renderWhyNow(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 740, 36);

  addShape(slide, "roundRect", 64, 304, 620, 302, PANEL, LINE, 1, { slideNo, role: "chart panel" });
  addText(slide, slideNo, "Global online gambling market", 92, 326, 240, 18, {
    size: 12,
    color: TEXT_SOFT,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "chart title",
  });

  const chart = slide.charts.add("bar");
  chart.position = { left: 92, top: 356, width: 564, height: 214 };
  chart.categories = ["2024", "2030"];
  const series = chart.series.add("Market size");
  series.values = [78.66, 153.57];
  series.fill = ACCENT;
  series.stroke = { style: "solid", fill: ACCENT, width: 0 };
  chart.hasLegend = false;
  chart.title = "";
  chart.plotAreaFill = PANEL;
  chart.barOptions.direction = "column";
  chart.dataLabels.showValue = true;
  chart.dataLabels.position = "outEnd";
  chart.dataLabels.textStyle.typeface = MONO_FACE;
  chart.dataLabels.textStyle.fontSize = 12;
  chart.dataLabels.textStyle.fill = TEXT;
  chart.xAxis.textStyle.typeface = BODY_FACE;
  chart.xAxis.textStyle.fontSize = 12;
  chart.xAxis.textStyle.fill = TEXT_SOFT;
  chart.yAxis.textStyle.typeface = BODY_FACE;
  chart.yAxis.textStyle.fontSize = 11;
  chart.yAxis.textStyle.fill = TEXT_SOFT;

  addMetricCard(slide, slideNo, 726, 304, 490, 84, data.metrics[0][0], data.metrics[0][1], data.metrics[0][2], ACCENT);
  addMetricCard(slide, slideNo, 726, 408, 490, 84, data.metrics[1][0], data.metrics[1][1], data.metrics[1][2], ORANGE);
  addMetricCard(slide, slideNo, 726, 512, 490, 84, data.metrics[2][0], data.metrics[2][1], data.metrics[2][2], GOLD);
}

function renderRegions(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 760, 42);
  const nodeXs = [176, 462, 748, 1034];
  addShape(slide, "rect", 176, 326, 858, 2, LINE_STRONG, TRANSPARENT, 0, { slideNo, role: "region line" });
  const fills = [ACCENT, ORANGE, GOLD, SKY];
  for (let i = 0; i < data.regions.length; i += 1) {
    addShape(slide, "ellipse", nodeXs[i] - 10, 316, 20, 20, fills[i], TRANSPARENT, 0, { slideNo, role: "region node" });
    addShape(slide, "roundRect", nodeXs[i] - 122, 360, 244, 174, PANEL, LINE, 1, { slideNo, role: "region card" });
    addText(slide, slideNo, data.regions[i][0], nodeXs[i] - 100, 388, 200, 28, {
      size: 18,
      color: TEXT,
      bold: true,
      face: TITLE_FACE,
      align: "center",
      role: "region title",
    });
    addText(slide, slideNo, wrapText(data.regions[i][1], 24), nodeXs[i] - 98, 430, 196, 84, {
      size: 13,
      color: TEXT_SOFT,
      face: BODY_FACE,
      align: "center",
      role: "region body",
    });
    addShape(slide, "rect", nodeXs[i] - 122, 360, 244, 6, fills[i], TRANSPARENT, 0, { slideNo, role: "region accent" });
  }
}

function renderStack(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 720, 38);
  const positions = [
    [64, 310],
    [648, 310],
    [64, 494],
    [648, 494],
  ];
  const accents = [ACCENT, ORANGE, GOLD, SKY];
  for (let i = 0; i < data.cards.length; i += 1) {
    addSoftCard(slide, slideNo, positions[i][0], positions[i][1], 568, 158, data.cards[i][0], data.cards[i][1], accents[i]);
  }
}

function renderTeam(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 730, 36);

  addShape(slide, "roundRect", 64, 306, 430, 296, PANEL, LINE, 1, { slideNo, role: "founder card" });
  addShape(slide, "ellipse", 92, 342, 86, 86, ACCENT_SOFT, TRANSPARENT, 0, { slideNo, role: "founder monogram" });
  addText(slide, slideNo, "JB", 115, 370, 40, 24, {
    size: 26,
    color: ACCENT,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "founder initials",
  });
  addText(slide, slideNo, "John Brackens", 206, 344, 220, 34, {
    size: 28,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
    role: "founder name",
  });
  addText(slide, slideNo, "Founder and CEO", 206, 384, 160, 18, {
    size: 12,
    color: TEXT_SOFT,
    bold: true,
    face: MONO_FACE,
    checkFit: false,
    role: "founder role",
  });
  addText(slide, slideNo, wrapText("Leading DORA with iGaming context, software delivery discipline, and a clear view of how consumer gaming products actually have to operate.", 36), 92, 452, 334, 84, {
    size: 17,
    color: TEXT_SOFT,
    face: BODY_FACE,
    role: "founder bio",
  });

  addSoftCard(slide, slideNo, 536, 314, 304, 118, "iGaming depth", "The team comes from environments where product, ops, and trust have to work together in real money contexts.", ACCENT);
  addSoftCard(slide, slideNo, 872, 314, 344, 118, "Execution bias", "DORA is being built by operators who care about shipping, not by a deck-first team inventing a category on paper.", ORANGE);
  addSoftCard(slide, slideNo, 536, 460, 304, 118, "Consumer lens", "The company is designing for player behavior first: attention, friction, retention, and trust.", GOLD);
  addSoftCard(slide, slideNo, 872, 460, 344, 118, "AI-native operations", "AI Ops is treated as an advantage in support and lifecycle execution, not a replacement for product-market fit.", SKY);
}

function renderRaise(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 86, 760, 38);
  addMetricCard(slide, slideNo, 64, 304, 356, 138, data.metrics[0][0], data.metrics[0][1], data.metrics[0][2], ACCENT);
  addMetricCard(slide, slideNo, 462, 304, 356, 138, data.metrics[1][0], data.metrics[1][1], data.metrics[1][2], ORANGE);
  addMetricCard(slide, slideNo, 860, 304, 356, 138, data.metrics[2][0], data.metrics[2][1], data.metrics[2][2], GOLD);

  addSoftCard(slide, slideNo, 64, 496, 356, 140, "Product polish", "Refine the consumer surface so the pilot feels like a real product, not just functioning infrastructure.", ACCENT);
  addSoftCard(slide, slideNo, 462, 496, 356, 140, "Pilot execution", "Launch and learn in Southeast Asia with a focused first-market playbook.", ORANGE);
  addSoftCard(slide, slideNo, 860, 496, 356, 140, "AI Ops foundation", "Deepen the support, CRM, and operations systems that aim to keep staff OPEX structurally lean.", GOLD);
}

function renderClose(slide, slideNo, data) {
  addTitleBlock(slide, slideNo, data.title, data.subtitle, 64, 108, 598, 42);
  let chipX = 64;
  for (const chip of data.chips || []) {
    const used = addPill(slide, slideNo, chipX, 372, chip, {
      fill: PANEL,
      line: LINE,
      color: TEXT,
    });
    chipX += used + 12;
  }
  addSoftCard(slide, slideNo, 64, 452, 560, 126, "Why it matters", "The breakout consumer prediction product will feel emotional, simple, and mobile-native on the surface, while the operations underneath get smarter and leaner over time.", ACCENT);
  drawPredictionCard(slide, slideNo, 704, 458, 438, 158, {
    category: "THE BET",
    question: "Can DORA become the prediction product sports fans actually want to use?",
    yes: "YES",
    no: "NOW",
    meta: "Pre-seed story: product first, operations advantage underneath",
    delta: "compound",
  }, true);
}

async function renderSlide(presentation, slideNo, data) {
  const slide = presentation.slides.add();
  setBackground(slide, data.bg || BG_WARM);
  decorateBackground(slide, slideNo, data.bg || BG_WARM);
  addSlideMeta(slide, slideNo, data.kicker, SLIDES.length);

  if (data.image) {
    const imagePath = path.join(REF_DIR, `slide-${String(slideNo).padStart(2, "0")}.png`);
    if (await pathExists(imagePath)) {
      const x = slideNo === 1 ? 724 : slideNo === 15 ? 734 : 700;
      const y = slideNo === 1 ? 74 : slideNo === 15 ? 92 : 152;
      const w = slideNo === 1 ? 492 : slideNo === 15 ? 474 : 516;
      const h = slideNo === 1 ? 344 : slideNo === 15 ? 284 : 386;
      await addPhotoPanel(slide, slideNo, x, y, w, h);
    }
  }

  switch (data.layout) {
    case "cover":
      renderCover(slide, slideNo, data);
      break;
    case "comparison":
      renderComparison(slide, slideNo, data);
      break;
    case "product":
      renderProduct(slide, slideNo, data);
      break;
    case "cards":
      renderCards(slide, slideNo, data);
      break;
    case "splitImage":
      renderSplitImage(slide, slideNo, data);
      break;
    case "flow":
      renderFlow(slide, slideNo, data);
      break;
    case "ops":
      renderOps(slide, slideNo, data);
      break;
    case "chart":
      renderWhyNow(slide, slideNo, data);
      break;
    case "pilot":
      renderSplitImage(slide, slideNo, data);
      break;
    case "regions":
      renderRegions(slide, slideNo, data);
      break;
    case "stack":
      renderStack(slide, slideNo, data);
      break;
    case "team":
      renderTeam(slide, slideNo, data);
      break;
    case "raise":
      renderRaise(slide, slideNo, data);
      break;
    case "close":
      renderClose(slide, slideNo, data);
      break;
    default:
      throw new Error(`Unknown slide layout: ${data.layout}`);
  }

  addNotes(slide, data.notes, data.sources);
}

async function createDeck() {
  await ensureDirs();
  if (!SLIDES.length) {
    throw new Error("SLIDES must contain at least one slide.");
  }
  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  for (let idx = 1; idx <= SLIDES.length; idx += 1) {
    await renderSlide(presentation, idx, SLIDES[idx - 1]);
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
