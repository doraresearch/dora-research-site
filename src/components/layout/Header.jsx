import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-[12px] tracking-[0.12em] uppercase text-ink font-medium select-none">
          <span className="text-ochre">§</span>&nbsp;&nbsp;DORA Research
        </Link>
        <span className="hidden md:block font-mono text-[11px] tracking-[0.14em] uppercase text-ink-muted">
          Working paper &nbsp;·&nbsp; 2026.04
        </span>
      </div>
    </header>
  )
}
