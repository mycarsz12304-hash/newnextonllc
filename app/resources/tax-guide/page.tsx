import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  AlertTriangle,
  ArrowRight,
  FileText,
  Calendar,
  DollarSign,
  Globe,
} from "lucide-react";
import Link from "next/link";

const taxForms = [
  {
    form: "Form 5472",
    description: "Information return for 25% foreign-owned US corporations and LLCs",
    deadline: "April 15 (with extension to October 15)",
    required: "Required for all foreign-owned single-member LLCs",
  },
  {
    form: "Form 1120",
    description: "US Corporation Income Tax Return (if treated as corporation)",
    deadline: "April 15",
    required: "Required if LLC elects corporate taxation",
  },
  {
    form: "Form 1040-NR",
    description: "US Nonresident Alien Income Tax Return",
    deadline: "April 15 or June 15",
    required: "Required if you have US-source income",
  },
  {
    form: "FBAR (FinCEN 114)",
    description: "Report of Foreign Bank and Financial Accounts",
    deadline: "April 15 (automatic extension to October 15)",
    required: "If foreign accounts exceed $10,000 aggregate",
  },
];

const taxTips = [
  {
    icon: FileText,
    title: "Keep Detailed Records",
    description:
      "Maintain thorough records of all income, expenses, and transactions for your US LLC.",
  },
  {
    icon: Calendar,
    title: "Never Miss Deadlines",
    description:
      "Penalties for late filings can be severe. Form 5472 penalty is $25,000 per form.",
  },
  {
    icon: DollarSign,
    title: "Understand Tax Treaties",
    description:
      "Your home country may have a tax treaty with the US that affects your obligations.",
  },
  {
    icon: Globe,
    title: "Consider Professional Help",
    description:
      "US tax law is complex. Work with a CPA familiar with foreign-owned businesses.",
  },
];

export default function TaxGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Tax Information
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              US Tax Guide for Foreign-Owned LLCs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding your US tax obligations as a non-resident LLC owner.
              Essential information for staying compliant.
            </p>
          </div>

          {/* Disclaimer */}
          <Card className="max-w-3xl mx-auto border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    This guide is for informational purposes only and does not
                    constitute tax advice. Tax laws are complex and change
                    frequently. Always consult with a qualified tax professional
                    for advice specific to your situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Tax Concepts
            </h2>
            <p className="text-muted-foreground">
              Understanding how US taxes work for foreign-owned LLCs
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Default Tax Treatment: Disregarded Entity
                </h3>
                <p className="text-muted-foreground mb-4">
                  By default, a single-member LLC owned by a non-resident is
                  treated as a &quot;disregarded entity&quot; for US tax purposes. This
                  means the LLC itself does not pay US income tax. Instead,
                  income passes through to the owner.
                </p>
                <p className="text-muted-foreground">
                  However, you are still required to file informational returns
                  (Form 5472) with the IRS, even if you owe no US taxes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  When Do Non-Residents Owe US Taxes?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Non-residents generally only owe US taxes on income
                  &quot;effectively connected&quot; with a US trade or business, or on
                  certain types of US-source income like:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Income from services performed in the US</li>
                  <li>Rental income from US real estate</li>
                  <li>Income from a US-based business with physical presence</li>
                  <li>Certain investment income from US sources</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Online businesses operated entirely from outside the US
                  typically do not create &quot;effectively connected income.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Tax Treaties
                </h3>
                <p className="text-muted-foreground">
                  The US has tax treaties with many countries that may reduce or
                  eliminate certain US tax obligations. Check if your country has
                  a tax treaty with the US and understand how it applies to your
                  situation. A qualified international tax professional can help
                  you navigate treaty benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Required Forms */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Required Tax Forms
            </h2>
            <p className="text-muted-foreground">
              Common IRS forms for foreign-owned LLCs
            </p>
          </div>

          <div className="space-y-4">
            {taxForms.map((form) => (
              <Card key={form.form} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        {form.form}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {form.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {form.required}
                      </p>
                    </div>
                    <div className="md:text-right">
                      <Badge variant="secondary">{form.deadline}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form 5472 Warning */}
          <Card className="mt-8 border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Form 5472 is Critical
                  </h3>
                  <p className="text-muted-foreground">
                    The penalty for failing to file Form 5472 is{" "}
                    <strong>$25,000 per form</strong>. This form is required
                    annually for all foreign-owned single-member LLCs, even if
                    the LLC had no income or activity during the year.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tax Tips */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tax Compliance Tips
            </h2>
            <p className="text-muted-foreground">
              Best practices for staying compliant with US tax requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taxTips.map((tip) => (
              <Card key={tip.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
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
            Need Help with Tax Compliance?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Our Enterprise package includes tax consultation to help you
            understand your obligations.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/#pricing">
              View Enterprise Package <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
