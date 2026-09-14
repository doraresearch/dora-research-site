import { useId } from 'react'

type LogoProps = {
  size?: number
  variant?: 'gradient' | 'ink' | 'paper'
  title?: string
  className?: string
}

// The lab's mark: thirteen specialists in orbit, one seat open at the upper right.
// Geometry is fixed (DESIGN.md §3.1). The mark is static; it never spins, pulses, or glows.
const DOTS: [number, number, number][] = [
  [20.5, 12, 1.4], [19.36, 7.75, 1.2], [12, 3.5, 1.1], [7.75, 4.64, 1.3],
  [4.64, 7.75, 1.5], [3.5, 12, 1.6], [4.64, 16.25, 1.7], [7.75, 19.36, 1.8],
  [12, 20.5, 1.7], [16.25, 19.36, 1.6], [19.36, 16.25, 1.5], [15, 13, 1.0], [13, 15.5, 0.9],
]

export default function Logo({ size = 24, variant = 'ink', title, className = '' }: LogoProps) {
  const rawId = useId().replace(/:/g, '')
  const gradId = `swarm-${rawId}`
  const fill = variant === 'gradient' ? `url(#${gradId})` : variant === 'paper' ? '#F5F7F2' : '#141D18'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 ${className}`}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
    >
      {variant === 'gradient' ? (
        <defs>
          <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="3" y1="21" x2="21" y2="3">
            <stop offset="0" stopColor="#3D8B68" />
            <stop offset="1" stopColor="#03F5F2" />
          </linearGradient>
        </defs>
      ) : null}
      <g fill={fill}>
        {DOTS.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>
  )
}
