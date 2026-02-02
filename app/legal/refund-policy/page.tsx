import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Refund Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 15, 2026
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Refundable
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>- Service fees before filing submission</li>
                  <li>- Orders cancelled within 24 hours</li>
                  <li>- Failed filings due to our error</li>
                  <li>- Duplicate charges</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  Non-Refundable
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>- State filing fees (paid to government)</li>
                  <li>- Orders after filing submission</li>
                  <li>- Completed services</li>
                  <li>- Registered agent services after activation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Overview
              </h2>
              <p>
                At Nexton Enterprises, we want you to be completely satisfied
                with our services. This refund policy outlines when and how you
                can request a refund for our business formation services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Service Fee Refunds
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Before Filing Submission
              </h3>
              <p>
                If you cancel your order before we submit your documents to the
                state, you are eligible for a full refund of our service fees.
                To cancel, contact us at support@nextonenterprises.com.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                After Filing Submission
              </h3>
              <p>
                Once we have submitted your documents to the state filing
                office, our service fees are non-refundable. This is because we
                have already performed the service of preparing and filing your
                documents.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                24-Hour Cancellation Window
              </h3>
              <p>
                You may cancel your order within 24 hours of purchase for a full
                refund, regardless of filing status, provided the state has not
                already approved your formation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. State Filing Fees
              </h2>
              <p>
                <strong>State filing fees are non-refundable.</strong> These
                fees are collected on behalf of state governments and are
                immediately forwarded to the appropriate state filing office.
                State agencies do not issue refunds for filing fees once
                submitted.
              </p>
              <p className="mt-4">
                If a state rejects your filing for reasons within our control
                (our error), we will re-file at no additional cost. If the
                rejection is due to information you provided, additional fees
                may apply.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Registered Agent Services
              </h2>
              <p>
                Registered agent services are billed annually in advance.
                Refunds for registered agent services are handled as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Before Activation:</strong> Full refund available
                </li>
                <li>
                  <strong>Within 30 Days of Activation:</strong> Pro-rated
                  refund available
                </li>
                <li>
                  <strong>After 30 Days:</strong> No refund, but you may
                  transfer service to another provider
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. EIN Application Services
              </h2>
              <p>
                EIN application fees are refundable only if we have not yet
                submitted your application to the IRS. Once submitted, the
                service is considered complete and non-refundable.
              </p>
              <p className="mt-4">
                If the IRS rejects your application due to an error on our part,
                we will re-apply at no additional cost.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Annual Report Services
              </h2>
              <p>
                Annual report filing fees are refundable if cancelled before we
                submit the report to the state. After submission, no refunds are
                available.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. 48-Hour Guarantee
              </h2>
              <p>
                If we fail to submit your LLC formation documents within 48
                hours of receiving complete and accurate information (and it is
                not due to state office closures, holidays, or circumstances
                beyond our control), you may request a refund of our service fee
                or receive a service credit for future use.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. How to Request a Refund
              </h2>
              <p>To request a refund, please:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Email us at refunds@nextonenterprises.com</li>
                <li>Include your order number and email address</li>
                <li>Explain the reason for your refund request</li>
                <li>Allow 5-7 business days for review</li>
              </ol>
              <p className="mt-4">
                Approved refunds will be credited to your original payment
                method within 5-10 business days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Disputes
              </h2>
              <p>
                If you believe you are entitled to a refund that has been
                denied, you may appeal by emailing support@nextonenterprises.com
                with additional information. We will review your case and
                respond within 10 business days.
              </p>
              <p className="mt-4">
                Please contact us before initiating a chargeback with your
                credit card company. Chargebacks may result in delays and
                additional fees.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We reserve the right to modify this refund policy at any time.
                Changes will be effective immediately upon posting to our
                website. Your continued use of our services after changes are
                posted constitutes acceptance of the modified policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this refund policy, please contact
                us:
              </p>
              <p className="mt-4">
                <strong>Nexton Enterprises LLC</strong>
                <br />
                1712 Pioneer Ave, Suite 500
                <br />
                Cheyenne, WY 82001
                <br />
                Email: refunds@nextonenterprises.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
