import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

const safeguards = [
  { title: 'Scoped permissions', description: 'Every agent operates within explicitly defined boundaries. No ambient authority.' },
  { title: 'Human escalation paths', description: 'Anything outside approved scope routes to the right human with full context.' },
  { title: 'Complete audit trails', description: 'Every action, decision, and escalation is logged and queryable.' },
  { title: 'Operator-defined playbooks', description: 'You define what DORA can and can\'t do. Your runbooks, your rules.' },
  { title: 'Existing stack integration', description: 'DORA connects to your tools — Datadog, PagerDuty, Jira, Slack, AWS, GCP.' },
  { title: 'Gradual trust building', description: 'Start with read-only monitoring. Expand permissions as confidence grows.' },
]

export default function Trust() {
  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <Container>
        {/* Trust section — dark stage panel */}
        <Reveal>
          <div className="rounded-stage border border-white/[0.06] bg-graphite p-8 sm:p-12 lg:p-16">
            {/* Corner brackets */}
            <div className="relative">
              {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map((pos) => (
                <span key={pos} className={`absolute ${pos} h-5 w-5 border-l-[1.5px] border-t-[1.5px] border-white/[0.1]`} />
              ))}

              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                Built for production
              </p>
              <h2 className="mt-4 max-w-[26ch] text-[28px] font-bold leading-[1.06] tracking-[-0.03em] text-white/90 sm:text-[36px]">
                Autonomous where safe.{' '}
                <span className="text-white/40">Human-controlled where it matters.</span>
              </h2>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* CTA */}
        <Reveal>
          <div className="mt-24 text-center sm:mt-32">
            <h2 className="mx-auto max-w-[22ch] text-[36px] font-bold leading-[1.02] tracking-[-0.04em] text-ink sm:text-[48px]">
              Start running your operations{' '}
              <span className="text-spectral">on AI</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[18px] leading-[1.55] text-body">
              DORA deploys alongside your existing team — no rip-and-replace, no black box. Start with one workflow and expand on your terms.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="mailto:hello@dorareason.com" arrow>
                See what DORA automates
              </Button>
              <Button href="#how-it-works" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
