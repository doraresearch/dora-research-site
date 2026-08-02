import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'

const cols: [string, [string, string][]][] = [
  ['Zora', [['How it works', '#how-it-works'], ['Privacy', '#privacy'], ['Waitlist', '#waitlist']]],
  ['Lab', [['Contact', 'mailto:hello@dorareason.com']]],
]

export default function Footer() {
  const markRef = useRef<HTMLDivElement>(null)

  // Run the wordmark shimmer only while the footer is on screen
  // (continuous loops pause when hidden, per the motion rules).
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
    <footer className="border-t border-ink/15 bg-ink pt-14">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 pb-10">
          <p className="max-w-[40ch] text-[15px] leading-[1.6] text-base/65">
            DORA Research is a consumer memory lab. Zora is its first product.
          </p>
          <div className="flex gap-16">
            {cols.map(([title, links]) => (
              <div key={title} className="flex flex-col gap-3">
                <span className="text-[14px] font-semibold text-base">{title}</span>
                {links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[14px] text-base/65 transition-colors hover:text-green"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          ref={markRef}
          className="text-brand-shimmer select-none font-display text-[clamp(90px,21vw,260px)] font-extrabold leading-[0.82] tracking-[-0.04em]"
          aria-hidden="true"
        >
          DORA
        </div>

        <div className="flex flex-col gap-2 border-t border-base/20 py-[18px] font-mono text-[11px] uppercase tracking-[0.12em] text-base/60 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <Logo size={16} spin />© 2026 DORA Research
          </span>
          <span>A consumer memory lab</span>
        </div>
      </Container>
    </footer>
  )
}
