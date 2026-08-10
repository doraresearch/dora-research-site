import { useState } from 'react'
import Container from '@/components/ui/Container'

type Evidence = {
  source: string
  title: string
  meta: string
}

type WorkdayMoment = {
  id: string
  time: string
  label: string
  headline: string
  title: string
  body: string
  attention: string
  owner: string
  gate: string
  tone: 'signal' | 'risk' | 'decision'
  evidence: Evidence[]
}

const moments: WorkdayMoment[] = [
  {
    id: 'scope',
    time: '08:12',
    label: 'Scope changed',
    headline: 'Audit history enters Friday’s beta.',
    title: 'Customer evidence changes the release plan.',
    body: 'Three design partners need change traceability before they connect production. Product narrows the answer to read-only history and keeps export outside the beta.',
    attention: 'The scope change makes event indexing and redaction part of Friday’s release path.',
    owner: 'Elena · Product',
    gate: 'Scope locked · 10:00',
    tone: 'signal',
    evidence: [
      { source: 'Dovetail · 07:55', title: 'Three teams require traceability', meta: 'Design-partner synthesis' },
      { source: 'Linear · 08:12', title: 'Read-only history joins beta', meta: 'ATLAS-218' },
    ],
  },
  {
    id: 'dependency',
    time: '08:26',
    label: 'Dependency',
    headline: 'PR #1842 becomes release-critical.',
    title: 'A backend dependency moves onto the critical path.',
    body: 'The audit view depends on the event-index query already in review. Its staging migration now has to reach release QA by 13:00.',
    attention: 'A follow-on engineering task is now a release gate, with one owner and one deadline.',
    owner: 'Ravi · Backend',
    gate: 'Merge target · 13:00',
    tone: 'signal',
    evidence: [
      { source: 'GitHub · 08:26', title: 'Event-index query supplies the view', meta: 'PR #1842' },
      { source: 'Staging · 08:39', title: 'Migration is still running', meta: 'Audit events' },
    ],
  },
  {
    id: 'risk',
    time: '11:40',
    label: 'Risk surfaced',
    headline: 'Build 842 puts the beta on hold.',
    title: 'Reliability is no longer an isolated alert.',
    body: 'Authentication p95 rises from 410 ms to 484 ms. Zora relates the regression to the same Friday plan before the signal is lost inside observability tooling.',
    attention: 'Fix or cleanly roll back build 842 before the 14:00 go / no-go.',
    owner: 'Sam · Reliability',
    gate: 'Decision gate · 14:00',
    tone: 'risk',
    evidence: [
      { source: 'Datadog · 08:31', title: 'Authentication p95 increased 18%', meta: 'Build 842' },
      { source: 'Release gate · 11:40', title: 'Rollout remains paused', meta: 'Reliability checkpoint' },
    ],
  },
  {
    id: 'decision',
    time: '15:30',
    label: 'Decision',
    headline: 'Ship only if every gate clears.',
    title: 'The release call arrives with its reasoning intact.',
    body: 'Zora assembles the customer reason, PR status, auth gate, and redaction result into one brief. The answer is conditional, inspectable, and ready to act on.',
    attention: 'Ship a read-only private beta only if PR #1842, auth, and actor-IP redaction are all clear.',
    owner: 'Elena · Product',
    gate: 'Go / no-go · 15:30',
    tone: 'decision',
    evidence: [
      { source: 'Atlas brief · 15:30', title: 'Friday remains conditional', meta: 'Release decision' },
      { source: 'Owner checklist', title: 'Every gate has an accountable owner', meta: 'Product · Eng · Security' },
    ],
  },
]

function EvidenceMark() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.75 10h6.5M10 6.75v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function WorkdayTimeline() {
  const [activeIndex, setActiveIndex] = useState(2)
  const active = moments[activeIndex]
  const isRisk = active.tone === 'risk'

  return (
    <section id="workday" className="overflow-hidden border-y border-line bg-surface">
      <Container className="py-20 sm:py-24 lg:py-[96px]">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,.9fr)] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-action">
              Product + technology · One workday
            </p>
            <h2 className="max-w-[700px] text-balance font-display text-[42px] font-bold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[52px] lg:text-[58px]">
              By the time you ask, Zora already knows.
            </h2>
          </div>
          <p className="max-w-[540px] text-[16px] leading-[1.65] text-secondary sm:text-[17px]">
            Follow one Atlas release from the morning scope change to the afternoon ship call. Zora tracks what changed, what it affects, and who needs to act—backed by original sources.
          </p>
        </div>

        <ol className="mt-11 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 lg:mt-14 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0" aria-label="Explore the Atlas workday">
          {moments.map((moment, index) => {
            const selected = index === activeIndex
            const risk = moment.tone === 'risk'
            return (
              <li key={moment.id} className="w-[246px] shrink-0 snap-start lg:w-auto">
                <button
                  type="button"
                  aria-pressed={selected}
                  aria-controls="workday-detail"
                  onClick={() => setActiveIndex(index)}
                  className={`relative min-h-[118px] w-full rounded-[14px] border p-4 text-left transition-colors duration-200 motion-reduce:transition-none ${
                    selected
                      ? risk
                        ? 'border-risk bg-risk-tint'
                        : 'border-action bg-context/70'
                      : 'border-line bg-canvas hover:border-control'
                  }`}
                >
                  <span className={`font-mono text-[10px] font-medium tracking-[0.05em] ${risk ? 'text-risk' : 'text-action'}`}>
                    {moment.time}
                  </span>
                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.08em] text-secondary">
                    {moment.label}
                  </span>
                  <span className="mt-2 block text-[14px] font-semibold leading-[1.35] text-ink">
                    {moment.headline}
                  </span>
                  {selected ? (
                    <span className={`absolute inset-x-4 bottom-0 h-[3px] rounded-t ${risk ? 'bg-risk' : 'bg-action'}`} aria-hidden="true" />
                  ) : null}
                </button>
              </li>
            )
          })}
        </ol>

        <div
          id="workday-detail"
          role="region"
          aria-live="polite"
          aria-label={`${active.label} at ${active.time}`}
          className="mt-5 overflow-hidden rounded-[18px] border border-line bg-canvas shadow-[0_20px_54px_rgba(13,23,19,.08)] sm:mt-7"
        >
          <div key={active.id} className="animate-fade-up p-5 motion-reduce:animate-none sm:p-7 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-line bg-surface px-4 py-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-action">Asked across five systems</p>
                <p className="mt-1 text-[16px] font-semibold text-ink">Can Atlas still ship Friday?</p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.07em] text-secondary">{active.time} · {active.label}</p>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.04fr_.96fr]">
              <div className="border-l-[3px] border-action bg-context/75 p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-action">Zora brief · Original evidence attached</p>
                <h3 className="mt-3 text-balance font-display text-[28px] font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[32px]">
                  {active.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-secondary sm:text-[16px]">{active.body}</p>
              </div>

              <div className="rounded-[12px] border border-line bg-surface p-5 sm:p-6">
                <p className={`font-mono text-[10px] uppercase tracking-[0.09em] ${isRisk ? 'text-risk' : 'text-action'}`}>
                  What needs attention
                </p>
                <p className="mt-3 text-[17px] font-semibold leading-[1.45] text-ink">{active.attention}</p>
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-secondary">Owner</p>
                    <p className="mt-1 text-[13px] font-semibold text-ink">{active.owner}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-secondary">Timing</p>
                    <p className="mt-1 text-[13px] font-semibold text-ink">{active.gate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-line pt-4">
              <div className="flex items-center gap-2 text-evidence">
                <EvidenceMark />
                <p className="font-mono text-[10px] uppercase tracking-[0.09em]">Evidence behind this</p>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {active.evidence.map((item) => (
                  <article key={item.source} className="rounded-[10px] border border-line bg-surface px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-action">{item.source}</p>
                    <p className="mt-1.5 text-[13px] font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.03em] text-secondary">{item.meta}</p>
                  </article>
                ))}
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.03em] text-evidence">
                Each conclusion points to the record that supports it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
