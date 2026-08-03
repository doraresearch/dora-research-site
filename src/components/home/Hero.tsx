import Container from '@/components/ui/Container'
import WaitlistForm from '@/components/ui/WaitlistForm'
import InteractiveWorkspace from './demo/InteractiveWorkspace'

export default function Hero() {
  return (
    <section id="zora" className="relative overflow-hidden bg-base">
      <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:pb-28">
        <div className="animate-fade-up">
          <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-green">
            Zora for product + technology
          </p>
          <h1 className="text-balance font-display text-[46px] font-bold leading-[0.98] tracking-[-0.04em] text-ink sm:text-[56px] lg:text-[68px]">
            A second brain for how products get built.
          </h1>
          <p className="mt-7 max-w-[43ch] text-[18px] leading-[1.6] text-muted lg:text-[19px]">
            Zora continuously connects meetings, conversations, decisions, documentation, tickets,
            roadmaps, and technical systems — so your team knows what changed, why it matters,
            what could block delivery, and what needs attention next.
          </p>
          <div className="mt-9">
            <WaitlistForm />
          </div>
          <p className="mt-3.5 font-mono text-[11px] tracking-[0.06em] text-muted">
            Product + technology first · Built toward a second brain for work
          </p>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '160ms' }}>
          <InteractiveWorkspace />
        </div>
      </Container>
    </section>
  )
}
