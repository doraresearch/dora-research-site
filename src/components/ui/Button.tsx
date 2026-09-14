import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  href: string
  children: ReactNode
  tone?: 'paper' | 'night'
  variant?: 'primary' | 'ghost'
  className?: string
}

const STYLES = {
  paper: {
    primary: 'rounded-sm bg-green text-paper hover:bg-ink',
    ghost: 'rounded-sm border border-pencil text-ink hover:bg-evidence',
  },
  night: {
    primary: 'rounded bg-mint text-night hover:bg-npaper',
    ghost: 'rounded border border-nstrong text-npaper hover:bg-raised',
  },
}

// 40 px controls, 14 px Geist 500, label never wraps (DESIGN.md §6.3).
export default function Button({ href, children, tone = 'paper', variant = 'primary', className = '' }: ButtonProps) {
  const cls = `inline-flex h-10 items-center justify-center whitespace-nowrap px-4 text-[14px] font-medium leading-5 transition-colors duration-120 ease-house ${STYLES[tone][variant]} ${className}`
  const external = href.startsWith('mailto:') || href.startsWith('http')
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href} className={cls}>
      {children}
    </Link>
  )
}
