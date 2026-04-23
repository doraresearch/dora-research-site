import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ComparisonBlock from '@/components/shared/ComparisonBlock'
import ConceptCard from '@/components/shared/ConceptCard'
import ResearchCard from '@/components/shared/ResearchCard'
import ExecutionDiagram from '@/components/shared/ExecutionDiagram'
import LinearDiagram from '@/components/shared/LinearDiagram'

const thesisCards = [
  { title: 'State', text: 'Maintain structured operational context over time.' },
  { title: 'Coordination', text: 'Integrate tools, systems, and environments.' },
  { title: 'Execution', text: 'Perform actions safely and reliably.' },
]

const researchAreas = [
  { title: 'Workflow Execution Systems', text: 'Architectures for structured, multi-step task execution in real environments.' },
  { title: 'Stateful AI Systems', text: 'Persistent context, memory, and evolving operational state.' },
  { title: 'Operator Architectures', text: 'Systems that coordinate tools, services, and data to complete work.' },
  { title: 'Policy-Governed AI', text: 'Execution within defined safety, control, and operational boundaries.' },
  { title: 'Human–AI Collaboration', text: 'Shared control between people and intelligent systems in complex workflows.' },
]

const Eyebrow = ({ children, accent = false }) => (
  <p className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-6 font-medium ${accent ? 'text-ochre' : 'text-ink-muted'}`}>
    {children}
  </p>
)

export default function Home() {
  useEffect(() => { document.title = 'DORA Research — AI That Executes' }, [])

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-40 md:pt-56 pb-24 md:pb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ochre mb-12 font-medium">
            DORA Research &nbsp;·&nbsp; Working paper &nbsp;·&nbsp; 2026.04
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[112px] font-normal text-ink tracking-[-0.015em] leading-[1.02] mb-10 max-w-[14ch]">
            AI that <em className="italic text-ochre">executes</em>.
          </h1>
          <p className="text-xl md:text-2xl text-ink max-w-xl leading-[1.45] mb-4 font-medium tracking-[-0.005em]">
            DORA Research is an applied AI lab building AI-native systems that turn intelligence into execution.
          </p>
          <p className="text-base text-body max-w-md leading-relaxed mb-12">
            Most AI systems stop at answers.<br />
            We build systems that execute real-world workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/thesis"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-ochre transition-colors duration-200"
            >
              Our Thesis <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-border-strong text-ink text-sm font-medium hover:border-ink transition-colors duration-200"
            >
              Research
            </Link>
          </div>
        </motion.div>

        <div className="mt-24 md:mt-32 bg-card border border-border p-8 md:p-12">
          <div className="flex items-baseline justify-between pb-4 mb-10 border-b border-border">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase">
              <span className="text-ochre font-medium">Fig 1</span>
              <span className="text-ink-muted">&nbsp;·&nbsp;&nbsp;Execution architecture</span>
            </p>
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink">Operator model</p>
          </div>
          <ExecutionDiagram />
        </div>
      </section>

      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-0">
          <div>
            <Eyebrow>§ I &nbsp;·&nbsp; The execution gap</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-8 max-w-[18ch]">
              The gap between intelligence and execution.
            </h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-body leading-relaxed">
              Modern AI systems are increasingly capable of answering questions, summarizing information, and generating recommendations.
            </p>
            <p className="text-base text-ink leading-relaxed font-medium">But real work requires more than reasoning.</p>
            <p className="text-base text-body leading-relaxed">
              Execution requires structured context, persistent memory, coordination across tools, and action inside real environments.
            </p>
            <p className="text-base text-body leading-relaxed">DORA Research exists to help close that gap.</p>
          </div>
        </div>
        <ComparisonBlock
          left={{ title: 'Answering systems', text: 'Prompt → Response' }}
          right={{ title: 'Executing systems', text: 'Context → State → Plan → Action → Verification' }}
        />
      </SectionWrapper>

      <SectionWrapper surface="default">
        <Eyebrow>§ II &nbsp;·&nbsp; Thesis</Eyebrow>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-8 max-w-[18ch]">
          AI should <em className="italic text-ochre">execute</em> workflows.
        </h2>
        <div className="max-w-2xl space-y-4 mb-14">
          <p className="text-base text-body leading-relaxed">
            The first generation of AI systems focused on information retrieval and generation.
          </p>
          <p className="text-base text-body leading-relaxed">The next generation must focus on execution.</p>
          <p className="text-base text-body leading-relaxed">
            AI systems should be able to interpret complex environments, coordinate tools and data sources, and safely perform actions inside real workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border">
          {thesisCards.map((card, i) => (
            <div key={card.title} className="border-r border-b border-border -mt-px -ml-px">
              <ConceptCard title={card.title} text={card.text} index={i + 1} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-14">
          <div>
            <Eyebrow>§ III &nbsp;·&nbsp; Research</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08]">Research areas.</h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-base text-body leading-relaxed">
              DORA Research focuses on the systems and architectures required to make AI execution possible.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {researchAreas.map((area, i) => (
            <div key={area.title} className="border-r border-b border-border -mt-px -ml-px">
              <ResearchCard title={area.title} text={area.text} index={i + 1} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ IV &nbsp;·&nbsp; Applied research</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-8 max-w-[18ch]">
              From research to real systems.
            </h2>
            <div className="space-y-4">
              <p className="text-base text-body leading-relaxed">
                DORA Research operates at the intersection of applied artificial intelligence, systems engineering, and workflow design.
              </p>
              <p className="text-base text-body leading-relaxed">
                Our goal is to translate advances in AI into systems that can operate reliably in real environments.
              </p>
              <p className="text-base text-ink leading-relaxed font-medium">
                We focus on systems that do work, not just systems that describe it.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full bg-card border border-border p-8 md:p-10">
              <div className="flex items-baseline justify-between pb-4 mb-10 border-b border-border">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase">
                  <span className="text-ochre font-medium">Fig 2</span>
                  <span className="text-ink-muted">&nbsp;·&nbsp;&nbsp;Pipeline</span>
                </p>
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink">Research → Execution</p>
              </div>
              <LinearDiagram steps={['Research', 'Architecture', 'System', 'Execution']} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow>§ V &nbsp;·&nbsp; Vision</Eyebrow>
            <h2 className="font-serif text-4xl md:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-10 max-w-[20ch]">
              From assistants to <em className="italic text-ochre">operators</em>.
            </h2>
            <div className="space-y-6 border-l-2 border-ochre pl-8">
              <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">The first generation of AI helped users find information.</p>
              <p className="font-serif text-xl md:text-2xl text-ink leading-[1.4]">The next generation will help users execute work.</p>
              <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">DORA Research is building the foundations for that shift.</p>
            </div>
          </div>
          <aside className="lg:pt-24">
            <figure>
              <div className="flex items-baseline justify-between pb-3 mb-5 border-b border-border">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase">
                  <span className="text-ochre font-medium">Fig 3</span>
                  <span className="text-ink-muted">&nbsp;·&nbsp;&nbsp;σ(x) = 1 / (1 + e⁻ˣ)</span>
                </p>
              </div>
              <svg viewBox="0 0 240 160" fill="none" className="w-full h-auto">
                <g stroke="#0A0A0A" strokeWidth="1" fill="none">
                  <line x1="30" y1="15" x2="30" y2="140"/>
                  <line x1="30" y1="140" x2="225" y2="140"/>
                  <line x1="27" y1="30" x2="33" y2="30"/>
                  <line x1="27" y1="85" x2="33" y2="85"/>
                  <line x1="125" y1="137" x2="125" y2="143"/>
                  <path d="M35 135 C 70 135, 100 128, 125 85 C 150 42, 180 32, 220 32" strokeWidth="1.25" stroke="#B08A3E"/>
                  <circle cx="125" cy="85" r="3" fill="#B08A3E" stroke="none"/>
                </g>
                <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5A5A5A" letterSpacing="1">
                  <text x="12" y="34">1</text>
                  <text x="12" y="89">½</text>
                  <text x="12" y="142">0</text>
                  <text x="121" y="155" textAnchor="middle">0</text>
                </g>
                <text x="140" y="65" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="14" fill="#0A0A0A">σ(x)</text>
              </svg>
              <figcaption className="mt-4 text-xs text-body leading-relaxed">
                Assistant → operator: a continuous transition, not a binary flip. The midpoint is where AI begins to act, not only answer.
              </figcaption>
            </figure>
          </aside>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="bg-card border border-border p-10 md:p-14 lg:p-16">
          <Eyebrow>§ VI &nbsp;·&nbsp; About</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-[-0.005em] leading-tight mb-8 max-w-xl">
            An applied AI and software research lab.
          </h2>
          <div className="max-w-2xl space-y-4 mb-10">
            <p className="text-base text-body leading-relaxed">
              DORA Research is focused on building AI-native systems designed for real-world execution.
            </p>
            <p className="text-base text-body leading-relaxed">
              Our work explores how AI can move beyond generating answers and toward executing complex workflows safely and reliably.
            </p>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-ochre transition-colors duration-200">
            About DORA Research
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  )
}
