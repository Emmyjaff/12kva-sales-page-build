import { HeroSection } from "@/components/hero-section"
import { ProductFeatures } from "@/components/product-features"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PaymentSection } from "@/components/payment-section"
import { InstallmentForm } from "@/components/installment-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductFeatures />
        <BenefitsSection />
        <TestimonialsSection />
        <PaymentSection />
        <InstallmentForm />
      </main>
      <Footer />
    </div>
  )
}
