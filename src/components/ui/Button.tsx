import type { ReactNode } from 'react'

const VARIANTS = {
  primary: 'border border-transparent bg-action text-inverse hover:bg-deep active:bg-action-pressed',
  media: 'border border-control bg-[#131e18] text-[#f5f7f2] hover:bg-[#19261f]',
  inverse: 'border border-transparent bg-action text-[#0c1510] hover:bg-action-hover active:bg-action-pressed',
  dark: 'border border-transparent bg-[#0d1511] text-[#f5f7f2] hover:bg-[#19261f]',
  ghost: 'border border-control bg-transparent text-secondary hover:bg-context hover:text-ink',
}

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: keyof typeof VARIANTS
  className?: string
  onClick?: () => void
}

export default function Button({ href, children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const cls = `inline-flex h-10 min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-sm px-4 text-[14px] font-semibold leading-5 tracking-[-0.005em] transition-colors duration-160 ${VARIANTS[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
