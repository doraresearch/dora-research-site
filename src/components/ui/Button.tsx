import type { ReactNode } from 'react'

const VARIANTS = {
  primary: 'border border-transparent bg-action text-surface hover:bg-deep',
  dark: 'border border-transparent bg-dark text-surface hover:bg-dark/85',
  ghost: 'border border-control bg-transparent text-secondary hover:bg-context/60 hover:text-ink',
}

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: keyof typeof VARIANTS
  className?: string
  onClick?: () => void
}

export default function Button({ href, children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-pill px-5 text-[15px] font-semibold leading-none transition-colors duration-150 ${VARIANTS[variant]} ${className}`
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
