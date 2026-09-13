import { useEffect, useRef, useState } from 'react'
import Logo from '@/components/Logo'
import Button from '@/components/ui/Button'

const navItems = [
  { label: 'Product', href: '#zora' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Traceability', href: '#traceability' },
] as const

const navHashes = new Set(navItems.map((item) => item.href))
type HeaderTone = 'media' | 'surface'

function Cta({ tone, onClick }: { tone: HeaderTone; onClick?: () => void }) {
  return (
    <Button
      href="#waitlist"
      variant={tone === 'media' ? 'inverse' : 'primary'}
      onClick={onClick}
      className="lg:w-[195px]"
    >
      <span>Request private beta</span>
      <span className="flex h-4 w-4 items-center justify-center" aria-hidden="true">
        <img
          src="/zora-arrow-right.svg"
          alt=""
          className={`h-[8.5px] w-[10.5px] ${tone === 'media' ? 'brightness-0' : ''}`}
        />
      </span>
    </Button>
  )
}

function Brand() {
  return (
    <a
      href="#zora"
      className="flex min-h-11 shrink-0 items-center gap-3 text-current"
      aria-label="DORA Research, home"
    >
      <Logo size={30} spin />
      <span className="flex items-baseline gap-2" aria-hidden="true">
        <span className="font-sans text-[18px] font-semibold leading-[22px] tracking-[-0.025em]">DORA</span>
        <span className="font-sans text-[15px] font-medium leading-[22px] tracking-[-0.015em]">
          Research
        </span>
      </span>
    </a>
  )
}

function CurrentIndicator() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-action" aria-hidden="true" />
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [tone, setTone] = useState<HeaderTone>('media')
  const [activeHref, setActiveHref] = useState<(typeof navItems)[number]['href']>('#zora')
  const headerRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncTone = () => {
      const hero = document.getElementById('zora')
      setTone(hero && hero.getBoundingClientRect().bottom > 72 ? 'media' : 'surface')
    }

    syncTone()
    window.addEventListener('scroll', syncTone, { passive: true })
    window.addEventListener('resize', syncTone)
    return () => {
      window.removeEventListener('scroll', syncTone)
      window.removeEventListener('resize', syncTone)
    }
  }, [])

  useEffect(() => {
    const syncHash = () => {
      if (navHashes.has(window.location.hash as (typeof navItems)[number]['href'])) {
        setActiveHref(window.location.hash as (typeof navItems)[number]['href'])
      }
      setOpen(false)
    }

    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section))

    const syncActiveSection = () => {
      const current = sections.reduce<HTMLElement | undefined>((active, section) => {
        return section.getBoundingClientRect().top <= 96 ? section : active
      }, sections[0])

      if (current) setActiveHref(`#${current.id}` as (typeof navItems)[number]['href'])
    }

    syncHash()
    syncActiveSection()
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('popstate', syncHash)
    window.addEventListener('scroll', syncActiveSection, { passive: true })
    window.addEventListener('resize', syncActiveSection)

    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('popstate', syncHash)
      window.removeEventListener('scroll', syncActiveSection)
      window.removeEventListener('resize', syncActiveSection)
    }
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeAtDesktop = () => {
      if (desktop.matches) setOpen(false)
    }

    closeAtDesktop()
    desktop.addEventListener('change', closeAtDesktop)
    return () => desktop.removeEventListener('change', closeAtDesktop)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      requestAnimationFrame(() => triggerRef.current?.focus())
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  useEffect(() => {
    mobileMenuRef.current?.toggleAttribute('inert', !open)
  }, [open])

  const mediaTone = tone === 'media'

  return (
    <header
      ref={headerRef}
      data-tone={mediaTone ? 'inverse' : 'light'}
      data-header-tone={tone}
      className={`fixed inset-x-0 top-0 z-50 h-16 border-b transition-[background-color,border-color,color,box-shadow] duration-240 lg:h-[72px] ${
        mediaTone
          ? 'border-white/25 bg-[rgba(12,21,16,0.56)] text-[#f5f7f2] lg:bg-[rgba(12,21,16,0.36)] lg:shadow-[0_8px_24px_-12px_rgba(12,21,16,.18)] lg:backdrop-blur-[20px]'
          : 'border-line bg-canvas text-ink'
      }`}
    >
      <div className="mx-auto h-full w-full max-w-[1344px] px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:hidden">
          <Brand />
          <button
            ref={triggerRef}
            type="button"
            className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-sm transition-colors duration-200 ${
              mediaTone ? 'hover:bg-white/10 active:bg-white/15' : 'hover:bg-subtle active:bg-selected'
            }`}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative h-5 w-5" aria-hidden="true">
              <img
                src="/zora-menu-closed.svg"
                alt=""
                className={`absolute inset-0 h-5 w-5 transition-[opacity,transform,filter] duration-200 ease-out ${
                  open ? 'scale-90 rotate-12 opacity-0' : 'scale-100 rotate-0 opacity-100'
                } ${mediaTone ? 'brightness-0 invert' : ''}`}
              />
              <img
                src="/zora-menu-open.svg"
                alt=""
                className={`absolute inset-0 h-5 w-5 transition-[opacity,transform,filter] duration-200 ease-out ${
                  open ? 'scale-100 rotate-0 opacity-100' : 'scale-90 -rotate-12 opacity-0'
                } ${mediaTone ? 'brightness-0 invert' : ''}`}
              />
            </span>
          </button>
        </div>

        <div className="hidden h-[72px] grid-cols-[220px_minmax(0,1fr)_220px] items-center lg:grid xl:grid-cols-[260px_minmax(0,1fr)_260px]">
          <div className="flex h-full items-center">
            <Brand />
          </div>

          <nav className="flex h-12 items-center justify-center gap-1 whitespace-nowrap xl:gap-2" aria-label="Primary">
            {navItems.map((item) => {
              const current = activeHref === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={current ? 'location' : undefined}
                  className={`flex h-12 items-center gap-2 rounded-sm px-2.5 text-[14px] font-medium leading-5 transition-colors duration-160 xl:px-3 ${
                    mediaTone
                      ? current
                        ? 'bg-white/10 text-[#f5f7f2]'
                        : 'text-[#a4b1aa] hover:bg-white/10 hover:text-[#f5f7f2]'
                      : current
                        ? 'bg-surface text-ink'
                        : 'text-secondary hover:bg-subtle hover:text-ink'
                  }`}
                >
                  {current ? <CurrentIndicator /> : null}
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex h-full items-center justify-end">
            <Cta tone={tone} />
          </div>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        data-tone="light"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-16 h-[232px] border-y border-line bg-surface px-6 py-4 text-ink shadow-overlay transition-[opacity,transform,visibility] duration-200 ease-out lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <nav className="flex h-full flex-col gap-4" aria-label="Primary">
          <div className="flex h-36 flex-col">
            {navItems.map((item, index) => {
              const current = activeHref === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={current ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex h-12 shrink-0 items-center gap-2 bg-surface px-4 text-[15px] font-semibold leading-[22px] tracking-[-0.015em] transition-colors duration-160 hover:bg-subtle active:bg-selected ${
                    index < navItems.length - 1 ? 'border-b border-line' : ''
                  } ${current ? 'text-ink' : 'text-secondary'}`}
                >
                  {current ? <CurrentIndicator /> : null}
                  {item.label}
                </a>
              )
            })}
          </div>
          <Cta tone="surface" onClick={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  )
}
