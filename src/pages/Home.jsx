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

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-44 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.18em] mb-10">DORA Research</p>
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-semibold text-[#111111] tracking-[-0.02em] leading-[1.04] mb-8 max-w-4xl">
            AI that executes.
          </h1>
          <p className="text-xl md:text-2xl text-[#111111] max-w-xl leading-relaxed mb-3 font-medium tracking-tight">
            DORA Research is an applied AI lab building AI-native systems that turn intelligence into execution.
          </p>
          <p className="text-base text-[#6B7280] max-w-md leading-relaxed mb-12">
            Most AI systems stop at answers.<br />
            We build systems that execute real-world workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/thesis"
              className="inline-flex items-center px-5 py-2.5 bg-[#111111] text-white text-sm font-medium rounded-lg hover:bg-[#2563EB] transition-colors duration-200"
            >
              Our Thesis
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center px-5 py-2.5 bg-white border border-black/[0.12] text-[#111111] text-sm font-medium rounded-lg hover:border-black/[0.24] transition-colors duration-200"
            >
              Research
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28 bg-white border border-black/[0.07] rounded-2xl p-8 md:p-12 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
        >
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-8">Execution architecture</p>
          <ExecutionDiagram />
        </motion.div>
      </section>

      <SectionWrapper surface="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-0">
          <div>
            <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">The execution gap</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-8">
              The gap between intelligence and execution
            </h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-[#6B7280] leading-relaxed">
              Modern AI systems are increasingly capable of answering questions, summarizing information, and generating recommendations.
            </p>
            <p className="text-base text-[#111111] leading-relaxed font-medium">But real work requires more than reasoning.</p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Execution requires structured context, persistent memory, coordination across tools, and action inside real environments.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">DORA Research exists to help close that gap.</p>
          </div>
        </div>
        <ComparisonBlock
          left={{ title: 'Answering systems', text: 'Prompt → Response' }}
          right={{ title: 'Executing systems', text: 'Context → State → Plan → Action → Verification' }}
        />
      </SectionWrapper>

      <SectionWrapper surface="default">
        <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">Thesis</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-6 max-w-xl">
          AI should execute workflows.
        </h2>
        <div className="max-w-2xl space-y-4 mb-14">
          <p className="text-base text-[#6B7280] leading-relaxed">
            The first generation of AI systems focused on information retrieval and generation.
          </p>
          <p className="text-base text-[#6B7280] leading-relaxed">The next generation must focus on execution.</p>
          <p className="text-base text-[#6B7280] leading-relaxed">
            AI systems should be able to interpret complex environments, coordinate tools and data sources, and safely perform actions inside real workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {thesisCards.map((card, i) => (
            <ConceptCard key={card.title} title={card.title} text={card.text} index={i + 1} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-14">
          <div>
            <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">Research</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight">Research areas</h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-base text-[#6B7280] leading-relaxed">
              DORA Research focuses on the systems and architectures required to make AI execution possible.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchAreas.map((area, i) => (
            <ResearchCard key={area.title} title={area.title} text={area.text} index={i + 1} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">Applied research</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-8">
              From research to real systems
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[#6B7280] leading-relaxed">
                DORA Research operates at the intersection of applied artificial intelligence, systems engineering, and workflow design.
              </p>
              <p className="text-base text-[#6B7280] leading-relaxed">
                Our goal is to translate advances in AI into systems that can operate reliably in real environments.
              </p>
              <p className="text-base text-[#111111] leading-relaxed font-medium">
                We focus on systems that do work, not just systems that describe it.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full bg-white border border-black/[0.07] rounded-2xl p-8 md:p-10 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-8">Pipeline</p>
              <LinearDiagram steps={['Research', 'Architecture', 'System', 'Execution']} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="white">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-8">Vision</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-10">
            From assistants to operators
          </h2>
          <div className="space-y-6 border-l-2 border-black/[0.08] pl-8">
            <p className="text-lg text-[#6B7280] leading-relaxed">The first generation of AI helped users find information.</p>
            <p className="text-lg text-[#111111] leading-relaxed font-medium">The next generation will help users execute work.</p>
            <p className="text-lg text-[#6B7280] leading-relaxed">DORA Research is building the foundations for that shift.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="bg-white border border-black/[0.07] rounded-2xl p-10 md:p-14 lg:p-16 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">About</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-6 max-w-xl">
            An applied AI and software research lab
          </h2>
          <div className="max-w-2xl space-y-4 mb-10">
            <p className="text-base text-[#6B7280] leading-relaxed">
              DORA Research is focused on building AI-native systems designed for real-world execution.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Our work explores how AI can move beyond generating answers and toward executing complex workflows safely and reliably.
            </p>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#2563EB] transition-colors duration-200">
            About DORA Research
            <span>→</span>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  )
}
