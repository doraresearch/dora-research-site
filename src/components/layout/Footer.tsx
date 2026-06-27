import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'

const cols: [string, [string, string][]][] = [
  ['Product', [['How it works', '#product'], ['Teammates', '#teammates'], ['Control', '#control']]],
  ['Company', [['Contact', 'mailto:hello@dorareason.com'], ['Deployment', '#deployment']]],
]

export default function Footer() {
  const markRef = useRef<HTMLDivElement>(null)

  // Run the wordmark shimmer only while the footer is on screen
  // (continuous loops pause when hidden, per the motion suite).
  useEffect(() => {
    const el = markRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle('is-flowing', entry.isIntersecting),
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <footer className="border-t border-white/[0.06] bg-dark pt-10">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 pb-7">
          <p className="max-w-[48ch] text-[15px] leading-[1.6] text-white/50">
            DORA builds secure AI teammates that reduce human touches across recurring infrastructure operations — from alert triage to incident resolution.
          </p>
          <div className="flex gap-12">
            {cols.map(([title, links]) => (
              <div key={title}>
                <p className="mb-3 text-[14px] font-semibold text-white/80">{title}</p>
                {links.map(([label, href]) => (
                  <a key={label} href={href} className="block min-h-[44px] py-2.5 text-[14px] text-white/40 transition-colors hover:text-white/80">
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div ref={markRef} className="text-spectral-shimmer select-none pb-3 text-[clamp(90px,21vw,260px)] font-extrabold leading-[0.86] tracking-[-0.05em]" aria-hidden="true">
          DORA
        </div>

        <div className="flex flex-col gap-2 border-t border-white/[0.06] py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <Logo size={17} spin />© 2026 DORA Research
          </span>
          <span>Secure AI teammates for infrastructure operations</span>
        </div>
      </Container>
    </footer>
  )
}
