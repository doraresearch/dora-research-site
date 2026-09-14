import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '@/components/Logo'
import Button from '@/components/ui/Button'
import type { Register } from './SiteLayout'

const NAV = [
  { label: 'Research', to: '/research' },
  { label: 'Zora', to: '/zora' },
  { label: 'Company', to: '/' },
] as const

const BETA = 'mailto:hello@dorareason.com?subject=Zora%20private%20beta'

export default function Header({ register }: { register: Register }) {
  const [open, setOpen] = useState(false)
  const night = register === 'night'
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    panelRef.current?.toggleAttribute('inert', !open)
  }, [open])

  const link = (active: boolean) =>
    `inline-flex h-10 items-center border-b text-[14px] font-medium leading-5 transition-colors duration-120 ease-house ${
      active
        ? night
          ? 'border-npaper text-npaper'
          : 'border-ink text-ink'
        : night
          ? 'border-transparent text-ash hover:text-npaper'
          : 'border-transparent text-pencil hover:text-ink'
    }`

  return (
    <header className={`sticky top-0 z-40 border-b ${night ? 'border-nline bg-night' : 'border-rule bg-paper'}`}>
      <div className="mx-auto flex h-16 w-full max-w-rail items-center justify-between px-6 lg:px-10">
        <NavLink to="/" className="flex h-10 items-center gap-2.5" aria-label="DORA Research, company page">
          <Logo size={24} variant={night ? 'paper' : 'gradient'} />
          <span className="text-[15px] font-medium leading-5 tracking-[-0.01em]">DORA Research</span>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => link(isActive)}>
              {item.label}
            </NavLink>
          ))}
          <Button href={BETA} tone={register} variant={night ? 'ghost' : 'primary'}>
            Request private beta
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={`flex h-10 w-10 items-center justify-center md:hidden ${night ? 'text-npaper' : 'text-ink'}`}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3.5 6.5h13M3.5 13.5h13" />}
          </svg>
        </button>
      </div>

      <div
        ref={panelRef}
        id="mobile-nav"
        className={`border-t md:hidden ${open ? 'block' : 'hidden'} ${night ? 'border-nline bg-night' : 'border-rule bg-paper'}`}
      >
        <nav className="mx-auto flex w-full max-w-rail flex-col px-6 py-3" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex h-12 items-center border-b text-[15px] font-medium ${night ? 'border-nline' : 'border-rule'} ${
                  isActive ? (night ? 'text-npaper' : 'text-ink') : night ? 'text-ash' : 'text-pencil'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="py-4">
            <Button href={BETA} tone={register} variant={night ? 'ghost' : 'primary'} className="w-full">
              Request private beta
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
