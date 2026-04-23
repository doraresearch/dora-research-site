import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'

const sections = [
  {
    num: 'I',
    label: 'What DORA Research is',
    heading: 'What DORA Research is.',
    body: [
      { text: 'DORA Research is an applied AI lab focused on building AI-native systems that turn intelligence into execution.', emphasis: true },
      { text: 'The lab is centered on the belief that the next generation of AI will be defined not only by reasoning, but by its ability to operate within real workflows.' },
    ],
  },
  {
    num: 'II',
    label: 'What we work on',
    heading: 'What we work on.',
    body: [
      { text: 'Our work focuses on the architectures required for systems to interpret context, maintain state, coordinate tools, and perform useful work.' },
      { text: 'We are interested in execution systems, operator architectures, workflow design, and human–AI collaboration.' },
    ],
  },
  {
    num: 'III',
    label: 'How we think',
    heading: 'How we think.',
    body: [
      { text: 'We believe the most important shift in applied AI is the move from assistants to operators.', emphasis: true },
      { text: 'That shift requires advances in state, memory, coordination, safety, and workflow design.' },
      { text: 'Our perspective is grounded in building systems that can operate in practice, not only in theory.' },
    ],
  },
]

const Eyebrow = ({ children }) => (
  <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-6 font-medium text-ink-muted">
    {children}
  </p>
)

export default function About() {
  useEffect(() => { document.title = 'About — DORA Research' }, [])

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
            About &nbsp;·&nbsp; Working paper &nbsp;·&nbsp; 2026.04
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-ink tracking-[-0.015em] leading-[1.02] mb-10">
            An applied AI and software <em className="italic text-ochre">research lab</em>.
          </h1>
          <p className="text-xl text-body leading-[1.55] max-w-xl">
            DORA Research explores how AI can move beyond generating answers and toward executing complex workflows safely and reliably.
          </p>
        </motion.div>
      </section>

      {sections.map((section, idx) => (
        <SectionWrapper key={section.num} surface={idx % 2 === 0 ? 'card' : 'default'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Eyebrow>§ {section.num} &nbsp;·&nbsp; {section.label}</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08]">
                {section.heading}
              </h2>
            </div>
            <div className="space-y-5 lg:pt-14">
              {section.body.map((para, i) => (
                <p key={i} className={`text-base leading-relaxed ${para.emphasis ? 'text-ink font-medium' : 'text-body'}`}>
                  {para.text}
                </p>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper surface="card">
        <div className="max-w-3xl">
          <Eyebrow>§ IV &nbsp;·&nbsp; Closing</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-[-0.01em] leading-[1.08] mb-10">Closing.</h2>
          <div className="space-y-6 border-l-2 border-ochre pl-8">
            <p className="font-serif text-xl md:text-2xl text-body leading-[1.4]">
              DORA Research sits at the intersection of applied AI, systems engineering, and workflow execution.
            </p>
            <p className="font-serif text-xl md:text-2xl text-ink leading-[1.4]">
              Our goal is to help define the systems layer that turns intelligence into action.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
