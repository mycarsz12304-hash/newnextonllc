import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle2,
  Star,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const popularStates = [
  {
    state: "Wyoming",
    recommended: true,
    filingFee: "$100",
    annualFee: "$60",
    franchiseTax: "$0",
    processing: "1 day",
    privacy: 5,
    pros: [
      "No state income tax",
      "Strongest privacy protections",
      "Low annual fees",
      "No franchise tax",
      "Fast processing",
    ],
    cons: ["Less recognizable than Delaware"],
    bestFor: "Most non-residents, privacy-focused businesses, e-commerce",
  },
  {
    state: "Delaware",
    recommended: false,
    filingFee: "$110",
    annualFee: "$300",
    franchiseTax: "$300",
    processing: "1 day",
    privacy: 4,
    pros: [
      "Most established business law",
      "Preferred by VCs and investors",
      "Specialized business courts",
      "Strong legal precedents",
    ],
    cons: [
      "Higher annual fees",
      "$300 franchise tax",
      "Publication requirements for LLCs",
    ],
    bestFor: "Startups seeking VC funding, tech companies, large corporations",
  },
  {
    state: "Nevada",
    recommended: false,
    filingFee: "$425",
    annualFee: "$350",
    franchiseTax: "$0",
    processing: "1 day",
    privacy: 5,
    pros: [
      "No state income tax",
      "Strong privacy protections",
      "No franchise tax",
      "Strong asset protection",
    ],
    cons: ["Higher filing fees", "Higher annual fees"],
    bestFor: "Privacy-focused businesses, asset protection",
  },
  {
    state: "New Mexico",
    recommended: false,
    filingFee: "$50",
    annualFee: "$0",
    franchiseTax: "$0",
    processing: "2 days",
    privacy: 4,
    pros: [
      "Lowest filing fee",
      "No annual report requirement",
      "No annual fee",
      "Good privacy",
    ],
    cons: ["Less established for business", "State income tax applies"],
    bestFor: "Budget-conscious entrepreneurs, simple businesses",
  },
  {
    state: "Florida",
    recommended: false,
    filingFee: "$125",
    annualFee: "$138.75",
    franchiseTax: "$0",
    processing: "5 days",
    privacy: 3,
    pros: ["No state income tax", "Large market access", "Growing tech scene"],
    cons: ["Annual report required", "Less privacy than Wyoming"],
    bestFor: "Businesses targeting the Florida market",
  },
];

const stateWarnings = [
  {
    state: "California",
    reason: "$800 minimum franchise tax annually, even with no income",
  },
  {
    state: "New York",
    reason: "Expensive publication requirement ($1,000-$2,000)",
  },
  {
    state: "Massachusetts",
    reason: "High filing fees and complex requirements",
  },
];

export default function StateGuidesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              State Comparison
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Best States for LLC Formation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive guides to help you choose the right state for your
              US LLC as a non-resident.
            </p>
            <Button size="lg" asChild>
              <Link href="/#state-comparison">
                View Full Comparison <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wyoming Recommendation */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary border-2 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge>Our Recommendation</Badge>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Wyoming is Best for Most Non-Residents
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For the majority of international entrepreneurs, Wyoming offers
                the perfect combination of low costs, strong privacy
                protections, and business-friendly regulations. Unless you have
                specific needs (like VC funding or a physical presence in
                another state), Wyoming is your best choice.
              </p>
              <Button size="lg" asChild>
                <Link href="/#pricing">
                  Form Wyoming LLC <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* State Details */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular States Compared
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed breakdown of the most popular states for LLC formation
            </p>
          </div>

          <div className="space-y-8">
            {popularStates.map((state) => (
              <Card
                key={state.state}
                className={`border-0 shadow-sm ${state.recommended ? "ring-2 ring-primary" : ""}`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground">
                      {state.state}
                    </h3>
                    {state.recommended && (
                      <Badge>Recommended</Badge>
                    )}
                    <div className="flex ml-auto">
                      {[...Array(state.privacy)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                      {[...Array(5 - state.privacy)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-muted-foreground/30"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Filing Fee
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {state.filingFee}
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Annual Fee
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {state.annualFee}
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Franchise Tax
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {state.franchiseTax}
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Processing
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {state.processing}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {state.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Considerations
                      </h4>
                      <ul className="space-y-2">
                        {state.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <span className="h-5 w-5 flex items-center justify-center flex-shrink-0">
                              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                            </span>
                            <span className="text-muted-foreground">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4">
                    <span className="font-medium text-foreground">
                      Best for:{" "}
                    </span>
                    <span className="text-muted-foreground">{state.bestFor}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* States to Avoid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              States to Avoid
            </h2>
            <p className="text-muted-foreground">
              These states have high costs or complex requirements for
              non-residents
            </p>
          </div>
          <div className="space-y-4">
            {stateWarnings.map((warning) => (
              <Card
                key={warning.state}
                className="border-destructive/20 bg-destructive/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {warning.state}
                      </h3>
                      <p className="text-muted-foreground">{warning.reason}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Form Your LLC?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Start your US business journey today with our expert formation
            services.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/#pricing">
              View Pricing Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
