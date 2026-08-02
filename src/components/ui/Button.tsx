import type { ReactNode } from 'react'

const VARIANTS = {
  primary: 'bg-green text-base border border-transparent hover:bg-green-deep',
  dark: 'bg-ink text-base border border-transparent hover:bg-ink/85',
  ghost: 'bg-transparent text-muted border border-line hover:bg-sage/50 hover:text-ink',
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
