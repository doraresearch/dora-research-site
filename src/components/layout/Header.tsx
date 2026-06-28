import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import Button from '@/components/ui/Button'

const navItems: [string, string][] = [
  ['Product', '#product'],
  ['Teammates', '#teammates'],
  ['Control', '#control'],
  ['Deployment', '#deployment'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setPastHero(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const textColor = pastHero ? 'text-ink/90' : 'text-white/90'
  const navColor = pastHero ? 'text-ink/70 hover:text-ink' : 'text-white/85 hover:text-white'
  const pillClass = pastHero ? 'nav-pill' : 'nav-pill-dark'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Dark top panel behind the nav (over the hero) so it reads as a top bar */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050608] via-[#050608]/85 to-transparent transition-opacity duration-500 ${pastHero ? 'opacity-0' : 'opacity-100'}`}
      />
      <div className={`relative mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 transition-all duration-500 sm:px-8 ${scrolled ? `mt-3 ${pillClass}` : ''}`}>
        <Link
          to="/"
          className={`flex min-h-[44px] shrink-0 items-center gap-3 text-[22px] font-bold tracking-[-0.01em] transition-colors duration-300 ${textColor}`}
          aria-label="DORA, home"
        >
          <Logo size={30} spin />
          DORA
        </Link>

        <nav className="hidden items-center gap-7 whitespace-nowrap lg:flex" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`flex min-h-[44px] items-center text-[15px] font-medium transition-colors duration-300 ${navColor}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="mailto:hello@dorareason.com" variant={pastHero ? 'primary' : 'white'}>
            Map your first workflow
          </Button>
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center lg:hidden`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span className={`absolute left-0 block h-0.5 w-6 rounded transition-all duration-200 ${pastHero ? 'bg-ink' : 'bg-white'} ${open ? 'top-[7px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded transition-opacity duration-200 ${pastHero ? 'bg-ink' : 'bg-white'} ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 block h-0.5 w-6 rounded transition-all duration-200 ${pastHero ? 'bg-ink' : 'bg-white'} ${open ? 'top-[7px] -rotate-45' : 'top-3.5'}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-4 top-20 rounded-2xl border transition-all duration-200 lg:hidden ${
          pastHero
            ? 'glass border-ink/[0.06]'
            : 'glass-dark border-white/[0.08]'
        } ${open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'}`}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`border-b py-3 text-[16px] font-semibold ${
                pastHero
                  ? 'border-ink/[0.06] text-ink/90'
                  : 'border-white/[0.06] text-white/90'
              }`}
            >
              {label}
            </a>
          ))}
          <Button href="mailto:hello@dorareason.com" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Map your first workflow
          </Button>
        </nav>
      </div>
    </header>
  )
}
