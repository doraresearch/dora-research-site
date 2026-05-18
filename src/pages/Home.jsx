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

const agents = ['Market agent', 'Customer agent', 'Financial agent', 'Legal agent', 'Operations agent']
const harnessChecks = ['Compare assumptions', 'Flag uncertainty', 'Route conflicts', 'Review recommendation']

const reliability = [
  ['Observable', 'Systems expose how agents reason, route work, use context, and produce outputs.'],
  ['Evaluated', 'Outputs are reviewed against goals, constraints, and reliability requirements.'],
  ['Constrained', 'Agents operate within defined roles, permissions, context boundaries, and review paths.'],
  ['Deployable', 'Systems move from prototype to daily use with workflows that improve over time.'],
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
    ? 'border-[#DCE1E6] bg-white text-[#050608] hover:border-[#AEB7C2] hover:bg-[#EEF1F4]'
    : 'border-[#111418] bg-[#111418] text-[#F8FAFC] hover:-translate-y-px hover:bg-[#050608]'

  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2.5 border px-5 text-[15px] font-semibold leading-none transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7DD3FC] ${classes}`}>
      {children}
      <ArrowIcon />
    </a>
  )
}

function Eyebrow({ children, dark = false }) {
  return (
    <p className={`mb-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase leading-none tracking-[0.14em] ${dark ? 'text-[#7DD3FC]' : 'text-[#0284C7]'}`}>
      <span className="h-1.5 w-1.5 bg-[#7DD3FC]" />
      {children}
    </p>
  )
}

function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full min-w-0 max-w-[100vw] px-5 md:max-w-[1440px] md:px-10 xl:px-14 ${className}`}>{children}</div>
}

function SectionHeading({ eyebrow, title, copy, dark = false, className = '' }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`max-w-[calc(100vw-40px)] break-words text-[clamp(40px,5.2vw,80px)] font-bold leading-[0.94] tracking-[-0.065em] md:max-w-none ${dark ? 'text-[#F8FAFC]' : 'text-[#050608]'}`}>
        {title}
      </h2>
      {copy ? <p className={`mt-6 max-w-2xl text-[18px] leading-[1.58] ${dark ? 'text-[#CBD5E1]' : 'text-[#3B4148]'}`}>{copy}</p> : null}
    </div>
  )
}

function ArchitectureArtifact() {
  const reduceMotion = useReducedMotion()
  const layers = [
    ['Application', 'Interfaces, work surfaces, outcomes'],
    ['Orchestration', 'Parallel agents, roles, handoffs'],
    ['Harness', 'Evaluation, review, deployment controls'],
  ]

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      className="relative overflow-hidden border border-[#AEB7C2] bg-white shadow-[0_28px_90px_rgba(17,20,24,0.07)]"
      aria-label="DORA stack flow harness architecture"
    >
      <div className="grid border-b border-[#DCE1E6] bg-[#FBFCFD] px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#6F7782] md:grid-cols-[1fr_auto] md:px-7">
        <span>Stack + Flow + Harness</span>
        <span className="hidden text-[#0284C7] md:block">Above the model layer</span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.86fr_1.42fr_0.92fr]">
        <div className="border-b border-[#DCE1E6] p-5 md:p-7 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-[#050608]">Enterprise workflow</p>
          <div className="mt-6 grid gap-3">
            {['Question', 'Context', 'Constraints', 'Review path'].map((item, index) => (
              <div key={item} className="group flex items-center gap-3">
                <span className={`h-2.5 w-2.5 border ${index === 0 ? 'border-[#0284C7] bg-[#7DD3FC]' : 'border-[#AEB7C2] bg-white'}`} />
                <span className="text-[15px] font-medium text-[#3B4148]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 hidden h-[180px] border-l border-[#DCE1E6] pl-5 lg:block">
            <div className="h-full border-l-2 border-[#7DD3FC]" />
          </div>
        </div>

        <div className="relative border-b border-[#DCE1E6] p-5 md:p-7 lg:border-b-0 lg:border-r">
          <div className="absolute left-7 top-7 hidden h-[calc(100%-56px)] w-5 border-y-2 border-l-2 border-[#7DD3FC] lg:block" aria-hidden="true" />
          <div className="pl-0 lg:pl-11">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-[#0284C7]">DORA systems layer</p>
              <p className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-[#6F7782] sm:block">Application / Orchestration / Harness</p>
            </div>
            <div className="grid border border-[#7DD3FC]/70 bg-[#E0F7FF]">
              {layers.map(([label, copy], index) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                  animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="grid min-h-[108px] gap-3 border-b border-[#7DD3FC]/35 p-5 last:border-b-0 md:grid-cols-[170px_1fr] md:items-center md:p-6"
                >
                  <div>
                    <p className="font-mono text-[13px] font-bold uppercase tracking-[0.08em] text-[#050608]">{label}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#0284C7]">Layer 0{index + 1}</p>
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[#3B4148]">{copy}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="border border-[#AEB7C2] bg-white p-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#050608]">Model layer</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3B4148]">Existing models. Model-agnostic.</p>
              </div>
              <div className="border border-[#DCE1E6] bg-[#F7F8FA] p-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#6F7782]">Data / Infra / Compute</p>
                <p className="mt-2 text-sm leading-relaxed text-[#6F7782]">Visible, but not DORA's focus.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-7">
          <p className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-[#050608]">Harness control</p>
          <div className="mt-6 border border-[#AEB7C2]">
            {['Observable', 'Evaluated', 'Constrained', 'Deployable'].map((item, index) => (
              <div key={item} className="flex items-center justify-between border-b border-[#DCE1E6] px-4 py-4 last:border-b-0">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#050608]">{item}</span>
                <span className={`h-2.5 w-2.5 ${index < 3 ? 'bg-[#7DD3FC]' : 'border border-[#0284C7] bg-white'}`} />
              </div>
            ))}
          </div>
          <div className="mt-7 grid gap-2">
            {agents.slice(0, 4).map((agent) => (
              <div key={agent} className="flex items-center gap-3 text-sm text-[#3B4148]">
                <span className="h-px flex-1 bg-[#DCE1E6]" />
                <span className="whitespace-nowrap">{agent}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StackTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse border border-[#AEB7C2] bg-white text-[16px]">
        <thead>
          <tr>
            <th className="border-b border-[#DCE1E6] bg-[#FBFCFD] px-6 py-5 text-left font-mono text-[11px] uppercase tracking-[0.12em] text-[#050608]">Layer</th>
            <th className="border-b border-[#DCE1E6] bg-[#FBFCFD] px-6 py-5 text-left font-mono text-[11px] uppercase tracking-[0.12em] text-[#050608]">DORA's role</th>
          </tr>
        </thead>
        <tbody>
          {stackRows.map(([layer, role, focus]) => (
            <tr key={layer}>
              <td className={`border-b border-[#DCE1E6] px-6 py-5 align-top ${focus ? 'border-l-4 border-l-[#7DD3FC] bg-[#E0F7FF] font-semibold text-[#050608]' : 'text-[#3B4148]'}`}>{layer}</td>
              <td className={`border-b border-[#DCE1E6] px-6 py-5 align-top ${focus ? 'bg-[#E0F7FF] font-semibold text-[#050608]' : 'text-[#3B4148]'}`}>{role}</td>
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
      <svg className="mt-10 h-[130px] w-full" viewBox="0 0 420 130" fill="none" aria-hidden="true">
        <path d="M28 65H116M154 65H240M278 65H392" stroke="#050608" strokeWidth="2" />
        <circle cx="28" cy="65" r="13" stroke="#050608" strokeWidth="2" />
        <rect x="116" y="49" width="38" height="32" stroke="#050608" strokeWidth="2" />
        <path d="M259 40L284 65L259 90L234 65L259 40Z" fill="#E0F7FF" stroke="#0284C7" strokeWidth="2" />
        <circle cx="392" cy="65" r="13" stroke="#050608" strokeWidth="2" />
      </svg>
    )
  }

  if (type === 'swarm') {
    return (
      <svg className="mt-10 h-[130px] w-full" viewBox="0 0 420 130" fill="none" aria-hidden="true">
        <circle cx="34" cy="65" r="12" stroke="#050608" strokeWidth="2" />
        <rect x="350" y="45" width="42" height="40" fill="#E0F7FF" stroke="#0284C7" strokeWidth="2" />
        <path d="M48 65C110 20 188 19 252 41C291 54 318 62 350 65" stroke="#050608" strokeWidth="1.7" />
        <path d="M48 65C128 65 240 65 350 65" stroke="#050608" strokeWidth="1.7" />
        <path d="M48 65C110 110 188 111 252 89C291 76 318 68 350 65" stroke="#050608" strokeWidth="1.7" />
        <rect x="150" y="24" width="24" height="16" stroke="#050608" strokeWidth="1.5" />
        <rect x="190" y="57" width="24" height="16" stroke="#050608" strokeWidth="1.5" />
        <rect x="150" y="90" width="24" height="16" stroke="#050608" strokeWidth="1.5" />
      </svg>
    )
  }

  return (
    <div className="mt-10 border border-[#AEB7C2] p-5">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#050608]">Persona specification</p>
      <strong className="mb-5 mt-3 block text-xl tracking-[-0.03em]">Financial analyst</strong>
      <div className="grid gap-4 text-[14px] text-[#3B4148] sm:grid-cols-2">
        <div>
          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#0284C7]">Objective</p>
          Evaluate financial impact and risk
        </div>
        <div>
          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#0284C7]">Constraints</p>
          Data, assumptions, uncertainty
        </div>
      </div>
    </div>
  )
}

function WorkflowTrace() {
  return (
    <div className="relative grid gap-5 lg:grid-cols-5">
      <div className="absolute left-12 right-12 top-[21px] hidden h-px bg-[#DCE1E6] lg:block" aria-hidden="true" />
      <div className="absolute left-12 top-[21px] hidden h-px w-[calc(75%-3rem)] bg-[#7DD3FC] lg:block" aria-hidden="true" />
      {traceSteps.map(([num, label, copy]) => (
        <div key={label} className="relative z-10 border border-[#DCE1E6] bg-white p-5 lg:border-0 lg:bg-transparent lg:p-0">
          <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[#0284C7] bg-white font-mono text-[12px] font-bold text-[#050608]">{num}</div>
          <strong className="mb-2 block font-mono text-[12px] uppercase tracking-[0.09em] text-[#050608]">{label}</strong>
          <p className="text-[15px] leading-[1.5] text-[#3B4148]">{copy}</p>
        </div>
      ))}
    </div>
  )
}

function ExampleArtifact() {
  return (
    <div className="border border-[#AEB7C2] bg-white p-5 md:p-7">
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#DCE1E6] pb-5 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#0284C7]">Proof artifact</p>
          <h3 className="mt-3 text-[clamp(30px,3.5vw,54px)] font-bold leading-[0.96] tracking-[-0.055em] text-[#050608]">Example system: Strategic planning workflow.</h3>
        </div>
        <p className="max-w-xl text-[17px] leading-[1.55] text-[#3B4148]">
          A strategic planning workflow can run specialized agents in parallel, route conflicts through a harness, and produce a leadership-ready recommendation.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[190px_1fr_300px_210px] xl:items-center">
        <div>
          <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#050608]">Input</p>
          <div className="flex min-h-[122px] items-center justify-center border border-[#AEB7C2] bg-[#FBFCFD] p-5 text-center text-[16px] font-semibold leading-[1.25] text-[#050608]">
            Market expansion question
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#050608]">Parallel agents</p>
          <div className="relative grid gap-3">
            <div className="absolute bottom-0 right-5 top-0 hidden w-px bg-[#7DD3FC] md:block" aria-hidden="true" />
            {agents.map((agent, index) => (
              <div key={agent} className="group relative flex min-h-12 items-center justify-between border border-[#AEB7C2] bg-white px-4 text-[15px] font-semibold text-[#050608] transition duration-150 hover:border-[#0284C7] hover:bg-[#E0F7FF]">
                <span>{agent}</span>
                <span className="flex items-center gap-3">
                  <span className="hidden h-px w-16 bg-[#DCE1E6] transition-colors duration-150 group-hover:bg-[#0284C7] md:block" />
                  <span className={`h-2.5 w-2.5 border border-[#0284C7] ${index < 3 ? 'bg-[#7DD3FC]' : 'bg-white'}`} />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#050608]">Harness</p>
          <div className="min-h-[244px] border-2 border-[#7DD3FC] bg-[#E0F7FF] p-5">
            <ul className="grid gap-5">
              {harnessChecks.map((check) => (
                <li key={check} className="flex items-center gap-3 text-[16px] font-medium text-[#050608]">
                  <span className="h-2.5 w-2.5 bg-[#0284C7]" />
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#050608]">Output</p>
          <div className="flex min-h-[122px] items-center justify-center border border-[#AEB7C2] bg-[#111418] p-5 text-center text-[16px] font-semibold leading-[1.25] text-[#F8FAFC]">
            Leadership-ready decision brief
          </div>
        </div>
      </div>
    </div>
  )
}

function ReliabilityHarness() {
  return (
    <div className="grid border border-[#AEB7C2] bg-white md:grid-cols-[0.55fr_1.45fr]">
      <div className="border-b border-[#DCE1E6] p-6 md:border-b-0 md:border-r md:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#0284C7]">Harness framework</p>
        <h3 className="mt-4 text-[clamp(30px,3.4vw,52px)] font-bold leading-[0.96] tracking-[-0.055em] text-[#050608]">Reliability is designed into the system.</h3>
        <p className="mt-5 text-[17px] leading-[1.56] text-[#3B4148]">
          Reliable AI is not just better output. It is the ability to observe, evaluate, constrain, and improve how AI behaves inside real workflows.
        </p>
      </div>
      <div className="grid sm:grid-cols-2">
        {reliability.map(([title, copy], index) => (
          <div key={title} className={`min-h-[180px] border-[#DCE1E6] p-6 md:p-8 ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < 2 ? 'border-b' : ''}`}>
            <p className="mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-[#050608]">{title}</p>
            <p className="text-[15px] leading-[1.55] text-[#3B4148]">{copy}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DarkPipeline() {
  const stages = [
    ['Research', 'We study how AI systems operate in real environments: coordination, persona design, workflow reliability, evaluation, and safe execution.'],
    ['Architecture', 'We map enterprise workflows into agent roles, operating constraints, handoffs, orchestration patterns, and evaluation loops.'],
    ['Deployment', 'We help organizations move from prototype to dependable use with harnesses, review paths, and workflows that improve over time.'],
  ]

  return (
    <section className="bg-[#111418] py-24 text-[#F8FAFC] md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <SectionHeading
            eyebrow="Our Approach"
            title="From research to deployed systems."
            copy="DORA works with organizations to move from AI ambition to operational systems."
            dark
          />
          <div className="relative pt-3">
            <div className="absolute left-5 right-5 top-[31px] hidden h-px bg-[#7DD3FC] lg:block" aria-hidden="true" />
            <div className="grid gap-8 lg:grid-cols-3">
              {stages.map(([title, copy], index) => (
                <div key={title} className="relative z-10 border border-[#F8FAFC]/16 bg-[#151A1F] p-6 lg:border-0 lg:bg-transparent lg:p-0 lg:pt-14">
                  <div className="mb-7 flex h-11 w-11 items-center justify-center border border-[#7DD3FC] bg-[#111418] font-mono text-[12px] font-bold text-[#F8FAFC]">{String(index + 1).padStart(2, '0')}</div>
                  <p className="mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-[#F8FAFC]">{title}</p>
                  <p className="text-[16px] leading-[1.62] text-[#CBD5E1]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function UseCaseTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse border border-[#AEB7C2] bg-white text-[16px]">
        <thead>
          <tr>
            <th className="w-[30%] border-b border-[#DCE1E6] bg-[#FBFCFD] px-6 py-5 text-left font-mono text-[11px] uppercase tracking-[0.12em] text-[#050608]">Use case</th>
            <th className="border-b border-[#DCE1E6] bg-[#FBFCFD] px-6 py-5 text-left font-mono text-[11px] uppercase tracking-[0.12em] text-[#050608]">System behavior</th>
          </tr>
        </thead>
        <tbody>
          {useCases.map(([title, copy]) => (
            <tr key={title}>
              <td className="border-b border-[#DCE1E6] px-6 py-5 align-top font-semibold text-[#050608]">{title}</td>
              <td className="border-b border-[#DCE1E6] px-6 py-5 align-top leading-[1.55] text-[#3B4148]">{copy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'DORA - Enterprise AI above the model layer'
  }, [])

  return (
    <div className="w-screen min-w-0 max-w-[100vw] overflow-hidden bg-[#F7F8FA] text-[#050608] [&_*]:min-w-0">
      <section className="border-b border-[#DCE1E6] bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.18),transparent_34rem),linear-gradient(180deg,#FFFFFF_0%,#F7F8FA_100%)] pt-16 md:pt-20">
        <Container className="pb-16 md:pb-24">
          <div className="grid gap-10 xl:grid-cols-[0.95fr_0.75fr] xl:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>DORA Systems</Eyebrow>
              <h1 className="max-w-5xl text-[clamp(58px,9.2vw,140px)] font-bold leading-[0.88] tracking-[-0.082em] text-[#050608]">
                Enterprise AI above the model layer.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="max-w-2xl xl:pb-2"
            >
              <p className="text-[clamp(20px,2.1vw,28px)] font-medium leading-[1.35] tracking-[-0.025em] text-[#3B4148]">
                DORA builds the application, orchestration, and harness layers that turn existing models into reliable systems for the workflows your organization depends on every day.
              </p>
              <p className="mt-6 font-mono text-[12px] font-bold uppercase leading-relaxed tracking-[0.12em] text-[#050608]">
                Coordinated workflows. Parallel agent swarms. Persona-based agents.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="mailto:hello@dorareason.com">Talk to DORA</Button>
                <Button href="#how-it-works" variant="secondary">See how it works</Button>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 md:mt-16">
            <ArchitectureArtifact />
          </div>
        </Container>
      </section>

      <section className="border-b border-[#DCE1E6] bg-[#F7F8FA] py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="The Position" title="Models are powerful. Systems are missing." />
              <div className="mt-10 grid gap-5 border-l-2 border-[#7DD3FC] pl-6">
                <p className="text-[19px] leading-[1.62] text-[#3B4148]">Foundation models can generate, reason, and respond. But models alone do not make AI operational.</p>
                <p className="text-[19px] leading-[1.62] text-[#3B4148]">Enterprises need systems that understand context, coordinate across teams, execute multi-step work, and behave reliably in production environments.</p>
                <p className="text-[19px] font-semibold leading-[1.62] text-[#050608]">DORA builds the systems layer where AI becomes useful inside real organizations.</p>
              </div>
            </div>
            <div>
              <p className="mb-6 max-w-2xl text-[18px] leading-[1.62] text-[#3B4148]">
                <strong className="font-semibold text-[#050608]">DORA is model-agnostic.</strong> We do not compete at the foundation model, compute, infrastructure, or generic data layers. We build where AI becomes operational: the application, orchestration, and harness layers.
              </p>
              <p className="mb-8 max-w-2xl text-[16px] leading-[1.62] text-[#3B4148]">
                DORA does not build foundation models, data infrastructure, compute platforms, or generic AI infrastructure.
              </p>
              <StackTable />
            </div>
          </div>
        </Container>
      </section>

      <section id="primitives" className="border-b border-[#DCE1E6] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_0.85fr] lg:items-end">
            <SectionHeading eyebrow="Operating Model" title="The operating primitives of reliable AI work." />
            <p className="text-[19px] leading-[1.58] text-[#3B4148]">DORA systems are built from three operating primitives: coordinated enterprise workflows, parallel agent swarms, and persona-based agents.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {primitives.map((primitive) => (
              <article key={primitive.title} className="flex min-h-[460px] flex-col justify-between border border-[#AEB7C2] bg-white p-6 md:p-8">
                <div>
                  <p className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-[#0284C7]">{primitive.label}</p>
                  <h3 className="mb-4 mt-6 text-[clamp(26px,2.2vw,36px)] font-bold leading-[0.98] tracking-[-0.05em] text-[#050608]">{primitive.title}</h3>
                  <p className="text-[16px] leading-[1.6] text-[#3B4148]">{primitive.copy}</p>
                </div>
                <MiniDiagram type={primitive.diagram} />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="border-b border-[#DCE1E6] bg-[#F7F8FA] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionHeading eyebrow="From prompt to system" title="From prompts to systems." />
            <p className="text-[19px] leading-[1.58] text-[#3B4148]">
              Most organizations start with prompts. DORA helps them move to systems. A system has structure: workflows, agents, roles, personas, evaluations, handoffs, interfaces, and operating constraints.
            </p>
          </div>
          <WorkflowTrace />
          <div className="mt-16">
            <ExampleArtifact />
          </div>
          <div className="mt-10">
            <ReliabilityHarness />
          </div>
        </Container>
      </section>

      <DarkPipeline />

      <section id="use-cases" className="border-b border-[#DCE1E6] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="Use Cases" title="For work that cannot rely on one-shot generation." />
            <p className="text-[19px] leading-[1.58] text-[#3B4148]">DORA is designed for workflows where context, coordination, and reliability matter more than one-off output.</p>
          </div>
          <UseCaseTable />
          <div id="research" className="mt-14 grid gap-8 border-t border-[#DCE1E6] pt-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <Eyebrow>Research Agenda</Eyebrow>
              <h2 className="max-w-3xl text-[clamp(38px,4.4vw,68px)] font-bold leading-[0.96] tracking-[-0.06em] text-[#050608]">Research that becomes deployable systems.</h2>
            </div>
            <div>
              <p className="text-[18px] leading-[1.62] text-[#3B4148]">DORA's research focuses on how AI systems operate inside real environments: multi-agent coordination, persona design, orchestration patterns, workflow harnesses, evaluation, and reliability.</p>
              <p className="mt-5 text-[18px] leading-[1.62] text-[#3B4148]">Our research is judged by whether it becomes useful, measurable, and deployable inside real organizations.</p>
              <ul className="mt-8 grid border-t border-[#DCE1E6] sm:grid-cols-2">
                {agenda.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-[#DCE1E6] py-5 font-medium text-[#050608] before:h-2 before:w-2 before:bg-[#0284C7] sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-[#111418] py-20 text-[#F8FAFC] md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow dark>Build with DORA</Eyebrow>
              <h2 className="max-w-5xl text-[clamp(50px,7vw,112px)] font-bold leading-[0.9] tracking-[-0.075em] text-[#F8FAFC]">Build enterprise AI above the model layer.</h2>
              <p className="mt-7 max-w-2xl text-[20px] leading-[1.52] text-[#CBD5E1]">Move beyond AI pilots and into systems your organization can evaluate, improve, and rely on.</p>
            </div>
            <a href="mailto:hello@dorareason.com" className="inline-flex min-h-14 min-w-[210px] items-center justify-center gap-2.5 border border-white bg-white px-6 text-[15px] font-semibold leading-none text-[#050608] transition duration-150 hover:-translate-y-px hover:bg-[#E0F7FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7DD3FC]">
              Talk to DORA
              <ArrowIcon />
            </a>
          </div>
          <div className="mt-14 grid max-w-3xl grid-cols-4 gap-3" aria-hidden="true">
            <span className="h-3 border border-[#F8FAFC]/28" />
            <span className="h-3 border border-[#7DD3FC] bg-[#7DD3FC]/18" />
            <span className="h-3 border border-[#7DD3FC] bg-[#7DD3FC]/18" />
            <span className="h-3 border border-[#F8FAFC]/28" />
          </div>
        </Container>
      </section>
    </div>
  )
}
