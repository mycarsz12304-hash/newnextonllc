import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Globe,
  Heart,
  Zap,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere in the world. We are a distributed team across 15+ countries.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness stipend.",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Users,
    title: "Team Retreats",
    description: "Annual company retreats to connect with teammates from around the world.",
  },
];

const openings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and scale our platform to serve entrepreneurs worldwide.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US/EU timezone)",
    type: "Full-time",
    description: "Help our customers succeed in their US business journey.",
  },
  {
    title: "Compliance Specialist",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Ensure our customers stay compliant with state regulations.",
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Create educational content that helps entrepreneurs worldwide.",
  },
  {
    title: "Product Designer",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Design intuitive experiences for our global customer base.",
  },
];

const values = [
  "Customer obsession",
  "Transparency",
  "Continuous learning",
  "Global mindset",
  "Ownership",
  "Collaboration",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Careers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Join Our Mission to Empower Global Entrepreneurs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are building the future of business formation. Join a team that
              is helping thousands of entrepreneurs worldwide launch their US
              businesses.
            </p>
            <Button size="lg" asChild>
              <a href="#openings">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Team Members" },
              { value: "15+", label: "Countries" },
              { value: "100%", label: "Remote" },
              { value: "4.8", label: "Glassdoor Rating" },
            ].map((stat) => (
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

      {/* Benefits */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground">
              We take care of our team so they can take care of our customers
            </p>
          </div>
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

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              What we look for in every team member
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value) => (
              <Badge
                key={value}
                variant="secondary"
                className="text-base py-2 px-4"
              >
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              Find your next opportunity with us
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <Card
                key={job.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Match CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Do not See a Perfect Match?
          </h2>
          <p className="text-muted-foreground mb-6">
            We are always looking for talented people. Send us your resume and
            we will reach out when a relevant position opens.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="mailto:careers@nextonenterprises.com">
              Send Your Resume
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
