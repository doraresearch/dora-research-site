import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const chats = ['drafts', 'suggests', 'answers', 'summarizes']
const acts = ['routes', 'executes', 'escalates', 'monitors', 'approves', 'reports']

export default function ParadigmShift() {
  return (
    <section className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal className="text-center">
          <Eyebrow className="mb-4">The paradigm shift</Eyebrow>
          <h2 className="mx-auto max-w-[24ch] text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            From AI that chats — to <span className="font-serif font-normal italic">AI that acts</span>.
          </h2>
          <span className="mx-auto mt-5 block h-[3px] w-[120px] rounded bg-spectral" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-[64ch] text-[16px] leading-[1.7] text-body">
            Most "AI for gaming" stops at language: a chatbot bolted onto support, a model that drafts a campaign. DORA goes one layer deeper — agents that take action inside operational systems, under human-governed oversight.
          </p>

          <div className="mx-auto mt-10 grid max-w-[680px] gap-3 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-soft px-5 py-5 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">AI that chats</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {chats.map((v) => (
                  <span key={v} className="font-mono text-[12px] text-muted line-through decoration-line-strong">
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-card border border-[#bfe9fb] bg-signal-soft px-5 py-5 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-deep-signal">AI that acts</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {acts.map((v) => (
                  <span key={v} className="font-mono text-[12px] font-semibold text-ink">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
