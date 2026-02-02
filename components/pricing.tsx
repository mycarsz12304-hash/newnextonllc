import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Essential LLC formation for new entrepreneurs",
    features: [
      "LLC Formation Filing",
      "Articles of Organization",
      "Operating Agreement Template",
      "Name Availability Check",
      "48-Hour Processing",
      "Digital Document Delivery",
      "Email Support",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "$499",
    description: "Complete package for serious business owners",
    features: [
      "Everything in Starter",
      "EIN/Tax ID Application",
      "1 Year Registered Agent",
      "Custom Operating Agreement",
      "US Mailing Address",
      "Banking Resolution",
      "Priority Processing",
      "Phone & Chat Support",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$799",
    description: "Premium service with full compliance support",
    features: [
      "Everything in Business",
      "2 Years Registered Agent",
      "Annual Report Service",
      "Compliance Calendar",
      "Business License Report",
      "Foreign Qualification Guide",
      "Dedicated Account Manager",
      "Same-Day Processing",
    ],
    popular: false,
    cta: "Go Premium",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent Pricing, No Hidden Fees
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the package that fits your business needs. All prices exclude state filing fees.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border bg-card p-8",
                plan.popular
                  ? "border-primary shadow-lg ring-1 ring-primary"
                  : "border-border/60"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> + state fees</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "mt-8 w-full",
                  !plan.popular && "bg-foreground text-background hover:bg-foreground/90"
                )}
                size="lg"
                asChild
              >
                <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All packages include our 48-hour formation guarantee. 30-day money-back guarantee on service fees.
        </p>
      </div>
    </section>
  )
}
