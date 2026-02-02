import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { StateComparison } from "@/components/state-comparison"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Process />
      <StateComparison />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
