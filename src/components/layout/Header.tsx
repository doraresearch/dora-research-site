import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import Button from '@/components/ui/Button'

const navItems = [
  { label: 'Product', href: '#zora' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Traceability', href: '#traceability' },
] as const

const navHashes = new Set(navItems.map((item) => item.href))

function Cta({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      href="#waitlist"
      onClick={onClick}
      className="!h-10 !min-h-10 !rounded-sm !px-4 !text-[14px] !leading-5 !tracking-[-0.005em] active:!bg-action-pressed lg:!w-[195px]"
    >
      <span>Request private beta</span>
      <span className="flex h-4 w-4 items-center justify-center" aria-hidden="true">
        <img src="/zora-arrow-right.svg" alt="" className="h-[8.5px] w-[10.5px]" />
      </span>
    </Button>
  )
}

function Brand() {
  return (
    <Link
      to="/"
      className="flex min-h-11 shrink-0 items-center gap-3 text-ink"
      aria-label="Zora, home"
    >
      <Logo size={30} />
      <span className="font-sans text-[20px] font-semibold leading-5 tracking-[-0.03em]" aria-hidden="true">
        Zora
      </span>
    </Link>
  )
}

function CurrentIndicator() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-action" aria-hidden="true" />
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<(typeof navItems)[number]['href']>('#zora')
  const headerRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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

    const observer = new IntersectionObserver(
      (entries) => {
        const nearest = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (nearest) setActiveHref(`#${nearest.target.id}` as (typeof navItems)[number]['href'])
      },
      { rootMargin: '-84px 0px -65% 0px', threshold: [0, 0.01, 0.25] },
    )

    sections.forEach((section) => observer.observe(section))
    syncHash()
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('popstate', syncHash)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('popstate', syncHash)
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

  return (
    <header ref={headerRef} className="sticky top-0 z-50 h-16 border-b border-line bg-canvas lg:h-[72px]">
      <div className="mx-auto h-full w-full max-w-[1344px] px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:hidden">
          <Brand />
          <button
            ref={triggerRef}
            type="button"
            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded transition-colors duration-200 hover:bg-subtle active:bg-selected"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative h-5 w-5" aria-hidden="true">
              <img
                src="/zora-menu-closed.svg"
                alt=""
                className={`absolute inset-0 h-5 w-5 transition-[opacity,transform] duration-200 ease-out ${
                  open ? 'scale-90 rotate-12 opacity-0' : 'scale-100 rotate-0 opacity-100'
                }`}
              />
              <img
                src="/zora-menu-open.svg"
                alt=""
                className={`absolute inset-0 h-5 w-5 transition-[opacity,transform] duration-200 ease-out ${
                  open ? 'scale-100 rotate-0 opacity-100' : 'scale-90 -rotate-12 opacity-0'
                }`}
              />
            </span>
          </button>
        </div>

        <div className="hidden h-[72px] grid-cols-[260px_minmax(0,1fr)_260px] items-center lg:grid">
          <div className="flex h-full items-center">
            <Brand />
          </div>

          <nav className="flex h-12 items-center justify-center gap-8 whitespace-nowrap" aria-label="Primary">
            {navItems.map((item) => {
              const current = activeHref === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={current ? 'location' : undefined}
                  className={`flex h-12 items-center gap-2 rounded-sm px-3 text-[14px] font-medium leading-5 transition-colors duration-150 hover:bg-subtle hover:text-ink active:bg-selected ${
                    current ? 'bg-surface text-ink' : 'bg-transparent text-secondary'
                  }`}
                >
                  {current ? <CurrentIndicator /> : null}
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex h-full items-center justify-end">
            <Cta />
          </div>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-16 h-[232px] border-y border-line bg-surface px-6 py-4 shadow-overlay transition-[opacity,transform,visibility] duration-200 ease-out lg:hidden ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-1 opacity-0'
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
                  className={`flex h-12 shrink-0 items-center gap-2 bg-surface px-4 text-[16px] font-semibold leading-[22px] tracking-[-0.015em] transition-colors duration-150 hover:bg-subtle active:bg-selected ${
                    index < navItems.length - 1 ? 'border-b border-line' : ''
                  } ${current ? 'text-ink' : 'text-secondary'}`}
                >
                  {current ? <CurrentIndicator /> : null}
                  {item.label}
                </a>
              )
            })}
          </div>
          <Cta onClick={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  )
}
