import Hero from '@/components/home/Hero'
import CommercialStrip from '@/components/home/CommercialStrip'
import HowDoraWorks from '@/components/home/HowDoraWorks'
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
      <HowDoraWorks />
      <DeploymentModel />
      <TrustLayer />
      <FinalCTA />
    </>
  )
}
