import { 
  Building2, 
  FileText, 
  CreditCard, 
  ShieldCheck, 
  Headphones, 
  Zap 
} from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Registered Agent Service",
    description: "Complimentary first-year registered agent service in your state of formation. We handle all official correspondence.",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description: "Articles of Organization, Operating Agreement, and EIN application all included. Everything you need to start operating.",
  },
  {
    icon: CreditCard,
    title: "US Bank Account Guidance",
    description: "Step-by-step guidance to open your US business bank account remotely, even without a Social Security Number.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    description: "Annual report reminders and ongoing compliance monitoring to keep your LLC in good standing.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager available via email, chat, and scheduled calls across multiple time zones.",
  },
  {
    icon: Zap,
    title: "48-Hour Guarantee",
    description: "Your LLC formed within 48 business hours or we refund the state filing fee. Speed you can count on.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Launch Your US Business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive LLC formation services designed specifically for international entrepreneurs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
