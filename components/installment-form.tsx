"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FileText, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  state: string
  system: string
  systemPrice: string
  payment: string
  workplace: string
  placeOfWork: string
  salaryRange: string
}

export function InstallmentForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    system: "12KVA Inverter System",
    systemPrice: "₦10,726,675.20",
    payment: "",
    workplace: "",
    placeOfWork: "",
    salaryRange: "",
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://stroom-interest-form.onrender.com/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll review your application and get back to you within 24 hours.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          state: "",
          system: "12KVA Inverter System",
          systemPrice: "₦10,726,675.20",
          payment: "",
          workplace: "",
          placeOfWork: "",
          salaryRange: "",
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact our support team.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="installment-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="text-sm font-medium">
              Financing Application
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Apply for Installment Payment</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Complete this form to apply for financing through our partnership with Creditcorp and Fidelity Bank.
            </p>
          </div>

          <Card className="border-border shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FileText className="h-6 w-6 text-secondary" />
                <CardTitle className="text-2xl">Financing Application Form</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+234 XXX XXX XXXX"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Abia">Abia</SelectItem>
                        <SelectItem value="Adamawa">Adamawa</SelectItem>
                        <SelectItem value="Akwa Ibom">Akwa Ibom</SelectItem>
                        <SelectItem value="Anambra">Anambra</SelectItem>
                        <SelectItem value="Bauchi">Bauchi</SelectItem>
                        <SelectItem value="Bayelsa">Bayelsa</SelectItem>
                        <SelectItem value="Benue">Benue</SelectItem>
                        <SelectItem value="Borno">Borno</SelectItem>
                        <SelectItem value="Cross River">Cross River</SelectItem>
                        <SelectItem value="Delta">Delta</SelectItem>
                        <SelectItem value="Ebonyi">Ebonyi</SelectItem>
                        <SelectItem value="Edo">Edo</SelectItem>
                        <SelectItem value="Ekiti">Ekiti</SelectItem>
                        <SelectItem value="Enugu">Enugu</SelectItem>
                        <SelectItem value="FCT">FCT</SelectItem>
                        <SelectItem value="Gombe">Gombe</SelectItem>
                        <SelectItem value="Imo">Imo</SelectItem>
                        <SelectItem value="Jigawa">Jigawa</SelectItem>
                        <SelectItem value="Kaduna">Kaduna</SelectItem>
                        <SelectItem value="Kano">Kano</SelectItem>
                        <SelectItem value="Katsina">Katsina</SelectItem>
                        <SelectItem value="Kebbi">Kebbi</SelectItem>
                        <SelectItem value="Kogi">Kogi</SelectItem>
                        <SelectItem value="Kwara">Kwara</SelectItem>
                        <SelectItem value="Lagos">Lagos</SelectItem>
                        <SelectItem value="Nasarawa">Nasarawa</SelectItem>
                        <SelectItem value="Niger">Niger</SelectItem>
                        <SelectItem value="Ogun">Ogun</SelectItem>
                        <SelectItem value="Ondo">Ondo</SelectItem>
                        <SelectItem value="Osun">Osun</SelectItem>
                        <SelectItem value="Oyo">Oyo</SelectItem>
                        <SelectItem value="Plateau">Plateau</SelectItem>
                        <SelectItem value="Rivers">Rivers</SelectItem>
                        <SelectItem value="Sokoto">Sokoto</SelectItem>
                        <SelectItem value="Taraba">Taraba</SelectItem>
                        <SelectItem value="Yobe">Yobe</SelectItem>
                        <SelectItem value="Zamfara">Zamfara</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your full address"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="payment">Payment Period *</Label>
                    <Select value={formData.payment} onValueChange={(value) => handleInputChange("payment", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6 months">6 months</SelectItem>
                        <SelectItem value="12 months">12 months</SelectItem>
                        <SelectItem value="18 months">18 months</SelectItem>
                        <SelectItem value="24 months">24 months</SelectItem>
                        <SelectItem value="36 months">36 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workplace">Workplace Type *</Label>
                    <Select value={formData.workplace} onValueChange={(value) => handleInputChange("workplace", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select workplace type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Private">Private</SelectItem>
                        <SelectItem value="Government">Government</SelectItem>
                        <SelectItem value="Self-employed">Self-employed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="placeOfWork">Place of Work *</Label>
                    <Input
                      id="placeOfWork"
                      value={formData.placeOfWork}
                      onChange={(e) => handleInputChange("placeOfWork", e.target.value)}
                      placeholder="Company/Organization name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salaryRange">Monthly Salary Range *</Label>
                    <Select
                      value={formData.salaryRange}
                      onValueChange={(value) => handleInputChange("salaryRange", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select salary range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="₦50,000 - ₦100,000">₦50,000 - ₦100,000</SelectItem>
                        <SelectItem value="₦100,000 - ₦200,000">₦100,000 - ₦200,000</SelectItem>
                        <SelectItem value="₦200,000 - ₦500,000">₦200,000 - ₦500,000</SelectItem>
                        <SelectItem value="₦500,000 - ₦1,000,000">₦500,000 - ₦1,000,000</SelectItem>
                        <SelectItem value="Above ₦1,000,000">Above ₦1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting Application..."
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
