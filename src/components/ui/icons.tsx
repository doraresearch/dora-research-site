// Shared inline stroke icons for the Zora vignettes. 24×24 viewBox, currentColor.
// No icon library — these five are the whole set. No emoji anywhere in the design.
import type { ReactNode } from 'react'

function Base({ children, className = '', strokeWidth = 1.8 }: { children: ReactNode; className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={`shrink-0 ${className}`} aria-hidden="true">
      {children}
    </svg>
  )
}

export function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <Base className={className} strokeWidth={2}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Base>
  )
}

export function MicIcon({ className = '' }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </Base>
  )
}

export function MailIcon({ className = '' }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </Base>
  )
}

export function PenIcon({ className = '' }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </Base>
  )
}

export function DocIcon({ className = '' }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </Base>
  )
}
