import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Handshake,
  DollarSign,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const partnerTypes = [
  {
    icon: DollarSign,
    title: "Affiliate Partners",
    description:
      "Earn commissions by referring entrepreneurs to Nexton Enterprises. Perfect for bloggers, influencers, and content creators.",
    benefits: [
      "Up to 30% commission per sale",
      "90-day cookie duration",
      "Monthly payouts",
      "Dedicated affiliate manager",
      "Marketing materials provided",
    ],
  },
  {
    icon: Users,
    title: "Referral Partners",
    description:
      "Accountants, lawyers, and business consultants who want to offer US LLC formation as an additional service to their clients.",
    benefits: [
      "White-label options available",
      "Volume-based pricing",
      "Priority support for your clients",
      "Co-branded materials",
      "API access",
    ],
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    description:
      "Banks, payment processors, and business service providers looking to integrate with our platform.",
    benefits: [
      "API integration",
      "Joint marketing opportunities",
      "Revenue sharing",
      "Custom solutions",
      "Dedicated partnership team",
    ],
  },
];

const stats = [
  { value: "$2M+", label: "Paid to Partners" },
  { value: "500+", label: "Active Partners" },
  { value: "30%", label: "Top Commission Rate" },
  { value: "45 Days", label: "Average Payout Time" },
];

const testimonials = [
  {
    quote:
      "Partnering with Nexton has been a game-changer for my consulting business. My clients get excellent service and I earn a great commission.",
    author: "James Wilson",
    role: "Business Consultant, UK",
  },
  {
    quote:
      "The affiliate program is transparent and the payouts are always on time. Highly recommend for anyone in the entrepreneur space.",
    author: "Maria Santos",
    role: "Content Creator, Brazil",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Partners
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Partner With Nexton Enterprises
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our partner ecosystem and help entrepreneurs worldwide launch
              their US businesses while growing your own revenue.
            </p>
            <Button size="lg" asChild>
              <a href="#apply">
                Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Partnership Programs
            </h2>
            <p className="text-muted-foreground">
              Choose the program that best fits your business
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type) => (
              <Card key={type.title} className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description:
                  "Fill out our partner application form and tell us about your business.",
              },
              {
                step: "2",
                title: "Get Approved",
                description:
                  "Our team reviews your application and sets up your partner account.",
              },
              {
                step: "3",
                title: "Start Earning",
                description:
                  "Share your unique link and earn commissions on every successful referral.",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Partner Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Apply to Become a Partner
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and our partnership team will be in touch
            </p>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border bg-background"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border bg-background"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Website / Social Media
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Partnership Type
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border bg-background">
                    <option>Affiliate Partner</option>
                    <option>Referral Partner</option>
                    <option>Strategic Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your audience
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border bg-background resize-none"
                    placeholder="Describe your audience and how you plan to promote Nexton Enterprises..."
                  />
                </div>
                <Button size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Questions About Partnership?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Contact our partnership team for more information.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="mailto:partners@nextonenterprises.com">
              Contact Partnership Team
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
