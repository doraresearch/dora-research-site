import { Fragment } from 'react'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const stages: [string, string][] = [
  ['Trigger', 'High-value withdrawal or risk signal detected.'],
  ['Gather Intelligence', 'Payments, KYC, gameplay, AML, device intelligence, bonuses, related accounts, support, and prior reviews.'],
  ['Link Signals', 'Specialist agents connect evidence across functions to identify patterns missed inside isolated tools or queues.'],
  ['Act Under Policy', 'Approved automation path, or escalation for edge cases, low confidence, AML triggers, KYC gaps, or policy exceptions.'],
  ['Audit + Learning', 'Evidence, reasoning, recommendation, decision, override, timestamps, communication, and feedback preserved.'],
]

const metrics: [string, string, string][] = [
  ['18-25 min', '4-7 min', 'Average analyst time per escalated case'],
  ['25-35', '90-120', 'Cases per analyst per day'],
  ['24-72 hrs', '2-12 hrs', 'Withdrawal-to-resolution time'],
  ['8-12%', '3-5%', 'False-positive hold rate'],
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
        {/* HEADER + INTRO */}
        <Reveal>
          <Eyebrow className="mb-3">One deployment pattern</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
            High-value withdrawal <span className="font-serif font-normal italic">risk review</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />

          <p className="mt-5 max-w-[72ch] text-[15px] leading-[1.6] text-body">
            <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.16em] text-deep-signal">One example</span>
            The same agentic operating pattern runs across CRM, support, compliance, fraud, payments, affiliates, BI, and trading.
          </p>

          <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <p className="text-[16.5px] leading-[1.7] text-body">
              High-value withdrawals are one of the highest-friction moments in gaming operations. Operators must determine whether to release, verify, hold, reject, refund, or escalate &mdash; based on payment history, KYC records, gameplay behavior, AML signals, device intelligence, related accounts, bonus history, support history, and prior fraud reviews.
            </p>
            <div className="space-y-4 text-[16.5px] leading-[1.7] text-body">
              <p className="text-[18px] font-semibold leading-[1.5] text-ink">
                Most systems flag, score, or route cases inside one function. DORA links intelligence across operator functions and acts on it under policy.
              </p>
              <p>
                DORA deploys a governed agentic operating layer into the withdrawal review process. It gathers intelligence across payments, KYC, gameplay, AML, devices, bonuses, related accounts, support, and prior reviews, links those signals into one operational view, applies operator policy, and produces a case package with evidence-linked reasoning &mdash; auto-resolving low-risk cases inside policy and escalating edge cases to humans.
              </p>
            </div>
          </div>
        </Reveal>

        {/* THREE-CARD SUMMARY */}
        <Reveal className="mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-card border border-line bg-white p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Before DORA</p>
              <p className="text-[14.5px] leading-[1.6] text-body">
                Fraud and risk teams gather evidence manually across payments, KYC, gameplay, support, device intelligence, AML systems, related-account checks, and prior reviews.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-card border border-[#bfe9fb] bg-signal-soft p-6">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-spectral" aria-hidden="true" />
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-deep-signal">With DORA</p>
              <p className="text-[14.5px] leading-[1.6] text-ink">
                Specialist agents gather intelligence across connected operator systems, <strong>link signals across payments, KYC, gameplay, AML, support, bonuses, and related accounts</strong>, apply operator policy, determine the correct automation or escalation path, draft required outputs, and preserve the audit trail.
              </p>
            </div>
            <div className="rounded-card bg-graphite p-6 text-dark-text">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">Result</p>
              <p className="text-[14.5px] leading-[1.6] text-dark-muted">
                Average review time drops from <strong className="text-white">18-25 min → 4-7 min</strong> per escalated case. Target throughput: <strong className="text-white">25-35 → 90-120 cases / analyst / day</strong> over a 90-day pilot.
              </p>
            </div>
          </div>
        </Reveal>

        {/* FIVE-STAGE FLOW (with chevrons; Link Signals subtly emphasized) */}
        <Reveal className="mt-12">
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

        {/* COMPACT METRIC STRIP (dark tiles, before → after) */}
        <Reveal className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([before, after, caption]) => (
              <div key={caption} className="rounded-card bg-graphite p-5 text-dark-text">
                <p className="text-[22px] font-bold leading-tight sm:text-[24px]">
                  <span className="text-dark-muted">{before}</span>
                  <span className="mx-2 text-signal">→</span>
                  <span className="text-spectral bg-spectral bg-clip-text text-transparent">{after}</span>
                </p>
                <p className="mt-3 text-[12.5px] leading-[1.5] text-dark-muted">{caption}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] italic text-muted">
            Pilot targets vary by operator volume, data availability, risk policy, automation permissions, jurisdiction, and degree of integration.
          </p>
        </Reveal>

        {/* SMALL SECONDARY CTA */}
        <Reveal className="mt-8 text-center">
          <a
            href="mailto:hello@dorareason.com?subject=Map%20this%20workflow%20for%20our%20operation"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal transition-colors hover:text-ink"
          >
            Map this workflow for your operation <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
