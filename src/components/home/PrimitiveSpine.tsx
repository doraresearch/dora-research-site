import { useId, type ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

const cardCls =
  'relative aspect-[16/10] overflow-hidden rounded-card border border-[#1b2027] bg-[radial-gradient(130%_130%_at_30%_0%,#141922,#0A0C10_65%)] p-5 shadow-[0_30px_70px_-55px_rgba(2,8,20,0.7)]'

function WorkflowRail() {
  const items: [string, string | null][] = [
    ['01 / WORKFLOW', 'START'],
    ['02 / ROLES', null],
    ['03 / PERSONAS', null],
    ['04 / ORCHESTRATION', null],
    ['05 / HARNESS', 'DEPLOY'],
  ]
  return (
    <div className={cardCls}>
      <div className="flex h-full flex-col justify-center gap-[7px]">
        {items.map(([l, tag]) => (
          <div key={l} className="flex items-center gap-2.5 rounded-[9px] border border-signal2/60 bg-[#0c1620] px-3 py-2.5 font-mono text-[11px] tracking-[0.08em] text-[#dff4ff]">
            {l}
            {tag && <span className="ml-auto text-[9px] text-signal2">{tag}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function AgentGrid() {
  const on = new Set([0, 2, 5, 6, 8, 11])
  return (
    <div className={cardCls}>
      <div className="grid h-full grid-cols-4 content-center gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={on.has(i) ? { animationDelay: `${i * 0.18}s` } : undefined}
            className={`flex aspect-square items-center justify-center rounded-[9px] border font-mono text-[10px] ${
              on.has(i) ? 'animate-cell-pulse border-signal2 bg-[#0c1620] text-[#dff4ff] shadow-[0_0_18px_-6px_#38BDF8]' : 'border-[#232b35] bg-[#0e1218] text-[#5b6675]'
            }`}
          >
            a{String(i + 1).padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  )
}

function PersonaCards() {
  const roles: [string, string][] = [
    ['Retention', 'Drafts campaigns · cannot mass-message · routes via CRM gate'],
    ['Compliance', 'KYC/AML review · flags exceptions · audit-aligned'],
    ['Risk', 'Behavioral signals · escalation routing · scoped to threshold'],
  ]
  return (
    <div className={cardCls}>
      <div className="flex h-full flex-col justify-center gap-2">
        {roles.map(([r, d]) => (
          <div key={r} className="rounded-[11px] border border-[#232b35] bg-[#0e1218] px-3.5 py-2.5">
            <p className="flex justify-between text-[12.5px] font-semibold text-[#dff4ff]">
              {r}
              <span className="font-mono text-[9.5px] tracking-[0.14em] text-signal2">ROLE</span>
            </p>
            <p className="mt-1 text-[11px] text-[#8b95a1]">{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MemoryLayers() {
  const layers: [string, string, boolean][] = [
    ['POLICIES', '124 active rules', true],
    ['DECISIONS', '8.2K logged · review-ready', true],
    ['EXCEPTIONS', '47 patterns mapped', true],
    ['CUSTOMER PATTERNS', '12 cohorts · live', false],
    ['COMPLIANCE LOGIC', '23 jurisdictions', false],
    ['INSTITUTIONAL', 'growing', false],
  ]
  return (
    <div className={cardCls}>
      <div className="flex h-full flex-col justify-center gap-1.5">
        <p className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#aeb7c2]">
          Operational memory <span className="text-signal2">● ACTIVE</span>
        </p>
        {layers.map(([label, data, primary]) => (
          <div key={label} className="flex items-center gap-2.5 rounded-[9px] border border-[#232b35] bg-[#0e1218] px-3 py-2 font-mono text-[10.5px] text-[#cbd5e1]">
            <span className={`h-[6px] w-[6px] shrink-0 rounded-full ${primary ? 'bg-signal2 shadow-[0_0_8px_#38BDF8]' : 'bg-[#2a3340]'}`} aria-hidden="true" />
            <span className="font-semibold text-[#dff4ff]">{label}</span>
            <span className="ml-auto text-[9.5px] text-[#7a8694]">{data}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function HarnessFrame() {
  const g = `harn-${useId().replace(/:/g, '')}`
  const corners = ['left-3 top-3 border-l border-t', 'right-3 top-3 border-r border-t', 'bottom-3 left-3 border-b border-l', 'bottom-3 right-3 border-b border-r']
  return (
    <div className={cardCls}>
      {corners.map((c, i) => (
        <span key={i} className={`absolute z-[2] h-3.5 w-3.5 border-signal/50 ${c}`} aria-hidden="true" />
      ))}
      <span className="absolute left-4 top-3.5 z-[2] font-mono text-[9px] uppercase tracking-[0.16em] text-[#6f7782]">Harness</span>
      <span className="absolute right-4 top-3.5 z-[2] font-mono text-[9px] uppercase tracking-[0.16em] text-signal">● Live</span>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="h-[74%] w-[54%]">
          <defs>
            <linearGradient id={g} gradientUnits="userSpaceOnUse" x1="14" y1="86" x2="86" y2="14">
              <stop offset="0" stopColor="#6EE7B7" />
              <stop offset=".5" stopColor="#22D3EE" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="34" stroke="#2a3340" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="34" stroke={`url(#${g})`} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="160 214" className="origin-center animate-eval-spin" style={{ transformBox: 'fill-box' }} />
          <circle cx="50" cy="50" r="22" stroke="#232b35" strokeWidth="1" />
          <g stroke="#3b4452" strokeWidth="1">
            <line x1="50" y1="9" x2="50" y2="13" />
            <line x1="91" y1="50" x2="87" y2="50" />
            <line x1="50" y1="91" x2="50" y2="87" />
            <line x1="9" y1="50" x2="13" y2="50" />
          </g>
          <circle cx="50" cy="50" r="4.5" fill={`url(#${g})`} className="origin-center animate-core-pulse" style={{ transformBox: 'fill-box' }} />
        </svg>
      </div>
      <span className="absolute left-1/2 top-[20%] z-[2] -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa3ad]">Context</span>
      <span className="absolute right-[14%] top-1/2 z-[2] -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa3ad]">Eval</span>
      <span className="absolute bottom-[24%] left-[28%] z-[2] font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa3ad]">Constraints</span>
      <div className="absolute inset-x-0 bottom-4 z-[2] text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[#dff4ff]">
        Review <span className="text-signal">✓</span> → Deploy
      </div>
    </div>
  )
}

type Row = { ix: string; title: ReactNode; copy: string; Visual: () => JSX.Element }

const rows: Row[] = [
  {
    ix: '01 — WORKFLOWS',
    title: 'Operational workflows',
    copy: 'Map real iGaming processes across CRM, support, compliance, fraud, payments, affiliates, reporting, and trading — into systems agents can execute, hand off, and trace from first step to deployment.',
    Visual: WorkflowRail,
  },
  {
    ix: '02 — PERSONAS',
    title: 'Persona-based operational agents',
    copy: 'Role-specific agents — retention, compliance, risk, payments, affiliates, reporting — each with the context they need and the operating constraints they must respect.',
    Visual: PersonaCards,
  },
  {
    ix: '03 — COORDINATION',
    title: 'Coordinated multi-agent systems',
    copy: 'Specialized agents coordinate across departments, hand off work, share context, and escalate exceptions — without people stitching it together by hand.',
    Visual: AgentGrid,
  },
  {
    ix: '04 — MEMORY',
    title: (
      <>
        Persistent <span className="font-serif font-normal italic">operational memory</span>
      </>
    ),
    copy: 'Capture workflows, policies, decisions, exceptions, customer patterns, compliance logic, and institutional knowledge — so the system gets sharper each cycle instead of starting from zero.',
    Visual: MemoryLayers,
  },
  {
    ix: '05 — HARNESS',
    title: (
      <>
        Human-governed <span className="font-serif font-normal italic">harness</span>
      </>
    ),
    copy: 'Monitor, evaluate, constrain, approve, and audit agentic execution before sensitive actions ship — so trust grows with deployment, not in spite of it.',
    Visual: HarnessFrame,
  },
]

export default function PrimitiveSpine() {
  return (
    <section id="architecture" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal className="mb-2 max-w-[32ch]">
          <Eyebrow className="mb-3">The DORA architecture</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">Five pillars of operational intelligence.</h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[64ch] text-[16px] leading-[1.6] text-body">
            Agents are the execution layer. The durable value is the operational intelligence system around them — context, coordination, memory, and human-governed review.
          </p>
        </Reveal>

        {rows.map((r, i) => (
          <Reveal key={r.ix} className="grid items-center gap-8 border-t border-line py-10 md:grid-cols-2 md:gap-12">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-deep-signal">
                <span className="h-2 w-2 rounded-full bg-spectral" aria-hidden="true" />
                {r.ix}
              </p>
              <h3 className="mb-3 mt-3 text-[27px] font-bold tracking-[-0.02em] text-ink">{r.title}</h3>
              <p className="max-w-[44ch] text-[15.5px] leading-[1.6] text-body">{r.copy}</p>
              <div className="mt-5">
                <Button href="#how-it-works" variant="ghost" arrow>
                  Explore
                </Button>
              </div>
            </div>
            <div className={i % 2 === 1 ? 'md:order-1' : ''}>
              <r.Visual />
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}
