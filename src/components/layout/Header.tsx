import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import Button from '@/components/ui/Button'

const navItems: [string, string][] = [
  ['How it works', '#how-it-works'],
  ['Functions', '#use-cases'],
  ['Example', '#deployment-pattern'],
  ['Deployment', '#deployment'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-soft/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5 text-[18px] font-bold tracking-[-0.01em] text-ink" aria-label="DORA Research, home">
          <Logo size={24} spin />
          DORA
        </Link>

        <nav className="hidden items-center gap-7 whitespace-nowrap lg:flex" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="py-3 text-sm font-medium text-body transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="mailto:hello@dorareason.com">Map your AI operations team</Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
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
        className={`absolute inset-x-0 top-16 border-b border-line bg-white/95 backdrop-blur-md transition-opacity duration-200 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-line py-3 text-[16px] font-semibold text-ink">
              {label}
            </a>
          ))}
          <Button href="mailto:hello@dorareason.com" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Map your AI operations team
          </Button>
        </nav>
      </div>
    </header>
  )
}
