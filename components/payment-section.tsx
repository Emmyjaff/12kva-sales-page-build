"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Calendar } from "lucide-react"

export function PaymentSection() {
  const [selectedPlan, setSelectedPlan] = useState<"outright" | "installment">("outright")

  const handlePaystackPayment = () => {
    // Paystack integration would go here
    console.log("Initiating Paystack payment...")
    alert("Paystack payment integration would be implemented here")
  }

  return (
    <section id="payment" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Flexible Payment Options</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Choose the payment plan that works best for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Outright Payment */}
          <Card
            className={`border-2 transition-all duration-300 ${
              selectedPlan === "outright"
                ? "border-secondary shadow-lg scale-[1.02]"
                : "border-border hover:border-secondary/50"
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CreditCard className="h-6 w-6 text-secondary" />
                <CardTitle className="text-2xl">Outright Payment</CardTitle>
              </div>
              {selectedPlan === "outright" && (
                <Badge variant="secondary" className="w-fit mx-auto">
                  Most Popular
                </Badge>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">₦10,726,675.20</div>
                <div className="text-muted-foreground">One-time payment</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Complete 12KVA system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>15KWH Lithium battery included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>20 x 550W solar panels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Professional installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>25-year warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>No interest charges</span>
                </div>
              </div>

              <Button
                className="w-full bg-secondary hover:bg-secondary/90"
                size="lg"
                onClick={() => {
                  setSelectedPlan("outright")
                  handlePaystackPayment()
                }}
              >
                Pay with Paystack
              </Button>
            </CardContent>
          </Card>

          {/* Installment Payment */}
          <Card
            className={`border-2 transition-all duration-300 ${
              selectedPlan === "installment"
                ? "border-secondary shadow-lg scale-[1.02]"
                : "border-border hover:border-secondary/50"
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Calendar className="h-6 w-6 text-secondary" />
                <CardTitle className="text-2xl">Installment Plan</CardTitle>
              </div>
              <Badge variant="outline" className="w-fit mx-auto">
                Flexible Terms
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">₦10,726,675.20</div>
                <div className="text-muted-foreground">Flexible payment terms</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Complete 12KVA system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Partnership with Creditcorp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Fidelity Bank financing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Competitive interest rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Flexible repayment terms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Quick approval process</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                size="lg"
                onClick={() => {
                  setSelectedPlan("installment")
                  document.getElementById("installment-form")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Apply for Financing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
