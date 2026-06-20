import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

/* ─── Visual types ──────────────────────────────────── */

type Visual =
  | { kind: 'tags'; items: string[]; label: string }
  | { kind: 'checks'; items: string[]; label: string }
  | { kind: 'actions'; items: string[]; label: string }
  | { kind: 'flow'; from: string; to: string; label: string }
  | { kind: 'numbered'; items: string[]; label: string }

interface TabItem {
  title: string
  description: string
  visual: Visual
  icon: React.ReactNode
}

/* ─── Icon wrapper ──────────────────────────────────── */

function I({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      {children}
    </svg>
  )
}

/* ─── Tab data ──────────────────────────────────────── */

const tabs: { label: string; hash: string; items: TabItem[] }[] = [
  {
    label: 'Platform',
    hash: 'product',
    items: [
      {
        title: 'Observe',
        description:
          'DORA connects to observability, ticketing, cloud, databases, chat, runbooks, and internal tools — building a live model of system signals across your stack.',
        visual: {
          kind: 'tags',
          items: ['Datadog', 'PagerDuty', 'CloudWatch', 'Prometheus', 'Jira', 'Slack'],
          label: 'System signals ingested',
        },
        icon: (
          <I>
            <circle cx="12" cy="12" r="3" />
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          </I>
        ),
      },
      {
        title: 'Diagnose',
        description:
          'When an event occurs, DORA evaluates it against historical patterns, runbooks, and operational context. It identifies likely causes and determines the appropriate response path.',
        visual: {
          kind: 'checks',
          items: ['Pattern matching', 'Root cause analysis', 'Impact assessment', 'Runbook lookup'],
          label: 'Likely cause identified',
        },
        icon: (
          <I>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </I>
        ),
      },
      {
        title: 'Execute',
        description:
          'For known patterns with approved workflows, DORA executes autonomously — restarting services, scaling resources, clearing queues, running patches. Every action is logged.',
        visual: {
          kind: 'actions',
          items: ['Restart service', 'Scale resources', 'Clear queue', 'Apply patch', 'Update DNS', 'Rotate creds'],
          label: 'Approved workflow executed',
        },
        icon: (
          <I>
            <polygon points="5,3 19,12 5,21" />
          </I>
        ),
      },
      {
        title: 'Verify',
        description:
          'After execution, DORA confirms recovery — checking metrics, validating service health, and ensuring the fix holds. No silent failures.',
        visual: {
          kind: 'checks',
          items: ['Metric recovery', 'Service health', 'SLO compliance', 'Regression check'],
          label: 'Recovery confirmed',
        },
        icon: (
          <I>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </I>
        ),
      },
      {
        title: 'Document',
        description:
          'Every resolution — automated or human-driven — is documented with full context: what happened, what was tried, what worked, and what to watch.',
        visual: {
          kind: 'tags',
          items: ['Timeline → Ticket', 'Actions → Audit log', 'Outcome → Knowledge base'],
          label: 'Result documented',
        },
        icon: (
          <I>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </I>
        ),
      },
      {
        title: 'Escalate',
        description:
          'When DORA encounters something outside its approved scope — novel failures, ambiguous signals, high-risk changes — it escalates to the right human with full context and recommended actions.',
        visual: {
          kind: 'flow',
          from: 'Exception detected',
          to: 'Human review',
          label: 'Context-rich escalation',
        },
        icon: (
          <I>
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </I>
        ),
      },
    ],
  },
  {
    label: 'Teammates',
    hash: 'teammates',
    items: [
      {
        title: 'NOC Teammate',
        description: 'Triage alerts, correlate events, run first diagnostics, and escalate with evidence.',
        visual: {
          kind: 'actions',
          items: ['Alert triage', 'Event correlation', 'First diagnostics', 'Evidence packaging'],
          label: 'NOC operations automated',
        },
        icon: (
          <I>
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </I>
        ),
      },
      {
        title: 'DBA Teammate',
        description:
          'Investigate query performance, backup failures, replication lag, capacity issues, and recurring database incidents.',
        visual: {
          kind: 'actions',
          items: ['Query analysis', 'Backup verification', 'Replication monitoring', 'Capacity planning'],
          label: 'Database operations automated',
        },
        icon: (
          <I>
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
            <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
          </I>
        ),
      },
      {
        title: 'Sys Admin Teammate',
        description:
          'Handle routine checks, configuration drift, patch workflows, service restarts, and infrastructure health tasks.',
        visual: {
          kind: 'actions',
          items: ['Config drift detection', 'Patch workflows', 'Service restarts', 'Health checks'],
          label: 'Sysadmin operations automated',
        },
        icon: (
          <I>
            <rect x="2" y="3" width="20" height="7" rx="2" />
            <rect x="2" y="14" width="20" height="7" rx="2" />
            <circle cx="6" cy="6.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="6" cy="17.5" r="1" fill="currentColor" stroke="none" />
          </I>
        ),
      },
      {
        title: 'Incident Teammate',
        description: 'Assemble incident context, recommend response paths, update tickets, and coordinate escalation.',
        visual: {
          kind: 'flow',
          from: 'Incident detected',
          to: 'Response coordinated',
          label: 'Incident response automated',
        },
        icon: (
          <I>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </I>
        ),
      },
    ],
  },
  {
    label: 'Get started',
    hash: 'deployment',
    items: [
      {
        title: 'Scope a workflow',
        description:
          'Choose one recurring operational workflow — alert triage, database health, backup verification, or any other task that repeats.',
        visual: {
          kind: 'numbered',
          items: [
            'Alert triage and first response',
            'Database health checks',
            'Backup verification',
            'Patch management',
            'Incident context assembly',
            'Capacity monitoring',
            'Credential rotation',
          ],
          label: 'Recurring workflows',
        },
        icon: (
          <I>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </I>
        ),
      },
      {
        title: 'Deploy read-only',
        description:
          'DORA observes the workflow in production — learning patterns, building context, and surfacing recommendations without taking action.',
        visual: {
          kind: 'checks',
          items: ['Pattern learning', 'Context building', 'Recommendation surfacing', 'Zero-action mode'],
          label: 'Observation phase',
        },
        icon: (
          <I>
            <circle cx="12" cy="12" r="3" />
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          </I>
        ),
      },
      {
        title: 'Enable approvals',
        description:
          'Move to approval-based execution. DORA proposes actions for human review before executing — building trust incrementally.',
        visual: {
          kind: 'flow',
          from: 'DORA proposes',
          to: 'Human approves',
          label: 'Approval-based execution',
        },
        icon: (
          <I>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </I>
        ),
      },
      {
        title: 'Go autonomous',
        description:
          'For bounded, well-understood tasks, DORA executes autonomously. Every action is logged, auditable, and reversible.',
        visual: {
          kind: 'actions',
          items: ['Auto-execute', 'Full audit log', 'Reversible actions', 'Bounded scope'],
          label: 'Autonomous execution',
        },
        icon: (
          <I>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </I>
        ),
      },
      {
        title: 'Measure & expand',
        description:
          'Track human touches removed per workflow. When the data shows confidence, add the next workflow and repeat.',
        visual: {
          kind: 'checks',
          items: ['Human touches reduced', 'Resolution time improved', 'Coverage expanded', 'Next workflow ready'],
          label: 'Continuous expansion',
        },
        icon: (
          <I>
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </I>
        ),
      },
    ],
  },
]

/* ─── Visual renderer ────────────────────────────────── */

function VisualPanel({ visual, isActive }: { visual: Visual; isActive: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
        isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="space-y-3">
        {visual.kind === 'tags' && (
          <div className="flex flex-wrap gap-2">
            {visual.items.map((s) => (
              <span
                key={s}
                className="rounded-pill border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {visual.kind === 'checks' && (
          <div className="space-y-2">
            {visual.items.map((c) => (
              <div key={c} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan/20">
                  <svg viewBox="0 0 16 16" className="h-3 w-3 text-cyan">
                    <path d="M4 8l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <span className="text-[14px] text-white/60">{c}</span>
              </div>
            ))}
          </div>
        )}

        {visual.kind === 'actions' && (
          <div className="grid grid-cols-2 gap-2">
            {visual.items.map((a) => (
              <div key={a} className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                <span className="text-[13px] text-white/60">{a}</span>
              </div>
            ))}
          </div>
        )}

        {visual.kind === 'flow' && (
          <div className="flex items-center gap-4">
            <div className="rounded-lg border border-sky/30 bg-sky/10 px-4 py-3">
              <p className="text-[13px] font-medium text-sky">{visual.from}</p>
            </div>
            <div className="flex-1 border-t border-dashed border-white/20" />
            <div className="rounded-lg border border-cyan/30 bg-cyan/10 px-4 py-3">
              <p className="text-[13px] font-medium text-cyan">{visual.to}</p>
            </div>
          </div>
        )}

        {visual.kind === 'numbered' && (
          <div className="space-y-2">
            {visual.items.map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-deep-signal/20 font-mono text-[10px] font-semibold text-signal">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[13px] text-white/60">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
        {visual.label}
      </p>
    </div>
  )
}

/* ─── Main component ─────────────────────────────────── */

export default function Platform() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {
    const syncTab = () => {
      const hash = window.location.hash.replace('#', '')
      const idx = tabs.findIndex((t) => t.hash === hash)
      if (idx >= 0) {
        setActiveTab(idx)
        setActiveItem(0)
      }
    }
    syncTab()
    window.addEventListener('hashchange', syncTab)
    return () => window.removeEventListener('hashchange', syncTab)
  }, [])

  const currentTab = tabs[activeTab]
  const currentItems = currentTab.items

  return (
    <section id="product" className="relative bg-white py-24 sm:py-32">
      <span id="teammates" className="absolute top-0 scroll-mt-[84px]" />
      <span id="deployment" className="absolute top-0 scroll-mt-[84px]" />
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <Container>
        {/* Centered heading */}
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[42px]">
              Full-stack operations
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-body">
              Powering every step of your operations workflow — from first alert to verified
              resolution.
            </p>
          </div>
        </Reveal>

        {/* Tab bar */}
        <Reveal>
          <div className="mx-auto mt-12 grid max-w-[720px] grid-cols-3 rounded-2xl border border-line">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                className={`py-4 text-center text-[17px] font-bold transition-all duration-300 ${
                  activeTab === i
                    ? 'rounded-2xl bg-soft text-ink'
                    : 'text-ink/40 hover:text-ink/60'
                }`}
                onClick={() => {
                  setActiveTab(i)
                  setActiveItem(0)
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Two-column content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[45%_1fr]">
          {/* Left: accordion */}
          <div key={activeTab} className="min-h-[400px]">
            {currentItems.map((item, i) => (
              <button
                key={item.title}
                type="button"
                className="w-full text-left"
                onClick={() => setActiveItem(i)}
                onMouseEnter={() => setActiveItem(i)}
              >
                <div
                  className={`flex items-start gap-4 px-2 py-5 ${
                    activeItem !== i && i !== currentItems.length - 1
                      ? 'border-b border-line'
                      : ''
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 ${
                      activeItem === i
                        ? 'bg-deep-signal/10 text-deep-signal'
                        : 'bg-ink/[0.04] text-ink/30'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[17px] font-bold transition-colors duration-300 ${
                        activeItem === i ? 'text-ink' : 'text-ink/50'
                      }`}
                    >
                      {item.title}
                    </p>
                    <div
                      className="grid transition-all duration-500"
                      style={{ gridTemplateRows: activeItem === i ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-2 text-[15px] leading-[1.6] text-body">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: dark visual panel */}
          <div className="relative hidden overflow-hidden rounded-stage border border-white/[0.06] bg-graphite p-8 lg:block lg:p-10">
            {['top-3 left-3', 'top-3 right-3 rotate-90', 'bottom-3 right-3 rotate-180', 'bottom-3 left-3 -rotate-90'].map(
              (pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-white/[0.15]`}
                />
              ),
            )}

            <div className="relative min-h-[300px]">
              {currentItems.map((item, i) => (
                <VisualPanel key={`${activeTab}-${item.title}`} visual={item.visual} isActive={activeItem === i} />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                {currentTab.label} &middot; {currentItems[activeItem]?.title}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                DORA
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
