import { useEffect, useRef } from 'react'

const AURORA: [number, number, number][] = [
  [110, 231, 183], // mint
  [45, 212, 191],  // teal
  [34, 211, 238],  // cyan
  [56, 189, 248],  // sky
  [59, 130, 246],  // blue
]

// --- Blob layer: large flowing gradient orbs (the "nebula") ---

type Blob = {
  cx: number
  cy: number
  freqX: number
  freqY: number
  phaseX: number
  phaseY: number
  ampX: number
  ampY: number
  baseRadius: number
  colorA: [number, number, number]
  colorB: [number, number, number]
  opacity: number
}

function createBlobs(): Blob[] {
  return [
    { cx: 0.3, cy: 0.35, freqX: 0.08, freqY: 0.06, phaseX: 0, phaseY: 1.2, ampX: 0.12, ampY: 0.10, baseRadius: 0.45, colorA: AURORA[0], colorB: AURORA[1], opacity: 0.40 },
    { cx: 0.7, cy: 0.3, freqX: 0.06, freqY: 0.09, phaseX: 2.1, phaseY: 0.5, ampX: 0.14, ampY: 0.08, baseRadius: 0.42, colorA: AURORA[2], colorB: AURORA[3], opacity: 0.34 },
    { cx: 0.5, cy: 0.72, freqX: 0.07, freqY: 0.05, phaseX: 4.0, phaseY: 3.1, ampX: 0.10, ampY: 0.12, baseRadius: 0.46, colorA: AURORA[1], colorB: AURORA[2], opacity: 0.24 },
    { cx: 0.2, cy: 0.7, freqX: 0.05, freqY: 0.07, phaseX: 1.5, phaseY: 4.5, ampX: 0.08, ampY: 0.10, baseRadius: 0.36, colorA: AURORA[3], colorB: AURORA[4], opacity: 0.28 },
    { cx: 0.8, cy: 0.6, freqX: 0.09, freqY: 0.06, phaseX: 3.3, phaseY: 2.0, ampX: 0.10, ampY: 0.09, baseRadius: 0.38, colorA: AURORA[4], colorB: AURORA[0], opacity: 0.29 },
    { cx: 0.5, cy: 0.22, freqX: 0.04, freqY: 0.08, phaseX: 5.0, phaseY: 1.0, ampX: 0.15, ampY: 0.06, baseRadius: 0.34, colorA: AURORA[0], colorB: AURORA[3], opacity: 0.18 },
    { cx: 0.78, cy: 0.42, freqX: 0.07, freqY: 0.05, phaseX: 2.6, phaseY: 3.7, ampX: 0.11, ampY: 0.09, baseRadius: 0.36, colorA: AURORA[2], colorB: AURORA[0], opacity: 0.20 },
    { cx: 0.22, cy: 0.44, freqX: 0.05, freqY: 0.07, phaseX: 0.8, phaseY: 2.2, ampX: 0.12, ampY: 0.10, baseRadius: 0.38, colorA: AURORA[1], colorB: AURORA[3], opacity: 0.20 },
  ]
}

// --- Code rain: falling monospace glyph columns (replaces the old floating particles) ---

const CELL_W = 16
const CELL_H = 20
const FONT_PX = 15
const GLYPHS = '01{}[]<>()=+*/\\:;|#%·-'.split('')
const HOT: [number, number, number] = [255, 255, 255]   // #FFFFFF  hot lead
const LEAD: [number, number, number] = [224, 247, 255]  // #E0F7FF  signal-soft lead

type Column = {
  x: number      // pixel x (column centre)
  speed: number  // rows per second
  len: number    // trail length (cells)
  hot: boolean   // near-white lead glyph
  color: [number, number, number]
  phase: number  // time offset for the falling cycle
  seed: number
}

function createColumns(w: number): Column[] {
  const cols: Column[] = []
  const n = Math.ceil(w / CELL_W)
  for (let i = 0; i < n; i++) {
    if (Math.random() < 0.16) continue // sparse gaps → airier field
    cols.push({
      x: i * CELL_W + CELL_W / 2,
      speed: 1.5 + Math.random() * 4.5,
      len: 8 + Math.floor(Math.random() * 16),
      hot: Math.random() < 0.22,
      color: AURORA[Math.floor(Math.random() * AURORA.length)],
      phase: Math.random() * 1000,
      seed: Math.random() * 1000,
    })
  }
  return cols
}

// Stable per-cell glyph that mutates slowly over time.
function glyphAt(seed: number, row: number, time: number) {
  const k = Math.sin((seed + row * 17.3 + Math.floor(time * 2.4)) * 12.9898) * 43758.5453
  return GLYPHS[Math.floor((k - Math.floor(k)) * GLYPHS.length) % GLYPHS.length]
}

function drawRain(ctx: CanvasRenderingContext2D, h: number, time: number, columns: Column[]) {
  ctx.globalCompositeOperation = 'lighter'
  ctx.font = `600 ${FONT_PX}px "JetBrains Mono", ui-monospace, monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const rows = Math.ceil(h / CELL_H) + 2
  for (const c of columns) {
    const total = rows + c.len + 6
    const pos = (((time * c.speed + c.phase) % total) + total) % total
    const headRow = Math.floor(pos) - 2
    for (let k = 0; k < c.len; k++) {
      const row = headRow - k
      if (row < -1 || row > rows) continue
      const py = row * CELL_H + CELL_H / 2
      // dim the headline band (matches the wash); brightest toward the edges
      const leg = 0.14 + 0.86 * Math.min(1, Math.abs(py / h - 0.42) / 0.34)
      const tail = 1 - k / c.len
      let a: number
      let col: [number, number, number]
      if (k === 0) {
        a = 0.95 * leg
        col = c.hot ? HOT : LEAD
      } else {
        a = 0.5 * tail * leg
        col = c.color
      }
      if (a < 0.02) continue
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${a})`
      ctx.fillText(glyphAt(c.seed, row, time), c.x, py)
    }
  }
  ctx.globalCompositeOperation = 'source-over'
}

// --- Aurora band (flowing ribbon without expensive filter) ---

function drawAuroraBand(
  ctx: CanvasRenderingContext2D,
  w: number, _h: number,
  time: number,
  yBase: number,
  colorA: [number, number, number],
  colorB: [number, number, number],
  scrollProgress: number,
  amplitude: number,
  freq: number,
  phaseOffset: number,
) {
  const widths = [90, 55, 30, 12]
  const opacities = [0.05, 0.075, 0.10, 0.14]

  for (let pass = 0; pass < widths.length; pass++) {
    const bandW = (widths[pass] + scrollProgress * 20) * (1 + pass * 0.1)
    const alpha = opacities[pass] * (1.25 + scrollProgress * 0.9)

    ctx.beginPath()
    ctx.moveTo(-20, yBase)

    for (let x = 0; x <= w + 20; x += 8) {
      const t = x / w
      const wave = Math.sin(x * freq + time * 0.4 + phaseOffset) * amplitude * (1 + scrollProgress * 0.5)
        + Math.sin(x * freq * 2.3 + time * 0.25 + phaseOffset * 1.5) * amplitude * 0.4
        + Math.sin(x * freq * 0.5 + time * 0.6) * amplitude * 0.2
      const r = colorA[0] + (colorB[0] - colorA[0]) * t
      const g = colorA[1] + (colorB[1] - colorA[1]) * t
      const b = colorA[2] + (colorB[2] - colorA[2]) * t
      void r; void g; void b;
      ctx.lineTo(x, yBase + wave)
    }

    const r = (colorA[0] + colorB[0]) / 2
    const g = (colorA[1] + colorB[1]) / 2
    const b = (colorA[2] + colorB[2]) / 2
    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`
    ctx.lineWidth = bandW
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
  }
}

// --- Aurora ribbons: flowing silky light filaments (the "flow") ---

type Ribbon = {
  yBase: number // 0..1 vertical anchor
  tilt: number // diagonal slope
  amp: number // undulation amplitude (px)
  freq: number // base spatial frequency
  speed: number // temporal flow speed
  phase: number
  drift: number // horizontal sweep speed
  width: number // core thickness (px)
  opacity: number
  stops: [number, number, number][] // Aurora colours along the ribbon
}

function createRibbons(): Ribbon[] {
  return [
    { yBase: 0.24, tilt: -0.10, amp: 58, freq: 0.0016, speed: 0.18, phase: 0.0, drift: 14, width: 24, opacity: 0.38, stops: [AURORA[0], AURORA[1], AURORA[2]] },
    { yBase: 0.70, tilt: 0.07, amp: 76, freq: 0.0012, speed: 0.13, phase: 1.7, drift: -10, width: 32, opacity: 0.34, stops: [AURORA[2], AURORA[3], AURORA[4]] },
    { yBase: 0.16, tilt: -0.05, amp: 64, freq: 0.0020, speed: 0.23, phase: 3.2, drift: 18, width: 18, opacity: 0.30, stops: [AURORA[1], AURORA[2], AURORA[3]] },
    { yBase: 0.82, tilt: 0.11, amp: 92, freq: 0.0009, speed: 0.10, phase: 4.6, drift: -7, width: 38, opacity: 0.26, stops: [AURORA[0], AURORA[2], AURORA[4]] },
    { yBase: 0.50, tilt: 0.03, amp: 50, freq: 0.0024, speed: 0.27, phase: 5.5, drift: 12, width: 14, opacity: 0.18, stops: [AURORA[3], AURORA[2], AURORA[0]] },
  ]
}

function drawRibbons(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  time: number,
  mouseY: number,
  ribbons: Ribbon[],
) {
  ctx.globalCompositeOperation = 'lighter'
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  // subtle vertical lift toward the cursor (-0.5..0.5 of viewport)
  const my = mouseY > 0 ? mouseY / h - 0.5 : 0

  // bright at the top/bottom thirds, strongly dimmed through the headline band
  const legibility = (yNorm: number) => 0.14 + 0.86 * Math.min(1, Math.abs(yNorm - 0.46) / 0.36)

  const passes = [
    { wMul: 3.4, aMul: 0.08 },
    { wMul: 1.6, aMul: 0.16 },
    { wMul: 0.6, aMul: 0.34 },
  ]

  for (const rb of ribbons) {
    const cy = (rb.yBase + my * 0.04) * h + Math.sin(time * rb.speed * 0.6 + rb.phase) * rb.amp * 0.25
    const xShift = time * rb.drift * rb.freq
    const fade = legibility(rb.yBase)

    const [c0, c1, c2] = rb.stops
    const grad = ctx.createLinearGradient(0, 0, w, 0)
    grad.addColorStop(0.0, `rgba(${c0[0]},${c0[1]},${c0[2]},0)`)
    grad.addColorStop(0.2, `rgba(${c0[0]},${c0[1]},${c0[2]},${rb.opacity})`)
    grad.addColorStop(0.5, `rgba(${c1[0]},${c1[1]},${c1[2]},${rb.opacity})`)
    grad.addColorStop(0.8, `rgba(${c2[0]},${c2[1]},${c2[2]},${rb.opacity})`)
    grad.addColorStop(1.0, `rgba(${c2[0]},${c2[1]},${c2[2]},0)`)

    for (const pass of passes) {
      ctx.beginPath()
      for (let x = -40; x <= w + 40; x += 7) {
        const flow =
          Math.sin(x * rb.freq + time * rb.speed + rb.phase + xShift) * rb.amp +
          Math.sin(x * rb.freq * 2.4 + time * rb.speed * 0.7 + rb.phase * 1.5) * rb.amp * 0.35 +
          Math.sin(x * rb.freq * 0.5 - time * rb.speed * 0.5) * rb.amp * 0.2
        const y = cy + rb.tilt * (x - w / 2) + flow
        if (x < 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = grad
      ctx.globalAlpha = pass.aMul * fade
      ctx.lineWidth = rb.width * pass.wMul
      ctx.stroke()
    }
  }
  ctx.globalAlpha = 1
}

// --- Main draw ---

function draw(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  time: number,
  scrollProgress: number,
  mouseX: number,
  mouseY: number,
  blobs: Blob[],
  columns: Column[],
  ribbons: Ribbon[],
) {
  ctx.clearRect(0, 0, w, h)

  // 1) Aurora blobs — the dominant visual layer
  ctx.globalCompositeOperation = 'lighter'

  for (const blob of blobs) {
    const bx = (blob.cx + Math.sin(time * blob.freqX + blob.phaseX) * blob.ampX) * w
    const by = (blob.cy + Math.sin(time * blob.freqY + blob.phaseY) * blob.ampY) * h

    // Scroll pushes blobs outward from center
    const dx = bx - w / 2
    const dy = by - h / 2
    const pushX = dx * scrollProgress * 0.4
    const pushY = dy * scrollProgress * 0.3
    const finalX = bx + pushX
    const finalY = by + pushY

    // Mouse attraction — blobs drift slightly toward cursor
    const mdx = mouseX - finalX
    const mdy = mouseY - finalY
    const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
    const mouseInfluence = Math.max(0, 1 - mDist / (w * 0.5)) * 0.06
    const fx = finalX + mdx * mouseInfluence
    const fy = finalY + mdy * mouseInfluence

    const radius = blob.baseRadius * Math.min(w, h) * (1 + scrollProgress * 0.15)
    const [rA, gA, bA] = blob.colorA
    const [rB, gB, bB] = blob.colorB
    const blend = 0.5 + 0.5 * Math.sin(time * 0.3 + blob.phaseX)

    const r = Math.round(rA + (rB - rA) * blend)
    const g = Math.round(gA + (gB - gA) * blend)
    const b = Math.round(bA + (bB - bA) * blend)

    const grad = ctx.createRadialGradient(fx, fy, 0, fx, fy, radius)
    const op = blob.opacity * 1.45 * (1 + scrollProgress * 0.3)
    grad.addColorStop(0, `rgba(${r},${g},${b},${op})`)
    grad.addColorStop(0.4, `rgba(${r},${g},${b},${op * 0.5})`)
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`)

    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(fx, fy, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  // 1.5) Aurora ribbons — flowing silky filaments
  drawRibbons(ctx, w, h, time, mouseY, ribbons)

  // 2) Aurora bands
  ctx.globalCompositeOperation = 'lighter'
  drawAuroraBand(ctx, w, h, time, h * 0.35, AURORA[0], AURORA[2], scrollProgress, 35, 0.006, 0)
  drawAuroraBand(ctx, w, h, time, h * 0.55, AURORA[2], AURORA[4], scrollProgress, 28, 0.008, 2.5)
  drawAuroraBand(ctx, w, h, time, h * 0.70, AURORA[1], AURORA[3], scrollProgress, 22, 0.005, 5.0)

  // 3) Code rain — falling glyph columns (replaces the old floating particles)
  drawRain(ctx, h, time, columns)

  // 5) Central legibility wash — keep strong text contrast over the richer flow.
  // Vivid Aurora reads in the top & bottom thirds; the headline band is darkened.
  ctx.globalCompositeOperation = 'source-over'
  const wash = ctx.createLinearGradient(0, 0, 0, h)
  wash.addColorStop(0.0, 'rgba(5,6,8,0.9)') // dark top border
  wash.addColorStop(0.08, 'rgba(5,6,8,0.34)')
  wash.addColorStop(0.2, 'rgba(5,6,8,0.46)') // upper rain band
  wash.addColorStop(0.42, 'rgba(5,6,8,0.74)') // headline band (dark for legibility)
  wash.addColorStop(0.62, 'rgba(5,6,8,0.66)')
  wash.addColorStop(0.8, 'rgba(5,6,8,0.34)') // lower rain band
  wash.addColorStop(0.92, 'rgba(5,6,8,0.34)')
  wash.addColorStop(1.0, 'rgba(5,6,8,0.9)') // dark bottom border
  ctx.fillStyle = wash
  ctx.fillRect(0, 0, w, h)
}

export default function AuroraCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const columnsRef = useRef<Column[]>([])
  const blobsRef = useRef<Blob[]>(createBlobs())
  const ribbonsRef = useRef<Ribbon[]>(createRibbons())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let animId: number
    const startTime = performance.now()

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      canvas!.width = rect.width * dpr
      canvas!.height = rect.height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      columnsRef.current = createColumns(rect.width)
    }

    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => {
      const heroSection = canvas!.closest('section')
      if (!heroSection) return
      const rect = heroSection.getBoundingClientRect()
      const visible = rect.bottom > 0 && rect.top < window.innerHeight
      hidden = document.hidden || !visible
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    let hidden = false
    const onVisibility = () => { hidden = document.hidden }
    document.addEventListener('visibilitychange', onVisibility)

    function loop() {
      if (hidden) { animId = requestAnimationFrame(loop); return }

      const rect = canvas!.getBoundingClientRect()
      const time = (performance.now() - startTime) * 0.001

      draw(
        ctx!, rect.width, rect.height, time,
        0,
        mouseRef.current.x, mouseRef.current.y,
        blobsRef.current,
        columnsRef.current,
        ribbonsRef.current,
      )

      animId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}
