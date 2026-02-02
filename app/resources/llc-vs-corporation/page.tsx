import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparisonData = [
  {
    category: "Formation",
    llc: "Simple, flexible structure",
    corp: "More formal requirements",
  },
  {
    category: "Ownership",
    llc: "Members (flexible ownership)",
    corp: "Shareholders (stock-based)",
  },
  {
    category: "Management",
    llc: "Member or manager-managed",
    corp: "Board of directors required",
  },
  {
    category: "Taxation",
    llc: "Pass-through (default)",
    corp: "Double taxation (C-Corp) or pass-through (S-Corp)",
  },
  {
    category: "Formalities",
    llc: "Minimal requirements",
    corp: "Annual meetings, minutes, bylaws",
  },
  {
    category: "Profit Distribution",
    llc: "Flexible allocation",
    corp: "Based on share ownership",
  },
  {
    category: "Raising Investment",
    llc: "More difficult",
    corp: "Preferred by investors",
  },
  {
    category: "Non-Resident Friendly",
    llc: "Yes, very accessible",
    corp: "Yes, but more complex",
  },
];

const llcAdvantages = [
  "Simpler and cheaper to form and maintain",
  "Flexible profit distribution among members",
  "No requirement for annual meetings or corporate minutes",
  "Pass-through taxation avoids double taxation",
  "Fewer ongoing compliance requirements",
  "Easier to manage for small businesses",
  "More privacy in most states",
  "Ideal for non-residents running online businesses",
];

const corpAdvantages = [
  "Preferred structure for venture capital funding",
  "Can issue different classes of stock",
  "Easier to transfer ownership through stock sales",
  "More established legal precedents",
  "Better for going public (IPO)",
  "S-Corp election available for tax benefits",
  "More credibility with some enterprise clients",
  "Stock options for employee compensation",
];

export default function LLCvsCorporationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Business Structures
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              LLC vs Corporation: Which is Right for You?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding the key differences between LLCs and Corporations to
              make the best choice for your business.
            </p>
          </div>

          {/* Quick Answer */}
          <Card className="max-w-3xl mx-auto border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Quick Answer for Non-Residents
              </h2>
              <p className="text-muted-foreground mb-4">
                For most non-resident entrepreneurs, especially those running
                online businesses, e-commerce stores, or service-based
                companies, an <strong>LLC is the better choice</strong>. It
                offers simpler formation, lower costs, flexible taxation, and
                fewer compliance requirements.
              </p>
              <p className="text-muted-foreground">
                Choose a Corporation only if you plan to raise venture capital
                or eventually go public.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Side-by-Side Comparison
            </h2>
            <p className="text-muted-foreground">
              Key differences between LLCs and Corporations
            </p>
          </div>

          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold text-primary">
                      LLC
                    </th>
                    <th className="text-left p-4 font-semibold">Corporation</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.category} className="border-t">
                      <td className="p-4 font-medium">{row.category}</td>
                      <td className="p-4 text-muted-foreground">{row.llc}</td>
                      <td className="p-4 text-muted-foreground">{row.corp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* LLC Advantages */}
            <Card className="border-primary border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Badge>Recommended for Most</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  LLC Advantages
                </h3>
                <ul className="space-y-3">
                  {llcAdvantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Corp Advantages */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary">For VC-Backed Startups</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Corporation Advantages
                </h3>
                <ul className="space-y-3">
                  {corpAdvantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              When to Choose Each
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Choose an LLC if you:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Run an online business or e-commerce store
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Want simplicity and low maintenance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Are self-funded or bootstrapping
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Provide services or consulting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Value privacy and flexibility
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Choose a Corporation if you:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Plan to raise venture capital
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Want to issue stock options to employees
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Plan to go public eventually
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Building a high-growth tech startup
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Need to attract institutional investors
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Form Your LLC?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of international entrepreneurs who have chosen an LLC
            for their US business.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/#pricing">
              Start Your LLC Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
