import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                Commercial Grade Solar Solution
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Power Your Business with <span className="text-secondary">Sustainable Energy</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Transform your business operations with our premium 12KVA Inverter System. Designed for office
                buildings, small businesses, and industrial applications.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">15KWH Lithium Ion Battery included</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">20 x 550W Solar Panels</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">Commercial grade reliability</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Specifications
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-secondary">₦10.7M</div>
                  <div className="text-sm text-muted-foreground">Complete System Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">12KVA</div>
                  <div className="text-sm text-muted-foreground">Power Output</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/5 p-8">
              <Image
                src="/modern-solar-inverter-system-with-battery-and-sola.jpg"
                alt="12KVA Solar Inverter System"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>

            {/* Floating stats cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-secondary">25 Years</div>
              <div className="text-sm text-muted-foreground">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
