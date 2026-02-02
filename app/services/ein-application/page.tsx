import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle2,
  FileText,
  Building2,
  CreditCard,
  Globe,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const uses = [
  {
    icon: Building2,
    title: "Open a US Bank Account",
    description:
      "An EIN is required by most US banks to open a business bank account.",
  },
  {
    icon: CreditCard,
    title: "Accept Payments",
    description:
      "Payment processors like Stripe and PayPal require an EIN for business accounts.",
  },
  {
    icon: FileText,
    title: "File Tax Returns",
    description:
      "You'll need an EIN to file your annual tax returns with the IRS.",
  },
  {
    icon: Globe,
    title: "Hire Employees",
    description:
      "An EIN is mandatory if you plan to hire employees in the United States.",
  },
];

const process = [
  {
    step: "1",
    title: "Provide Information",
    description: "Submit your LLC details and responsible party information.",
  },
  {
    step: "2",
    title: "We Prepare Application",
    description: "Our team prepares and reviews your SS-4 form for accuracy.",
  },
  {
    step: "3",
    title: "Submit to IRS",
    description: "We submit your application to the IRS on your behalf.",
  },
  {
    step: "4",
    title: "Receive Your EIN",
    description: "Get your EIN confirmation letter within 4-6 weeks.",
  },
];

export default function EINApplicationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Essential for Business
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              EIN Application for Non-Residents
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get your Employer Identification Number (EIN) from the IRS. We
              handle the entire process for non-US residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">
                  Get Your EIN <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/llc-formation">Form an LLC First</Link>
              </Button>
            </div>
          </div>

          {/* Info Card */}
          <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Important for Non-Residents
                  </h3>
                  <p className="text-muted-foreground">
                    Non-US residents without an SSN or ITIN must apply for an
                    EIN by mail or fax. This process takes 4-6 weeks. We handle
                    all the paperwork and communication with the IRS for you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Can Do With an EIN
            </h2>
            <p className="text-lg text-muted-foreground">
              Your EIN unlocks essential business capabilities in the US
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uses.map((use) => (
              <Card key={use.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <use.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {use.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {use.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our EIN Application Process
            </h2>
            <p className="text-lg text-muted-foreground">
              We make getting your EIN simple and hassle-free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  EIN Only
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">$99</div>
                <p className="text-muted-foreground mb-6">
                  For existing LLCs that need an EIN application
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>SS-4 form preparation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>IRS submission</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>EIN confirmation letter</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">Get EIN Only</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary border-2 shadow-lg">
              <CardContent className="p-8">
                <Badge className="mb-4">Best Value</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  LLC + EIN Bundle
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">$499</div>
                <p className="text-muted-foreground mb-6">
                  Complete LLC formation with EIN application included
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Full LLC formation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>EIN application included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Registered agent (1st year)</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">Get LLC + EIN</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Your EIN?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let us handle the paperwork while you focus on building your
            business.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">
              Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
