import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    action: "support@nextonenterprises.com",
    href: "mailto:support@nextonenterprises.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Mon-Fri, 9am-6pm EST",
    action: "Start Chat",
    href: "#",
  },
  {
    icon: Phone,
    title: "Phone (US)",
    description: "For urgent matters",
    action: "+1 (307) 310-7125",
    href: "tel:+13073107125",
  },
  {
    icon: Phone,
    title: "Phone (India)",
    description: "For Indian clients",
    action: "+91 8400406065",
    href: "tel:+918400406065",
  },
];

const offices = [
  {
    city: "Cheyenne, Wyoming",
    address: "1712 Pioneer Ave, Suite 500",
    zip: "Cheyenne, WY 82001",
    type: "Headquarters",
  },
  {
    city: "Dover, Delaware",
    address: "8 The Green, Suite 300",
    zip: "Dover, DE 19901",
    type: "Regional Office",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We are here to help. Reach out to our team and we
              will get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Link
                    href={method.href}
                    className="text-primary font-medium hover:underline"
                  >
                    {method.action}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
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
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="Your country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border bg-background">
                    <option>General Inquiry</option>
                    <option>LLC Formation</option>
                    <option>Registered Agent</option>
                    <option>EIN Application</option>
                    <option>Billing Question</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border bg-background resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Office Locations
              </h2>
              <div className="space-y-6 mb-8">
                {offices.map((office) => (
                  <Card key={office.city} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {office.type}
                          </Badge>
                          <h3 className="font-semibold text-foreground">
                            {office.city}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {office.address}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {office.zip}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Business Hours
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Saturday - Sunday: Closed
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Email support available 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our Help Center for answers to frequently asked questions.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/resources/help-center">Visit Help Center</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
