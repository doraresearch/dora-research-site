import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import CommandStage from '@/components/home/CommandStage'
import IconStrip from '@/components/home/IconStrip'
import Problem from '@/components/home/Problem'
import Category from '@/components/home/Category'
import StackDiagram from '@/components/home/StackDiagram'
import PrimitiveSpine from '@/components/home/PrimitiveSpine'
import UseCases from '@/components/home/UseCases'
import Outcomes from '@/components/home/Outcomes'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="how-it-works" className="bg-base pb-12 pt-2">
        <Container>
          <CommandStage />
        </Container>
      </section>

      <div className="pb-4">
        <IconStrip />
      </div>

      <Problem />
      <Category />
      <StackDiagram />
      <PrimitiveSpine />
      <UseCases />
      <Outcomes />
      <FinalCTA />
    </>
  )
}
