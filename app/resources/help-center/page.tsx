import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Search,
  FileText,
  Building2,
  CreditCard,
  Globe,
  HelpCircle,
  Mail,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: FileText,
    title: "LLC Formation",
    description: "Getting started with your US LLC",
    articles: [
      "How long does LLC formation take?",
      "What information do I need to provide?",
      "Which state should I choose?",
      "What documents will I receive?",
    ],
  },
  {
    icon: Building2,
    title: "Registered Agent",
    description: "Understanding registered agent services",
    articles: [
      "What is a registered agent?",
      "Why do I need a registered agent?",
      "How does mail forwarding work?",
      "Can I change my registered agent?",
    ],
  },
  {
    icon: CreditCard,
    title: "EIN & Banking",
    description: "Tax ID and bank account setup",
    articles: [
      "How do I get an EIN as a non-resident?",
      "How long does the EIN process take?",
      "Which banks accept non-resident LLCs?",
      "What documents do banks require?",
    ],
  },
  {
    icon: Globe,
    title: "Compliance",
    description: "Staying compliant with US regulations",
    articles: [
      "What is an annual report?",
      "When is my annual report due?",
      "What happens if I miss a deadline?",
      "How do I maintain good standing?",
    ],
  },
];

const popularQuestions = [
  {
    question: "How long does it take to form an LLC?",
    answer:
      "With our expedited service, your LLC can be formed in as little as 48 hours. Processing times vary by state, but we guarantee filing within 48 hours of receiving your complete information.",
  },
  {
    question: "Do I need to visit the US to form an LLC?",
    answer:
      "No, you can form a US LLC entirely remotely. We handle all the paperwork and filings on your behalf. You never need to visit the United States.",
  },
  {
    question: "Can I open a US bank account as a non-resident?",
    answer:
      "Yes, many US banks accept non-resident LLC owners. Some require an in-person visit, but several banks offer remote account opening. We provide guidance on the best options for non-residents.",
  },
  {
    question: "What is the difference between EIN and ITIN?",
    answer:
      "An EIN (Employer Identification Number) is a tax ID for your business. An ITIN (Individual Taxpayer Identification Number) is a personal tax ID for individuals who cannot get an SSN. Your LLC needs an EIN, not an ITIN.",
  },
  {
    question: "Do I need to pay US taxes?",
    answer:
      "It depends on your situation. Non-residents generally only owe US taxes on income effectively connected with a US trade or business. Online businesses operated entirely from outside the US typically do not create US tax obligations, but you must still file informational returns.",
  },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about US LLC formation for
              non-residents.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <span className="text-sm text-primary cursor-pointer hover:underline">
                          {article}
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

      {/* Popular Questions */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to the most common questions
            </p>
          </div>

          <div className="space-y-4">
            {popularQuestions.map((faq) => (
              <Card key={faq.question} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <HelpCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/#faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-muted-foreground">
              Our support team is here to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Email Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get a response within 24 hours
                </p>
                <Button variant="outline" asChild>
                  <Link href="mailto:support@nextonenterprises.com">
                    Send Email
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Chat with us instantly
                </p>
                <Button asChild>
                  <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">
                    Message Us
                  </Link>
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
            Ready to Start Your US Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Form your LLC today and get access to our dedicated support team.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/order">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
