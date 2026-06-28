import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Interactive 3D version of the "ops headcount scales with customers" visual.
// Operator dots grow across the three stages while workload particles stream in
// and pile up until they overwhelm the operators (the bottleneck). Cursor-reactive,
// auto-cycling, cool Aurora palette. Lazy-loaded; the DOM ScaleVisual is the fallback.

const STAGES = [
  { customers: '10', ops: 6, load: 6, chips: [] as string[], overloaded: false },
  { customers: '100', ops: 14, load: 24, chips: ['Alerts ×3', 'Runbooks ×4'], overloaded: false },
  { customers: '1,000', ops: 26, load: 66, chips: ['Alerts ×12', 'Runbooks ×18', 'Incidents ×9'], overloaded: true },
]
const MAX_OPS = STAGES[STAGES.length - 1].ops
const MAX_LOAD = STAGES[STAGES.length - 1].load
const STAGE_MS = 3600

const vertexShader = /* glsl */ `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  uniform float uPix;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uPix * (150.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`
const fragmentShader = /* glsl */ `
  uniform sampler2D uTex;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float a = texture2D(uTex, gl_PointCoord).a * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
  }
`

function glowTexture() {
  const s = 64
  const cv = document.createElement('canvas')
  cv.width = cv.height = s
  const ctx = cv.getContext('2d')!
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.25, 'rgba(255,255,255,0.85)')
  g.addColorStop(0.6, 'rgba(255,255,255,0.22)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  const tex = new THREE.CanvasTexture(cv)
  tex.needsUpdate = true
  return tex
}

const OP = new THREE.Color('#7dd3fc')   // signal sky
const OP_HOT = new THREE.Color('#38bdf8') // sky (overload operators)
const LOAD_A = new THREE.Color('#6ee7b7') // mint
const LOAD_B = new THREE.Color('#22d3ee') // cyan
const LOAD_HOT = new THREE.Color('#e0f7ff') // signal-soft (overload sparks)

export default function ScaleVisual3D() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    renderer.setPixelRatio(dpr)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(0, 0, 6.4)

    const group = new THREE.Group()
    scene.add(group)

    const tex = glowTexture()
    const uniforms = { uTex: { value: tex }, uPix: { value: dpr } }

    // --- Operators (a tidy grid that grows) ---
    const opPos = new Float32Array(MAX_OPS * 3)
    const opColor = new Float32Array(MAX_OPS * 3)
    const opSize = new Float32Array(MAX_OPS)
    const opAlpha = new Float32Array(MAX_OPS)
    const COLS = 7
    for (let i = 0; i < MAX_OPS; i++) {
      const col = i % COLS
      const row = Math.floor(i / COLS)
      opPos[i * 3] = (col - (COLS - 1) / 2) * 0.62
      opPos[i * 3 + 1] = 1.0 - row * 0.62
      opPos[i * 3 + 2] = (Math.sin(i * 12.9) * 0.5) * 0.5
      const hot = i >= MAX_OPS - 5
      const c = hot ? OP_HOT : OP
      opColor[i * 3] = c.r; opColor[i * 3 + 1] = c.g; opColor[i * 3 + 2] = c.b
      opSize[i] = hot ? 26 : 22
      opAlpha[i] = 0
    }
    const opGeo = new THREE.BufferGeometry()
    opGeo.setAttribute('position', new THREE.BufferAttribute(opPos, 3))
    opGeo.setAttribute('aColor', new THREE.BufferAttribute(opColor, 3))
    opGeo.setAttribute('aSize', new THREE.BufferAttribute(opSize, 1))
    opGeo.setAttribute('aAlpha', new THREE.BufferAttribute(opAlpha, 1))
    const pointsMat = () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    const operators = new THREE.Points(opGeo, pointsMat())
    group.add(operators)

    // --- Workload (particles streaming down + piling up) ---
    const ldPos = new Float32Array(MAX_LOAD * 3)
    const ldColor = new Float32Array(MAX_LOAD * 3)
    const ldSize = new Float32Array(MAX_LOAD)
    const ldAlpha = new Float32Array(MAX_LOAD)
    const ldSpeed = new Float32Array(MAX_LOAD)
    const ldHot = new Uint8Array(MAX_LOAD)
    const rand = (a: number, b: number) => a + Math.random() * (b - a)
    for (let i = 0; i < MAX_LOAD; i++) {
      ldPos[i * 3] = rand(-2.4, 2.4)
      ldPos[i * 3 + 1] = rand(-1.6, 2.2)
      ldPos[i * 3 + 2] = rand(-0.6, 0.6)
      const hot = Math.random() < 0.18
      ldHot[i] = hot ? 1 : 0
      const c = hot ? LOAD_HOT : Math.random() < 0.5 ? LOAD_A : LOAD_B
      ldColor[i * 3] = c.r; ldColor[i * 3 + 1] = c.g; ldColor[i * 3 + 2] = c.b
      ldSize[i] = hot ? 14 : 10
      ldAlpha[i] = 0
      ldSpeed[i] = rand(0.5, 1.3)
    }
    const ldGeo = new THREE.BufferGeometry()
    ldGeo.setAttribute('position', new THREE.BufferAttribute(ldPos, 3))
    ldGeo.setAttribute('aColor', new THREE.BufferAttribute(ldColor, 3))
    ldGeo.setAttribute('aSize', new THREE.BufferAttribute(ldSize, 1))
    ldGeo.setAttribute('aAlpha', new THREE.BufferAttribute(ldAlpha, 1))
    const workload = new THREE.Points(ldGeo, pointsMat())
    group.add(workload)

    // --- interaction + state ---
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
    const onMove = (e: PointerEvent) => {
      const r = renderer.domElement.getBoundingClientRect()
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1
      mouse.y = ((e.clientY - r.top) / r.height) * 2 - 1
    }
    renderer.domElement.addEventListener('pointermove', onMove, { passive: true })

    function resize() {
      const w = mount!.clientWidth
      const h = mount!.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.fov = w < 360 ? 58 : 50
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    let raf = 0
    let hidden = false
    const onVis = () => { hidden = document.hidden }
    document.addEventListener('visibilitychange', onVis)

    const start = performance.now()
    let last = start
    let curStage = -1

    function frame(now: number) {
      raf = requestAnimationFrame(frame)
      if (hidden) { last = now; return }
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const t = now - start

      const s = Math.floor(t / STAGE_MS) % STAGES.length
      if (s !== curStage) { curStage = s; setStage(s) }
      const target = STAGES[s]

      // operators fade in/out toward the active count
      const oa = opGeo.getAttribute('aAlpha') as THREE.BufferAttribute
      for (let i = 0; i < MAX_OPS; i++) {
        const want = i < target.ops ? 1 : 0
        const cur = oa.array[i] as number
        oa.array[i] = cur + (want - cur) * Math.min(1, dt * 4)
      }
      oa.needsUpdate = true

      // workload: fall + recycle, fade toward active count, denser at the bottleneck
      const la = ldGeo.getAttribute('aAlpha') as THREE.BufferAttribute
      const lp = ldGeo.getAttribute('position') as THREE.BufferAttribute
      for (let i = 0; i < MAX_LOAD; i++) {
        let y = lp.array[i * 3 + 1] as number
        y -= ldSpeed[i] * dt * (target.overloaded ? 1.4 : 1)
        if (y < -1.7) { y = rand(1.8, 2.4); lp.array[i * 3] = rand(-2.4, 2.4) }
        lp.array[i * 3 + 1] = y
        const want = i < target.load ? 1 : 0
        const cur = la.array[i] as number
        la.array[i] = cur + (want - cur) * Math.min(1, dt * 3)
      }
      la.needsUpdate = true
      lp.needsUpdate = true

      // cursor parallax + idle drift
      mouse.tx += (mouse.x - mouse.tx) * 0.06
      mouse.ty += (mouse.y - mouse.ty) * 0.06
      group.rotation.y = mouse.tx * 0.45 + Math.sin(t * 0.0003) * 0.06
      group.rotation.x = mouse.ty * 0.25
      group.position.x = mouse.tx * 0.2

      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      renderer.domElement.removeEventListener('pointermove', onMove)
      opGeo.dispose()
      ldGeo.dispose()
      operators.material.dispose()
      workload.material.dispose()
      tex.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  const s = STAGES[stage]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite">
      {['top-3 left-3', 'top-3 right-3 rotate-90', 'bottom-3 right-3 rotate-180', 'bottom-3 left-3 -rotate-90'].map((pos) => (
        <span key={pos} className={`pointer-events-none absolute ${pos} z-10 h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-white/[0.15]`} />
      ))}

      {/* header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">Ops headcount required</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">Workload</span>
      </div>

      {/* 3D stage */}
      <div ref={mountRef} className="relative h-[300px] w-full" aria-hidden="true" />

      {/* live readout overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-[52px] flex items-start justify-between px-5">
        <p className={`text-[15px] font-semibold transition-colors duration-500 ${s.overloaded ? 'text-signal' : 'text-white/85'}`}>
          {s.customers} customers
        </p>
        {s.chips.length > 0 && (
          <div className="flex flex-col items-end gap-1">
            {s.chips.map((c) => (
              <span
                key={c}
                className={`whitespace-nowrap rounded-pill px-2 py-0.5 font-mono text-[10px] tracking-[0.04em] ${
                  s.overloaded ? 'bg-signal/15 text-signal' : 'bg-white/[0.07] text-white/55'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {s.overloaded && (
        <div className="pointer-events-none absolute inset-x-5 bottom-[52px] flex items-center gap-2">
          <div className="h-px flex-1 bg-spectral opacity-50" />
          <p className="shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-signal">Bottleneck</p>
          <div className="h-px flex-1 bg-spectral opacity-50" />
        </div>
      )}

      {/* footer */}
      <div className="border-t border-white/[0.08] px-5 py-3">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
          Every new customer adds operational work.
        </p>
      </div>
    </div>
  )
}
