import { Star } from "lucide-react"

const testimonials = [
  {
    content: "Nexton made forming my US LLC incredibly simple. As someone based in Germany, I was worried about the complexity, but their team guided me through every step. My LLC was ready in just 36 hours!",
    author: "Marcus W.",
    role: "E-commerce Founder",
    location: "Germany",
  },
  {
    content: "The Business package was perfect for my consulting firm. Having the EIN application handled and the registered agent service included saved me so much time and hassle. Highly recommend!",
    author: "Priya S.",
    role: "Tech Consultant",
    location: "India",
  },
  {
    content: "I've formed 3 LLCs through Nexton for my various ventures. Their Enterprise service with the dedicated account manager is worth every penny. They even helped me navigate opening a US bank account remotely.",
    author: "Carlos M.",
    role: "Serial Entrepreneur",
    location: "Brazil",
  },
]

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Entrepreneurs Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of international business owners who chose Nexton
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-2xl border border-border/60 bg-card p-8"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-6">
                <p className="leading-relaxed text-muted-foreground">
                  &quot;{testimonial.content}&quot;
                </p>
              </blockquote>
              <div className="mt-6 border-t border-border pt-6">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
