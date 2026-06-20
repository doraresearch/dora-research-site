import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const stats = [
  { value: '72%', label: 'of incidents are resolved with the same 20 runbooks' },
  { value: '3.4×', label: 'more alerts per engineer than five years ago' },
  { value: '45min', label: 'average time-to-triage for a P2 incident' },
]

export default function Problem() {
  return (
    <section className="relative bg-base py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              The problem
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white/90 sm:text-[42px]">
              Incidents scale exponentially.{' '}
              <span className="text-white/40">Headcount doesn't.</span>
            </h2>
            <p className="mt-6 text-[18px] leading-[1.6] text-white/50">
              Every new system, every new service, every new customer adds operational load. Teams respond by hiring more people, adding more tools, writing more runbooks. The toil compounds. The alert fatigue sets in. The knowledge stays locked in people's heads.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[900px] gap-5 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 100}>
              <div className="rounded-card border border-white/[0.06] bg-white/[0.02] p-6 text-center">
                <p className="text-spectral text-[36px] font-bold tracking-[-0.03em] sm:text-[42px]">{stat.value}</p>
                <p className="mt-2 text-[14px] leading-[1.5] text-white/40">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
