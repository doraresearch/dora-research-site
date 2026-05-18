import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const stackRows = [
  ['Application layer', 'Core focus', true],
  ['Orchestration layer', 'Core focus', true],
  ['Harness layer', 'Core focus', true],
  ['Model layer', 'Model-agnostic', false],
  ['Data layer', 'Not our focus', false],
  ['Infrastructure', 'Not our focus', false],
  ['Compute', 'Not our focus', false],
]

const primitives = [
  {
    label: '01 / Workflow',
    title: 'Coordinated enterprise workflows',
    copy: 'AI systems should follow the shape of real work. DORA coordinates agents across workflows, tasks, approvals, handoffs, knowledge flows, and decision points.',
    diagram: 'workflow',
  },
  {
    label: '02 / Swarm',
    title: 'Parallel agent swarms',
    copy: 'Important work rarely moves in a straight line. DORA uses multiple agents working in parallel to reason, compare, verify, and execute across different paths at once.',
    diagram: 'swarm',
  },
  {
    label: '03 / Persona',
    title: 'Persona-based agents',
    copy: 'Every agent should not think the same way. DORA gives agents distinct roles, objectives, reasoning styles, constraints, and operating context.',
    diagram: 'persona',
  },
]

const traceSteps = [
  ['01', 'Workflow', 'Start with the enterprise workflow.'],
  ['02', 'Roles', 'Define agent roles and responsibilities.'],
  ['03', 'Personas', 'Assign personas and operating constraints.'],
  ['04', 'Orchestration', 'Run agents in parallel through orchestration.'],
  ['05', 'Harness', 'Evaluate, refine, and deploy.'],
]

const useCases = [
  ['Executive decision support', 'Coordinate agents across market, financial, operational, legal, and customer perspectives to support complex decisions.'],
  ['Enterprise research and analysis', 'Run parallel research workflows that gather, compare, challenge, and synthesize information across domains.'],
  ['Operational command workflows', 'Coordinate recurring operational work through agents, handoffs, evaluations, and escalation paths.'],
  ['Customer intelligence', 'Analyze customer needs, objections, behavior, and opportunities through role-specific agents.'],
  ['Compliance-sensitive workflows', 'Add review, traceability, and constraints to workflows where accuracy and accountability matter.'],
  ['Multi-agent task execution', 'Break complex work into specialized roles that can reason, verify, and produce coordinated outputs.'],
]

const agenda = ['Multi-agent coordination', 'Persona design', 'Workflow harnesses', 'Evaluation and reliability', 'Human review paths']

function ArrowIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4">
      <path d="M3 9h11M9.5 4.5 14 9l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

function Button({ href, children, variant = 'primary' }) {
  const classes = variant === 'secondary'
    ? 'border-transparent bg-transparent text-[#050608] hover:border-[#DCE1E6] hover:bg-[#EEF1F4]'
    : 'border-[#111418] bg-[#111418] text-[#F8FAFC] hover:-translate-y-px hover:bg-[#050608]'

  return (
    <a href={href} className={`inline-flex min-h-[42px] items-center justify-center gap-2.5 border px-[18px] text-sm font-semibold leading-none transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7DD3FC] ${classes}`}>
      {children}
      <ArrowIcon />
    </a>
  )
}

function Eyebrow({ children, dark = false }) {
  return (
    <p className={`mb-[22px] inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase leading-none tracking-[0.12em] ${dark ? 'text-[#7DD3FC]' : 'text-[#0284C7]'}`}>
      <span className="h-[7px] w-[7px] bg-[#7DD3FC]" />
      {children}
    </p>
  )
}

function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full min-w-0 max-w-[100vw] px-5 md:max-w-[1280px] md:px-[clamp(20px,4vw,72px)] ${className}`}>{children}</div>
}

function AppIcon() {
  return (
    <svg className="h-9 w-9 text-[#050608]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" stroke="currentColor" strokeWidth="2" />
      <rect x="28" y="8" width="12" height="12" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="28" width="12" height="12" stroke="currentColor" strokeWidth="2" />
      <rect x="28" y="28" width="12" height="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function OrchestrationIcon() {
  return (
    <svg className="h-9 w-9 text-[#050608]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="10" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M14 22L20 13M14 26L20 35M28 13L34 22M28 35L34 26" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function HarnessIcon() {
  return (
    <svg className="h-9 w-9 text-[#050608]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6L39 12V23C39 32 33 39 24 43C15 39 9 32 9 23V12L24 6Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function CubeIcon() {
  return (
    <svg className="h-9 w-9 text-[#050608]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6L39 15V33L24 42L9 33V15L24 6Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 15L24 24L39 15M24 24V42" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function DataIcon() {
  return (
    <svg className="h-9 w-9 text-[#050608]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="12" rx="14" ry="6" stroke="currentColor" strokeWidth="2" />
      <path d="M10 12V36C10 39 16 42 24 42C32 42 38 39 38 36V12" stroke="currentColor" strokeWidth="2" />
      <path d="M10 24C10 27 16 30 24 30C32 30 38 27 38 24" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ArchRow({ icon, label, copy, focus = false }) {
  return (
    <div className={`grid min-h-[72px] gap-4 border px-5 py-5 md:grid-cols-[44px_170px_1fr] md:items-center md:gap-5 md:px-6 ${focus ? 'border-[#B9DBF0] bg-[#E0F7FF]' : 'border-[#AEB7C2] bg-[#FFFFFF]'}`}>
      {icon}
      <p className="font-mono text-[13px] font-bold uppercase leading-tight tracking-[0.04em] text-[#050608]">{label}</p>
      <p className="text-[15px] leading-[1.45] text-[#3B4148]">{copy}</p>
    </div>
  )
}

function ArchitectureStack() {
  return (
    <div className="relative min-h-[520px] w-full min-w-0 max-w-[calc(100vw-40px)] border border-[#AEB7C2] bg-white/75 p-4 shadow-[0_24px_80px_rgba(17,20,24,0.05)] md:max-w-full md:p-[22px]">
      <div className="absolute -left-20 top-[177px] hidden w-[68px] text-right font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#0284C7] xl:block">
        DORA systems layer
      </div>
      <div className="absolute -left-[34px] top-[110px] hidden h-[208px] w-6 border-y-2 border-l-2 border-[#7DD3FC] xl:block" />

      <div className="flex min-h-[58px] flex-wrap items-center justify-center gap-4 border border-[#AEB7C2] bg-[#FFFFFF] px-4 py-5 text-center font-mono text-[13px] font-bold uppercase tracking-[0.06em] text-[#050608] md:gap-6 md:px-6">
        <span>Enterprise Workflows</span>
        <span className="hidden gap-2.5 min-[440px]:flex" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className="relative h-[18px] w-[18px] rounded-full border-[1.5px] border-[#050608] after:absolute after:-left-1 after:top-4 after:h-3 after:w-6 after:rounded-b-2xl after:border-[1.5px] after:border-t-0 after:border-[#050608]" />
          ))}
        </span>
      </div>

      <div className="flex h-[22px] items-center justify-center font-mono text-2xl text-[#6F7782]" aria-hidden="true">↕</div>

      <div className="border-l-[3px] border-[#7DD3FC]">
        <ArchRow icon={<AppIcon />} label="Application Layer" copy="Interfaces, experiences, and outcomes built for real enterprise work." focus />
        <ArchRow icon={<OrchestrationIcon />} label="Orchestration Layer" copy="Parallel agents, routing, handoffs, and coordination across complex workflows." focus />
        <ArchRow icon={<HarnessIcon />} label="Harness Layer" copy="Evaluation, review, observability, and controls for reliable execution." focus />
      </div>

      <div className="flex h-[22px] items-center justify-center font-mono text-2xl text-[#6F7782]" aria-hidden="true">↕</div>
      <ArchRow icon={<CubeIcon />} label="Existing Model Layer" copy="Model-agnostic. DORA works with the best models available." />
      <div className="flex h-[22px] items-center justify-center font-mono text-2xl text-[#6F7782]" aria-hidden="true">↕</div>
      <ArchRow icon={<DataIcon />} label="Data / Infrastructure / Compute" copy="Not DORA's focus." />
    </div>
  )
}

function StackTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse border border-[#AEB7C2] bg-[#FFFFFF] text-[15px]">
        <thead>
          <tr>
            <th className="border-b border-[#DCE1E6] bg-[#FBFCFD] px-[22px] py-[17px] text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[#050608]">Layer</th>
            <th className="border-b border-[#DCE1E6] bg-[#FBFCFD] px-[22px] py-[17px] text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[#050608]">DORA's role</th>
          </tr>
        </thead>
        <tbody>
          {stackRows.map(([layer, role, focus]) => (
            <tr key={layer}>
              <td className={`border-b border-[#DCE1E6] px-[22px] py-[17px] align-top ${focus ? 'border-l-4 border-l-[#7DD3FC] bg-[#E0F7FF] font-semibold' : 'text-[#3B4148]'}`}>{layer}</td>
              <td className={`border-b border-[#DCE1E6] px-[22px] py-[17px] align-top ${focus ? 'bg-[#E0F7FF] font-semibold text-[#050608]' : 'text-[#3B4148]'}`}>{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MiniDiagram({ type }) {
  if (type === 'workflow') {
    return (
      <svg className="mt-8 h-[100px] w-full" viewBox="0 0 360 110" fill="none" aria-hidden="true">
        <path d="M24 55H84M118 55H172M208 55H260M296 55H336" stroke="#050608" strokeWidth="2" />
        <circle cx="24" cy="55" r="11" stroke="#050608" strokeWidth="2" />
        <rect x="84" y="43" width="34" height="24" stroke="#050608" strokeWidth="2" />
        <path d="M190 34L212 55L190 76L168 55L190 34Z" stroke="#050608" strokeWidth="2" />
        <rect x="260" y="43" width="34" height="24" stroke="#050608" strokeWidth="2" />
        <circle cx="336" cy="55" r="11" stroke="#050608" strokeWidth="2" />
      </svg>
    )
  }

  if (type === 'swarm') {
    return (
      <svg className="mt-8 h-[100px] w-full" viewBox="0 0 360 110" fill="none" aria-hidden="true">
        <circle cx="28" cy="55" r="10" stroke="#050608" strokeWidth="2" />
        <circle cx="332" cy="55" r="10" stroke="#050608" strokeWidth="2" />
        <path d="M38 55C92 18 150 18 202 32C246 44 282 52 322 55" stroke="#050608" strokeWidth="1.6" />
        <path d="M38 55C94 55 142 55 198 55C246 55 286 55 322 55" stroke="#050608" strokeWidth="1.6" />
        <path d="M38 55C92 92 150 92 202 78C246 66 282 58 322 55" stroke="#050608" strokeWidth="1.6" />
        <rect x="130" y="22" width="20" height="14" stroke="#050608" strokeWidth="1.5" />
        <rect x="168" y="48" width="20" height="14" fill="#E0F7FF" stroke="#0284C7" strokeWidth="1.5" />
        <rect x="130" y="74" width="20" height="14" stroke="#050608" strokeWidth="1.5" />
        <rect x="236" y="41" width="20" height="14" fill="#E0F7FF" stroke="#0284C7" strokeWidth="1.5" />
        <rect x="236" y="67" width="20" height="14" stroke="#050608" strokeWidth="1.5" />
      </svg>
    )
  }

  return (
    <div className="mt-8 border border-[#AEB7C2] p-[18px]">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#050608]">Role</p>
      <strong className="mb-3.5 mt-2 block">Financial Analyst</strong>
      <div className="grid gap-3.5 text-[13px] sm:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#0284C7]">Objective</p>
          Evaluate financial impact and risk
        </div>
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#0284C7]">Constraints</p>
          Company data · assumptions · uncertainty
        </div>
      </div>
    </div>
  )
}

function WorkflowTrace() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative grid gap-5 pt-6 lg:grid-cols-5">
      <div className="absolute left-[38px] right-[38px] top-9 hidden h-0.5 bg-[#DCE1E6] lg:block" aria-hidden="true" />
      <motion.div
        className="absolute left-[38px] right-[38px] top-9 hidden h-0.5 origin-left bg-gradient-to-r from-[#7DD3FC] to-[#0284C7] lg:block"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={reduceMotion ? {} : { scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      {traceSteps.map(([num, label, copy]) => (
        <div key={label} className="relative z-10">
          <div className="mb-[18px] flex h-7 w-7 items-center justify-center rounded-full border border-[#0284C7] bg-[#FFFFFF] font-mono text-[11px] font-bold text-[#050608]">{num}</div>
          <strong className="mb-2 block font-mono text-[11px] uppercase tracking-[0.07em] text-[#050608]">{label}</strong>
          <p className="text-sm leading-[1.45] text-[#3B4148]">{copy}</p>
        </div>
      ))}
    </div>
  )
}

function ExampleSystem() {
  const agents = ['Market agent', 'Customer agent', 'Financial agent', 'Legal agent', 'Operations agent']
  const checks = ['Compare assumptions', 'Flag uncertainty', 'Route conflicts', 'Review recommendation']

  return (
    <section className="border-b border-[#DCE1E6] bg-[#F7F8FA] py-[90px]">
      <Container className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
        <div>
          <Eyebrow>Example System</Eyebrow>
          <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">Strategic planning workflow.</h2>
        </div>

        <div className="grid min-h-[260px] gap-6 border border-[#AEB7C2] bg-[#FFFFFF] p-7 lg:grid-cols-[150px_1fr_230px_160px] lg:items-center">
          <div>
            <p className="mb-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#050608]">Input</p>
            <div className="flex min-h-24 items-center justify-center border border-[#AEB7C2] bg-white p-5 text-center text-sm font-semibold leading-[1.35]">Market expansion question</div>
          </div>
          <div>
            <p className="mb-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#050608]">Parallel Agents</p>
            <div className="grid gap-[7px]">
              {agents.map((agent) => (
                <div key={agent} className="flex min-h-9 items-center justify-between border border-[#AEB7C2] bg-white px-3 py-2 text-sm font-semibold">
                  {agent}
                  <span className="h-2.5 w-2.5 rounded-sm border border-[#0284C7] bg-[#7DD3FC]" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#050608]">Harness</p>
            <div className="min-h-[190px] border border-[#A8D5EC] bg-[#E0F7FF] p-5">
              <ul className="grid gap-3.5">
                {checks.map((check) => (
                  <li key={check} className="flex items-center gap-2.5 text-sm text-[#050608] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#0284C7]">{check}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="mb-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#050608]">Output</p>
            <div className="flex min-h-24 items-center justify-center border border-[#AEB7C2] bg-white p-5 text-center text-sm font-semibold leading-[1.35]">Leadership-ready decision brief</div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'DORA - Enterprise AI above the model layer'
  }, [])

  return (
    <div className="w-screen min-w-0 max-w-[100vw] overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.16),transparent_32rem),linear-gradient(180deg,#fff_0%,#F7F8FA_20%,#F7F8FA_100%)] text-[#050608]">
      <section className="border-b border-[#DCE1E6] py-[72px]">
        <Container className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:items-center lg:gap-[clamp(48px,6vw,96px)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 pt-6"
          >
            <Eyebrow>DORA Systems</Eyebrow>
            <h1 className="max-w-[calc(100vw-40px)] break-words text-[clamp(38px,10.5vw,108px)] font-bold leading-[0.94] tracking-[-0.06em] text-[#050608] md:max-w-[680px] md:tracking-[-0.075em]">
              Enterprise AI above the model layer.
            </h1>
            <p className="mt-[30px] max-w-[620px] text-[clamp(18px,1.6vw,22px)] leading-[1.42] text-[#3B4148]">
              DORA builds the application, orchestration, and harness layers that turn existing models into reliable systems for the workflows your organization depends on every day.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-[18px] gap-y-3 text-sm text-[#3B4148]">
              {['Coordinated workflows', 'Parallel agent swarms', 'Persona-based agents'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2.5 before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#7DD3FC]">{item}</span>
              ))}
            </div>
            <div className="mt-[30px] flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@dorareason.com">Talk to DORA</Button>
              <Button href="#how-it-works" variant="secondary">See how it works</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="min-w-0"
          >
            <ArchitectureStack />
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-[#DCE1E6]">
        <Container className="grid gap-10 py-[78px] lg:grid-cols-[0.75fr_1.25fr] lg:gap-[clamp(40px,7vw,110px)]">
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">Models are powerful. Systems are missing.</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
            <div className="space-y-5">
              <p className="text-[17px] leading-[1.62] text-[#3B4148]">Foundation models can generate, reason, and respond. But models alone do not make AI operational.</p>
              <p className="text-[17px] leading-[1.62] text-[#3B4148]">Enterprises need systems that understand context, coordinate across teams, execute multi-step work, and behave reliably in production environments.</p>
            </div>
            <p className="text-[17px] leading-[1.62] text-[#3B4148]"><strong className="font-semibold text-[#050608]">DORA builds the systems layer where AI becomes useful inside real organizations.</strong></p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#DCE1E6] bg-[linear-gradient(180deg,#F7F8FA,#fff)] py-[82px]">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(520px,1.2fr)] lg:gap-[clamp(50px,7vw,112px)]">
          <div>
            <Eyebrow>Built above the model layer</Eyebrow>
            <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">Built above the model layer.</h2>
          </div>
          <div>
            <p className="text-[17px] leading-[1.62] text-[#3B4148]"><strong className="font-semibold text-[#050608]">DORA is model-agnostic.</strong> We do not compete at the foundation model, compute, infrastructure, or generic data layers.</p>
            <p className="mt-[18px] text-[17px] leading-[1.62] text-[#3B4148]">We build where AI becomes operational: the application, orchestration, and harness layers.</p>
            <div className="mt-[34px]"><StackTable /></div>
          </div>
        </Container>
      </section>

      <section id="primitives" className="border-b border-[#DCE1E6] bg-[#FFFFFF] py-[90px]">
        <Container>
          <div className="mb-[42px] grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-[clamp(40px,7vw,110px)]">
            <div>
              <Eyebrow>Our Primitives</Eyebrow>
              <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">The operating primitives of reliable AI work.</h2>
            </div>
            <p className="text-[17px] leading-[1.62] text-[#3B4148]">DORA systems are built from three operating primitives: coordinated enterprise workflows, parallel agent swarms, and persona-based agents.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {primitives.map((primitive) => (
              <article key={primitive.title} className="flex min-h-[370px] flex-col justify-between border border-[#AEB7C2] bg-[#FFFFFF] p-7">
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#0284C7]">{primitive.label}</p>
                  <h3 className="mb-3.5 mt-[18px] text-[clamp(22px,2vw,30px)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#050608]">{primitive.title}</h3>
                  <p className="text-[15px] leading-[1.55] text-[#3B4148]">{primitive.copy}</p>
                </div>
                <MiniDiagram type={primitive.diagram} />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="border-b border-[#DCE1E6] bg-[#FFFFFF] py-[86px]">
        <Container>
          <div className="mb-[54px] grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[clamp(40px,6vw,92px)]">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">From prompts to systems.</h2>
            </div>
            <p className="text-[17px] leading-[1.62] text-[#3B4148]">Most organizations start with prompts. DORA helps them move to systems. A system has structure: workflows, agents, roles, personas, evaluations, handoffs, interfaces, and operating constraints.</p>
          </div>
          <WorkflowTrace />
        </Container>
      </section>

      <ExampleSystem />

      <section className="border-b border-[#DCE1E6] bg-[#FFFFFF] py-[90px]">
        <Container className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[clamp(42px,6vw,96px)]">
          <div>
            <Eyebrow>Reliability</Eyebrow>
            <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">Reliability is designed into the system.</h2>
          </div>
          <div className="grid border border-[#AEB7C2] bg-[#FFFFFF] sm:grid-cols-2">
            {[
              ['Observable', 'Systems expose how agents reason, route work, use context, and produce outputs.'],
              ['Evaluated', 'Outputs are reviewed against goals, constraints, and reliability requirements.'],
              ['Constrained', 'Agents operate within defined roles, permissions, context boundaries, and review paths.'],
              ['Deployable', 'Systems move from prototype to daily use with workflows that improve over time.'],
            ].map(([title, copy], index) => (
              <div key={title} className={`min-h-[145px] border-[#DCE1E6] p-7 ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < 2 ? 'border-b' : ''}`}>
                <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#050608]">{title}</p>
                <p className="text-sm leading-[1.5] text-[#3B4148]">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[radial-gradient(circle_at_right_center,rgba(125,211,252,0.14),transparent_34rem),#111418] py-[90px] text-[#F8FAFC]">
        <Container className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[clamp(42px,6vw,96px)]">
          <div>
            <Eyebrow dark>Our Approach</Eyebrow>
            <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em]">From research to deployed systems.</h2>
          </div>
          <div className="relative grid gap-10 pt-2 lg:grid-cols-3">
            <div className="absolute left-5 right-5 top-5 hidden h-px bg-gradient-to-r from-[#7DD3FC] to-[#0284C7] lg:block" />
            {[
              ['01 Research', 'We study how AI systems operate in real environments: coordination, persona design, workflow reliability, evaluation, and safe execution.'],
              ['02 Architecture', 'We map enterprise workflows into agent roles, operating constraints, handoffs, orchestration patterns, and evaluation loops.'],
              ['03 Deployment', 'We help organizations move from prototype to dependable use with harnesses, review paths, and workflows that improve over time.'],
            ].map(([title, copy]) => (
              <div key={title} className="relative z-10 pt-[38px] before:absolute before:left-0 before:top-[5px] before:h-7 before:w-7 before:rounded-full before:border before:border-[#7DD3FC] before:bg-[#111418]">
                <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#F8FAFC]">{title}</p>
                <p className="text-[15px] leading-[1.55] text-[#CBD5E1]">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="use-cases" className="border-b border-[#DCE1E6] bg-[#FFFFFF] py-[88px]">
        <Container className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[clamp(42px,6vw,96px)]">
          <div>
            <Eyebrow>Use Cases</Eyebrow>
            <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">For work that cannot rely on one-shot generation.</h2>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse border border-[#AEB7C2] bg-[#FFFFFF] text-[15px]">
              <thead>
                <tr>
                  <th className="border-b border-[#DCE1E6] bg-[#FBFCFD] px-[22px] py-[17px] text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[#050608]">Use case</th>
                  <th className="border-b border-[#DCE1E6] bg-[#FBFCFD] px-[22px] py-[17px] text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[#050608]">System behavior</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map(([title, copy]) => (
                  <tr key={title}>
                    <td className="border-b border-[#DCE1E6] px-[22px] py-[17px] align-top font-medium text-[#050608]">{title}</td>
                    <td className="border-b border-[#DCE1E6] px-[22px] py-[17px] align-top text-[#3B4148]">{copy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section id="research" className="border-b border-[#DCE1E6] bg-[#F7F8FA] py-[88px]">
        <Container className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-[clamp(42px,6vw,96px)]">
          <div>
            <Eyebrow>Research Agenda</Eyebrow>
            <h2 className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em] text-[#050608]">Research that becomes deployable systems.</h2>
          </div>
          <div>
            <p className="text-[17px] leading-[1.62] text-[#3B4148]">DORA's research focuses on how AI systems operate inside real environments: multi-agent coordination, persona design, orchestration patterns, workflow harnesses, evaluation, and reliability.</p>
            <p className="mt-[18px] text-[17px] leading-[1.62] text-[#3B4148]">Our research is judged by whether it becomes useful, measurable, and deployable inside real organizations.</p>
            <ul className="mt-7 border-t border-[#DCE1E6]">
              {agenda.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-[#DCE1E6] py-4 font-medium text-[#050608] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#0284C7]">{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-[radial-gradient(circle_at_left_bottom,rgba(125,211,252,0.17),transparent_30rem),#111418] py-[86px] text-[#F8FAFC]">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr_auto] lg:items-center">
          <div>
            <Eyebrow dark>Get Started</Eyebrow>
            <h2 className="max-w-[620px] text-[clamp(34px,4.6vw,68px)] font-bold leading-[0.98] tracking-[-0.06em]">Build enterprise AI above the model layer.</h2>
          </div>
          <p className="max-w-[480px] text-[17px] leading-[1.62] text-[#CBD5E1]">Move beyond AI pilots and into systems your organization can evaluate, improve, and rely on.</p>
          <a href="mailto:hello@dorareason.com" className="inline-flex min-h-[42px] min-w-[180px] items-center justify-center gap-2.5 border border-[#FFFFFF] bg-[#FFFFFF] px-[18px] text-sm font-semibold leading-none text-[#050608] transition duration-150 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7DD3FC]">
            Talk to DORA
            <ArrowIcon />
          </a>
        </Container>
      </section>
    </div>
  )
}
