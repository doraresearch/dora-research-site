import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from './Header'
import Footer from './Footer'

export default function SiteLayout() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Drive same-page hash links (nav, hero CTA, footer) through lenis.scrollTo
    // for consistent easing, and honor hashes on load / history navigation.
    // No extra offset: Lenis respects the sections' scroll-margin-top (84px).
    const scrollToHash = (hash: string, immediate = false) => {
      const el = hash ? document.getElementById(hash.slice(1)) : null
      if (el) lenis.scrollTo(el, { immediate })
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
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-base">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
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
