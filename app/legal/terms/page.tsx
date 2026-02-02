import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 15, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the services provided by Nexton
                Enterprises LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to
                be bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Description of Services
              </h2>
              <p>
                Nexton Enterprises provides business formation services,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>LLC formation and filing</li>
                <li>Registered agent services</li>
                <li>EIN/Tax ID application assistance</li>
                <li>Annual report filing</li>
                <li>Business address services</li>
                <li>Compliance monitoring</li>
              </ul>
              <p className="mt-4">
                We are not a law firm and do not provide legal advice. Our
                services are document preparation and filing services only.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. User Responsibilities
              </h2>
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Keep your account credentials secure</li>
                <li>Notify us of any unauthorized use of your account</li>
                <li>Use our services only for lawful purposes</li>
                <li>
                  Not use our services for any fraudulent or illegal activities
                </li>
                <li>Pay all fees associated with your selected services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Payment Terms
              </h2>
              <p>
                <strong>Service Fees:</strong> All service fees are due at the
                time of order placement. Prices are subject to change without
                notice.
              </p>
              <p className="mt-4">
                <strong>State Filing Fees:</strong> State filing fees are
                separate from our service fees and are passed through at cost.
                These fees are set by each state and may change without notice.
              </p>
              <p className="mt-4">
                <strong>Payment Methods:</strong> We accept major credit cards
                and other payment methods as indicated on our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Processing Times
              </h2>
              <p>
                We commit to submitting your LLC formation documents within 48
                hours of receiving complete and accurate information. However,
                actual processing times depend on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>State processing times (which we do not control)</li>
                <li>Completeness and accuracy of provided information</li>
                <li>Any issues raised by state filing offices</li>
              </ul>
              <p className="mt-4">
                The 48-hour guarantee applies to our filing submission, not
                state approval times.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Registered Agent Services
              </h2>
              <p>If you use our registered agent services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  We will accept service of process and official correspondence
                  on your behalf
                </li>
                <li>Documents will be forwarded to you within one business day</li>
                <li>
                  You must maintain current contact information with us
                </li>
                <li>
                  Service renews annually unless cancelled before the renewal
                  date
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXTON ENTERPRISES SHALL
                NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
                LOSS OF PROFITS, DATA, OR USE.
              </p>
              <p className="mt-4">
                Our total liability for any claims arising from these terms or
                our services shall not exceed the amount you paid to us in the
                twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Disclaimer of Warranties
              </h2>
              <p>
                OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT
                THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Nexton Enterprises, its
                officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising from your use of our
                services or violation of these terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Intellectual Property
              </h2>
              <p>
                All content on our website, including text, graphics, logos, and
                software, is the property of Nexton Enterprises and is protected
                by intellectual property laws. You may not use our content
                without our written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Termination
              </h2>
              <p>
                We may terminate or suspend your access to our services at any
                time, without prior notice, for conduct that we believe violates
                these terms or is harmful to other users or our business.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance
                with the laws of the State of Wyoming, without regard to its
                conflict of law provisions. Any disputes shall be resolved in
                the courts of Wyoming.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will
                notify you of material changes by posting the updated terms on
                our website. Your continued use of our services after changes
                are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                14. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="mt-4">
                <strong>Nexton Enterprises LLC</strong>
                <br />
                1712 Pioneer Ave, Suite 500
                <br />
                Cheyenne, WY 82001
                <br />
                Email: legal@nextonenterprises.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
