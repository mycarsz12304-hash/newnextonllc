import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle2,
  MapPin,
  Mail,
  Bell,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MapPin,
    title: "Physical Address in All 50 States",
    description:
      "We provide a valid street address for your LLC in your state of formation.",
  },
  {
    icon: Mail,
    title: "Document Forwarding",
    description:
      "All legal documents are scanned and forwarded to you via email instantly.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Receive immediate alerts when important documents arrive for your business.",
  },
  {
    icon: Shield,
    title: "Privacy Protection",
    description:
      "Keep your personal address off public records and protect your privacy.",
  },
  {
    icon: Clock,
    title: "Annual Report Reminders",
    description:
      "Never miss a compliance deadline with our automated reminder system.",
  },
];

const included = [
  "Official registered agent services",
  "Physical street address",
  "Document scanning & forwarding",
  "Online document portal access",
  "Compliance deadline alerts",
  "Annual report reminders",
  "Service of process handling",
  "Mail forwarding (optional)",
];

export default function RegisteredAgentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Required for Every LLC
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
                Professional Registered Agent Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Every US LLC is legally required to have a registered agent. We
                provide reliable, professional service in all 50 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/#pricing">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services/llc-formation">Learn About LLCs</Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">$49</div>
                <div className="text-muted-foreground">per year</div>
              </div>
              <div className="space-y-3">
                {included.slice(0, 5).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full mt-6" asChild>
                <Link href="/#pricing">First Year Free with LLC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Registered Agent */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is a Registered Agent?
            </h2>
            <p className="text-lg text-muted-foreground">
              A registered agent is a person or company designated to receive
              legal documents and official correspondence on behalf of your LLC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Why You Need One
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>- Legally required in all US states</li>
                  <li>- Must have a physical address (no PO boxes)</li>
                  <li>- Must be available during business hours</li>
                  <li>- Receives service of process (lawsuits)</li>
                  <li>- Handles state correspondence</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Why Use Our Service
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>- Professional handling of documents</li>
                  <li>- Privacy for your personal address</li>
                  <li>- Never miss important deadlines</li>
                  <li>- Available in all 50 states</li>
                  <li>- Instant digital document delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything Included
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive registered agent service for your peace of mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
            First Year Free with Any LLC Package
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Get professional registered agent service included free for your
            first year when you form your LLC with us.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/#pricing">
              Form Your LLC Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
