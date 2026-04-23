import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ComparisonBlock from '@/components/shared/ComparisonBlock'
import ConceptCard from '@/components/shared/ConceptCard'

const principles = [
  { title: 'State', text: 'Persistent context and continuity over time.' },
  { title: 'Coordination', text: 'Integration across tools, services, and environments.' },
  { title: 'Execution', text: 'The ability to safely perform actions, not just explain them.' },
  { title: 'Safety', text: 'Clear constraints and control boundaries governing all behavior.' },
]

const primitives = [
  {
    label: '01',
    title: 'Orchestrated agents',
    body: 'Execution is distributed across multiple specialized agents coordinated through a control layer that manages state, sequencing, and verification.',
  },
  {
    label: '02',
    title: 'Operational execution',
    body: 'The objective is not to generate outputs, but to perform work. Systems must operate inside real workflows, interacting with tools, constraints, and changing environments.',
  },
  {
    label: '03',
    title: 'Persona-driven agents',
    body: 'Real workflows involve multiple roles, incentives, and perspectives. Execution breaks down when all decisions are collapsed into a single agent. Agents are configured with distinct personas to reflect operators, teams, and users, enabling coordination, negotiation, and decision-making across roles.',
  },
]

const Eyebrow = ({ children, accent = false }) => (
  <p className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-6 font-medium ${accent ? 'text-ochre' : 'text-ink-muted'}`}>
    {children}
  </p>
)

const SectionHeading = ({ children }) => (
  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] max-w-[18ch]">
    {children}
  </h2>
)

export default function Home() {
  useEffect(() => { document.title = 'DORA Research' }, [])

  return (
    <div>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-40 md:pt-56 pb-24 md:pb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ochre mb-12 font-medium">
            DORA Research &nbsp;·&nbsp; Working paper &nbsp;·&nbsp; 2026.04
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[96px] font-normal text-ink tracking-[-0.015em] leading-[1.04] mb-10 max-w-[16ch]">
            AI should not stop at answers.<br />
            It should <em className="italic text-ochre">execute</em> workflows.
          </h1>
          <div className="max-w-[38ch] space-y-5 mb-8">
            <p className="text-lg md:text-xl text-ink leading-[1.55] font-medium tracking-[-0.005em]">
              Most systems are still built for the former.<br />
              DORA Research focuses on the latter.
            </p>
            <p className="text-base text-body leading-relaxed">
              DORA Research is an AI research lab focused on systems that operate inside real environments, not just generate responses.
            </p>
          </div>
        </motion.div>
      </section>

      {/* § I · ETHOS */}
      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ I &nbsp;·&nbsp; Ethos</Eyebrow>
            <SectionHeading>Ethos.</SectionHeading>
          </div>
          <div className="space-y-5 lg:pt-12">
            <p className="font-serif text-2xl md:text-3xl text-ink leading-[1.3] tracking-[-0.005em] max-w-[32ch]">
              AI is not a question-answering interface. It is a system capable of performing work.
            </p>
            <p className="text-base text-body leading-relaxed">
              Most of the field is focused on improving responses. We believe this is the wrong abstraction.
            </p>
            <p className="text-base text-body leading-relaxed">
              The value of AI emerges through execution, through systems that can carry context, operate under constraints, and act within real environments.
            </p>
            <p className="text-base text-ink leading-relaxed font-medium">
              DORA Research is built around that belief.
            </p>
            <p className="text-base text-body leading-relaxed">
              DORA Research is informed by direct work with applied AI systems and the challenges that emerge beyond the prompt-response layer.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* § II · THE SHIFT */}
      <SectionWrapper surface="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ II &nbsp;·&nbsp; The shift</Eyebrow>
            <SectionHeading>The shift.</SectionHeading>
          </div>
          <div className="space-y-5 lg:pt-12">
            <p className="text-base text-body leading-relaxed">
              Modern AI has made significant progress in reasoning, synthesis, and language.
            </p>
            <p className="text-base text-ink leading-relaxed font-medium">
              But real-world value is not created at the point of answer.
            </p>
            <p className="text-base text-body leading-relaxed">
              It is created through execution, across systems, constraints, and time.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* § III · THE GAP */}
      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-4">
          <div>
            <Eyebrow>§ III &nbsp;·&nbsp; The gap</Eyebrow>
            <SectionHeading>The gap.</SectionHeading>
          </div>
          <div className="space-y-5 lg:pt-12">
            <p className="text-base text-body leading-relaxed">
              There remains a fundamental gap between reasoning and execution.
            </p>
            <p className="text-base text-ink leading-relaxed font-medium">
              Understanding and closing this gap is central to applied AI.
            </p>
          </div>
        </div>
        <ComparisonBlock
          left={{ title: 'Most systems today', text: 'Prompt → Response' }}
          right={{ title: 'Real workflows require', text: 'Context → State → Plan → Action → Verification' }}
        />
      </SectionWrapper>

      {/* § IV · WHY NOW */}
      <SectionWrapper surface="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ IV &nbsp;·&nbsp; Why now</Eyebrow>
            <SectionHeading>Why now.</SectionHeading>
          </div>
          <div className="space-y-5 lg:pt-12">
            <p className="text-base text-body leading-relaxed">
              Recent advances in model capability have made individual systems significantly more powerful.
            </p>
            <p className="text-base text-ink leading-relaxed font-medium">
              As a result, the bottleneck is shifting.
            </p>
            <p className="text-base text-body leading-relaxed">
              The limitation is no longer generating answers. It is coordinating execution across systems, environments, and time.
            </p>
            <p className="font-serif text-xl md:text-2xl text-ink leading-[1.4] max-w-[32ch] pt-2">
              The frontier is moving from model capability to system design.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* § V · CORE PRIMITIVES */}
      <SectionWrapper surface="card">
        <Eyebrow>§ V &nbsp;·&nbsp; Core primitives</Eyebrow>
        <SectionHeading>Core primitives.</SectionHeading>
        <p className="text-base text-body leading-relaxed max-w-2xl mt-8 mb-14">
          Execution systems require a different foundation. DORA Research builds around three core primitives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border mb-16">
          {primitives.map((p) => (
            <div key={p.label} className="border-r border-b border-border -mt-px -ml-px bg-paper hover:bg-card transition-colors duration-200 p-8 md:p-10 flex flex-col gap-5">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ochre font-medium">{p.label} &nbsp;·&nbsp; Primitive</span>
              <h3 className="font-serif text-2xl md:text-[26px] text-ink leading-[1.2] tracking-[-0.005em]">{p.title}</h3>
              <p className="text-[15px] text-body leading-[1.6]">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <figure className="border-y border-ochre py-10 md:py-14 max-w-4xl">
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-[44px] text-ink leading-[1.18] tracking-[-0.01em]">
            Increasing model capability improves <em className="italic text-ochre">answers</em>.
            <br />
            Structured systems are what make <em className="italic text-ochre">execution</em> possible.
          </blockquote>
          <figcaption className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-muted mt-6">
            Thesis &nbsp;·&nbsp; DORA Research
          </figcaption>
        </figure>
      </SectionWrapper>

      {/* § VI · PRINCIPLES */}
      <SectionWrapper surface="default">
        <Eyebrow>§ VI &nbsp;·&nbsp; Principles</Eyebrow>
        <SectionHeading>Principles.</SectionHeading>
        <p className="text-base text-body leading-relaxed max-w-2xl mt-8 mb-14">
          Four constraints that govern how DORA Research approaches execution systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
          {principles.map((card, i) => (
            <div key={card.title} className="border-r border-b border-border -mt-px -ml-px">
              <ConceptCard title={card.title} text={card.text} index={i + 1} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* § VII · CURRENT STAGE */}
      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ VII &nbsp;·&nbsp; Current stage</Eyebrow>
            <SectionHeading>Current stage.</SectionHeading>
          </div>
          <div className="space-y-5 lg:pt-12">
            <p className="text-base text-ink leading-relaxed font-medium">
              DORA Research is in an early stage, focused on developing and testing execution-oriented AI systems.
            </p>
            <p className="text-base text-body leading-relaxed">
              We are working toward practical implementations while continuing to refine the underlying model.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* § VIII · CLOSING */}
      <SectionWrapper surface="default">
        <div className="max-w-3xl">
          <Eyebrow>§ VIII &nbsp;·&nbsp; Long-term direction</Eyebrow>
          <SectionHeading>The long-term direction.</SectionHeading>
          <div className="space-y-6 border-l-2 border-ochre pl-8 mt-12">
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">
              The long-term value of AI will not come from better answers alone.
            </p>
            <p className="font-serif text-xl md:text-2xl text-ink leading-[1.4]">
              It will come from systems that can interpret environments, coordinate resources, and execute meaningful work.
            </p>
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">
              DORA Research is focused on understanding and building toward that shift.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
