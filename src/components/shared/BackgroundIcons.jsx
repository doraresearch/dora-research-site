import { useEffect, useRef } from 'react'

const ink = 'rgba(10,10,10,0.17)'
const inkStrong = 'rgba(10,10,10,0.22)'
const sw = 1

const Equation = ({ children, size = 18 }) => (
  <svg viewBox="0 0 300 40" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <text
      x="0"
      y="28"
      fontFamily="Instrument Serif, Georgia, serif"
      fontStyle="italic"
      fontSize={size}
      fill={ink}
    >
      {children}
    </text>
  </svg>
)

const icons = [
  // --- Top of page ---
  {
    key: 'eq-partial-L',
    top: 140,
    right: '6vw',
    width: 220,
    height: 48,
    speed: 0.06,
    svg: <Equation>∂L/∂θ = E[∇log π · A(s,a)]</Equation>,
  },
  {
    key: 'and-gate',
    top: 80,
    right: -80,
    width: 280,
    height: 280,
    speed: 0.03,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 50L60 150L100 150C140 150 160 125 160 100C160 75 140 50 100 50L60 50Z"/>
          <line x1="20" y1="75" x2="60" y2="75"/>
          <line x1="20" y1="125" x2="60" y2="125"/>
          <line x1="160" y1="100" x2="195" y2="100"/>
          <circle cx="20" cy="75" r="3"/>
          <circle cx="20" cy="125" r="3"/>
          <circle cx="195" cy="100" r="3"/>
        </g>
      </svg>
    ),
  },
  {
    key: 'orchestration',
    top: 320,
    left: '4vw',
    width: 260,
    height: 220,
    speed: 0.1,
    svg: (
      <svg viewBox="0 0 260 220" fill="none">
        <g stroke={ink} strokeWidth={sw} fill="none">
          {/* Control layer (top) */}
          <rect x="90" y="20" width="80" height="32"/>
          {/* Agents (bottom row) */}
          <rect x="20" y="130" width="60" height="42"/>
          <rect x="100" y="130" width="60" height="42"/>
          <rect x="180" y="130" width="60" height="42"/>
          {/* Control lines down to each agent */}
          <line x1="130" y1="52" x2="50" y2="130"/>
          <line x1="130" y1="52" x2="130" y2="130"/>
          <line x1="130" y1="52" x2="210" y2="130"/>
          {/* Lateral coordination lines between agents */}
          <line x1="80" y1="151" x2="100" y2="151" strokeDasharray="3 3"/>
          <line x1="160" y1="151" x2="180" y2="151" strokeDasharray="3 3"/>
          {/* State/verify pins at top */}
          <circle cx="102" cy="20" r="2" fill={ink} stroke="none"/>
          <circle cx="130" cy="20" r="2" fill={ink} stroke="none"/>
          <circle cx="158" cy="20" r="2" fill={ink} stroke="none"/>
          {/* Verification arrow back up from middle agent */}
          <path d="M130 172 Q 70 190, 50 195" strokeDasharray="2 4"/>
        </g>
        <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill={ink} letterSpacing="1">
          <text x="108" y="40">Control</text>
          <text x="30" y="158">Agent A</text>
          <text x="110" y="158">Agent B</text>
          <text x="190" y="158">Agent C</text>
        </g>
      </svg>
    ),
  },

  // --- ~600px down ---
  {
    key: 'sigmoid',
    top: 620,
    right: '4vw',
    width: 240,
    height: 160,
    speed: 0.08,
    svg: (
      <svg viewBox="0 0 240 160" fill="none">
        <g stroke={ink} strokeWidth={sw} fill="none">
          {/* axes */}
          <line x1="30" y1="15" x2="30" y2="140"/>
          <line x1="30" y1="80" x2="220" y2="80"/>
          {/* ticks */}
          <line x1="27" y1="30" x2="33" y2="30"/>
          <line x1="27" y1="130" x2="33" y2="130"/>
          {/* sigmoid curve */}
          <path d="M35 130 C 70 130, 100 125, 120 80 C 140 35, 170 30, 215 30" strokeWidth={sw * 1.4}/>
        </g>
        <text x="38" y="28" fontFamily="JetBrains Mono" fontSize="9" fill={ink} letterSpacing="1">1</text>
        <text x="38" y="142" fontFamily="JetBrains Mono" fontSize="9" fill={ink} letterSpacing="1">0</text>
        <text x="175" y="155" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="14" fill={ink}>σ(x)</text>
      </svg>
    ),
  },
  {
    key: 'matrix',
    top: 850,
    left: '2vw',
    width: 180,
    height: 120,
    speed: 0.05,
    svg: (
      <svg viewBox="0 0 180 120" fill="none">
        <g stroke={ink} strokeWidth={sw * 1.5} fill="none">
          <path d="M15 10 L10 10 L10 110 L15 110"/>
          <path d="M165 10 L170 10 L170 110 L165 110"/>
        </g>
        <g fill={ink}>
          <text x="30" y="35" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">w₁₁</text>
          <text x="80" y="35" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">w₁₂</text>
          <text x="130" y="35" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">⋯</text>
          <text x="30" y="65" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">w₂₁</text>
          <text x="80" y="65" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">w₂₂</text>
          <text x="130" y="65" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">⋯</text>
          <text x="30" y="95" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">⋮</text>
          <text x="80" y="95" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">⋮</text>
          <text x="130" y="95" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16">⋱</text>
        </g>
      </svg>
    ),
  },
  {
    key: 'eq-argmax',
    top: 1020,
    right: '8vw',
    width: 240,
    height: 48,
    speed: 0.05,
    svg: <Equation size={17}>π*(s) = argmax_a Q*(s,a)</Equation>,
  },

  // --- ~1200 ---
  {
    key: 'hexagon',
    top: 1240,
    right: '-3vw',
    width: 260,
    height: 260,
    speed: 0.08,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinejoin="round">
          <polygon points="100,40 143,65 143,115 100,140 57,115 57,65"/>
          <polygon points="100,60 126,75 126,105 100,120 74,105 74,75"/>
          <line x1="100" y1="40" x2="100" y2="15"/>
          <line x1="143" y1="65" x2="165" y2="52"/>
          <line x1="143" y1="115" x2="165" y2="128"/>
          <line x1="100" y1="140" x2="100" y2="165"/>
          <line x1="57" y1="115" x2="35" y2="128"/>
          <line x1="57" y1="65" x2="35" y2="52"/>
          <circle cx="100" cy="15" r="3"/><circle cx="165" cy="52" r="3"/><circle cx="165" cy="128" r="3"/>
          <circle cx="100" cy="165" r="3"/><circle cx="35" cy="128" r="3"/><circle cx="35" cy="52" r="3"/>
        </g>
      </svg>
    ),
  },
  {
    key: 'attention-matrix',
    top: 1420,
    left: '6vw',
    width: 180,
    height: 180,
    speed: 0.06,
    svg: (
      <svg viewBox="0 0 180 180" fill="none">
        {/* Grid of varying opacity cells, like an attention pattern */}
        <g stroke="rgba(10,10,10,0.17)" strokeWidth="0.5">
          {Array.from({ length: 8 }, (_, r) =>
            Array.from({ length: 8 }, (_, c) => {
              // Attention-ish pattern: strong near diagonal, weaker elsewhere
              const d = Math.abs(r - c)
              const op = Math.max(0, 0.38 - d * 0.05)
              return (
                <rect
                  key={`${r}-${c}`}
                  x={10 + c * 20}
                  y={10 + r * 20}
                  width="20"
                  height="20"
                  fill={`rgba(10,10,10,${op})`}
                  stroke="rgba(10,10,10,0.18)"
                />
              )
            })
          )}
        </g>
      </svg>
    ),
  },
  {
    key: 'eq-softmax',
    top: 1580,
    left: '4vw',
    width: 300,
    height: 50,
    speed: 0.07,
    svg: <Equation size={16}>softmax(z)ᵢ = eᶻⁱ / Σⱼ eᶻʲ</Equation>,
  },

  // --- ~1800 ---
  {
    key: 'xor-gate',
    top: 1820,
    left: -60,
    width: 260,
    height: 260,
    speed: 0.05,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M65 50L100 50C145 50 165 75 165 100C165 125 145 150 100 150L65 150C80 125 80 75 65 50Z"/>
          <path d="M55 50C70 75 70 125 55 150" fill="none"/>
          <line x1="20" y1="75" x2="68" y2="75"/>
          <line x1="20" y1="125" x2="68" y2="125"/>
          <line x1="165" y1="100" x2="195" y2="100"/>
          <circle cx="20" cy="75" r="3"/><circle cx="20" cy="125" r="3"/><circle cx="195" cy="100" r="3"/>
        </g>
      </svg>
    ),
  },
  {
    key: 'gaussian',
    top: 2000,
    right: '6vw',
    width: 240,
    height: 150,
    speed: 0.09,
    svg: (
      <svg viewBox="0 0 240 150" fill="none">
        <g stroke={ink} strokeWidth={sw} fill="none">
          <line x1="20" y1="130" x2="225" y2="130"/>
          <line x1="120" y1="15" x2="120" y2="135"/>
          {/* tick marks */}
          <line x1="60" y1="127" x2="60" y2="133"/>
          <line x1="180" y1="127" x2="180" y2="133"/>
          {/* bell curve */}
          <path d="M25 128 C 60 126, 85 120, 100 95 C 110 60, 115 25, 120 20 C 125 25, 130 60, 140 95 C 155 120, 180 126, 215 128" strokeWidth={sw * 1.4}/>
        </g>
        <text x="55" y="145" fontFamily="JetBrains Mono" fontSize="9" fill={ink} letterSpacing="1">-σ</text>
        <text x="175" y="145" fontFamily="JetBrains Mono" fontSize="9" fill={ink} letterSpacing="1">+σ</text>
        <text x="120" y="145" fontFamily="JetBrains Mono" fontSize="9" fill={ink} letterSpacing="1" textAnchor="middle">μ</text>
        <text x="175" y="30" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="14" fill={ink}>N(μ,σ²)</text>
      </svg>
    ),
  },
  {
    key: 'decision-tree',
    top: 2260,
    right: '3vw',
    width: 300,
    height: 300,
    speed: 0.04,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinecap="round">
          <circle cx="100" cy="30" r="10"/><circle cx="55" cy="85" r="8"/><circle cx="145" cy="85" r="8"/>
          <line x1="93" y1="38" x2="61" y2="78"/><line x1="107" y1="38" x2="139" y2="78"/>
          <circle cx="30" cy="140" r="6"/><circle cx="75" cy="140" r="6"/><circle cx="125" cy="140" r="6"/><circle cx="170" cy="140" r="6"/>
          <line x1="49" y1="91" x2="35" y2="135"/><line x1="60" y1="92" x2="71" y2="134"/>
          <line x1="140" y1="92" x2="129" y2="134"/><line x1="151" y1="91" x2="165" y2="135"/>
          <line x1="30" y1="146" x2="30" y2="165"/><line x1="75" y1="146" x2="75" y2="165"/>
          <line x1="125" y1="146" x2="125" y2="165"/><line x1="170" y1="146" x2="170" y2="165"/>
          <circle cx="30" cy="170" r="4"/><circle cx="75" cy="170" r="4"/>
          <circle cx="125" cy="170" r="4"/><circle cx="170" cy="170" r="4"/>
        </g>
      </svg>
    ),
  },

  // --- ~2600 ---
  {
    key: 'state-machine',
    top: 2700,
    left: '3vw',
    width: 280,
    height: 200,
    speed: 0.07,
    svg: (
      <svg viewBox="0 0 280 200" fill="none">
        <g stroke={ink} strokeWidth={sw} fill="none">
          <circle cx="60" cy="100" r="26"/>
          <circle cx="160" cy="60" r="26"/>
          <circle cx="160" cy="140" r="26"/>
          <circle cx="250" cy="100" r="26"/>
          {/* arrows */}
          <path d="M85 90 Q 115 70, 137 65"/>
          <path d="M85 110 Q 115 130, 137 135"/>
          <path d="M183 65 Q 215 80, 227 92"/>
          <path d="M183 140 Q 215 125, 227 110"/>
          {/* self-loop on second node */}
          <path d="M175 38 C 195 15, 220 30, 185 52"/>
          {/* start arrow */}
          <line x1="20" y1="100" x2="30" y2="100"/>
          <polyline points="26,96 34,100 26,104"/>
        </g>
        <g fill={ink} fontFamily="JetBrains Mono" fontSize="10" letterSpacing="1">
          <text x="55" y="103">S₀</text>
          <text x="155" y="63">S₁</text>
          <text x="155" y="143">S₂</text>
          <text x="245" y="103">S₃</text>
        </g>
      </svg>
    ),
  },
  {
    key: 'eq-entropy',
    top: 2920,
    right: '8vw',
    width: 220,
    height: 46,
    speed: 0.06,
    svg: <Equation size={17}>H(X|Y) = H(X,Y) − H(Y)</Equation>,
  },

  // --- ~3100 ---
  {
    key: 'triangles',
    top: 3180,
    right: -60,
    width: 320,
    height: 320,
    speed: 0.08,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinejoin="round">
          <polygon points="100,20 175,150 25,150"/>
          <polygon points="100,50 155,135 45,135"/>
          <polygon points="100,75 135,122 65,122"/>
          <circle cx="100" cy="105" r="4"/>
          <line x1="100" y1="20" x2="100" y2="5"/>
          <line x1="175" y1="150" x2="188" y2="160"/>
          <line x1="25" y1="150" x2="12" y2="160"/>
        </g>
      </svg>
    ),
  },
  {
    key: 'data-nodes',
    top: 3380,
    left: -60,
    width: 340,
    height: 340,
    speed: 0.05,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinecap="round">
          <circle cx="100" cy="100" r="12"/>
          <circle cx="40" cy="50" r="7"/><circle cx="160" cy="45" r="7"/><circle cx="35" cy="140" r="7"/><circle cx="165" cy="150" r="7"/>
          <circle cx="100" cy="30" r="5"/><circle cx="100" cy="175" r="5"/>
          <line x1="47" y1="55" x2="88" y2="93"/><line x1="153" y1="50" x2="112" y2="93"/>
          <line x1="42" y1="135" x2="88" y2="107"/><line x1="158" y1="145" x2="112" y2="107"/>
          <line x1="100" y1="35" x2="100" y2="88"/><line x1="100" y1="112" x2="100" y2="170"/>
          <line x1="47" y1="50" x2="93" y2="32"/><line x1="153" y1="45" x2="107" y2="32"/>
          <line x1="42" y1="142" x2="93" y2="173"/><line x1="158" y1="152" x2="107" y2="173"/>
        </g>
      </svg>
    ),
  },

  // --- ~3700 ---
  {
    key: 'loss-curve',
    top: 3750,
    right: '5vw',
    width: 240,
    height: 160,
    speed: 0.07,
    svg: (
      <svg viewBox="0 0 240 160" fill="none">
        <g stroke={ink} strokeWidth={sw} fill="none">
          <line x1="20" y1="20" x2="20" y2="130"/>
          <line x1="20" y1="130" x2="220" y2="130"/>
          {/* loss decreases with noise */}
          <path d="M25 35 L40 42 L55 30 L70 55 L85 48 L100 72 L115 65 L130 88 L145 82 L160 100 L175 95 L190 110 L205 107 L220 120" strokeWidth={sw * 1.4}/>
        </g>
        <text x="25" y="18" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="13" fill={ink}>L</text>
        <text x="195" y="148" fontFamily="JetBrains Mono" fontSize="9" fill={ink} letterSpacing="1">epoch</text>
      </svg>
    ),
  },
  {
    key: 'eq-grad',
    top: 3950,
    left: '8vw',
    width: 220,
    height: 44,
    speed: 0.08,
    svg: <Equation size={18}>θₜ₊₁ = θₜ − η∇J(θ)</Equation>,
  },

  // --- ~4200 ---
  {
    key: 'pipeline',
    top: 4200,
    left: '5vw',
    width: 300,
    height: 240,
    speed: 0.06,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinecap="round">
          <rect x="20" y="80" width="35" height="35"/>
          <rect x="82" y="80" width="35" height="35"/>
          <rect x="145" y="80" width="35" height="35"/>
          <line x1="55" y1="97" x2="82" y2="97"/>
          <line x1="76" y1="93" x2="82" y2="97"/><line x1="76" y1="101" x2="82" y2="97"/>
          <line x1="117" y1="97" x2="145" y2="97"/>
          <line x1="139" y1="93" x2="145" y2="97"/><line x1="139" y1="101" x2="145" y2="97"/>
          <line x1="37" y1="50" x2="37" y2="80"/><line x1="99" y1="50" x2="99" y2="80"/><line x1="162" y1="50" x2="162" y2="80"/>
          <line x1="37" y1="115" x2="37" y2="150"/><line x1="99" y1="115" x2="99" y2="150"/><line x1="162" y1="115" x2="162" y2="150"/>
          <circle cx="37" cy="47" r="3"/><circle cx="99" cy="47" r="3"/><circle cx="162" cy="47" r="3"/>
        </g>
      </svg>
    ),
  },
  {
    key: 'relu',
    top: 4400,
    right: '7vw',
    width: 200,
    height: 140,
    speed: 0.09,
    svg: (
      <svg viewBox="0 0 200 140" fill="none">
        <g stroke={ink} strokeWidth={sw} fill="none">
          <line x1="20" y1="15" x2="20" y2="120"/>
          <line x1="20" y1="120" x2="185" y2="120"/>
          <polyline points="25,120 100,120 180,30" strokeWidth={sw * 1.4}/>
          <circle cx="100" cy="120" r="2.5" fill={ink}/>
        </g>
        <text x="140" y="55" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="14" fill={ink}>max(0,x)</text>
      </svg>
    ),
  },

  // --- ~4700 ---
  {
    key: 'eq-bellman',
    top: 4780,
    left: '4vw',
    width: 320,
    height: 50,
    speed: 0.05,
    svg: <Equation size={17}>Q*(s,a) = r + γ max_a' Q*(s',a')</Equation>,
  },
  {
    key: 'cursor',
    top: 4950,
    left: '10vw',
    width: 200,
    height: 200,
    speed: 0.06,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 30L60 145L85 120L115 160L130 150L100 110L135 105Z"/>
          <circle cx="60" cy="30" r="15" strokeDasharray="4 4"/>
          <circle cx="60" cy="30" r="28" strokeDasharray="3 6"/>
        </g>
      </svg>
    ),
  },

  // --- ~5200 ---
  {
    key: 'dag',
    top: 5200,
    right: '4vw',
    width: 260,
    height: 200,
    speed: 0.08,
    svg: (
      <svg viewBox="0 0 260 200" fill="none">
        <g stroke={ink} strokeWidth={sw} fill="none">
          <circle cx="40" cy="100" r="9"/>
          <circle cx="120" cy="50" r="9"/>
          <circle cx="120" cy="150" r="9"/>
          <circle cx="200" cy="100" r="9"/>
          <circle cx="230" cy="45" r="7"/>
          <path d="M49 100 L111 50"/>
          <path d="M49 100 L111 150"/>
          <path d="M129 50 L191 100"/>
          <path d="M129 150 L191 100"/>
          <path d="M127 45 L223 45"/>
          <path d="M209 100 L230 52"/>
        </g>
      </svg>
    ),
  },
  {
    key: 'eq-policy',
    top: 5500,
    left: '6vw',
    width: 300,
    height: 48,
    speed: 0.07,
    svg: <Equation size={17}>J(θ) = Eπθ[Σ γᵗ r(sₜ,aₜ)]</Equation>,
  },
]

export default function BackgroundIcons() {
  const layerRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const el = layerRef.current
          if (el) {
            const children = el.children
            for (let i = 0; i < children.length; i++) {
              const child = children[i]
              const speed = parseFloat(child.dataset.speed)
              // Negative: move UP with scroll for a parallax-back effect
              child.style.transform = `translate3d(0, ${-scrollY * speed}px, 0)`
            }
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.key}
          data-speed={icon.speed}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            willChange: 'transform',
            width: icon.width,
            height: icon.height,
            top: icon.top,
            left: icon.left,
            right: icon.right,
          }}
        >
          {icon.svg}
        </div>
      ))}
    </div>
  )
}
