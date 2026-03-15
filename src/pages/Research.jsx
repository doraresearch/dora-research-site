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

export default function Research() {
  return (
    <div className="bg-[#FAFAFA]">
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-44 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.18em] mb-10">Research</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#111111] tracking-[-0.02em] leading-[1.04] mb-8">
            Applied research for execution systems.
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed max-w-xl">
            DORA Research investigates the systems, architectures, and design principles required to move AI from reasoning to real-world execution.
          </p>
        </motion.div>
      </section>

      <SectionWrapper surface="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">Agenda</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight">Research agenda</h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-[#111111] font-medium leading-relaxed">Our research is centered on a simple question:</p>
            <p className="text-base text-[#6B7280] leading-relaxed italic">
              What architectures are required for AI systems to move beyond explanation and into reliable execution?
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We focus on the structures that allow systems to maintain state, coordinate tools, operate under constraints, and collaborate with humans inside real workflows.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="mb-14">
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">Areas</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight">Research areas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchAreas.map((area, i) => (
            <ResearchCard key={area.title} title={area.title} text={area.text} index={i + 1} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">Process</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight">How we work</h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-[#6B7280] leading-relaxed">
              DORA Research combines applied AI research, systems engineering, and workflow design.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We care about how intelligent systems behave in practice: how they maintain state, coordinate actions, operate under constraints, and integrate with real environments.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-8">Outlook</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-10">Research outlook</h2>
          <div className="space-y-6 border-l-2 border-black/[0.08] pl-8">
            <p className="text-lg text-[#6B7280] leading-relaxed">
              The next major shift in applied AI will come from systems that can do more than generate language.
            </p>
            <p className="text-lg text-[#111111] font-medium leading-relaxed">It will come from systems that can operate.</p>
            <p className="text-lg text-[#6B7280] leading-relaxed">DORA Research is focused on the architectures that make that possible.</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
