import { useEffect } from 'react'
import { motion } from 'framer-motion'

const stackLayers = [
  { layer: 'Enterprise Workflows', role: 'Daily work, teams, approvals, handoffs, and decisions.', status: 'Outcome' },
  { layer: 'DORA Application Layer', role: 'Workflow-specific AI systems for real enterprise work.', status: 'Core focus' },
  { layer: 'DORA Orchestration Layer', role: 'Parallel agent swarms, routing, handoffs, and coordination.', status: 'Core focus' },
  { layer: 'DORA Harness Layer', role: 'Evaluations, constraints, observability, and deployment controls.', status: 'Core focus' },
  { layer: 'Existing Model Layer', role: 'Foundation models selected by task, risk, and fit.', status: 'Model-agnostic' },
  { layer: 'Data / Infrastructure / Compute', role: 'Data platforms, cloud infrastructure, storage, and compute.', status: 'Not our focus' },
]

const stackTable = [
  ['Application layer', 'Core focus'],
  ['Orchestration layer', 'Core focus'],
  ['Harness layer', 'Core focus'],
  ['Model layer', 'Model-agnostic'],
  ['Data layer', 'Not our focus'],
  ['Infrastructure', 'Not our focus'],
  ['Compute', 'Not our focus'],
]

const primitives = [
  {
    title: 'Coordinated enterprise workflows',
    body: 'AI systems should follow the shape of real work. DORA coordinates agents across workflows, tasks, approvals, handoffs, knowledge flows, and decision points. Each system can be customized to how an organization actually operates, rather than forcing teams into generic AI tools.',
    cue: 'workflow',
  },
  {
    title: 'Parallel agent swarms',
    body: 'Important work rarely moves in a straight line. DORA uses multiple agents working in parallel to reason, compare, verify, and execute across different paths at once. Swarms improve coverage, depth, and robustness on complex work.',
    cue: 'swarm',
  },
  {
    title: 'Persona-based agents',
    body: 'Every agent should not think the same way. DORA gives agents distinct roles, objectives, reasoning styles, constraints, and operating context. Personas make agent systems more controllable, interpretable, and useful for specialized work.',
    cue: 'persona',
  },
]

const workflowSteps = [
  ['01 / WORKFLOW', 'Start with the enterprise workflow'],
  ['02 / ROLES', 'Define agent roles and responsibilities'],
  ['03 / PERSONAS', 'Assign personas and operating constraints'],
  ['04 / ORCHESTRATION', 'Run agents in parallel through orchestration'],
  ['05 / HARNESS', 'Evaluate, refine, and deploy'],
]

const reliabilityPoints = [
  ['Observable', 'Systems should expose how agents reason, route work, use context, and produce outputs.'],
  ['Evaluated', "Outputs should be reviewed against the workflow's goals, constraints, and reliability requirements."],
  ['Constrained', 'Agents should operate within defined roles, permissions, context boundaries, and review paths.'],
  ['Deployable', 'Systems should move from prototype to daily use with workflows that can improve over time.'],
]

const services = [
  ['Research', 'We study how AI systems operate in real environments: coordination, persona design, workflow reliability, evaluation, and safe execution.'],
  ['System architecture', 'We map enterprise workflows into agent roles, operating constraints, handoffs, orchestration patterns, and evaluation loops.'],
  ['Deployment', 'We help organizations move from prototype to dependable use with harnesses, review paths, and workflows that improve over time.'],
]

const useCases = [
  ['Executive decision support', 'Coordinate agents across market, financial, operational, legal, and customer perspectives to support complex decisions.'],
  ['Enterprise research and analysis', 'Run parallel research workflows that gather, compare, challenge, and synthesize information across domains.'],
  ['Operational command workflows', 'Coordinate recurring operational work through agents, handoffs, evaluations, and escalation paths.'],
  ['Customer intelligence', 'Analyze customer needs, objections, behavior, and opportunities through role-specific agents.'],
  ['Compliance-sensitive workflows', 'Add review, traceability, and constraints to workflows where accuracy and accountability matter.'],
  ['Multi-agent task execution', 'Break complex work into specialized roles that can reason, verify, and produce coordinated outputs.'],
]

function Section({ id, label, title, children, dark = false, field = false }) {
  const background = dark ? 'bg-[#111412] text-[#F7F4ED]' : field ? 'bg-[#EEF2E8] text-[#101310]' : 'bg-[#F7F4ED] text-[#101310]'
  const border = dark ? 'border-[#F7F4ED]/14' : 'border-[#101310]/12'
  const labelColor = dark ? 'text-[#DDE8D2]/80' : 'text-[#6B7568]'

  return (
    <section id={id} className={`border-t ${border} ${background}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className={`mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${labelColor}`}>
              {label}
            </p>
            <h2 className="max-w-[12ch] font-sans text-[clamp(36px,5vw,64px)] font-semibold leading-[1.02]">
              {title}
            </h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4">
      <path d="M3 9h11M9.5 4.5 14 9l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}

function PrimaryButton({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-3 border border-[#101310]/12 bg-[#DDE8D2] px-6 text-sm font-semibold text-[#101310] transition-colors duration-150 hover:bg-[#C9DABC] ${className}`}
    >
      {children}
      <ArrowIcon />
    </a>
  )
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center gap-3 border border-[#101310]/16 bg-[#FBFAF5] px-6 text-sm font-semibold text-[#101310] transition-colors duration-150 hover:bg-[#EEF2E8]"
    >
      {children}
      <ArrowIcon />
    </a>
  )
}

function StackDiagram({ compact = false }) {
  return (
    <figure className="min-w-0 overflow-hidden border border-[#101310]/12 bg-[#FBFAF5] p-4 md:p-5" aria-label="DORA AI stack diagram">
      <div className="mb-4 flex items-start justify-between gap-4 border-b border-[#101310]/12 pb-3">
        <figcaption className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">
          FIG 1 / ABOVE THE MODEL LAYER
        </figcaption>
        <p className="hidden max-w-[18ch] text-right font-mono text-[10px] uppercase tracking-[0.12em] text-[#4F564D] sm:block">
          Application / orchestration / harness
        </p>
      </div>
      <div className="space-y-2">
        {stackLayers.map((item, index) => {
          const isDora = item.layer.startsWith('DORA')
          const isBelow = index >= 4
          return (
            <div
              key={item.layer}
              className={`grid min-w-0 gap-3 overflow-hidden border p-4 ${compact ? '' : 'md:grid-cols-[1fr_auto] md:items-center'} ${
                isDora
                  ? 'border-[#101310]/18 bg-[#DDE8D2] text-[#101310]'
                  : isBelow
                    ? 'border-[#101310]/12 bg-[#F7F4ED] text-[#4F564D]'
                    : 'border-[#101310]/12 bg-[#101310] text-[#F7F4ED]'
              }`}
            >
              <div className="min-w-0">
                <p className="break-words font-sans text-[15px] font-semibold">{item.layer}</p>
                <p className={`mt-1 max-w-[17rem] break-words text-sm leading-relaxed sm:max-w-none ${isDora ? 'text-[#4F564D]' : 'text-current opacity-75'}`}>{item.role}</p>
              </div>
              <span
                className={`w-fit border px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] ${
                  isDora ? 'border-[#101310]/20 text-[#4F564D]' : 'border-current/20 text-current'
                }`}
              >
                {item.status}
              </span>
            </div>
          )
        })}
      </div>
    </figure>
  )
}

function PrimitiveCue({ type }) {
  if (type === 'workflow') {
    return (
      <div className="grid grid-cols-[1fr_28px_1fr_28px_1fr] items-center">
        {['Intake', 'Review', 'Decision'].map((label, index) => (
          <div key={label} className="contents">
            <div className="border border-[#101310]/12 bg-[#EEF2E8] px-3 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#4F564D]">
              {label}
            </div>
            {index < 2 && <div className="h-px bg-[#101310]/24" />}
          </div>
        ))}
      </div>
    )
  }

  if (type === 'swarm') {
    return (
      <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-2">
        {['Research', 'Legal', 'Ops'].map((label) => (
          <div key={label} className="border border-[#101310]/12 bg-[#111412] px-3 py-4 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-[#F7F4ED]">
            {label}
          </div>
        ))}
        <div className="border border-[#101310]/12 bg-[#DDE8D2] px-3 py-4 font-mono text-[10px] uppercase tracking-[0.1em] text-[#4F564D]">
          Synthesis
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-2">
      {['Strategy persona', 'Research persona', 'Compliance persona'].map((label) => (
        <div key={label} className="flex items-center justify-between border border-[#101310]/12 bg-[#EEF2E8] px-3 py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4F564D]">{label}</span>
          <span className="h-2 w-2 bg-[#B8C7A8]" />
        </div>
      ))}
    </div>
  )
}

function MiniWorkflowVisual() {
  return (
    <div className="mt-12 border border-[#101310]/12 bg-[#EEF2E8] p-5">
      <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">
        FIG 2 / WORKFLOW ROUTING
      </p>
      <div className="grid gap-4 md:grid-cols-[1fr_1.2fr_1fr] md:items-center">
        <div className="border border-[#101310]/18 bg-[#FBFAF5] p-5">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">Enterprise workflow</p>
          <p className="mt-4 text-lg font-semibold leading-tight">Context, approvals, teams, systems, decisions</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Research', 'Review', 'Operate', 'Verify', 'Decide', 'Route'].map((node) => (
            <div key={node} className="border border-[#101310]/14 bg-[#101310] px-3 py-4 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-[#F7F4ED]">
              {node}
            </div>
          ))}
        </div>
        <div className="border border-[#101310]/18 bg-[#DDE8D2] p-5">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#4F564D]">Reliable system</p>
          <p className="mt-4 text-lg font-semibold leading-tight">Observable, constrained, role-aware, deployable</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'DORA Research - Enterprise AI above the model layer'
  }, [])

  return (
    <div className="bg-[#F7F4ED] text-[#101310]">
      <section className="border-b border-[#101310]/12 bg-[#F7F4ED] text-[#101310]">
        <div className="mx-auto grid min-h-[88vh] max-w-6xl min-w-0 items-center gap-12 px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-7 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">
              ABOVE THE MODEL LAYER
            </p>
            <h1 className="max-w-[8.8ch] font-sans text-[clamp(48px,7vw,88px)] font-semibold leading-[0.98] sm:max-w-[12ch]">
              Enterprise AI above the model layer.
            </h1>
            <p className="mt-8 max-w-[20rem] text-[22px] font-medium leading-[1.45] text-[#101310] sm:max-w-[42rem] md:text-2xl">
              DORA builds the application, orchestration, and harness layers that turn existing models into reliable systems for the workflows your organization depends on every day.
            </p>
            <p className="mt-6 max-w-[20rem] text-base leading-[1.7] text-[#4F564D] sm:max-w-[40rem] md:text-lg">
              We coordinate enterprise workflows, orchestrate parallel agent swarms, and give each agent a role-specific persona, context, and operating constraints.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="mailto:hello@dorareason.com">Talk to DORA</PrimaryButton>
              <SecondaryButton href="#how-it-works">See how it works</SecondaryButton>
            </div>
          </motion.div>

          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <StackDiagram />
          </motion.div>
        </div>
      </section>

      <Section id="problem" label="§ I / WHY DORA EXISTS" title="Models are powerful. Systems are missing.">
        <div className="space-y-6 text-lg leading-[1.65] text-[#4F564D]">
          <p>
            Foundation models can generate, reason, and respond. But models alone do not make AI operational.
          </p>
          <p>
            Enterprises need systems that understand context, coordinate across teams, execute multi-step work, and behave reliably in production environments.
          </p>
          <p className="font-semibold text-[#101310]">
            DORA builds the systems layer where AI becomes useful inside real organizations.
          </p>
        </div>
        <MiniWorkflowVisual />
      </Section>

      <Section id="stack" label="§ II / AI STACK" title="Built above the model layer." field>
        <div className="space-y-6 text-lg leading-[1.65] text-[#4F564D]">
          <p className="font-semibold text-[#101310]">DORA is model-agnostic.</p>
          <p>
            We do not compete at the foundation model, compute, infrastructure, or generic data layers. We build where AI becomes operational: the application, orchestration, and harness layers.
          </p>
          <p className="font-semibold text-[#101310]">
            DORA does not build foundation models, data infrastructure, compute platforms, or generic AI infrastructure. We build the systems layer that turns existing models into dependable enterprise AI.
          </p>
        </div>
        <div className="mt-12 border border-[#101310]/12 bg-[#FBFAF5]">
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#101310]/12 px-4 py-3 md:px-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">Layer</p>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">DORA's role</p>
          </div>
          {stackTable.map(([layer, role]) => (
            <div key={layer} className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#101310]/12 px-4 py-4 last:border-b-0 md:px-6">
              <p className="font-semibold text-[#101310]">{layer}</p>
              <p
                className={`border px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] ${
                  role === 'Core focus'
                    ? 'border-[#101310]/14 bg-[#DDE8D2] text-[#4F564D]'
                    : 'border-[#101310]/12 text-[#6B7568]'
                }`}
              >
                {role}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section id="primitives" className="border-t border-[#101310]/12 bg-[#F7F4ED]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">§ III / PRIMITIVES</p>
            <h2 className="font-sans text-[clamp(36px,5vw,64px)] font-semibold leading-[1.02]">The operating primitives of reliable AI work.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-[#4F564D]">
              DORA systems are built from three operating primitives: coordinated enterprise workflows, parallel agent swarms, and persona-based agents.
            </p>
          </div>
          <div className="mt-14 grid border-l border-t border-[#101310]/12 md:grid-cols-3">
            {primitives.map((primitive, index) => (
              <article key={primitive.title} className="min-h-[380px] border-b border-r border-[#101310]/12 bg-[#FBFAF5] p-7 md:p-8">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">Primitive {index + 1}</p>
                <div className="mt-8">
                  <PrimitiveCue type={primitive.cue} />
                </div>
                <h3 className="mt-8 max-w-[13ch] font-sans text-2xl font-semibold leading-[1.08]">{primitive.title}</h3>
                <p className="mt-6 text-[15px] leading-[1.65] text-[#4F564D]">{primitive.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section id="how-it-works" label="§ IV / METHOD" title="From prompts to systems.">
        <div className="space-y-6 text-lg leading-[1.65] text-[#4F564D]">
          <p>Most organizations start with prompts. DORA helps them move to systems.</p>
          <p>
            A prompt is a single interaction. A system has structure: workflows, agents, roles, personas, evaluations, handoffs, interfaces, and operating constraints. It can be observed, refined, and trusted over time.
          </p>
        </div>
        <div className="mt-12 border-l border-t border-[#101310]/12">
          {workflowSteps.map(([label, step]) => (
            <div key={label} className="grid gap-4 border-b border-r border-[#101310]/12 bg-[#FBFAF5] p-5 md:grid-cols-[180px_1fr] md:items-center md:p-6">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">{label}</p>
              <p className="text-xl font-semibold leading-tight text-[#101310]">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-[#101310]/12 bg-[#EEF2E8] p-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">Example workflow</p>
          <p className="mt-4 text-lg leading-[1.65] text-[#4F564D]">
            A strategic planning workflow might run market, customer, financial, legal, and operational agents in parallel, then synthesize their outputs through an evaluation harness before a recommendation reaches leadership.
          </p>
        </div>
      </Section>

      <Section id="reliability" label="§ V / RELIABILITY" title="Reliability is designed into the system." field>
        <div className="space-y-6 text-lg leading-[1.65] text-[#4F564D]">
          <p>
            Reliable AI is not just better output. It is the ability to observe, evaluate, constrain, and improve how AI behaves inside real workflows.
          </p>
          <p>
            DORA builds harnesses around agent systems so teams can see how work moves, where decisions happen, what context agents use, and how outputs are reviewed before deployment.
          </p>
        </div>
        <div className="mt-12 grid border-l border-t border-[#101310]/12 sm:grid-cols-2">
          {reliabilityPoints.map(([title, body]) => (
            <article key={title} className="border-b border-r border-[#101310]/12 bg-[#FBFAF5] p-6">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">{title}</p>
              <p className="mt-5 text-[15px] leading-[1.65] text-[#4F564D]">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="services" label="§ VI / DEPLOYED SYSTEMS" title="From research to deployed systems." dark>
        <div className="space-y-6 text-lg leading-[1.65] text-[#F7F4ED]/72">
          <p>
            DORA works with organizations to move from AI ambition to operational systems.
          </p>
          <p>
            We combine research, workflow design, agent architecture, orchestration, harnesses, and deployment support so teams can rely on AI in daily work.
          </p>
        </div>
        <div className="mt-12 grid border-l border-t border-[#F7F4ED]/14 md:grid-cols-3">
          {services.map(([title, body]) => (
            <article key={title} className="border-b border-r border-[#F7F4ED]/14 p-6">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#DDE8D2]/80">{title}</p>
              <p className="mt-6 text-[15px] leading-[1.65] text-[#F7F4ED]/70">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="use-cases" className="border-t border-[#101310]/12 bg-[#EEF2E8]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7568]">§ VII / USE CASES</p>
              <h2 className="max-w-[12ch] font-sans text-[clamp(36px,5vw,64px)] font-semibold leading-[1.02]">For work that cannot rely on one-shot generation.</h2>
              <p className="mt-6 text-lg leading-[1.65] text-[#4F564D]">
                DORA is designed for workflows where context, coordination, and reliability matter more than one-off output.
              </p>
            </div>
            <div className="grid border-l border-t border-[#101310]/12 sm:grid-cols-2">
              {useCases.map(([title, body]) => (
                <article key={title} className="border-b border-r border-[#101310]/12 bg-[#FBFAF5] p-6">
                  <h3 className="text-xl font-semibold leading-tight">{title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-[#4F564D]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="research" label="§ VIII / RESEARCH" title="Research that becomes deployable systems." dark>
        <div className="space-y-6 text-lg leading-[1.65] text-[#F7F4ED]/72">
          <p>
            DORA's research focuses on how AI systems operate inside real environments: multi-agent coordination, persona design, orchestration patterns, workflow harnesses, evaluation, and reliability.
          </p>
          <p className="font-semibold text-[#F7F4ED]">
            Our research is judged by whether it becomes useful, measurable, and deployable inside real organizations.
          </p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {['Multi-agent coordination', 'Persona design', 'Workflow harnesses', 'Reliability evaluation'].map((item) => (
            <div key={item} className="border border-[#F7F4ED]/14 p-5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#DDE8D2]">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <section id="contact" className="border-t border-[#101310]/12 bg-[#DDE8D2]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-sans text-[clamp(36px,5vw,64px)] font-semibold leading-[1.02]">Build enterprise AI above the model layer.</h2>
            <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-[#4F564D]">
              For organizations ready to move beyond AI pilots and into dependable enterprise deployment.
            </p>
            <PrimaryButton href="mailto:hello@dorareason.com" className="mt-10">Talk to DORA</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
