import { useEffect, useRef } from 'react'

const iconColor = 'rgba(0,0,0,0.04)'
const sw = 0.75

const icons = [
  {
    name: 'and-gate',
    style: { top: '-40px', right: '-60px', width: 320, height: 320 },
    speed: 0.02,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
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
    name: 'data-nodes',
    style: { top: '35vh', left: '-80px', width: 400, height: 400 },
    speed: 0.05,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinecap="round">
          <circle cx="100" cy="100" r="12"/>
          <circle cx="40" cy="50" r="7"/>
          <circle cx="160" cy="45" r="7"/>
          <circle cx="35" cy="140" r="7"/>
          <circle cx="165" cy="150" r="7"/>
          <circle cx="100" cy="30" r="5"/>
          <circle cx="100" cy="175" r="5"/>
          <line x1="47" y1="55" x2="88" y2="93"/>
          <line x1="153" y1="50" x2="112" y2="93"/>
          <line x1="42" y1="135" x2="88" y2="107"/>
          <line x1="158" y1="145" x2="112" y2="107"/>
          <line x1="100" y1="35" x2="100" y2="88"/>
          <line x1="100" y1="112" x2="100" y2="170"/>
          <line x1="47" y1="50" x2="93" y2="32"/>
          <line x1="153" y1="45" x2="107" y2="32"/>
          <line x1="42" y1="142" x2="93" y2="173"/>
          <line x1="158" y1="152" x2="107" y2="173"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'hexagon',
    style: { top: '55vh', right: '-45px', width: 280, height: 280 },
    speed: 0.08,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinejoin="round">
          <polygon points="100,40 143,65 143,115 100,140 57,115 57,65"/>
          <polygon points="100,60 126,75 126,105 100,120 74,105 74,75"/>
          <line x1="100" y1="40" x2="100" y2="15"/>
          <line x1="143" y1="65" x2="165" y2="52"/>
          <line x1="143" y1="115" x2="165" y2="128"/>
          <line x1="100" y1="140" x2="100" y2="165"/>
          <line x1="57" y1="115" x2="35" y2="128"/>
          <line x1="57" y1="65" x2="35" y2="52"/>
          <circle cx="100" cy="15" r="3"/>
          <circle cx="165" cy="52" r="3"/>
          <circle cx="165" cy="128" r="3"/>
          <circle cx="100" cy="165" r="3"/>
          <circle cx="35" cy="128" r="3"/>
          <circle cx="35" cy="52" r="3"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'cursor',
    style: { top: '85vh', left: '8vw', width: 220, height: 220 },
    speed: 0.02,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 30L60 145L85 120L115 160L130 150L100 110L135 105Z"/>
          <circle cx="60" cy="30" r="15" strokeDasharray="4 4"/>
          <circle cx="60" cy="30" r="28" strokeDasharray="3 6"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'decision-tree',
    style: { top: '130vh', right: '5vw', width: 360, height: 360 },
    speed: 0.02,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinecap="round">
          <circle cx="100" cy="30" r="10"/>
          <circle cx="55" cy="85" r="8"/>
          <circle cx="145" cy="85" r="8"/>
          <line x1="93" y1="38" x2="61" y2="78"/>
          <line x1="107" y1="38" x2="139" y2="78"/>
          <circle cx="30" cy="140" r="6"/>
          <circle cx="75" cy="140" r="6"/>
          <circle cx="125" cy="140" r="6"/>
          <circle cx="170" cy="140" r="6"/>
          <line x1="49" y1="91" x2="35" y2="135"/>
          <line x1="60" y1="92" x2="71" y2="134"/>
          <line x1="140" y1="92" x2="129" y2="134"/>
          <line x1="151" y1="91" x2="165" y2="135"/>
          <line x1="30" y1="146" x2="30" y2="165"/>
          <line x1="75" y1="146" x2="75" y2="165"/>
          <line x1="125" y1="146" x2="125" y2="165"/>
          <line x1="170" y1="146" x2="170" y2="165"/>
          <circle cx="30" cy="170" r="4"/>
          <circle cx="75" cy="170" r="4"/>
          <circle cx="125" cy="170" r="4"/>
          <circle cx="170" cy="170" r="4"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'xor-gate',
    style: { top: '150vh', left: '-30px', width: 300, height: 300 },
    speed: 0.05,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M65 50L100 50C145 50 165 75 165 100C165 125 145 150 100 150L65 150C80 125 80 75 65 50Z"/>
          <path d="M55 50C70 75 70 125 55 150" fill="none"/>
          <line x1="20" y1="75" x2="68" y2="75"/>
          <line x1="20" y1="125" x2="68" y2="125"/>
          <line x1="165" y1="100" x2="195" y2="100"/>
          <circle cx="20" cy="75" r="3"/>
          <circle cx="20" cy="125" r="3"/>
          <circle cx="195" cy="100" r="3"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'triangles',
    style: { top: '180vh', right: '-70px', width: 350, height: 350 },
    speed: 0.08,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinejoin="round">
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
    name: 'pipeline',
    style: { top: '10vh', left: '15vw', width: 260, height: 260 },
    speed: 0.05,
    svg: (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke={iconColor} strokeWidth={sw} strokeLinecap="round">
          <rect x="20" y="80" width="35" height="35" rx="4"/>
          <rect x="82" y="80" width="35" height="35" rx="4"/>
          <rect x="145" y="80" width="35" height="35" rx="4"/>
          <line x1="55" y1="97" x2="82" y2="97"/>
          <line x1="76" y1="93" x2="82" y2="97"/>
          <line x1="76" y1="101" x2="82" y2="97"/>
          <line x1="117" y1="97" x2="145" y2="97"/>
          <line x1="139" y1="93" x2="145" y2="97"/>
          <line x1="139" y1="101" x2="145" y2="97"/>
          <line x1="37" y1="50" x2="37" y2="80"/>
          <line x1="99" y1="50" x2="99" y2="80"/>
          <line x1="162" y1="50" x2="162" y2="80"/>
          <line x1="37" y1="115" x2="37" y2="150"/>
          <line x1="99" y1="115" x2="99" y2="150"/>
          <line x1="162" y1="115" x2="162" y2="150"/>
          <circle cx="37" cy="47" r="3"/>
          <circle cx="99" cy="47" r="3"/>
          <circle cx="162" cy="47" r="3"/>
        </g>
      </svg>
    ),
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
          if (layerRef.current) {
            const children = layerRef.current.children
            for (let i = 0; i < children.length; i++) {
              const el = children[i]
              const speed = parseFloat(el.dataset.speed)
              el.style.transform = `translateY(${scrollY * speed}px)`
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
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.name}
          data-speed={icon.speed}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            willChange: 'transform',
            width: icon.style.width,
            height: icon.style.height,
            top: icon.style.top,
            left: icon.style.left,
            right: icon.style.right,
          }}
        >
          {icon.svg}
        </div>
      ))}
    </div>
  )
}
