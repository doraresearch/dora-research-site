import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'

const cols: [string, [string, string][]][] = [
  ['Zora', [['How it works', '#how-it-works'], ['Traceability', '#traceability'], ['Waitlist', '#waitlist']]],
  ['Lab', [['Contact', 'mailto:hello@dorareason.com']]],
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-ink pt-14">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 pb-10">
          <p className="max-w-[40ch] text-[15px] leading-[1.6] text-canvas/65">
            Zora is a second brain for work, built by DORA Research.
          </p>
          <div className="flex gap-16">
            {cols.map(([title, links]) => (
              <div key={title} className="flex flex-col gap-3">
                <span className="text-[14px] font-semibold text-canvas">{title}</span>
                {links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex min-h-11 items-center text-[14px] text-canvas/65 transition-colors hover:text-green"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          className="select-none font-sans text-[clamp(84px,16vw,190px)] font-bold leading-[0.84] tracking-[-0.055em] text-canvas/90"
          aria-hidden="true"
        >
          DORA
        </div>

        <div className="flex flex-col gap-2 border-t border-canvas/20 py-[18px] font-mono text-[11px] uppercase tracking-[0.12em] text-canvas/60 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <Logo size={16} spin />© 2026 DORA Research
          </span>
          <span>A second brain for work</span>
        </div>
      </Container>
    </footer>
  )
}
