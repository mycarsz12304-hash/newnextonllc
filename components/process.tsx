const steps = [
  {
    number: "01",
    title: "Choose Your Package",
    description: "Select the formation package that fits your business needs. All packages include our 48-hour guarantee.",
  },
  {
    number: "02",
    title: "Complete Your Details",
    description: "Fill out our simple online form with your company name, member information, and business address preferences.",
  },
  {
    number: "03",
    title: "We File Your LLC",
    description: "Our team prepares and files your Articles of Organization with the state. You'll receive confirmation within 48 hours.",
  },
  {
    number: "04",
    title: "Receive Your Documents",
    description: "Get your complete LLC package including Certificate of Formation, Operating Agreement, and EIN confirmation.",
  },
]

export function Process() {
  return (
    <section id="process" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple 4-Step Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From application to approval in as little as 48 hours
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-px w-full bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
