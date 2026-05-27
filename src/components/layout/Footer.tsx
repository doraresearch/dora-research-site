import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'

const cols: [string, [string, string][]][] = [
  ['Product', [['How it works', '#how-it-works'], ['Operating model', '#operating-model'], ['Example', '#deployment-pattern'], ['Use cases', '#use-cases']]],
  ['Company', [['Contact', 'mailto:hello@dorareason.com'], ['Careers', '#']]],
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base pt-10">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 pb-7">
          <p className="max-w-[48ch] text-[15px] leading-[1.6] text-body">
            The agentic operations layer for iGaming. DORA deploys always-on agentic systems into core operator functions — payments, KYC, fraud, compliance, support, CRM, affiliates, BI, and trading.
          </p>
          <div className="flex gap-12">
            {cols.map(([title, links]) => (
              <div key={title}>
                <p className="mb-3 text-[13px] font-semibold text-ink">{title}</p>
                {links.map(([label, href]) => (
                  <a key={label} href={href} className="mb-2 block text-[13px] text-muted transition-colors hover:text-ink">
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

        <div className="flex flex-col gap-2 border-t border-line py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <Logo size={17} spin />© 2026 DORA Research
          </span>
          <span>Agentic operations · iGaming</span>
        </div>
      </Container>
    </footer>
  )
}
