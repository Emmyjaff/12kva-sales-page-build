import { Zap, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">SolarPro</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading provider of commercial solar solutions in Nigeria. Powering businesses with sustainable energy
              since 2015.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>12KVA Inverter Systems</li>
              <li>Solar Panel Installation</li>
              <li>Battery Storage Solutions</li>
              <li>Maintenance Services</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>System Design</li>
              <li>Professional Installation</li>
              <li>24/7 Monitoring</li>
              <li>Technical Support</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>+234 (0) 933 838 340</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>emmyjaff22@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Akwa Ibom State, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 SolarPro. All rights reserved. Powering Nigeria's sustainable future.</p>
        </div>
      </div>
    </footer>
  )
}
