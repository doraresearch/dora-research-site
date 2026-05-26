import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import CommandStage from '@/components/home/CommandStage'
import IconStrip from '@/components/home/IconStrip'
import Problem from '@/components/home/Problem'
import Category from '@/components/home/Category'
import ParadigmShift from '@/components/home/ParadigmShift'
import OperatingPhilosophy from '@/components/home/OperatingPhilosophy'
import StackDiagram from '@/components/home/StackDiagram'
import PrimitiveSpine from '@/components/home/PrimitiveSpine'
import UseCases from '@/components/home/UseCases'
import DeploymentModel from '@/components/home/DeploymentModel'
import Outcomes from '@/components/home/Outcomes'
import TrustLayer from '@/components/home/TrustLayer'
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
      <ParadigmShift />
      <OperatingPhilosophy />
      <StackDiagram />
      <PrimitiveSpine />
      <UseCases />
      <DeploymentModel />
      <Outcomes />
      <TrustLayer />
      <FinalCTA />
    </>
  )
}
