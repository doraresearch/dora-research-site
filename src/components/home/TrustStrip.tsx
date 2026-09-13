import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const proofItems = [
  ['Original source', 'Dovetail synthesis'],
  ['Observed at', '07:55'],
  ['Decision trail', 'ATLAS-218'],
  ['Accountable owner', 'Elena · Product'],
]

export default function TrustStrip() {
  return (
    <section id="traceability" className="border-y border-line bg-canvas">
      <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,.9fr)_minmax(520px,1.1fr)] lg:items-center lg:gap-20 lg:py-[96px]">
        <Reveal>
          <p className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-action">
            Traceable by design
          </p>
          <h2 className="max-w-[560px] text-balance font-display text-[42px] font-bold leading-[1.03] tracking-[-0.035em] text-ink sm:text-[52px]">
            Every answer can show its work.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.65] text-secondary sm:text-[17px]">
            A Zora brief keeps the source, timestamp, owner, and decision trail in view—so you can inspect the evidence, not just accept the summary.
          </p>
          <p className="mt-7 font-mono text-[10px] tracking-[0.035em] text-evidence">
            Each conclusion points to the record that supports it.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <article className="rounded-[18px] border border-line bg-surface p-6 shadow-[0_20px_54px_rgba(13,23,19,.07)] sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-action">Inspectable brief · ATLAS-218</p>
            <h3 className="mt-4 text-[22px] font-semibold leading-[1.3] text-ink sm:text-[24px]">Audit history enters Friday’s beta.</h3>
            <p className="mt-3 max-w-[58ch] text-[14px] leading-[1.6] text-secondary sm:text-[15px]">
              The customer reason, scope change, owners, and downstream gates remain attached to the decision.
            </p>
            <div className="mt-6 grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2">
              {proofItems.map(([label, value]) => (
                <div key={label}>
                  <p className={`font-mono text-[10px] uppercase tracking-[0.07em] ${label === 'Decision trail' ? 'text-evidence' : 'text-action'}`}>{label}</p>
                  <p className="mt-2 text-[14px] font-semibold text-ink">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  )
}
