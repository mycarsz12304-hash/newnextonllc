import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Shield, Globe, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 gap-2 px-4 py-2">
            <Clock className="h-4 w-4" />
            <span className="font-medium">48-Hour Formation Guarantee</span>
          </Badge>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Form Your US LLC{" "}
            <span className="text-primary">From Anywhere in the World</span>
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The fastest and most reliable way for non-residents to establish their US business presence. 
            Expert guidance, transparent pricing, and your LLC ready in 48 hours or less.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <Link href="/order">
                Start Your LLC Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 px-8 bg-transparent" asChild>
              <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>48hr Formation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span>100% Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-5 w-5 text-primary" />
              <span>190+ Countries Served</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "10,000+", label: "LLCs Formed" },
            { value: "190+", label: "Countries Served" },
            { value: "48hrs", label: "Average Formation" },
            { value: "4.9/5", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border/60 bg-card p-6 text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
