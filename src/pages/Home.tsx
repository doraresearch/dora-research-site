import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import CommercialStrip from '@/components/home/CommercialStrip'
import CommandStage from '@/components/home/CommandStage'
import ParadigmShift from '@/components/home/ParadigmShift'
import PlatformLine from '@/components/home/PlatformLine'
import Problem from '@/components/home/Problem'
import WithdrawalReview from '@/components/home/WithdrawalReview'
import UseCases from '@/components/home/UseCases'
import DeploymentModel from '@/components/home/DeploymentModel'
import TrustLayer from '@/components/home/TrustLayer'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <CommercialStrip />
      <Problem />
      <ParadigmShift />
      <PlatformLine />
      <UseCases />
      <WithdrawalReview />

      <section id="how-it-works" className="bg-base py-16 sm:py-20">
        <Container>
          <CommandStage />
        </Container>
      </section>

      <DeploymentModel />
      <TrustLayer />
      <FinalCTA />
    </>
  )
}
