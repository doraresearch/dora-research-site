import { Fragment } from 'react'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const stages: [string, string][] = [
  ['Trigger', 'High-value withdrawal or risk signal detected.'],
  ['Gather', 'Collect context across payments, KYC, gameplay, AML, devices, bonuses, related accounts, support, and prior reviews.'],
  ['Reason', 'Connect signals across functions and evaluate the case against operator policy.'],
  ['Act', 'Proceed through an approved policy path or prepare the required outputs.'],
  ['Escalate / Learn', 'Route exceptions to human teams and preserve decisions, rationale, overrides, timestamps, communications, and feedback.'],
]

const metrics: [string, string, string, string][] = [
  ['~70% faster review', '18-25 min', '4-7 min', 'Average analyst time per escalated case'],
  ['3x+ throughput', '25-35', '90-120', 'Cases per analyst per day'],
  ['Up to 80% faster resolution', '24-72 hrs', '2-12 hrs', 'Withdrawal-to-resolution time'],
  ['50%+ fewer false-positive holds', '8-12%', '3-5%', 'False-positive hold rate'],
]

function Chevron() {
  return (
    <span
      className="flex shrink-0 items-center justify-center self-center rotate-90 text-deep-signal lg:rotate-0"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function WithdrawalReview() {
  return (
    <section id="deployment-pattern" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Example deployment</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            Example: high-value <span className="font-serif font-normal italic">withdrawal review</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[82ch] text-[16.5px] leading-[1.7] text-body">
            A DORA agentic system acts inside the withdrawal workflow, linking intelligence across payments, KYC, gameplay, AML, devices, bonuses, related accounts, support, and prior reviews. It determines whether a case can proceed under policy or requires escalation, then produces the evidence, reasoning, communications, and audit trail required for controlled execution.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal">End-to-end flow</p>
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:gap-2">
            {stages.map(([label, copy], i) => (
              <Fragment key={label}>
                <div className={`relative flex-1 overflow-hidden rounded-card border bg-white p-4 ${i === 2 ? 'border-[#bfe9fb] bg-signal-soft' : 'border-line'}`}>
                  {i === 2 && <span className="absolute inset-x-0 top-0 h-[2px] bg-spectral" aria-hidden="true" />}
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-deep-signal">
                    {String(i + 1).padStart(2, '0')} &middot; {label}
                  </p>
                  <p className="mt-2 text-[12.5px] leading-[1.55] text-body">{copy}</p>
                </div>
                {i < stages.length - 1 && <Chevron />}
              </Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([anchor, before, after, caption]) => (
              <div key={caption} className="rounded-card bg-graphite p-5 text-dark-text">
                <p className="text-spectral bg-spectral bg-clip-text text-[22px] font-bold leading-[1.1] tracking-[-0.01em] text-transparent sm:text-[24px]">
                  {anchor}
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-tight">
                  <span className="text-dark-muted">{before}</span>
                  <span className="mx-1.5 text-signal">&rarr;</span>
                  <span className="text-white">{after}</span>
                </p>
                <p className="mt-2 text-[12.5px] leading-[1.5] text-dark-muted">{caption}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] italic text-muted">
            Pilot targets vary by operator volume, data availability, risk policy, automation permissions, jurisdiction, and degree of integration.
          </p>
          <a
            href="/example/withdrawal-review"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal transition-colors hover:text-ink"
          >
            View the withdrawal review pattern <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
