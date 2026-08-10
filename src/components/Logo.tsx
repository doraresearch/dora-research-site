import { useId } from 'react'

type LogoProps = {
  size?: number
  variant?: 'brand' | 'white'
  spin?: boolean
  title?: string
  className?: string
}

// Swarm "orbit ring" mark — geometry unchanged from the original brand mark.
// Gradient regraded to Living Knowledge: Living Green → Signal Orange.
const DOTS: [number, number, number][] = [
  [20.5, 12, 1.4], [19.36, 7.75, 1.2], [12, 3.5, 1.1], [7.75, 4.64, 1.3],
  [4.64, 7.75, 1.5], [3.5, 12, 1.6], [4.64, 16.25, 1.7], [7.75, 19.36, 1.8],
  [12, 20.5, 1.7], [16.25, 19.36, 1.6], [19.36, 16.25, 1.5], [15, 13, 1.0], [13, 15.5, 0.9],
]

export default function Logo({ size = 22, variant = 'brand', spin = false, title, className = '' }: LogoProps) {
  const rawId = useId().replace(/:/g, '')
  const gradId = `zora-brand-${rawId}`
  const fill = variant === 'white' ? '#ffffff' : `url(#${gradId})`

  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={spin ? undefined : className}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
    >
      {variant !== 'white' && (
        <defs>
          <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="3" y1="21" x2="21" y2="3">
            <stop offset="0" stopColor="#3D8B68" />
            <stop offset="1" stopColor="#FF785A" />
          </linearGradient>
        </defs>
      )}
      <g fill={fill}>
        {DOTS.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>
  )

  if (!spin) return mark

  return (
    <span
      className={`inline-flex shrink-0 origin-center animate-logo-spin ${className}`}
      style={{ width: size, height: size }}
    >
      {mark}
    </span>
  )
}
