import { useEffect, useRef } from 'react'

type Pt = { x: number; y: number; vx: number; vy: number; r: number; c: string; a: number; ph: number }

// Ambient particle/"bee" swarm for the dark command stage.
// SSR-safe (runs only in an effect), reduced-motion → single static frame,
// paused when the tab is hidden.
export default function SwarmCanvas({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const COLORS = ['#6EE7B7', '#22D3EE', '#38BDF8']
    let W = 0
    let H = 0
    let pts: Pt[] = []
    let raf = 0

    const resize = () => {
      const r = parent.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = W * DPR
      canvas.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    const init = () => {
      resize()
      pts = []
      const n = Math.max(28, Math.min(64, Math.round(W / 16)))
      for (let i = 0; i < n; i++) {
        const bright = Math.random() < 0.22
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: bright ? 1.5 + Math.random() : 0.7 + Math.random() * 0.8,
          c: bright ? COLORS[(Math.random() * COLORS.length) | 0] : '#ffffff',
          a: bright ? 0.85 : 0.16 + Math.random() * 0.22,
          ph: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = dx * dx + dy * dy
          if (d < 9000) {
            ctx.strokeStyle = 'rgba(56,189,248,' + (1 - d / 9000) * 0.16 + ')'
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }
      for (let k = 0; k < pts.length; k++) {
        const p = pts[k]
        p.x += p.vx + Math.sin(t / 1000 + p.ph) * 0.06
        p.y += p.vy + Math.cos(t / 1100 + p.ph) * 0.06
        if (p.x < 0) p.x += W
        if (p.x > W) p.x -= W
        if (p.y < 0) p.y += H
        if (p.y > H) p.y -= H
        ctx.globalAlpha = p.a
        ctx.fillStyle = p.c
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        if (p.c !== '#ffffff') {
          ctx.globalAlpha = p.a * 0.22
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
    }

    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    init()
    if (reduce) draw(0)
    else raf = requestAnimationFrame(loop)

    const onResize = () => {
      init()
      if (reduce) draw(0)
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
