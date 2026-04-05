import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { ProductPreview } from "@/components/product-preview"
import { Differentiation } from "@/components/differentiation"
import { FinalCTA } from "@/components/final-cta"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ProductPreview />
      <Differentiation />
      <FinalCTA />
    </main>
  )
}
