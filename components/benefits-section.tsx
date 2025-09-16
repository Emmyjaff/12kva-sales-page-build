import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, Leaf, Building, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Energy Costs",
    description: "Cut your electricity bills by up to 90% with our efficient solar system.",
    stat: "90%",
    statLabel: "Cost Reduction",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduce your carbon footprint and contribute to a sustainable future.",
    stat: "15 Tons",
    statLabel: "CO₂ Saved Annually",
  },
  {
    icon: Building,
    title: "Business Continuity",
    description: "Ensure uninterrupted operations with reliable backup power.",
    stat: "24/7",
    statLabel: "Power Availability",
  },
  {
    icon: Zap,
    title: "ROI & Payback",
    description: "Achieve full return on investment within 3-5 years of installation.",
    stat: "3-5 Years",
    statLabel: "Payback Period",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            Business Benefits
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Transform Your Business Operations</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Experience immediate and long-term benefits that will revolutionize how your business manages energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-semibold text-card-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    <div className="pt-4 border-t border-border">
                      <div className="text-3xl font-bold text-secondary">{benefit.stat}</div>
                      <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
