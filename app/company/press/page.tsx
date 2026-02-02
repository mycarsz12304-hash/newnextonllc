import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Download, ExternalLink, Mail, Calendar } from "lucide-react";
import Link from "next/link";

const pressReleases = [
  {
    date: "January 15, 2026",
    title: "Nexton Enterprises Surpasses 10,000 LLC Formations for International Entrepreneurs",
    excerpt:
      "Milestone achievement demonstrates growing demand for US business formation services among global entrepreneurs.",
  },
  {
    date: "November 8, 2025",
    title: "Nexton Enterprises Launches 48-Hour LLC Formation Guarantee",
    excerpt:
      "New service commitment ensures faster business formation for non-resident entrepreneurs.",
  },
  {
    date: "September 22, 2025",
    title: "Nexton Enterprises Named to Inc. 5000 List of Fastest Growing Companies",
    excerpt:
      "Recognition highlights company's rapid growth in the business formation industry.",
  },
  {
    date: "June 5, 2025",
    title: "Nexton Enterprises Expands Registered Agent Services to All 50 States",
    excerpt:
      "Nationwide coverage provides more flexibility for international business owners.",
  },
];

const mediaFeatures = [
  {
    publication: "Forbes",
    title: "How This Startup Is Making US Business Formation Accessible to the World",
    date: "December 2025",
  },
  {
    publication: "TechCrunch",
    title: "Nexton Enterprises Raises Series A to Expand Global Business Services",
    date: "October 2025",
  },
  {
    publication: "Entrepreneur",
    title: "The Best LLC Formation Services for Non-Residents in 2026",
    date: "January 2026",
  },
  {
    publication: "Business Insider",
    title: "Why International Entrepreneurs Are Flocking to Wyoming LLCs",
    date: "November 2025",
  },
];

const companyFacts = [
  { label: "Founded", value: "2019" },
  { label: "Headquarters", value: "Cheyenne, Wyoming" },
  { label: "LLCs Formed", value: "10,000+" },
  { label: "Countries Served", value: "190+" },
  { label: "Team Size", value: "50+" },
  { label: "Customer Satisfaction", value: "99%" },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Press
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              News, press releases, and media resources about Nexton Enterprises.
            </p>
            <Button asChild>
              <Link href="mailto:press@nextonenterprises.com">
                <Mail className="mr-2 h-4 w-4" />
                Media Inquiries
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">
                Company Facts
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {fact.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Press Releases
            </h2>
          </div>
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <Card
                key={release.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {release.date}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {release.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read More <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              In the News
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {feature.publication}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Brand Assets
            </h2>
            <p className="text-muted-foreground">
              Download logos and brand guidelines for media use
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary">
                    Nexton
                  </span>
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Logo Pack
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <div className="flex gap-2">
                    <div className="h-12 w-12 rounded bg-primary" />
                    <div className="h-12 w-12 rounded bg-foreground" />
                    <div className="h-12 w-12 rounded bg-muted border" />
                  </div>
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brand Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Media Contact
          </h2>
          <p className="text-muted-foreground mb-6">
            For press inquiries, interviews, or additional information, please
            contact our communications team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:press@nextonenterprises.com">
                <Mail className="mr-2 h-4 w-4" />
                press@nextonenterprises.com
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
