import type { ReactNode } from 'react'

export default function ProductFrame({
  children,
  label,
  status = 'Release context active',
  className = '',
}: {
  children: ReactNode
  label: string
  status?: string
  className?: string
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_64px_rgba(13,23,19,.11)] ${className}`}
      role="group"
      aria-label={label}
    >
      <div className="flex h-10 items-center border-b border-line-soft bg-base px-3.5 sm:px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-line-graph" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-graph" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-graph" />
        </div>
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          {label}
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-green">
          <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
          <span className="sm:hidden">Active</span>
          <span className="hidden sm:inline">{status}</span>
        </span>
      </div>
      {children}
    </div>
  )
}
