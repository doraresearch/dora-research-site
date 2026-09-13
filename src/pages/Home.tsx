import Capabilities from '@/components/home/Capabilities'
import CinematicHandoff from '@/components/home/CinematicHandoff'
import EditorialThesis from '@/components/home/EditorialThesis'
import Hero from '@/components/home/Hero'
import ProductFilmSection from '@/components/home/ProductFilmSection'
import ScenarioMetrics from '@/components/home/ScenarioMetrics'
import TraceabilityVision from '@/components/home/TraceabilityVision'
import WaitlistCTA from '@/components/home/WaitlistCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialThesis />
      <ScenarioMetrics />
      <ProductFilmSection />
      <Capabilities />
      <CinematicHandoff />
      <TraceabilityVision />
      <WaitlistCTA />
    </>
  )
}
