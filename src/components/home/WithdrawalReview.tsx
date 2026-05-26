import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const stages: [string, string][] = [
  ['Trigger', 'A high-value withdrawal or risk signal is detected based on operator-defined thresholds, anomaly signals, policy rules, or model outputs.'],
  ['Evidence Gathering', 'DORA pulls relevant context from KYC, payments, gameplay, device intelligence, AML profile, bonus history, related accounts, support history, and prior case reviews.'],
  ['Specialist Review', "Payment Fraud, AML / Source-of-Funds, Account Behavior, Identity Verification, and Account Linking agents each perform bounded domain-specific investigation using the operator's tools, data, policies, and prior case context."],
  ['Policy-Bounded Action', 'The Case Synthesis Orchestrator reconciles findings, applies operator policy, determines whether the case fits an approved automation path, and escalates edge cases, low-confidence recommendations, AML triggers, KYC gaps, or policy exceptions to a human analyst.'],
  ['Audit + Learning', 'DORA preserves the evidence, reasoning chain, system recommendation, human decision, override rationale, timestamps, player communication, escalation material, and feedback signals for future calibration.'],
]

const agents: [string, string][] = [
  ['Payment Fraud Agent', 'Stolen-card risk, chargeback exposure, processor signals, payment-method changes, mule indicators.'],
  ['AML / Source-of-Funds Agent', 'Structuring, transaction velocity, jurisdiction risk, source-of-funds gaps, SAR-trigger thresholds.'],
  ['Account Behavior Agent', 'Gameplay patterns, wager sizing, win/loss profile, session timing, bonus abuse, collusion indicators.'],
  ['Identity Verification Agent', 'KYC integrity, document consistency, liveness checks, sanctions screening, PEP status, verification gaps.'],
  ['Account Linking Agent', 'Shared devices, addresses, payment instruments, IPs, behavioral fingerprints, self-exclusion evasion.'],
]

const orchestrator: [string, string] = [
  'Case Synthesis Orchestrator',
  'Coordinates the specialist agents, reconciles conflicting evidence, applies policy constraints, determines automation vs. escalation path, and produces a recommended action, confidence level, reasoning chain, and evidence-linked case package.',
]

const drivers = [
  'Recent payment-method change',
  'Device fingerprint inconsistency',
  'Deposit-to-wager anomaly',
  'Incomplete source-of-funds documentation',
]

const options = [
  'Approve withdrawal',
  'Request additional verification',
  'Hold pending investigation',
  'Reject and refund to source',
  'Freeze and escalate to AML',
]

const actions = [
  'Evidence gathered',
  'Specialist reviews completed',
  'Policy checks applied',
  'Escalation package prepared',
  'Player communication drafted',
  'Audit trail preserved',
]

const roi: [string, string, string][] = [
  ['Average analyst time per escalated case', '18-25 minutes', '4-7 minutes'],
  ['Case throughput per analyst per day', '25-35 cases', '90-120 cases'],
  ['False-positive hold rate', '8-12%', '3-5%'],
  ['True-positive lift', 'Baseline', '+15-25%'],
  ['Withdrawal-to-resolution time', '24-72 hours', '2-12 hours'],
  ['AML escalation completeness', 'Variable', '100% standardized'],
  ['Chargeback rate on approved withdrawals', 'Baseline', '-15% to -30% by month 6'],
]

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const m = {
    tl: 'left-3 top-3 border-l border-t',
    tr: 'right-3 top-3 border-r border-t',
    bl: 'bottom-3 left-3 border-b border-l',
    br: 'bottom-3 right-3 border-b border-r',
  } as const
  return <span className={`absolute z-[2] h-3.5 w-3.5 border-signal/50 ${m[pos]}`} aria-hidden="true" />
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5 shrink-0 text-signal2">
      <path d="M5 12l4 4 10-10" />
    </svg>
  )
}

export default function WithdrawalReview() {
  return (
    <section id="deployment-pattern" className="bg-base py-16 sm:py-20">
      <Container>
        {/* HEADER + INTRO */}
        <Reveal>
          <Eyebrow className="mb-3">Deployment pattern</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
            High-value withdrawal <span className="font-serif font-normal italic">risk review</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />

          <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 text-[16.5px] leading-[1.7] text-body">
              <p>
                High-value withdrawals are one of the highest-friction moments in gaming operations. Operators must determine whether to release, verify, hold, reject, refund, or escalate a withdrawal based on payment history, KYC records, gameplay behavior, AML signals, device intelligence, related accounts, bonus history, support history, and prior fraud reviews.
              </p>
              <p>
                Most systems either flag the case, score the risk, or push the work into an analyst queue. <strong className="text-ink">DORA goes further.</strong>
              </p>
            </div>
            <div className="space-y-4 text-[15.5px] leading-[1.65] text-body">
              <p>
                <strong className="text-ink">DORA deploys a governed agentic operating layer</strong> into the operator&rsquo;s withdrawal review process. When a withdrawal crosses an operator-defined threshold or matches predefined risk signals, DORA assembles the full case file, invokes specialist agents, applies operator policy, determines whether the case can follow an approved automation path or requires escalation, and produces a policy-aware case package with evidence-linked reasoning, recommended action, draft communications, escalation materials, and full auditability.
              </p>
              <p>
                The human team remains in control. Low-risk cases can be resolved through predefined controls. Edge cases, low-confidence recommendations, policy exceptions, AML triggers, KYC gaps, and compliance-sensitive decisions route to human review. <strong className="text-ink">DORA never auto-files regulatory reports.</strong>
              </p>
            </div>
          </div>
        </Reveal>

        {/* EXPLAINER — "asks" contrast + closing copy */}
        <Reveal className="mt-10 rounded-card border border-line bg-soft p-6 sm:p-8">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal">
            Why this is agentic, not just rules or scoring
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[12px] border border-line bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Rules engines ask</p>
              <p className="mt-2 text-[14.5px] font-medium leading-[1.5] text-ink">Did this threshold fire?</p>
            </div>
            <div className="rounded-[12px] border border-line bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">ML systems ask</p>
              <p className="mt-2 text-[14.5px] font-medium leading-[1.5] text-ink">How risky is this case?</p>
            </div>
            <div className="relative overflow-hidden rounded-[12px] border border-[#bfe9fb] bg-signal-soft p-4">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-spectral" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-deep-signal">DORA asks</p>
              <p className="mt-2 text-[14.5px] font-medium leading-[1.5] text-ink">
                What operational work must happen next to resolve this case safely, quickly, and inside policy?
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-[15px] leading-[1.7] text-body">
            <p>
              DORA is not a fraud model, alert queue, or dashboard. It coordinates the operational loop around the decision: evidence gathering, specialist review, policy application, automation-or-escalation routing, documentation, audit, and feedback.
            </p>
            <p className="font-semibold text-ink">
              Rules define boundaries. ML models contribute signals. DORA turns those inputs into controlled operational execution.
            </p>
          </div>
        </Reveal>

        {/* (1) BEFORE / WITH / RESULT */}
        <Reveal className="mt-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-card border border-line bg-white p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Before DORA</p>
              <p className="text-[14.5px] leading-[1.6] text-body">
                Fraud and risk teams gather evidence manually across payments, KYC, gameplay, support, device intelligence, AML systems, related-account checks, and prior reviews. Rules may trigger the case and ML models may score it, but <strong className="text-ink">analysts still carry the operational burden</strong> of synthesis, documentation, decision preparation, and escalation.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-card border border-[#bfe9fb] bg-signal-soft p-6">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-spectral" aria-hidden="true" />
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-deep-signal">With DORA</p>
              <p className="text-[14.5px] leading-[1.6] text-ink">
                DORA deploys an <strong>agentic review layer</strong> into the workflow. Specialist agents gather evidence, use connected tools, apply operator policy, reason over domain-specific signals, synthesize the case, determine the correct automation or escalation path, draft required outputs, and preserve the audit trail.
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

        {/* (2) FIVE-STAGE FLOW */}
        <Reveal className="mt-12">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal">End-to-end flow</p>
          <div className="relative grid gap-3 lg:grid-cols-5">
            <div className="absolute left-8 right-8 top-[22px] hidden h-px bg-spectral opacity-70 lg:block" aria-hidden="true" />
            {stages.map(([label, copy], i) => (
              <div key={label} className="relative z-10 rounded-card border border-line bg-white p-4">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-pill border border-deep-signal bg-white font-mono text-[12px] font-bold text-ink">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-deep-signal">{label}</p>
                <p className="mt-2 text-[12.5px] leading-[1.5] text-body">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* (3) SIX-AGENT PANEL */}
        <Reveal className="mt-12">
          <h3 className="text-[20px] font-bold leading-[1.2] text-ink sm:text-[24px]">
            Specialist agents <span className="font-serif font-normal italic">coordinated</span> around an operational objective.
          </h3>
          <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.6] text-body">
            Each agent performs a bounded part of the review. The orchestrator coordinates them around the business objective: <strong className="text-ink">resolve the withdrawal safely, quickly, and inside operator policy.</strong>
          </p>

          <div className="mt-6 overflow-hidden rounded-stage border border-[#1c2026] bg-[radial-gradient(120%_150%_at_50%_-10%,#161a22_0%,#0B0D11_62%)] p-5 shadow-[0_50px_90px_-55px_rgba(5,6,8,0.65)] sm:p-7">
            {/* 5 specialist cards */}
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {agents.map(([name, copy]) => (
                <div key={name} className="rounded-[12px] border border-[#232b35] bg-[#11151b]/85 p-3.5">
                  <p className="text-[12.5px] font-semibold text-[#dff4ff]">{name}</p>
                  <p className="mt-1.5 text-[11px] leading-[1.55] text-[#8b95a1]">{copy}</p>
                </div>
              ))}
            </div>

            {/* Connectors → orchestrator */}
            <div className="my-4 hidden justify-around px-6 lg:flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-7 w-px bg-spectral opacity-70" />
              ))}
            </div>
            <div className="my-4 flex justify-center lg:hidden" aria-hidden="true">
              <span className="h-7 w-px bg-spectral opacity-70" />
            </div>

            {/* Orchestrator card */}
            <div className="rounded-[14px] border border-signal2/50 bg-gradient-to-br from-[#0c1620] to-[#0a0f17] p-5 shadow-[0_0_40px_-12px_#38BDF8]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[14px] font-semibold text-[#dff4ff]">{orchestrator[0]}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal2">Synthesis</span>
              </div>
              <p className="mt-2 text-[12.5px] leading-[1.6] text-[#cbd5e1]">{orchestrator[1]}</p>
            </div>
          </div>
        </Reveal>

        {/* (4) MOCK DECISION PANEL */}
        <Reveal className="mt-12">
          <h3 className="text-[20px] font-bold leading-[1.2] text-ink sm:text-[24px]">
            A control surface for <span className="font-serif font-normal italic">agentic operations</span>.
          </h3>
          <div className="relative mt-6 overflow-hidden rounded-stage border border-[#1c2026] bg-[radial-gradient(120%_150%_at_50%_-10%,#161a22_0%,#0B0D11_62%)] p-6 shadow-[0_50px_90px_-55px_rgba(5,6,8,0.65)] sm:p-8">
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />

            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6f7782]">
                Case · Withdrawal review · #WR-04821
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_#7DD3FC]" aria-hidden="true" />
                Elevated risk
              </span>
            </div>

            {/* Objective */}
            <div className="mb-4 rounded-[12px] border border-[#232b35] bg-[#11151b] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb7c2]">Objective</p>
              <p className="mt-2 text-[15px] font-semibold leading-[1.4] text-[#dff4ff]">
                Resolve withdrawal review inside operator policy
              </p>
            </div>

            {/* Risk score + Recommended path */}
            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[12px] border border-[#232b35] bg-[#11151b] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb7c2]">Composite risk score</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-spectral text-[48px] font-extrabold leading-none">72</span>
                  <span className="text-[14px] text-[#8b95a1]">/ 100</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-signal2">Elevated</span>
                </div>
                <div className="mt-3 h-[6px] overflow-hidden rounded-full bg-[#1f2733]">
                  <div className="h-full w-[72%] rounded-full bg-spectral" />
                </div>
              </div>
              <div className="rounded-[12px] border border-[#232b35] bg-[#11151b] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb7c2]">Recommended path</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-pill border border-signal2/50 bg-[#0c1620] px-3 py-1.5 text-[13px] font-semibold text-[#dff4ff]">
                  Escalate for enhanced verification <span aria-hidden="true">→</span>
                </p>
                <p className="mt-3 text-[12.5px] text-[#8b95a1]">
                  Confidence: <span className="text-[#cbd5e1]">medium · 0.74</span>
                </p>
              </div>
            </div>

            {/* Top drivers + Escalation reason */}
            <div className="mb-4 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
              <div className="rounded-[12px] border border-[#232b35] bg-[#11151b] p-4">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb7c2]">Top risk drivers</p>
                <ul className="space-y-2">
                  {drivers.map((d, i) => (
                    <li key={d} className="flex items-center gap-3 text-[13px] text-[#cbd5e1]">
                      <span className="w-6 font-mono text-[10px] text-signal2">{String(i + 1).padStart(2, '0')}</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[12px] border border-signal2/40 bg-[#08161f] p-4">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal2">Escalation reason</p>
                <p className="font-mono text-[13px] leading-[1.55] text-[#dff4ff]">Low confidence + AML signal + KYC gap</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6f7782]">
                  Routed to: <span className="text-signal">Senior fraud analyst</span>
                </p>
              </div>
            </div>

            {/* Agentic action log */}
            <div className="mb-4 rounded-[12px] border border-[#232b35] bg-[#11151b] p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb7c2]">Agentic action log</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {actions.map((a) => (
                  <div key={a} className="flex items-center gap-2.5 text-[13px] text-[#cbd5e1]">
                    <Check />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Analyst options */}
            <div className="mb-4 rounded-[12px] border border-[#232b35] bg-[#11151b] p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb7c2]">Analyst options</p>
              <div className="flex flex-wrap gap-2">
                {options.map((o, i) => (
                  <span
                    key={o}
                    className={`rounded-pill border px-3 py-1.5 text-[12px] ${
                      i === 0 ? 'border-signal2 bg-[#0c1620] text-[#dff4ff]' : 'border-[#2a3340] bg-[#0d1116] text-[#cbd5e1]'
                    }`}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>

            {/* Audit trail */}
            <p className="border-t border-[#232b35] pt-4 font-mono text-[10px] uppercase leading-[1.6] tracking-[0.14em] text-[#6f7782]">
              <span className="text-signal2">●</span> Audit trail: every signal evaluated · every reasoning chain attached · system recommendation logged · analyst override logged · timestamps preserved
            </p>
          </div>
        </Reveal>

        {/* (5) ROI TABLE */}
        <Reveal className="mt-12">
          <h3 className="text-[20px] font-bold leading-[1.2] text-ink sm:text-[24px]">Target impact from a 90-day pilot.</h3>
          <div className="mt-6 overflow-x-auto rounded-card border border-line-strong">
            <table className="w-full min-w-[640px] border-collapse text-[14px]">
              <thead>
                <tr className="bg-soft">
                  <th className="px-5 py-3.5 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-ink">Metric</th>
                  <th className="px-5 py-3.5 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Operator baseline</th>
                  <th className="px-5 py-3.5 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-deep-signal">DORA target</th>
                </tr>
              </thead>
              <tbody>
                {roi.map(([m, b, d], i) => (
                  <tr key={m} className={i % 2 === 0 ? 'bg-white' : 'bg-soft/40'}>
                    <td className="border-t border-line px-5 py-3.5 text-ink">{m}</td>
                    <td className="border-t border-line px-5 py-3.5 text-right text-muted">{b}</td>
                    <td className="border-t border-line px-5 py-3.5 text-right font-semibold text-ink">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-mono text-[11px] italic text-muted">
            Pilot targets vary by operator volume, data availability, risk policy, automation permissions, jurisdiction, and the degree of integration into existing operator systems.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
