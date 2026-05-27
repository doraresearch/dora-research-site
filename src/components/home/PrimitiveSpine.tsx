import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const operations: [string, string][] = [
  ['Gather', 'Pull context from operator systems, policies, prior cases, and workflow history.'],
  ['Reason', 'Connect signals across functions and evaluate the case against the operating objective.'],
  ['Act', 'Route decisions, draft communications, update records, and execute approved steps under policy.'],
  ['Escalate', 'Send edge cases, low-confidence decisions, AML triggers, KYC gaps, and policy exceptions to human teams.'],
  ['Learn', 'Preserve outcomes, overrides, rationale, and audit trails to improve future execution.'],
]

export default function PrimitiveSpine() {
  return (
    <section id="operating-model" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">What DORA deploys</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            DORA deploys agents that operate <span className="font-serif font-normal italic">inside the business</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[78ch] text-[16.5px] leading-[1.7] text-body">
            DORA embeds governed agentic systems into workflows where operators rely on people to gather context, apply policy, coordinate action, document decisions, and manage exceptions.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {operations.map(([title, copy], i) => (
              <div key={title} className="relative overflow-hidden rounded-card border border-line bg-white p-5">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-deep-signal">
                  {String(i + 1).padStart(2, '0')} &middot; {title}
                </p>
                <p className="mt-3 text-[14px] leading-[1.55] text-body">{copy}</p>
              </div>
            ))}
          </div>
          <a
            href="/operating-model"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal transition-colors hover:text-ink"
          >
            Explore the operating model <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
