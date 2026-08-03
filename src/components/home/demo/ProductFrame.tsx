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
      className={`w-full overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_60px_rgba(23,37,31,.12)] ${className}`}
      role="group"
      aria-label={label}
    >
      <div className="flex h-11 items-center border-b border-line-soft bg-base px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-orange/80" />
          <span className="h-2 w-2 rounded-full bg-yellow" />
          <span className="h-2 w-2 rounded-full bg-green/80" />
        </div>
        <span className="ml-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:text-[10px]">
          {label}
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-green sm:text-[9px]">
          <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
          {status}
        </span>
      </div>
      {children}
    </div>
  )
}
