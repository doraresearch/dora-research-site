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

const Eyebrow = ({ children, accent = false }) => (
  <p className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-6 font-medium ${accent ? 'text-ochre' : 'text-ink-muted'}`}>
    {children}
  </p>
)

export default function Thesis() {
  useEffect(() => { document.title = 'Thesis — DORA Research' }, [])

  return (
    <div className="bg-paper">
      <section className="max-w-6xl mx-auto px-6 pt-40 md:pt-56 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ochre mb-12 font-medium">
            Thesis &nbsp;·&nbsp; Working paper &nbsp;·&nbsp; 2026.04
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-ink tracking-[-0.015em] leading-[1.02] mb-10">
            AI should <em className="italic text-ochre">execute</em> workflows.
          </h1>
          <p className="text-xl text-body leading-[1.55] max-w-xl">
            DORA Research focuses on the shift from systems that answer questions to systems that operate inside real workflows.
          </p>
        </motion.div>
      </section>

      <SectionWrapper surface="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ I &nbsp;·&nbsp; Why answers are not enough</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08]">
              Why answers are not enough.
            </h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-body leading-relaxed">
              Modern AI has made enormous progress in reasoning, synthesis, and language generation.
            </p>
            <p className="text-base text-ink font-medium leading-relaxed">
              But many real-world tasks do not end when a good answer is produced.
            </p>
            <p className="text-base text-body leading-relaxed">
              Workflows require systems that can carry context forward, plan under constraints, and execute actions inside dynamic environments.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow>§ II &nbsp;·&nbsp; The execution gap</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08]">The execution gap.</h2>
          </div>
          <div className="space-y-5 lg:pt-14">
            <p className="text-base text-body leading-relaxed">
              The gap between reasoning and execution remains one of the central challenges in applied AI.
            </p>
            <p className="text-base text-ink font-medium leading-relaxed">
              An answer may be useful, but execution requires continuity, coordination, and control.
            </p>
          </div>
        </div>
        <ComparisonBlock
          left={{ title: 'Assistant model', text: 'Prompt → Response' }}
          right={{ title: 'Operator model', text: 'Context → State → Plan → Action → Verification' }}
        />
      </SectionWrapper>

      <SectionWrapper surface="card">
        <Eyebrow>§ III &nbsp;·&nbsp; Core principles</Eyebrow>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-8 max-w-[18ch]">
          Core principles.
        </h2>
        <p className="text-base text-body leading-relaxed max-w-2xl mb-14">
          DORA Research approaches workflow execution through four core principles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
          {principles.map((card, i) => (
            <div key={card.title} className="border-r border-b border-border -mt-px -ml-px">
              <ConceptCard title={card.title} text={card.text} index={i + 1} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper surface="default">
        <div className="max-w-3xl">
          <Eyebrow>§ IV &nbsp;·&nbsp; Closing perspective</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-10">
            Closing perspective.
          </h2>
          <div className="space-y-6 border-l-2 border-ochre pl-8">
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">The long-term promise of applied AI is not limited to better answers.</p>
            <p className="font-serif text-xl md:text-2xl text-ink leading-[1.4]">
              It includes systems that can interpret environments, coordinate resources, and execute meaningful work in the world.
            </p>
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">That is the direction DORA Research is built around.</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
