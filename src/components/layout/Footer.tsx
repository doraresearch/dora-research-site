import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'

const cols: [string, [string, string][]][] = [
  ['Product', [['How it works', '#how-it-works'], ['Capabilities', '#capabilities'], ['Use cases', '#use-cases']]],
  ['Company', [['Contact', 'mailto:hello@dorareason.com'], ['Careers', '#']]],
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-base pt-10">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 pb-7">
          <p className="max-w-[48ch] text-[15px] leading-[1.6] text-white/50">
            The AI operations environment for DBAs, system administrators, and NOC teams. DORA gives ops teams AI agents that understand infrastructure, triage alerts, and execute runbooks — so you can operate at scale without scaling headcount.
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

        <div className="text-spectral select-none pb-3 text-[clamp(90px,21vw,260px)] font-extrabold leading-[0.86] tracking-[-0.05em]" aria-hidden="true">
          DORA
        </div>

        <div className="flex flex-col gap-2 border-t border-white/[0.06] py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <Logo size={17} spin />© 2026 DORA Research
          </span>
          <span>AI operations · Applied AI</span>
        </div>
      </Container>
    </footer>
  )
}
