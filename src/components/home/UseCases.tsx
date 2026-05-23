import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const cases = [
  ['01 / FINANCE', 'Financial close & reporting', 'Coordinate analysts, reviewers, and approvers across a multi-team quarterly close.'],
  ['02 / OPERATIONS', 'Customer operations', 'Route, draft, and review high-volume operational work with role-scoped agents.'],
  ['03 / RISK', 'Regulatory & risk review', 'Run structured checks with traceable context and human sign-off before action.'],
  ['04 / ENGINEERING', 'Engineering workflows', 'Parallelize investigation and implementation under a reviewable harness.'],
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">Where DORA runs.</h2>
              <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            </div>
            <Eyebrow>Selected use cases</Eyebrow>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map(([n, t, c]) => (
              <div key={t} className="group relative overflow-hidden rounded-card border border-line p-5 transition-colors hover:border-line-strong">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-spectral opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                <p className="font-mono text-[10px] tracking-[0.14em] text-deep-signal">{n}</p>
                <h3 className="mb-2 mt-3 text-[17px] font-bold tracking-[-0.01em] text-ink">{t}</h3>
                <p className="text-[13.5px] leading-[1.55] text-body">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
