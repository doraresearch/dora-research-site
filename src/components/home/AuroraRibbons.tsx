import { useEffect, useRef } from 'react'

type Filament = { off: number; ampScale: number; phase: number; width: number; alpha: number }
type Bundle = {
  cy: number
  tilt: number
  amp1: number
  waves1: number
  speed1: number
  amp2: number
  waves2: number
  speed2: number
  fils: Filament[]
  kind: 'mint' | 'blue'
}
type Spark = { x: number; y: number; r: number; a: number; ph: number; c: string }

// Flowing Aurora light ribbons for the dark stage (Turing-hero-style streams,
// recolored to the cool Aurora signature). SSR-safe, reduced-motion → single
// static frame, paused when the tab is hidden.
export default function AuroraRibbons({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    let raf = 0
    let gradMint: CanvasGradient
    let gradBlue: CanvasGradient
    let sparks: Spark[] = []

    const FILS = 13
    const mkFils = (seed: number): Filament[] =>
      Array.from({ length: FILS }, (_, i) => ({
        off: (i - (FILS - 1) / 2) * 3.6 + Math.sin(seed + i * 1.7) * 2,
        ampScale: 0.78 + ((i * 37 + seed * 13) % 10) / 24,
        phase: i * 0.21 + seed,
        width: 0.9 + ((i * 17 + seed * 5) % 10) / 11,
        alpha: 0.13 + ((i * 29 + seed * 7) % 10) / 42,
      }))

    const bundles: Bundle[] = [
      { cy: 0.3, tilt: -0.22, amp1: 46, waves1: 1.25, speed1: 0.00032, amp2: 16, waves2: 2.5, speed2: -0.00047, fils: mkFils(1), kind: 'mint' },
      { cy: 0.66, tilt: 0.26, amp1: 54, waves1: 1.05, speed1: 0.00026, amp2: 14, waves2: 2.9, speed2: -0.00039, fils: mkFils(7), kind: 'blue' },
      { cy: 0.48, tilt: 0.06, amp1: 30, waves1: 1.6, speed1: 0.0002, amp2: 10, waves2: 3.4, speed2: -0.0003, fils: mkFils(13).slice(0, 6), kind: 'mint' },
    ]

    const buildGradients = () => {
      gradMint = ctx.createLinearGradient(0, 0, W, 0)
      gradMint.addColorStop(0, 'rgba(110,231,183,0)')
      gradMint.addColorStop(0.2, 'rgba(110,231,183,1)')
      gradMint.addColorStop(0.52, 'rgba(34,211,238,1)')
      gradMint.addColorStop(0.85, 'rgba(56,189,248,0.85)')
      gradMint.addColorStop(1, 'rgba(56,189,248,0)')
      gradBlue = ctx.createLinearGradient(0, 0, W, 0)
      gradBlue.addColorStop(0, 'rgba(59,130,246,0)')
      gradBlue.addColorStop(0.18, 'rgba(59,130,246,0.9)')
      gradBlue.addColorStop(0.55, 'rgba(56,189,248,1)')
      gradBlue.addColorStop(0.88, 'rgba(45,212,191,0.8)')
      gradBlue.addColorStop(1, 'rgba(45,212,191,0)')
    }

    const resize = () => {
      const r = parent.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = W * DPR
      canvas.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      buildGradients()
      sparks = []
      const n = Math.max(22, Math.min(46, Math.round(W / 28)))
      const COLORS = ['#6EE7B7', '#22D3EE', '#38BDF8']
      for (let i = 0; i < n; i++) {
        const bright = Math.random() < 0.2
        sparks.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: bright ? 1.3 + Math.random() * 0.8 : 0.6 + Math.random() * 0.7,
          a: bright ? 0.55 : 0.12 + Math.random() * 0.18,
          ph: Math.random() * Math.PI * 2,
          c: bright ? COLORS[(Math.random() * COLORS.length) | 0] : '#ffffff',
        })
      }
    }

    const tracePath = (b: Bundle, t: number, off: number, ampScale: number, phase: number) => {
      const cy = b.cy * H
      const step = Math.max(10, W / 110)
      ctx.beginPath()
      for (let x = -24; x <= W + 24; x += step) {
        const k1 = (x / W) * Math.PI * 2 * b.waves1
        const k2 = (x / W) * Math.PI * 2 * b.waves2
        const y =
          cy +
          off +
          b.tilt * (x - W / 2) +
          b.amp1 * ampScale * Math.sin(k1 + t * b.speed1 + phase) +
          b.amp2 * Math.sin(k2 + t * b.speed2 + phase * 1.6)
        if (x <= -24) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H)
      ctx.globalCompositeOperation = 'lighter'
      ctx.lineCap = 'round'

      for (const b of bundles) {
        ctx.strokeStyle = b.kind === 'mint' ? gradMint : gradBlue
        // soft glow under the bundle
        ctx.globalAlpha = 0.085
        ctx.lineWidth = 42
        tracePath(b, t, 0, 1, 0.1)
        ctx.globalAlpha = 0.11
        ctx.lineWidth = 16
        tracePath(b, t, 0, 1.04, 0.55)
        // silky filaments
        for (const f of b.fils) {
          ctx.globalAlpha = f.alpha
          ctx.lineWidth = f.width
          tracePath(b, t, f.off, f.ampScale, f.phase)
        }
      }

      for (const s of sparks) {
        const tw = reduce ? 1 : 0.65 + 0.35 * Math.sin(t / 1400 + s.ph)
        ctx.globalAlpha = s.a * tw
        ctx.fillStyle = s.c
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
    }

    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    resize()
    if (reduce) draw(4000)
    else raf = requestAnimationFrame(loop)

    const onResize = () => {
      resize()
      if (reduce) draw(4000)
    }
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else if (!reduce) raf = requestAnimationFrame(loop)
    }
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVis)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
