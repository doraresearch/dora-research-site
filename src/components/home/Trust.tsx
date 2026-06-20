import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const safeguards = [
  { title: 'Scoped access', description: 'DORA only operates within approved systems, roles, and permissions.' },
  { title: 'Human approval paths', description: 'High-risk actions route to humans before execution.' },
  { title: 'Audit-ready history', description: 'Every action, decision, escalation, and override is logged.' },
  { title: 'Gradual trust model', description: 'Start read-only. Move to approval-based workflows. Automate bounded tasks when ready.' },
]

export default function Trust() {
  return (
    <section id="control" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <Container>
        <Reveal>
          <div className="rounded-stage border border-white/[0.06] bg-graphite p-8 sm:p-12 lg:p-16">
            <div className="relative">
              {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map((pos) => (
                <span key={pos} className={`absolute ${pos} h-5 w-5 border-l-[1.5px] border-t-[1.5px] border-white/[0.1]`} />
              ))}

              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                Trust &amp; control
              </p>
              <h2 className="mt-4 max-w-[26ch] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-white/90 sm:text-[42px]">
                Built for production{' '}
                <span className="text-spectral">environments.</span>
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {safeguards.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <div className="py-3">
                      <h3 className="text-[15px] font-semibold text-white/80">{s.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-[1.55] text-white/40">{s.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
