import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import CommandStage from '@/components/home/CommandStage'
import IconStrip from '@/components/home/IconStrip'
import ParadigmShift from '@/components/home/ParadigmShift'
import Problem from '@/components/home/Problem'
import PrimitiveSpine from '@/components/home/PrimitiveSpine'
import WithdrawalReview from '@/components/home/WithdrawalReview'
import UseCases from '@/components/home/UseCases'
import DeploymentModel from '@/components/home/DeploymentModel'
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

      <ParadigmShift />
      <Problem />
      <PrimitiveSpine />
      <WithdrawalReview />
      <UseCases />
      <DeploymentModel />
      <TrustLayer />
      <FinalCTA />
    </>
  )
}
