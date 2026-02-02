import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle2,
  MapPin,
  Mail,
  Building2,
  Globe,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Building2,
    title: "Professional Image",
    description:
      "Use a prestigious US business address on your website, business cards, and marketing materials.",
  },
  {
    icon: Globe,
    title: "Credibility with Customers",
    description:
      "Build trust with US customers by having a local presence in a recognized business location.",
  },
  {
    icon: Mail,
    title: "Mail Handling",
    description:
      "Receive and forward business mail, packages, and important documents to your location worldwide.",
  },
  {
    icon: MapPin,
    title: "Privacy Protection",
    description:
      "Keep your home address private by using our business address for all official correspondence.",
  },
];

const features = [
  "Premium US street address",
  "Mail receiving & scanning",
  "Package forwarding worldwide",
  "Online mail management portal",
  "Business mail notifications",
  "Check deposit service",
  "Virtual mailbox access",
  "Flexible forwarding options",
];

const locations = [
  { city: "Wyoming", address: "1712 Pioneer Ave, Cheyenne, WY 82001" },
  { city: "Delaware", address: "8 The Green, Dover, DE 19901" },
  { city: "Florida", address: "1000 Brickell Ave, Miami, FL 33131" },
  { city: "Nevada", address: "701 Bridger Ave, Las Vegas, NV 89101" },
];

export default function BusinessAddressPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Virtual Office
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              US Business Address for Non-Residents
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Establish a professional US presence with a real business address.
              Receive mail, build credibility, and protect your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#pricing">
                  Get Your Address <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/llc-formation">Form an LLC</Link>
              </Button>
            </div>
          </div>

          {/* Benefits */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Our Business Address Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a real US street address that you can use for your business.
                We handle all incoming mail and forward it to you anywhere in
                the world.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Mail Handling Process
                  </h3>
                </div>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Mail Arrives</p>
                      <p className="text-sm text-muted-foreground">
                        We receive mail at your business address
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Scan & Notify</p>
                      <p className="text-sm text-muted-foreground">
                        We scan the envelope and notify you instantly
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Your Choice</p>
                      <p className="text-sm text-muted-foreground">
                        Open & scan, forward, or shred - you decide
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose a business address in your state of formation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <Card key={location.city} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {location.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary border-2 shadow-lg">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4">Best Value</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Business Address Service
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">
                $99
              </div>
              <p className="text-muted-foreground mb-6">per year</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Premium US street address</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Unlimited mail receiving</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Mail scanning (first page free)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Online portal access</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Package forwarding (fees apply)</span>
                </li>
              </ul>
              <Button size="lg" className="w-full" asChild>
                <Link href="/#pricing">Get Your Business Address</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Establish Your US Presence Today
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Get a professional business address and start building credibility
            with US customers.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/#pricing">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
