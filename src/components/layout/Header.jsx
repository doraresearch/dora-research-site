import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Thesis', path: '/thesis' },
  { label: 'Research', path: '/research' },
  { label: 'About', path: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-black/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-[#111111] font-semibold text-base tracking-tight select-none">
          DORA Research
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors duration-200 ${
                  isActive ? 'text-[#111111] font-medium' : 'text-[#6B7280] hover:text-[#111111]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#111111] transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-[#111111] transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#111111] transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-b border-black/[0.08] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm py-1 transition-colors ${isActive ? 'text-[#111111] font-medium' : 'text-[#6B7280]'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
