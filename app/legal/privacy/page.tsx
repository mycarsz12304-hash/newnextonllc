import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 15, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p>
                Nexton Enterprises LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Personal Information
              </h3>
              <p>
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Register for our services</li>
                <li>Fill out forms on our website</li>
                <li>Contact us via email or other communication channels</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              <p className="mt-4">This information may include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Passport or government ID information</li>
                <li>Payment information</li>
                <li>Business information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process your LLC formation and related services</li>
                <li>Communicate with you about your account and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and protect our services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Disclosure of Your Information
              </h2>
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> Third parties that help us
                  operate our business (payment processors, email services,
                  etc.)
                </li>
                <li>
                  <strong>Government Agencies:</strong> State filing offices and
                  the IRS as required to process your LLC formation and EIN
                  application
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                method of transmission over the Internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this privacy policy, unless a
                longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Your Rights
              </h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at
                privacy@nextonenterprises.com.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to collect
                information about your browsing activities. You can control
                cookies through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. International Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in
                countries other than your country of residence. We ensure
                appropriate safeguards are in place to protect your information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy, please contact
                us at:
              </p>
              <p className="mt-4">
                <strong>Nexton Enterprises LLC</strong>
                <br />
                1712 Pioneer Ave, Suite 500
                <br />
                Cheyenne, WY 82001
                <br />
                Email: privacy@nextonenterprises.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
