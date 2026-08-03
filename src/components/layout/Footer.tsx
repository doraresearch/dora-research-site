import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'

const cols: [string, [string, string][]][] = [
  ['Zora', [['How it works', '#how-it-works'], ['Privacy', '#privacy'], ['Waitlist', '#waitlist']]],
  ['Lab', [['Contact', 'mailto:hello@dorareason.com']]],
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-ink pt-14">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 pb-10">
          <p className="max-w-[40ch] text-[15px] leading-[1.6] text-base/65">
            DORA Research builds private, context-aware intelligence for work. Zora starts with product and technology teams.
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
          className="select-none font-sans text-[clamp(84px,20vw,248px)] font-bold leading-[0.82] tracking-[-0.055em] text-base/90"
          aria-hidden="true"
        >
          DORA
        </div>

        <div className="flex flex-col gap-2 border-t border-base/20 py-[18px] font-mono text-[11px] uppercase tracking-[0.12em] text-base/60 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <Logo size={16} spin />© 2026 DORA Research
          </span>
          <span>A second brain for work</span>
        </div>
      </Container>
    </footer>
  )
}
