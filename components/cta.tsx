import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export function Cta() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 sm:px-16 sm:py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-primary-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">48-Hour Formation Guarantee</span>
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Start Your US Business Journey?
            </h2>

            <p className="mt-4 text-lg text-primary-foreground/80">
              Join 10,000+ international entrepreneurs who have formed their US LLC with Nexton. 
              Get started today with our simple online process.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 px-8"
                asChild
              >
                <Link href="/order">
                  Start Your LLC Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
