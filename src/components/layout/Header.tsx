import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import Button from '@/components/ui/Button'

const navItems: [string, string][] = [
  ['Zora', '#zora'],
  ['Product day', '#workday'],
  ['Privacy', '#privacy'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-[16px]">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link
          to="/"
          className="flex min-h-[44px] shrink-0 items-center gap-3 text-ink"
          aria-label="DORA Research, home"
        >
          <Logo size={30} spin />
          <span className="flex flex-col justify-center" aria-hidden="true">
            <span className="font-sans text-[20px] font-bold leading-[0.9] tracking-[0.015em]">DORA</span>
            <span className="mt-[5px] font-mono text-[9px] font-medium leading-none tracking-[0.2em] text-muted">
              RESEARCH
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 whitespace-nowrap lg:flex" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="flex min-h-[44px] items-center text-[15px] font-medium text-muted transition-colors hover:text-green"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#waitlist">Join the waitlist</Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span className={`absolute left-0 block h-0.5 w-6 rounded bg-ink transition-all duration-200 ${open ? 'top-[7px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 block h-0.5 w-6 rounded bg-ink transition-all duration-200 ${open ? 'top-[7px] -rotate-45' : 'top-3.5'}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-4 top-20 rounded-xl border border-line bg-white shadow-[0_12px_40px_rgba(23,37,31,.1)] transition-all duration-200 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-line-soft py-3 text-[16px] font-semibold text-ink"
            >
              {label}
            </a>
          ))}
          <Button href="#waitlist" className="mb-2 mt-4 w-full" onClick={() => setOpen(false)}>
            Join the waitlist
          </Button>
        </nav>
      </div>
    </header>
  )
}
