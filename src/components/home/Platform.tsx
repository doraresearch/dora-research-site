import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

/* ─── Panel building blocks ─────────────────────────── */

function PH({ children }: { children: string }) {
  return <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">{children}</p>
}

function Sep() {
  return <div className="my-3 border-t border-white/[0.06]" />
}

function Row({ s, label, value }: { s: 'ok' | 'warn' | 'run' | 'wait' | 'no'; label: string; value?: string }) {
  const icon = {
    ok: <span className="text-mint">✓</span>,
    warn: <span className="text-amber-400">⚠</span>,
    run: <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" />,
    wait: <span className="text-white/20">○</span>,
    no: <span className="text-white/25">✗</span>,
  }[s]
  return (
    <div className="flex items-center gap-2.5 py-[3px] font-mono text-[12px] leading-[1.7]">
      <span className="flex w-4 shrink-0 items-center justify-center">{icon}</span>
      <span className="text-white/40">{label}</span>
      {value && (
        <>
          <span className="flex-1" />
          <span className="text-right text-white/60">{value}</span>
        </>
      )}
    </div>
  )
}

function Bar({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="flex items-center gap-3 py-[3px] font-mono text-[12px] leading-[1.7]">
      <span className="w-[120px] text-white/40">{label}</span>
      <span className="flex-1">
        <span className="flex h-[6px] overflow-hidden rounded-full bg-white/[0.06]">
          <span className="rounded-full bg-mint/60" style={{ width: `${pct}%` }} />
        </span>
      </span>
      <span className="w-10 text-right text-white/50">{pct}%</span>
    </div>
  )
}

function Foot({ children }: { children: string }) {
  return <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">{children}</p>
}

/* ─── Panel content per tab/item ─────────────────────── */

const platformPanels: React.ReactNode[] = [
  // Observe
  <div key="observe">
    <PH>Live signal feed</PH>
    <Row s="run" label="datadog/alerts" value="12 signals / 5m" />
    <Row s="run" label="pagerduty/events" value="3 incidents active" />
    <Row s="run" label="cloudwatch/alarms" value="2 firing" />
    <Row s="ok" label="prometheus/rules" value="847 evaluated" />
    <Row s="ok" label="slack/ops-channel" value="monitoring" />
    <Row s="ok" label="jira/ops-board" value="4 new tickets" />
    <Foot>6 integrations · 23 channels · real-time</Foot>
  </div>,
  // Diagnose
  <div key="diagnose">
    <PH>Alert PD-4892 · prod-api-03 · cpu spike</PH>
    <Row s="ok" label="Pattern match" value="92% → INC-3201" />
    <Row s="ok" label="Root cause" value="Connection pool leak" />
    <Row s="warn" label="Impact" value="3 services · 2.4k req/min" />
    <Row s="ok" label="Runbook" value="RB-0047 available" />
    <Sep />
    <div className="flex items-center gap-3 py-[3px] font-mono text-[12px]">
      <span className="text-white/40">Confidence</span>
      <span className="flex-1">
        <span className="flex h-[6px] overflow-hidden rounded-full bg-white/[0.06]">
          <span className="rounded-full bg-mint/60" style={{ width: '92%' }} />
        </span>
      </span>
      <span className="text-mint">HIGH</span>
    </div>
    <Foot>Diagnosis complete · auto-remediation available</Foot>
  </div>,
  // Execute
  <div key="execute">
    <PH>Executing RB-0047 on prod-api-03</PH>
    <Row s="ok" label="Drain connections" value="2.1s" />
    <Row s="ok" label="Restart service pool" value="4.3s" />
    <Row s="ok" label="Verify port binding" value="0.8s" />
    <Row s="ok" label="Restore traffic" value="1.2s" />
    <Row s="run" label="Post-exec health check" value="running" />
    <Sep />
    <div className="font-mono text-[11px] text-white/30">Total elapsed: 8.4s · 5 steps · 0 errors</div>
    <Foot>Runbook executed · all actions logged</Foot>
  </div>,
  // Verify
  <div key="verify">
    <PH>Recovery status · prod-api-03</PH>
    <Row s="ok" label="CPU" value="12% ← 94%" />
    <Row s="ok" label="Latency p99" value="45ms ← 1,200ms" />
    <Row s="ok" label="Error rate" value="0.01% ← 12.3%" />
    <Row s="ok" label="SLO 30d" value="99.95% · compliant" />
    <Sep />
    <Row s="run" label="Regression watch" value="15m remaining" />
    <Foot>Recovery confirmed · SLO compliant</Foot>
  </div>,
  // Document
  <div key="document">
    <PH>INC-4892 · resolved · 8m 24s TTR</PH>
    <Row s="ok" label="Timeline" value="4 events → ticket" />
    <Row s="ok" label="Actions" value="drain → restart → verify" />
    <Row s="ok" label="Outcome" value="auto-resolved via RB-0047" />
    <Row s="ok" label="Knowledge" value="pattern → INC database" />
    <Row s="ok" label="Notify" value="#ops-channel · closed" />
    <Foot>Full context recorded · searchable</Foot>
  </div>,
  // Escalate
  <div key="escalate">
    <PH>Escalation · requires human review</PH>
    <Row s="warn" label="Alert" value="Unknown failure pattern" />
    <Row s="no" label="Confidence" value="LOW · no runbook match" />
    <Row s="warn" label="Risk" value="Production database" />
    <Row s="ok" label="Context" value="3 related alerts / 10m" />
    <Sep />
    <Row s="run" label="Assigned" value="on-call DBA · PagerDuty" />
    <Row s="wait" label="Status" value="Awaiting human decision" />
    <Foot>Full context attached · human in control</Foot>
  </div>,
]

const teammatePanels: React.ReactNode[] = [
  // NOC
  <div key="noc">
    <PH>Triage queue · 7 alerts</PH>
    <Row s="run" label="CRIT  prod-db-01 replication lag" value="triaging" />
    <Row s="ok" label="HIGH  api-gateway 5xx spike" value="resolved" />
    <Row s="ok" label="MED   cert expiry in 72h" value="escalated" />
    <Row s="wait" label="LOW   disk usage 78% staging" value="queued" />
    <Sep />
    <div className="font-mono text-[11px] text-white/30">Auto-resolved: 4 · Escalated: 2 · Pending: 1</div>
    <Foot>7 alerts triaged · 3 resolved without human</Foot>
  </div>,
  // DBA
  <div key="dba">
    <PH>Database health · prod-primary</PH>
    <Row s="ok" label="Queries/s" value="12,847 · normal" />
    <Row s="warn" label="Slow queries" value="3 · investigating" />
    <Row s="ok" label="Replication lag" value="0.2s · healthy" />
    <Row s="ok" label="Connections" value="342 / 500" />
    <Row s="ok" label="Last backup" value="02:00 UTC · verified" />
    <Sep />
    <div className="font-mono text-[11px] text-white/30">Next: index rebuild · Sat 03:00 UTC</div>
    <Foot>5 checks passed · 1 under investigation</Foot>
  </div>,
  // Sys Admin
  <div key="sysadmin">
    <PH>Infrastructure · 47 hosts</PH>
    <Row s="ok" label="prod-api-01..04" value="healthy · patched" />
    <Row s="ok" label="prod-db-01..02" value="healthy · patched" />
    <Row s="warn" label="staging-api-01" value="config drift" />
    <Row s="ok" label="prod-cache-01..03" value="healthy" />
    <Sep />
    <Bar label="Patch compliance" pct={97} />
    <div className="font-mono text-[11px] text-white/30">1 drift alert · auto-remediation queued</div>
    <Foot>46 / 47 hosts compliant</Foot>
  </div>,
  // Incident
  <div key="incident">
    <PH>INC-4901 · active · SEV-2</PH>
    <Row s="warn" label="Signal" value="Payment gateway timeouts" />
    <Row s="warn" label="Impact" value="~340 failed transactions" />
    <Row s="run" label="Duration" value="12m active" />
    <Row s="ok" label="Context" value="3 changes in 24h identified" />
    <Sep />
    <Row s="ok" label="Recommendation" value="Rollback deploy #4471" />
    <Row s="run" label="Channel" value="#inc-4901 · 4 responders" />
    <Foot>Context assembled · response coordinated</Foot>
  </div>,
]

const deployPanels: React.ReactNode[] = [
  // Scope
  <div key="scope">
    <PH>Select a recurring workflow</PH>
    <Row s="run" label="Alert triage" value="~120 / week" />
    <Row s="wait" label="Database health checks" value="~45 / week" />
    <Row s="wait" label="Backup verification" value="~14 / week" />
    <Row s="wait" label="Patch management" value="~8 / week" />
    <Row s="wait" label="Incident assembly" value="~22 / week" />
    <Row s="wait" label="Capacity monitoring" value="~35 / week" />
    <Row s="wait" label="Credential rotation" value="~6 / week" />
    <Foot>Highest volume selected · alert triage</Foot>
  </div>,
  // Read-only
  <div key="readonly">
    <PH>Observing · alert triage · day 12</PH>
    <Row s="ok" label="Patterns learned" value="47" />
    <Row s="ok" label="Recommendations surfaced" value="23" />
    <Bar label="Accuracy" pct={94} />
    <Row s="ok" label="Actions taken" value="0 (read-only)" />
    <Sep />
    <Row s="ok" label="Approval mode" value="ready" />
    <Foot>12 days observed · zero-action mode</Foot>
  </div>,
  // Approvals
  <div key="approvals">
    <PH>Approval queue · alert triage</PH>
    <div className="my-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
      <div className="flex items-center justify-between font-mono text-[12px]">
        <span className="text-white/60">Restart prod-api-03</span>
        <span className="text-mint">96% conf</span>
      </div>
      <div className="mt-1 font-mono text-[10px] text-white/25">matches RB-0047 · awaiting approval</div>
    </div>
    <Row s="ok" label="Scale cache-02 replicas" value="approved 4m ago" />
    <Row s="ok" label="Clear dead-letter queue" value="approved 12m ago" />
    <Sep />
    <div className="font-mono text-[11px] text-white/30">Approved: 18 · Rejected: 1 · Overrides: 0</div>
    <Foot>Human review on every action</Foot>
  </div>,
  // Autonomous
  <div key="autonomous">
    <PH>Autonomous · alert triage</PH>
    <Row s="ok" label="Auto-restart on CPU spike" value="bounded" />
    <Row s="ok" label="Auto-scale on queue depth" value="bounded" />
    <Row s="ok" label="Auto-clear dead letters" value="bounded" />
    <Row s="no" label="Database failover" value="requires approval" />
    <Row s="no" label="Config changes" value="requires approval" />
    <Sep />
    <div className="font-mono text-[11px] text-white/30">Autonomous: 12 patterns · Gated: 5 patterns</div>
    <Foot>Bounded autonomy · full audit trail</Foot>
  </div>,
  // Measure
  <div key="measure">
    <PH>Workflow metrics · 30 days</PH>
    <Bar label="Human touches" pct={27} />
    <Bar label="Resolution time" pct={19} />
    <Bar label="Auto-resolved" pct={89} />
    <Bar label="Escalation qual." pct={94} />
    <Sep />
    <Row s="ok" label="Next workflow" value="Database health →" />
    <Foot>-73% human touches · ready to expand</Foot>
  </div>,
]

const allPanels = [platformPanels, teammatePanels, deployPanels]

/* ─── Icon wrapper ──────────────────────────────────── */

function Ic({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      {children}
    </svg>
  )
}

/* ─── Tab data ──────────────────────────────────────── */

interface TabItem {
  title: string
  description: string
  icon: React.ReactNode
}

const tabs: { label: string; hash: string; items: TabItem[] }[] = [
  {
    label: 'Platform',
    hash: 'product',
    items: [
      {
        title: 'Observe',
        description:
          'DORA connects to observability, ticketing, cloud, databases, chat, runbooks, and internal tools — building a live model of system signals across your stack.',
        icon: <Ic><circle cx="12" cy="12" r="3" /><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /></Ic>,
      },
      {
        title: 'Diagnose',
        description:
          'When an event occurs, DORA evaluates it against historical patterns, runbooks, and operational context. It identifies likely causes and determines the appropriate response path.',
        icon: <Ic><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></Ic>,
      },
      {
        title: 'Execute',
        description:
          'For known patterns with approved workflows, DORA executes autonomously — restarting services, scaling resources, clearing queues, running patches. Every action is logged.',
        icon: <Ic><polygon points="5,3 19,12 5,21" /></Ic>,
      },
      {
        title: 'Verify',
        description:
          'After execution, DORA confirms recovery — checking metrics, validating service health, and ensuring the fix holds. No silent failures.',
        icon: <Ic><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Ic>,
      },
      {
        title: 'Document',
        description:
          'Every resolution — automated or human-driven — is documented with full context: what happened, what was tried, what worked, and what to watch.',
        icon: <Ic><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></Ic>,
      },
      {
        title: 'Escalate',
        description:
          'When DORA encounters something outside its approved scope — novel failures, ambiguous signals, high-risk changes — it escalates to the right human with full context and recommended actions.',
        icon: <Ic><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></Ic>,
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
        icon: <Ic><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></Ic>,
      },
      {
        title: 'DBA Teammate',
        description:
          'Investigate query performance, backup failures, replication lag, capacity issues, and recurring database incidents.',
        icon: <Ic><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" /><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" /></Ic>,
      },
      {
        title: 'Sys Admin Teammate',
        description:
          'Handle routine checks, configuration drift, patch workflows, service restarts, and infrastructure health tasks.',
        icon: <Ic><rect x="2" y="3" width="20" height="7" rx="2" /><rect x="2" y="14" width="20" height="7" rx="2" /><circle cx="6" cy="6.5" r="1" fill="currentColor" stroke="none" /><circle cx="6" cy="17.5" r="1" fill="currentColor" stroke="none" /></Ic>,
      },
      {
        title: 'Incident Teammate',
        description: 'Assemble incident context, recommend response paths, update tickets, and coordinate escalation.',
        icon: <Ic><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></Ic>,
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
        icon: <Ic><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></Ic>,
      },
      {
        title: 'Deploy read-only',
        description:
          'DORA observes the workflow in production — learning patterns, building context, and surfacing recommendations without taking action.',
        icon: <Ic><circle cx="12" cy="12" r="3" /><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /></Ic>,
      },
      {
        title: 'Enable approvals',
        description:
          'Move to approval-based execution. DORA proposes actions for human review before executing — building trust incrementally.',
        icon: <Ic><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></Ic>,
      },
      {
        title: 'Go autonomous',
        description:
          'For bounded, well-understood tasks, DORA executes autonomously. Every action is logged, auditable, and reversible.',
        icon: <Ic><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></Ic>,
      },
      {
        title: 'Measure & expand',
        description:
          'Track human touches removed per workflow. When the data shows confidence, add the next workflow and repeat.',
        icon: <Ic><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></Ic>,
      },
    ],
  },
]

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
  const currentPanels = allPanels[activeTab]

  return (
    <section id="product" className="relative bg-white py-24 sm:py-32">
      <span id="teammates" className="absolute top-0 scroll-mt-[84px]" />
      <span id="deployment" className="absolute top-0 scroll-mt-[84px]" />
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <Container>
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

        <Reveal>
          <div role="tablist" aria-label="Product sections" className="mx-auto mt-12 grid max-w-[720px] grid-cols-3 rounded-2xl border border-line">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`tabpanel-${tab.hash}`}
                id={`tab-${tab.hash}`}
                className={`py-4 text-center text-[17px] font-bold transition-all duration-300 ${
                  activeTab === i
                    ? 'rounded-2xl bg-soft text-ink'
                    : 'text-ink/40 hover:text-ink/60'
                }`}
                onClick={() => { setActiveTab(i); setActiveItem(0) }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[45%_1fr]" id={`tabpanel-${currentTab.hash}`} role="tabpanel" aria-labelledby={`tab-${currentTab.hash}`}>
          <div key={activeTab} className="min-h-[400px]">
            {currentItems.map((item, i) => (
              <button
                key={item.title}
                type="button"
                className="w-full text-left"
                aria-expanded={activeItem === i}
                onClick={() => setActiveItem(i)}
                onMouseEnter={() => setActiveItem(i)}
              >
                <div
                  className={`flex items-start gap-4 px-2 py-5 ${
                    activeItem !== i && i !== currentItems.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 ${
                      activeItem === i ? 'bg-deep-signal/10 text-deep-signal' : 'bg-ink/[0.04] text-ink/30'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-[17px] font-bold transition-colors duration-300 ${activeItem === i ? 'text-ink' : 'text-ink/50'}`}>
                      {item.title}
                    </p>
                    <div
                      className="grid transition-all duration-500"
                      style={{ gridTemplateRows: activeItem === i ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-2 text-[15px] leading-[1.6] text-body">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="relative hidden overflow-hidden rounded-stage border border-white/[0.06] bg-graphite p-8 lg:block lg:p-10">
            {['top-3 left-3', 'top-3 right-3 rotate-90', 'bottom-3 right-3 rotate-180', 'bottom-3 left-3 -rotate-90'].map(
              (pos) => (
                <span key={pos} className={`absolute ${pos} h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-white/[0.15]`} />
              ),
            )}

            <div className="relative min-h-[300px]">
              {currentPanels.map((panel, i) => (
                <div
                  key={`${activeTab}-${i}`}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
                    activeItem === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                  }`}
                >
                  {panel}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                {currentTab.label} &middot; {currentItems[activeItem]?.title}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">DORA</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
