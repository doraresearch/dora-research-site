import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import CorePromise from '@/components/home/CorePromise'
import CommandStage from '@/components/home/CommandStage'
import IconStrip from '@/components/home/IconStrip'
import ParadigmShift from '@/components/home/ParadigmShift'
import PlatformLine from '@/components/home/PlatformLine'
import Problem from '@/components/home/Problem'
import WithdrawalReview from '@/components/home/WithdrawalReview'
import UseCases from '@/components/home/UseCases'
import AgentModules from '@/components/home/AgentModules'
import DeploymentModel from '@/components/home/DeploymentModel'
import TrustLayer from '@/components/home/TrustLayer'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />

      <CorePromise />

      <div className="pb-4">
        <IconStrip />
      </div>

      <Problem />
      <ParadigmShift />
      <PlatformLine />
      <UseCases />

      <section id="how-it-works" className="bg-base py-16 sm:py-20">
        <Container>
          <CommandStage />
        </Container>
      </section>

      <AgentModules />
      <WithdrawalReview />
      <DeploymentModel />
      <TrustLayer />
      <FinalCTA />
    </>
  )
}
