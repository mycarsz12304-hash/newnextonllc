import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Globe,
  Users,
  Shield,
  Award,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "10,000+", label: "LLCs Formed" },
  { value: "190+", label: "Countries Served" },
  { value: "48hr", label: "Average Formation Time" },
  { value: "99%", label: "Customer Satisfaction" },
];

const values = [
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "We believe entrepreneurship should have no borders. We make US business formation accessible to everyone, regardless of where they live.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "We handle sensitive business matters with the utmost care and transparency. Your success is our reputation.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description:
      "We transform complex legal processes into straightforward steps. No jargon, no confusion—just results.",
  },
  {
    icon: Heart,
    title: "Support",
    description:
      "We are invested in your success. Our team is always ready to help you navigate your US business journey.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former corporate lawyer with 15+ years of experience in business formation and international law.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Serial entrepreneur who has built and scaled multiple SaaS companies serving global markets.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Operations",
    bio: "Operations expert with deep experience in compliance and registered agent services.",
  },
  {
    name: "David Park",
    role: "Head of Customer Success",
    bio: "Passionate about helping international entrepreneurs succeed in the US market.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Empowering Global Entrepreneurs
            </h1>
            <p className="text-xl text-muted-foreground">
              We started Nexton Enterprises with a simple mission: make US
              business formation accessible to entrepreneurs worldwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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

      {/* Story */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Story
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Nexton Enterprises was founded in 2019 by a team of entrepreneurs
              and legal professionals who experienced firsthand the challenges
              of starting a US business from abroad.
            </p>
            <p className="mb-6">
              We saw talented entrepreneurs around the world struggle with
              complex paperwork, confusing regulations, and expensive legal
              fees—barriers that prevented them from accessing the world&apos;s
              largest economy.
            </p>
            <p className="mb-6">
              We built Nexton Enterprises to change that. Our platform combines
              technology with expert knowledge to streamline the entire process.
              What once took weeks and thousands of dollars now takes 48 hours
              and a fraction of the cost.
            </p>
            <p>
              Today, we have helped over 10,000 entrepreneurs from more than 190
              countries launch their US businesses. And we are just getting
              started.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground">
              Meet the people behind Nexton Enterprises
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary/50" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recognition
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Best Business Formation Service 2025",
              "Top 50 Legal Tech Startups",
              "Inc. 5000 Fastest Growing Companies",
              "Entrepreneur Magazine Editor's Choice",
            ].map((award) => (
              <div
                key={award}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Award className="h-5 w-5 text-primary" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of entrepreneurs who have trusted Nexton Enterprises
            with their US business formation.
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
