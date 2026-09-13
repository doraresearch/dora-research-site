import { useEffect, useRef } from 'react'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
}

// Returns a ref; adds `is-visible` to the element when it scrolls into view.
// Base hidden state lives in CSS scoped to `.js [data-reveal]`, so content
// stays visible with no JS / no observer support.
//
// Hardened against jump navigation (anchor links, End key, scrollbar drags,
// Lenis-driven scrolls): besides the IntersectionObserver, an immediate
// in-viewport check runs on mount and a short-lived recheck loop catches
// elements that entered the viewport without a clean intersection event.
// A section arriving blank is worse than any missed animation.
export default function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
}: RevealOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let io: IntersectionObserver | null = null
    let intervalId: number | undefined
    let revealed = false

    const reveal = () => {
      if (revealed) return
      revealed = true
      el.classList.add('is-visible')
      io?.disconnect()
      if (intervalId !== undefined) window.clearInterval(intervalId)
      window.removeEventListener('hashchange', recheck)
    }

    const inViewport = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.98 && r.bottom > 0
    }

    const recheck = () => {
      // Give the jump a frame to settle, then reveal if we landed on it.
      requestAnimationFrame(() => {
        if (inViewport()) reveal()
      })
    }

    if (!('IntersectionObserver' in window)) {
      reveal()
      return
    }

    if (inViewport()) {
      reveal()
      return
    }

    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal()
        })
      },
      { threshold, rootMargin }
    )
    io.observe(el)

    // Safety net: hash jumps + a low-frequency recheck (self-terminates on reveal).
    window.addEventListener('hashchange', recheck)
    intervalId = window.setInterval(() => {
      if (inViewport()) reveal()
    }, 500)

    return () => {
      io?.disconnect()
      if (intervalId !== undefined) window.clearInterval(intervalId)
      window.removeEventListener('hashchange', recheck)
    }
  }, [threshold, rootMargin])

  return ref
}
