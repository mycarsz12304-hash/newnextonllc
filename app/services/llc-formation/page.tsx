import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle2,
  Clock,
  Shield,
  FileText,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Clock,
    title: "48-Hour Formation",
    description:
      "Get your LLC formed in just 48 hours with our expedited processing.",
  },
  {
    icon: Shield,
    title: "Asset Protection",
    description:
      "Protect your personal assets from business liabilities and lawsuits.",
  },
  {
    icon: Globe,
    title: "No US Presence Required",
    description:
      "Form your LLC from anywhere in the world without visiting the US.",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description:
      "Receive all necessary legal documents including Articles of Organization.",
  },
];

const steps = [
  {
    step: "1",
    title: "Choose Your State",
    description:
      "Select the best state for your business needs. Wyoming is recommended for most non-residents.",
  },
  {
    step: "2",
    title: "Provide Information",
    description:
      "Fill out our simple online form with your business details and member information.",
  },
  {
    step: "3",
    title: "We File Everything",
    description:
      "Our team prepares and files all documents with the state on your behalf.",
  },
  {
    step: "4",
    title: "Receive Your LLC",
    description:
      "Get your approved LLC documents and start operating your US business.",
  },
];

const includedItems = [
  "Articles of Organization filing",
  "Operating Agreement template",
  "EIN/Tax ID application assistance",
  "Registered Agent (1st year free)",
  "Digital document storage",
  "Compliance calendar reminders",
  "Business formation certificate",
  "Membership certificates",
];

export default function LLCFormationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Most Popular Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              US LLC Formation for Non-Residents
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Start your American business journey today. We handle all the
              paperwork while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/order">
                  Start Your LLC <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources/state-guides">Compare States</Link>
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes forming your LLC simple and fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything You Need to Get Started
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our LLC formation packages include all the essentials to launch
                your US business with confidence.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {includedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">
                  48-Hour Guarantee
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                We guarantee your LLC will be filed within 48 hours of receiving
                your complete information, or we will refund our service fee.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link href="/order">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your US Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of international entrepreneurs who have formed their
            US LLC with Nexton Enterprises.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/order">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
