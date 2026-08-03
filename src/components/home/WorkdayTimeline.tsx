import { useState } from 'react'
import Container from '@/components/ui/Container'

type Evidence = {
  source: string
  title: string
  excerpt: string
}

type WorkdayMoment = {
  id: string
  team: string
  time: string
  shortLabel: string
  title: string
  summary: string
  signalLabel: string
  signal: string
  connection: string
  evidence: Evidence[]
}

const moments: WorkdayMoment[] = [
  {
    id: 'product-review',
    team: 'Product review',
    time: '08:12',
    shortLabel: 'Audit history promoted',
    title: 'Traceability moves into Friday’s beta.',
    summary:
      'Product reviews evidence from three design partners who will not connect production workspaces without a way to trace access changes.',
    signalLabel: 'Scope changed',
    signal:
      'Add read-only audit history to Friday’s private beta. Keep CSV export outside the release.',
    connection: 'Research ↔ Product · Three independent teams turn traceability into a release priority.',
    evidence: [
      {
        source: 'Dovetail · Design-partner synthesis · 07:55',
        title: 'Three beta teams require change traceability',
        excerpt: 'We cannot connect production until admins can see who changed access.',
      },
      {
        source: 'Linear · Decision ATLAS-218 · 08:12',
        title: 'Read-only audit history joins Friday scope',
        excerpt: 'Decision: read-only audit history joins Friday’s beta; CSV export stays post-beta.',
      },
    ],
  },
  {
    id: 'engineering-standup',
    team: 'Engineering stand-up',
    time: '08:26',
    shortLabel: 'PR #1842 critical',
    title: 'The event index becomes release-critical.',
    summary:
      'The new audit view depends on the event-index query in PR #1842. Zora connects the scope change to backend work already in review.',
    signalLabel: 'Dependency promoted',
    signal:
      'PR #1842 and its staging migration must enter release QA by 13:00.',
    connection: 'Product scope ↔ Engineering dependency · Follow-on infrastructure is now on the critical path.',
    evidence: [
      {
        source: 'GitHub · PR #1842 · 08:26',
        title: 'Event-index query supplies the audit view',
        excerpt: 'PR #1842 supplies the event-index query. The staging migration is still running.',
      },
      {
        source: 'Staging · Audit event migration',
        title: 'Release QA is waiting on migrated events',
        excerpt: 'The audit UI cannot complete release validation until the staging index is current.',
      },
    ],
  },
  {
    id: 'roadmap-priority',
    team: 'Roadmap priority',
    time: '10:00',
    shortLabel: 'Read-only beta',
    title: 'The roadmap narrows to protect the Friday plan.',
    summary:
      'Rather than expand scope, Product locks the smallest traceability surface that solves the design-partner blocker and keeps the release reviewable.',
    signalLabel: 'Decision retained',
    signal:
      'Ship read-only history. Defer CSV export. Ravi owns the event-index merge; Elena owns the 15:30 decision.',
    connection: 'Roadmap ↔ Ownership · Scope, rationale, release gates, and owners stay together.',
    evidence: [
      {
        source: 'Atlas roadmap · Scope lock · 10:00',
        title: 'Read-only history is the committed surface',
        excerpt: 'Full export remains post-beta; no additional audit controls enter Friday scope.',
      },
      {
        source: 'Decision log · ATLAS-218',
        title: 'The customer reason remains attached',
        excerpt: 'The change addresses the production traceability blocker reported by three design partners.',
      },
    ],
  },
  {
    id: 'reliability-risk',
    team: 'Reliability risk',
    time: '11:40',
    shortLabel: 'Build 842 · +18% p95',
    title: 'Build 842 puts reliability on the clock.',
    summary:
      'Authentication p95 rises from 410 ms to 484 ms. Zora relates the regression to the same private-beta plan before it remains isolated in an observability alert.',
    signalLabel: 'Release risk',
    signal:
      'Hold rollout. Fix or cleanly roll back auth build 842 at the 14:00 go / no-go.',
    connection: 'Reliability ↔ Release plan · The latency regression now gates private-beta access.',
    evidence: [
      {
        source: 'Datadog · Build 842 · 08:31',
        title: 'Authentication p95 increased by 18%',
        excerpt: 'Build 842 raised auth p95 from 410 ms to 484 ms. Rollout is paused for the 14:00 gate.',
      },
      {
        source: 'Reliability checkpoint · 11:40',
        title: 'The release needs a fix or a clean rollback',
        excerpt: 'No beta access opens until the 14:00 reliability decision closes the regression.',
      },
    ],
  },
  {
    id: 'security-gate',
    team: 'Security gate',
    time: '15:00',
    shortLabel: 'Actor-IP redaction',
    title: 'A privacy test still blocks the beta.',
    summary:
      'The audit-log suite still exposes an actor IP after account deletion. Zora keeps the failure linked to the scope change that made history part of Friday’s launch.',
    signalLabel: 'Beta blocked',
    signal:
      'The private beta cannot open until actor-IP redaction passes. Mina owns the rerun by 15:00.',
    connection: 'Security ↔ Product scope · Adding audit history also adds a non-negotiable privacy gate.',
    evidence: [
      {
        source: 'CI · Security suite · 08:34',
        title: 'One audit-log redaction test is failing',
        excerpt: 'Redaction suite: one failing. Actor IP remains visible after account deletion.',
      },
      {
        source: 'Deletion workflow · Privacy assertion',
        title: 'The failure is inside Friday’s new surface',
        excerpt: 'Read-only history must remove actor IPs when the associated account is deleted.',
      },
    ],
  },
  {
    id: 'release-decision',
    team: 'Release decision',
    time: '15:30',
    shortLabel: 'Guarded ship / no-ship',
    title: 'The ship decision is guarded, not guessed.',
    summary:
      'At 15:30, Zora assembles the product rationale, PR status, staging migration, auth gate, and redaction result into one sourced brief.',
    signalLabel: 'Guarded decision',
    signal:
      'Ship Friday only as a guarded private beta: read-only history, PR #1842 in QA, build 842 cleared or rolled back, and actor-IP redaction passing. Otherwise hold.',
    connection: 'Product ↔ Engineering ↔ Reliability ↔ Security · Every condition and owner reaches the final call.',
    evidence: [
      {
        source: 'Atlas release brief · 15:30',
        title: 'Friday remains a conditional private beta',
        excerpt: 'The release holds unless event indexing, authentication, and redaction gates are all closed.',
      },
      {
        source: 'Go / no-go checklist · Owners',
        title: 'Each gate has one accountable owner',
        excerpt: 'Ravi owns PR #1842, Sam owns build 842, Mina owns redaction, and Elena makes the release call.',
      },
    ],
  },
]

function EvidenceMark() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.75 10h6.5M10 6.75v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function WorkdayTimeline() {
  const [activeIndex, setActiveIndex] = useState(3)
  const active = moments[activeIndex]
  const progress = `${(activeIndex / (moments.length - 1)) * 100}%`

  return (
    <section id="workday" className="overflow-hidden border-y border-line bg-base">
      <Container className="py-20 sm:py-24 lg:py-[112px]">
        <div className="max-w-[760px]">
          <h2 className="text-balance font-display text-[42px] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[52px] lg:text-[60px]">
            Your product day, already in context.
          </h2>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.65] text-muted sm:text-[18px]">
            Zora keeps product intent, engineering reality, and release decisions connected — so Friday’s ship call starts with the full history.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14" aria-label="Explore a workday with Zora">
          <div className="absolute bottom-3 left-[9px] top-3 w-px bg-line md:hidden" aria-hidden="true">
            <span
              className="block w-px bg-green transition-[height] duration-300 ease-out motion-reduce:transition-none"
              style={{ height: progress }}
            />
          </div>
          <div className="absolute left-[8.333%] right-[8.333%] top-[11px] hidden h-px bg-line md:block" aria-hidden="true">
            <span
              className="block h-px bg-green transition-[width] duration-300 ease-out motion-reduce:transition-none"
              style={{ width: progress }}
            />
          </div>

          <ol className="relative grid gap-1 md:grid-cols-6 md:gap-4">
            {moments.map((moment, index) => {
              const selected = index === activeIndex

              return (
                <li key={moment.id} className="min-w-0">
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-controls="workday-detail"
                    onClick={() => setActiveIndex(index)}
                    className="group grid min-h-11 w-full grid-cols-[20px_minmax(0,1fr)] items-start gap-4 py-2 text-left md:flex md:min-h-[104px] md:flex-col md:items-center md:gap-0 md:py-0 md:text-center"
                  >
                    <span
                      className={`relative z-10 mt-1.5 h-[11px] w-[11px] justify-self-center rounded-full border-[3px] ring-4 ring-base transition-colors duration-200 motion-reduce:transition-none md:mt-[6px] ${
                        selected
                          ? 'border-orange bg-orange'
                          : index < activeIndex
                            ? 'border-green bg-green'
                            : 'border-line-graph bg-base group-hover:border-green'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 md:mt-5">
                      <span
                        className={`block font-mono text-[10px] uppercase leading-[1.3] tracking-[0.09em] transition-colors duration-200 motion-reduce:transition-none ${
                          selected ? 'text-orange' : 'text-green'
                        }`}
                      >
                        {moment.team}
                      </span>
                      <span className="mt-1 block font-mono text-[10px] tracking-[0.04em] text-muted">
                        {moment.time}
                      </span>
                      <span
                        className={`mt-1.5 block text-[13px] font-semibold leading-[1.3] transition-colors duration-200 motion-reduce:transition-none ${
                          selected ? 'text-ink' : 'text-muted group-hover:text-ink'
                        }`}
                      >
                        {moment.shortLabel}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        <div
          id="workday-detail"
          role="region"
          aria-live="polite"
          aria-label={`${active.team} at ${active.time}`}
          className="mt-9 overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_60px_rgba(23,37,31,.09)] sm:mt-11"
        >
          <div key={active.id} className="grid animate-fade-up motion-reduce:animate-none lg:grid-cols-[1.08fr_.92fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.1em]">
                <span className="text-orange">{active.signalLabel}</span>
                <span className="text-line-graph" aria-hidden="true">/</span>
                <span className="text-muted">{active.team} · {active.time}</span>
              </div>

              <h3 className="mt-5 max-w-[600px] text-balance font-display text-[30px] font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[36px]">
                {active.title}
              </h3>
              <p className="mt-4 max-w-[620px] text-[16px] leading-[1.65] text-muted sm:text-[17px]">
                {active.summary}
              </p>

              <div className="mt-7 border-l-2 border-orange pl-4 sm:mt-9 sm:pl-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-orange">
                  What Zora surfaced
                </p>
                <p className="mt-2 max-w-[610px] text-[15px] font-semibold leading-[1.55] text-ink sm:text-[16px]">
                  {active.signal}
                </p>
              </div>

              <p className="mt-7 border-t border-line-soft pt-5 font-mono text-[10px] leading-[1.6] tracking-[0.02em] text-green">
                {active.connection}
              </p>
            </div>

            <div className="border-t border-line bg-sage/[.55] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="flex items-center gap-2 text-green">
                <EvidenceMark />
                <p className="font-mono text-[10px] uppercase tracking-[0.1em]">
                  Evidence Zora connected
                </p>
              </div>

              <div className="mt-5 border-y border-line">
                {active.evidence.map((item, index) => (
                  <article
                    key={item.source}
                    className={index > 0 ? 'border-t border-line' : undefined}
                  >
                    <div className="py-5">
                      <p className="font-mono text-[9px] uppercase leading-[1.5] tracking-[0.08em] text-green">
                        [{index + 1}] {item.source}
                      </p>
                      <h4 className="mt-2 text-[14px] font-semibold leading-[1.4] text-ink sm:text-[15px]">
                        {item.title}
                      </h4>
                      <p className="mt-2 border-l-2 border-yellow pl-3 text-[13px] leading-[1.55] text-muted">
                        “{item.excerpt}”
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-5 font-mono text-[9px] uppercase leading-[1.6] tracking-[0.08em] text-muted">
                Original sources remain attached to every product and release decision.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
