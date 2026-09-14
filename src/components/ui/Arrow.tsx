// The one glyph the marketing pages use: a link arrow at text size, currentColor.
export default function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 10" width="12" height="10" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
