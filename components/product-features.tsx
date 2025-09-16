import { Card, CardContent } from "@/components/ui/card"
import { Battery, Zap, Shield, Wrench, TrendingUp, Clock } from "lucide-react"

const features = [
  {
    icon: Battery,
    title: "15KWH Lithium Battery",
    description: "High-capacity lithium-ion battery for extended power backup and optimal energy storage.",
  },
  {
    icon: Zap,
    title: "12KVA Power Output",
    description: "Robust power delivery suitable for heavy appliances and industrial equipment.",
  },
  {
    icon: Shield,
    title: "Commercial Grade",
    description: "Built to withstand demanding commercial environments with superior durability.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description: "Professional installation service included with comprehensive setup and testing.",
  },
  {
    icon: TrendingUp,
    title: "Energy Efficient",
    description: "20 x 550W solar panels for maximum energy generation and cost savings.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Real-time system monitoring and remote diagnostics for optimal performance.",
  },
]

export function ProductFeatures() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Why Choose Our 12KVA System?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Engineered for reliability, efficiency, and long-term performance in commercial environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
