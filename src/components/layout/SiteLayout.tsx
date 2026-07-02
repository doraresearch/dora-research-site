import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from './Header'
import Footer from './Footer'

// Fixed-header clearance for anchor scrolls (matches scroll-margin-top in index.css).
const HEADER_OFFSET = -84

export default function SiteLayout() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Lenis owns the scroll position, so native anchor navigation dies against
    // its raf loop. Route all same-page hash links (nav, hero CTA, footer)
    // through lenis.scrollTo instead, and honor hashes on load / history nav.
    const scrollToHash = (hash: string, immediate = false) => {
      const el = hash ? document.getElementById(hash.slice(1)) : null
      if (el) lenis.scrollTo(el, { offset: HEADER_OFFSET, immediate })
    }
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null
      if (!a || !a.hash) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return
      if (!document.getElementById(url.hash.slice(1))) return
      e.preventDefault()
      window.history.pushState(null, '', url.hash)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
      scrollToHash(url.hash)
    }
    const onHashChange = () => scrollToHash(window.location.hash)
    document.addEventListener('click', onClick)
    window.addEventListener('popstate', onHashChange)
    if (window.location.hash) requestAnimationFrame(() => scrollToHash(window.location.hash, true))

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('popstate', onHashChange)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-base">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-dark"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
