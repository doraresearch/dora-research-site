import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'

const sections = [
  {
    num: '01',
    title: 'What DORA Research is',
    body: [
      { text: 'DORA Research is an applied AI lab focused on building AI-native systems that turn intelligence into execution.', emphasis: true },
      { text: 'The lab is centered on the belief that the next generation of AI will be defined not only by reasoning, but by its ability to operate within real workflows.' },
    ],
  },
  {
    num: '02',
    title: 'What we work on',
    body: [
      { text: 'Our work focuses on the architectures required for systems to interpret context, maintain state, coordinate tools, and perform useful work.' },
      { text: 'We are interested in execution systems, operator architectures, workflow design, and human–AI collaboration.' },
    ],
  },
  {
    num: '03',
    title: 'How we think',
    body: [
      { text: 'We believe the most important shift in applied AI is the move from assistants to operators.', emphasis: true },
      { text: 'That shift requires advances in state, memory, coordination, safety, and workflow design.' },
      { text: 'Our perspective is grounded in building systems that can operate in practice, not only in theory.' },
    ],
  },
]

export default function About() {
  return (
    <div className="bg-[#FAFAFA]">
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-44 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.18em] mb-10">About</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#111111] tracking-[-0.02em] leading-[1.04] mb-8">
            An applied AI and software research lab.
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed max-w-xl">
            DORA Research explores how AI can move beyond generating answers and toward executing complex workflows safely and reliably.
          </p>
        </motion.div>
      </section>

      {sections.map((section, idx) => (
        <SectionWrapper key={section.num} surface={idx % 2 === 0 ? 'white' : 'default'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-6">{section.num}</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight">
                {section.title}
              </h2>
            </div>
            <div className="space-y-5 lg:pt-14">
              {section.body.map((para, i) => (
                <p key={i} className={`text-base leading-relaxed ${para.emphasis ? 'text-[#111111] font-medium' : 'text-[#6B7280]'}`}>
                  {para.text}
                </p>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper surface="white">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.16em] mb-8">04</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-[-0.015em] leading-tight mb-10">Closing</h2>
          <div className="space-y-6 border-l-2 border-black/[0.08] pl-8">
            <p className="text-lg text-[#6B7280] leading-relaxed">
              DORA Research sits at the intersection of applied AI, systems engineering, and workflow execution.
            </p>
            <p className="text-lg text-[#111111] font-medium leading-relaxed">
              Our goal is to help define the systems layer that turns intelligence into action.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
