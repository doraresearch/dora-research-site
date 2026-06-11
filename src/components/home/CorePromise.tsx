import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const promises: [string, string][] = [
  ['Launch lean', 'Operational coverage across support, KYC, payments, and risk — without building a traditional operations org first.'],
  ['Operate safely', 'Human approval paths, permissioned actions, and audit-ready workflows on every agent.'],
  ['Scale without linear headcount', 'Capacity grows with volume. Humans are added for judgment, not throughput.'],
]

export default function CorePromise() {
  return (
    <section className="bg-base py-14 sm:py-16">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">From day one</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            Launch with operational capacity from <span className="font-serif font-normal italic">day one</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[74ch] text-[16.5px] leading-[1.7] text-body">
            DORA gives operators operational agents that handle routine workflows across core functions, so teams start lean and add humans only where judgment, compliance, or escalation requires it.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {promises.map(([title, copy]) => (
              <div key={title} className="group relative overflow-hidden rounded-card border border-line bg-white p-5 transition-colors hover:border-line-strong">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-spectral opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                <p className="text-[15.5px] font-semibold leading-[1.35] text-ink">{title}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-body">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
