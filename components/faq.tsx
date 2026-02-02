import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can non-US residents form an LLC in the United States?",
    answer: "Absolutely! There are no citizenship or residency requirements to form an LLC in the US. International entrepreneurs can form and own a US LLC from anywhere in the world. You don't need a US address, Social Security Number, or visa to get started.",
  },
  {
    question: "Which state should I form my LLC in?",
    answer: "The best state depends on your business needs. Wyoming and Delaware are popular for their business-friendly laws and privacy protections. Wyoming has no state income tax and low annual fees. We can help you choose the right state during the formation process.",
  },
  {
    question: "What is the 48-hour guarantee?",
    answer: "We guarantee your LLC will be filed with the state within 48 business hours of receiving your complete application. If we miss this deadline, we'll refund the state filing fee. This doesn't include state processing times, which vary by state.",
  },
  {
    question: "Can I open a US bank account as a non-resident?",
    answer: "Yes! Once your LLC is formed and you have your EIN, many US banks will open accounts for non-residents. Some require an in-person visit, while others offer remote account opening. Our Business and Enterprise packages include detailed guidance on this process.",
  },
  {
    question: "What is a registered agent and why do I need one?",
    answer: "A registered agent is a person or company designated to receive legal and tax documents on behalf of your LLC. US law requires every LLC to have a registered agent with a physical address in the state of formation. Our packages include registered agent service.",
  },
  {
    question: "What ongoing compliance requirements will I have?",
    answer: "Most states require an annual report and franchise tax. Some states like Wyoming have minimal requirements, while others have more. Our Enterprise package includes compliance monitoring and annual report filing service to keep your LLC in good standing.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about forming your US LLC
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
