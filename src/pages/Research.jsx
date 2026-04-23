import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ResearchCard from '@/components/shared/ResearchCard'

const researchAreas = [
  { title: 'Workflow Execution Systems', text: 'Designing architectures for structured, multi-step task completion in dynamic environments.' },
  { title: 'Stateful AI Systems', text: 'Exploring persistent memory, evolving context, and continuity across sessions and workflows.' },
  { title: 'Operator Architectures', text: 'Building systems that coordinate tools, APIs, services, and internal logic to complete useful work.' },
  { title: 'Policy-Governed AI', text: 'Studying methods for constraining action inside defined safety, trust, and operational boundaries.' },
  { title: 'Human–AI Collaboration', text: 'Designing models for shared control, delegation, approval, and oversight in complex workflows.' },
]

const Eyebrow = ({ children }) => (
  <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-6 font-medium text-ink-muted">
    {children}
  </p>
)

export default function Research() {
  useEffect(() => { document.title = 'Research — DORA Research' }, [])

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-40 md:pt-56 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ochre mb-12 font-medium">
            Research &nbsp;·&nbsp; Working paper &nbsp;·&nbsp; 2026.04
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-ink tracking-[-0.015em] leading-[1.02] mb-10">
            Applied research for <em className="italic text-ochre">execution</em> systems.
          </h1>
          <p className="text-xl text-body leading-[1.55] max-w-xl">
            DORA Research investigates the systems, architectures, and design principles required to move AI from reasoning to real-world execution.
          </p>
        </motion.div>
      </section>

      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ I &nbsp;·&nbsp; Agenda</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08]">Research agenda.</h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-ink font-medium leading-relaxed">Our research is centered on a simple question:</p>
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4] italic">
              What architectures are required for AI systems to move beyond explanation and into reliable execution?
            </p>
            <p className="text-base text-body leading-relaxed">
              We focus on the structures that allow systems to maintain state, coordinate tools, operate under constraints, and collaborate with humans inside real workflows.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="mb-14">
          <Eyebrow>§ II &nbsp;·&nbsp; Areas</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08]">Research areas.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {researchAreas.map((area, i) => (
            <div key={area.title} className="border-r border-b border-border -mt-px -ml-px">
              <ResearchCard title={area.title} text={area.text} index={i + 1} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ III &nbsp;·&nbsp; Process</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08]">How we work.</h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-body leading-relaxed">
              DORA Research combines applied AI research, systems engineering, and workflow design.
            </p>
            <p className="text-base text-body leading-relaxed">
              We care about how intelligent systems behave in practice: how they maintain state, coordinate actions, operate under constraints, and integrate with real environments.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="max-w-3xl">
          <Eyebrow>§ IV &nbsp;·&nbsp; Outlook</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-10">Research outlook.</h2>
          <div className="space-y-6 border-l-2 border-ochre pl-8">
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">
              The next major shift in applied AI will come from systems that can do more than generate language.
            </p>
            <p className="font-serif text-xl md:text-2xl text-ink leading-[1.4]">It will come from systems that can operate.</p>
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">DORA Research is focused on the architectures that make that possible.</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
