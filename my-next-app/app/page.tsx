import FeaturesSection from './components/FeaturesSection'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import IntegrationSection from './components/IntegrationSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationSection />
    </main>
  )
}
