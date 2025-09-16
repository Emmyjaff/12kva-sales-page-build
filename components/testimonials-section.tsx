import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Adebayo Ogundimu",
    role: "Operations Manager",
    company: "Lagos Manufacturing Ltd",
    image: "/professional-african-business-man.jpg",
    rating: 5,
    content:
      "The 12KVA system has completely transformed our operations. We've reduced our energy costs by 85% and haven't experienced a single power outage since installation.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "CEO",
    company: "Kano Tech Hub",
    image: "/professional-african-business-woman.jpg",
    rating: 5,
    content:
      "Outstanding reliability and performance. Our office building now runs entirely on solar power during the day, and the battery backup keeps us running through the night.",
  },
  {
    name: "Chinedu Okwu",
    role: "Facility Manager",
    company: "Port Harcourt Industrial Complex",
    image: "/professional-african-facility-manager.jpg",
    rating: 5,
    content:
      "The installation was seamless and the system has exceeded our expectations. The 24/7 monitoring gives us complete peace of mind about our power supply.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            Customer Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Trusted by Leading Businesses</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            See how our solar solutions have transformed businesses across Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="h-8 w-8 text-secondary/20 absolute -top-2 -left-2" />
                    <p className="text-card-foreground leading-relaxed pl-6">{testimonial.content}</p>
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
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
