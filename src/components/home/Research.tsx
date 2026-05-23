import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const agenda = [
  ['R—01', 'Orchestration of parallel agents', 'Coordination, conflict routing, and handoffs at scale.'],
  ['R—02', 'Harness design & evaluation', 'Observability, constraints, and review before deployment.'],
  ['R—03', 'Persona & context engineering', 'Role-specific behavior that stays predictable in production.'],
  ['R—04', 'Enterprise workflow modeling', 'Turning real multi-team work into traceable systems.'],
]

export default function Research() {
  return (
    <section id="research" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">Research agenda.</h2>
              <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            </div>
            <Eyebrow>From research to deployed systems</Eyebrow>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <p className="font-serif text-[27px] leading-[1.3] tracking-[-0.01em] text-ink sm:text-[33px]">
              Reliable AI is not better output. It is the ability to{' '}
              <span className="font-serif italic text-spectral">observe, evaluate, constrain, and improve</span> how AI behaves inside real work.
            </p>
            <div>
              {agenda.map(([n, t, d]) => (
                <div key={n} className="flex gap-4 border-t border-line py-4">
                  <span className="min-w-[36px] font-mono text-[11px] tracking-[0.1em] text-muted">{n}</span>
                  <div>
                    <b className="block text-[15px] font-semibold tracking-[-0.01em] text-ink">{t}</b>
                    <span className="text-[13px] text-muted">{d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
