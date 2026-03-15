import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ComparisonBlock from '@/components/shared/ComparisonBlock'
import ConceptCard from '@/components/shared/ConceptCard'

const principles = [
  { title: 'State', text: 'Execution requires systems that maintain memory, context, and continuity over time.' },
  { title: 'Coordination', text: 'Useful systems must work across tools, services, and operational environments.' },
  { title: 'Execution', text: 'AI should not stop at explanation. It should safely perform work.' },
  { title: 'Safety', text: 'Execution must happen inside clearly defined constraints and control boundaries.' },
]

export default function Thesis() {
  useEffect(() => { document.title = 'Thesis — DORA Research' }, [])

  return (
    <div className="bg-[#FAFAFA]">
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-44 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.18em] mb-10">Thesis</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#111111] tracking-[-0.02em] leading-[1.04] mb-8">
            AI should execute workflows.
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed max-w-xl">
            DORA Research focuses on the shift from systems that answer questions to systems that operate inside real workflows.
          </p>
        </motion.div>
      </section>

      <SectionWrapper surface="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">01</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight">
              Why answers are not enough
            </h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-[#6B7280] leading-relaxed">
              Modern AI has made enormous progress in reasoning, synthesis, and language generation.
            </p>
            <p className="text-base text-[#111111] font-medium leading-relaxed">
              But many real-world tasks do not end when a good answer is produced.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Workflows require systems that can carry context forward, plan under constraints, and execute actions inside dynamic environments.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">02</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight">The execution gap</h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-[#6B7280] leading-relaxed">
              The gap between reasoning and execution remains one of the central challenges in applied AI.
            </p>
            <p className="text-base text-[#111111] font-medium leading-relaxed">
              An answer may be useful, but execution requires continuity, coordination, and control.
            </p>
          </div>
        </div>
        <ComparisonBlock
          left={{ title: 'Assistant model', text: 'Prompt → Response' }}
          right={{ title: 'Operator model', text: 'Context → State → Plan → Action → Verification' }}
        />
      </SectionWrapper>

      <SectionWrapper surface="white">
        <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">03</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-6 max-w-xl">
          Core principles
        </h2>
        <p className="text-base text-[#6B7280] leading-relaxed max-w-2xl mb-14">
          DORA Research approaches workflow execution through four core principles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((card, i) => (
            <ConceptCard key={card.title} title={card.title} text={card.text} index={i + 1} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-8">04</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-10">
            Closing perspective
          </h2>
          <div className="space-y-6 border-l-2 border-black/[0.08] pl-8">
            <p className="text-lg text-[#6B7280] leading-relaxed">The long-term promise of applied AI is not limited to better answers.</p>
            <p className="text-lg text-[#111111] font-medium leading-relaxed">
              It includes systems that can interpret environments, coordinate resources, and execute meaningful work in the world.
            </p>
            <p className="text-lg text-[#6B7280] leading-relaxed">That is the direction DORA Research is built around.</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
