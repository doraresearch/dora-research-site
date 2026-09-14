type ZoraMarkProps = {
  size?: number
  tone?: 'night' | 'paper'
  title?: string
  className?: string
}

// Zora's mark: one flat disc in the swarm's open seat, on a single chord of the ring (DESIGN.md §3.2).
// currentColor everywhere. On Night from 24 px upward the chord dims to Ash; below 24 px both parts are Paper.
export default function ZoraMark({ size = 24, tone = 'night', title, className = '' }: ZoraMarkProps) {
  const disc = tone === 'night' ? '#F5F7F2' : '#141D18'
  const chord = tone === 'night' && size >= 24 ? '#A4B1AA' : disc

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
    >
      <circle cx="16.25" cy="6.64" r="3" fill={disc} />
      <rect x="3.74" y="17.35" width="16.52" height="1.8" rx="0.9" fill={chord} />
    </svg>
  )
}
