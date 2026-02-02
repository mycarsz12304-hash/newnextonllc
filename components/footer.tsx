import Link from "next/link"

const footerLinks = {
  services: [
    { label: "LLC Formation", href: "/services/llc-formation" },
    { label: "Registered Agent", href: "/services/registered-agent" },
    { label: "EIN Application", href: "/services/ein-application" },
    { label: "Annual Reports", href: "/services/annual-reports" },
    { label: "Business Address", href: "/services/business-address" },
  ],
  resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "State Guides", href: "/resources/state-guides" },
    { label: "LLC vs Corporation", href: "/resources/llc-vs-corporation" },
    { label: "Tax Guide", href: "/resources/tax-guide" },
    { label: "Help Center", href: "/resources/help-center" },
  ],
  company: [
    { label: "About Us", href: "/company/about" },
    { label: "Contact", href: "/company/contact" },
    { label: "Careers", href: "/company/careers" },
    { label: "Press", href: "/company/press" },
    { label: "Partners", href: "/company/partners" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Refund Policy", href: "/legal/refund-policy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Nexton</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Nexton Enterprises helps international entrepreneurs form US LLCs quickly and compliantly. 
              Trusted by business owners in 190+ countries.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Nexton Enterprises LLC
              <br />
              Registered in Wyoming, USA
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexton Enterprises LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
