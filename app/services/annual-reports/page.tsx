import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle2,
  Calendar,
  Bell,
  FileCheck,
  Shield,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const consequences = [
  "Late fees and penalties",
  "Loss of good standing status",
  "Potential administrative dissolution",
  "Inability to conduct business",
  "Loss of liability protection",
  "Difficulty opening bank accounts",
];

const features = [
  {
    icon: Calendar,
    title: "Deadline Tracking",
    description:
      "We monitor all your compliance deadlines and ensure nothing is missed.",
  },
  {
    icon: Bell,
    title: "Reminder Notifications",
    description:
      "Receive timely reminders well before your annual report is due.",
  },
  {
    icon: FileCheck,
    title: "Preparation & Filing",
    description:
      "We prepare and file your annual report with the state on your behalf.",
  },
  {
    icon: Shield,
    title: "Good Standing Maintained",
    description: "Keep your LLC in good standing and maintain liability protection.",
  },
];

const stateDeadlines = [
  { state: "Wyoming", deadline: "Anniversary month", fee: "$60" },
  { state: "Delaware", deadline: "June 1st", fee: "$300" },
  { state: "New Mexico", deadline: "None required", fee: "$0" },
  { state: "Florida", deadline: "May 1st", fee: "$138.75" },
  { state: "Nevada", deadline: "Anniversary month", fee: "$350" },
  { state: "Texas", deadline: "May 15th", fee: "Varies" },
];

export default function AnnualReportsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Stay Compliant
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
                Annual Report Filing Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Never miss a deadline. We track, prepare, and file your annual
                reports to keep your LLC in good standing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/#pricing">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/resources/state-guides">State Requirements</Link>
                </Button>
              </div>
            </div>
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <h3 className="font-semibold text-foreground">
                    Consequences of Missing Deadlines
                  </h3>
                </div>
                <ul className="space-y-2">
                  {consequences.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Annual Report Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete compliance management for your LLC
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State Deadlines */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular State Deadlines
            </h2>
            <p className="text-lg text-muted-foreground">
              Annual report requirements vary by state
            </p>
          </div>
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">State</th>
                    <th className="text-left p-4 font-semibold">Deadline</th>
                    <th className="text-right p-4 font-semibold">State Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {stateDeadlines.map((row) => (
                    <tr key={row.state} className="border-t">
                      <td className="p-4 font-medium">{row.state}</td>
                      <td className="p-4 text-muted-foreground">
                        {row.deadline}
                      </td>
                      <td className="p-4 text-right">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Our service fee is $49 plus state filing fees
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary border-2 shadow-lg">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4">Simple Pricing</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Annual Report Service
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">$49</div>
              <p className="text-muted-foreground mb-6">
                per filing + state fees
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Deadline monitoring & reminders</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Report preparation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>State filing on your behalf</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Confirmation & documentation</span>
                </li>
              </ul>
              <Button size="lg" className="w-full" asChild>
                <Link href="/#pricing">Add to Your Package</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Compliant, Stay Protected
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let us handle your annual report filings while you focus on growing
            your business.
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
