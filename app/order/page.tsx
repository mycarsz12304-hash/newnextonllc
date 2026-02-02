"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Building2,
  FileText,
  CreditCard,
  Shield,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"

const US_STATES = [
  { value: "delaware", label: "Delaware", fee: 90 },
  { value: "wyoming", label: "Wyoming", fee: 100 },
  { value: "new-mexico", label: "New Mexico", fee: 50 },
  { value: "florida", label: "Florida", fee: 125 },
  { value: "texas", label: "Texas", fee: 300 },
  { value: "nevada", label: "Nevada", fee: 425 },
  { value: "california", label: "California", fee: 70 },
  { value: "new-york", label: "New York", fee: 200 },
]

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 299,
    description: "Essential LLC formation",
    features: ["LLC Formation Filing", "Articles of Organization", "Operating Agreement Template", "48-Hour Processing"],
  },
  {
    id: "business",
    name: "Business",
    price: 499,
    description: "Complete package for serious owners",
    features: ["Everything in Starter", "EIN/Tax ID Application", "1 Year Registered Agent", "US Mailing Address"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 799,
    description: "Premium service with full support",
    features: ["Everything in Business", "2 Years Registered Agent", "Annual Report Service", "Dedicated Manager"],
  },
]

const ADDONS = [
  { id: "ein", name: "EIN/Tax ID", price: 99, description: "Federal tax identification number" },
  { id: "banking", name: "Banking Resolution", price: 49, description: "Document for opening business bank accounts" },
  { id: "compliance", name: "Compliance Calendar", price: 79, description: "Annual compliance reminders & tracking" },
  { id: "certificate", name: "Certificate of Good Standing", price: 99, description: "Official state certification" },
]

const STEPS = [
  { id: 1, name: "Company Details", icon: Building2 },
  { id: 2, name: "Package Selection", icon: FileText },
  { id: 3, name: "Your Information", icon: Shield },
  { id: 4, name: "Review & Payment", icon: CreditCard },
]

interface FormData {
  // Step 1 - Company Details
  companyName: string
  companySuffix: string
  state: string
  businessPurpose: string
  // Step 2 - Package Selection
  plan: string
  addons: string[]
  // Step 3 - Your Information
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  address: string
  city: string
  postalCode: string
}

export default function OrderPage() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    companySuffix: "LLC",
    state: "delaware",
    businessPurpose: "",
    plan: "business",
    addons: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
  })

  useEffect(() => {
    const planParam = searchParams.get("plan")
    if (planParam && PLANS.find(p => p.id === planParam)) {
      setFormData(prev => {
        // Only update if different to prevent re-renders
        if (prev.plan !== planParam) {
          return { ...prev, plan: planParam }
        }
        return prev
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleAddon = (addonId: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter((id) => id !== addonId)
        : [...prev.addons, addonId],
    }))
  }

  const selectedPlan = PLANS.find((p) => p.id === formData.plan)
  const selectedState = US_STATES.find((s) => s.value === formData.state)
  const selectedAddons = ADDONS.filter((a) => formData.addons.includes(a.id))

  const calculateTotal = () => {
    const planPrice = selectedPlan?.price || 0
    const stateFee = selectedState?.fee || 0
    const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0)
    return planPrice + stateFee + addonsTotal
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName.trim() !== "" && formData.state !== ""
      case 2:
        return formData.plan !== ""
      case 3:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.country.trim() !== ""
        )
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">N</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Nexton</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                          currentStep > step.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : currentStep === step.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-muted text-muted-foreground"
                        )}
                      >
                        {currentStep > step.id ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <step.icon className="h-5 w-5" />
                        )}
                      </div>
                      <span
                        className={cn(
                          "mt-2 hidden text-xs font-medium sm:block",
                          currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {step.name}
                      </span>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div
                        className={cn(
                          "mx-2 h-0.5 flex-1 transition-colors sm:mx-4",
                          currentStep > step.id ? "bg-primary" : "bg-border"
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <Card className="p-6 sm:p-8">
              {/* Step 1: Company Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Company Details</h2>
                    <p className="mt-1 text-muted-foreground">
                      Tell us about the LLC you want to form
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="sm:col-span-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          placeholder="Your Company Name"
                          value={formData.companyName}
                          onChange={(e) => updateFormData("companyName", e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="suffix">Suffix</Label>
                        <Select
                          value={formData.companySuffix}
                          onValueChange={(value) => updateFormData("companySuffix", value)}
                        >
                          <SelectTrigger id="suffix" className="mt-1.5 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="LLC">LLC</SelectItem>
                            <SelectItem value="L.L.C.">L.L.C.</SelectItem>
                            <SelectItem value="Limited Liability Company">Limited Liability Company</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="state">State of Formation</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => updateFormData("state", value)}
                      >
                        <SelectTrigger id="state" className="mt-1.5 w-full">
                          <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                          {US_STATES.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label} (${state.fee} state fee)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        Delaware and Wyoming are popular for non-residents due to business-friendly laws
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="purpose">Business Purpose (Optional)</Label>
                      <Input
                        id="purpose"
                        placeholder="e.g., Technology consulting, E-commerce, Software development"
                        value={formData.businessPurpose}
                        onChange={(e) => updateFormData("businessPurpose", e.target.value)}
                        className="mt-1.5"
                      />
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        If left blank, we&apos;ll use a general purpose statement
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Package Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Choose Your Package</h2>
                    <p className="mt-1 text-muted-foreground">
                      Select the package that best fits your needs
                    </p>
                  </div>

                  <RadioGroup
                    value={formData.plan}
                    onValueChange={(value) => updateFormData("plan", value)}
                    className="grid gap-4"
                  >
                    {PLANS.map((plan) => (
                      <label
                        key={plan.id}
                        htmlFor={plan.id}
                        className={cn(
                          "relative flex cursor-pointer rounded-xl border p-4 transition-all hover:border-primary/50",
                          formData.plan === plan.id
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border"
                        )}
                      >
                        <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                        <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-start gap-3">
                            <div
                              className={cn(
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                                formData.plan === plan.id
                                  ? "border-primary bg-primary"
                                  : "border-muted-foreground/30"
                              )}
                            >
                              {formData.plan === plan.id && (
                                <Check className="h-3 w-3 text-primary-foreground" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-foreground">{plan.name}</span>
                                {plan.popular && (
                                  <Badge className="text-xs">Most Popular</Badge>
                                )}
                              </div>
                              <p className="mt-0.5 text-sm text-muted-foreground">{plan.description}</p>
                              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                                {plan.features.map((feature) => (
                                  <li key={feature} className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Check className="h-3 w-3 text-primary" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-3 sm:mt-0 sm:text-right">
                            <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </RadioGroup>

                  <div className="pt-4">
                    <h3 className="mb-4 font-semibold text-foreground">Optional Add-ons</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {ADDONS.map((addon) => (
                        <label
                          key={addon.id}
                          htmlFor={addon.id}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all hover:border-primary/50",
                            formData.addons.includes(addon.id)
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          )}
                        >
                          <Checkbox
                            id={addon.id}
                            checked={formData.addons.includes(addon.id)}
                            onCheckedChange={() => toggleAddon(addon.id)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-foreground">{addon.name}</span>
                              <span className="font-semibold text-foreground">+${addon.price}</span>
                            </div>
                            <p className="mt-0.5 text-sm text-muted-foreground">{addon.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Your Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Your Information</h2>
                    <p className="mt-1 text-muted-foreground">
                      We&apos;ll use this information to complete your LLC formation
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="country">Country of Residence</Label>
                      <Input
                        id="country"
                        placeholder="United Kingdom"
                        value={formData.country}
                        onChange={(e) => updateFormData("country", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Business Street"
                        value={formData.address}
                        onChange={(e) => updateFormData("address", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="London"
                          value={formData.city}
                          onChange={(e) => updateFormData("city", e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          placeholder="SW1A 1AA"
                          value={formData.postalCode}
                          onChange={(e) => updateFormData("postalCode", e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Payment */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Review Your Order</h2>
                    <p className="mt-1 text-muted-foreground">
                      Please review your information before completing payment
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Company Summary */}
                    <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                      <h3 className="font-semibold text-foreground">Company Details</h3>
                      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="text-muted-foreground">Company Name</dt>
                          <dd className="font-medium text-foreground">
                            {formData.companyName} {formData.companySuffix}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">State of Formation</dt>
                          <dd className="font-medium text-foreground">{selectedState?.label}</dd>
                        </div>
                        {formData.businessPurpose && (
                          <div className="sm:col-span-2">
                            <dt className="text-muted-foreground">Business Purpose</dt>
                            <dd className="font-medium text-foreground">{formData.businessPurpose}</dd>
                          </div>
                        )}
                      </dl>
                    </div>

                    {/* Contact Summary */}
                    <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                      <h3 className="font-semibold text-foreground">Contact Information</h3>
                      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="text-muted-foreground">Name</dt>
                          <dd className="font-medium text-foreground">
                            {formData.firstName} {formData.lastName}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Email</dt>
                          <dd className="font-medium text-foreground">{formData.email}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Country</dt>
                          <dd className="font-medium text-foreground">{formData.country}</dd>
                        </div>
                        {formData.phone && (
                          <div>
                            <dt className="text-muted-foreground">Phone</dt>
                            <dd className="font-medium text-foreground">{formData.phone}</dd>
                          </div>
                        )}
                      </dl>
                    </div>

                    {/* Payment Placeholder */}
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <div className="flex items-center gap-2 text-primary">
                        <CreditCard className="h-5 w-5" />
                        <span className="font-semibold">Payment Information</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Secure payment will be processed via Stripe. Your card details are never stored on our servers.
                      </p>
                      <div className="mt-4 rounded-lg border border-border bg-card p-4">
                        <p className="text-center text-sm text-muted-foreground">
                          Payment form will appear here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                {currentStep > 1 ? (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="gap-2 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <Button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={!canProceed()}
                    className="gap-2"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button className="gap-2 px-8">
                    Complete Order
                    <Check className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="mt-8 lg:mt-0">
            <div className="sticky top-24">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground">Order Summary</h3>

                <div className="mt-6 space-y-4">
                  {/* Company Name Preview */}
                  {formData.companyName && (
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-muted-foreground">Your Company</p>
                      <p className="font-semibold text-foreground">
                        {formData.companyName} {formData.companySuffix}
                      </p>
                    </div>
                  )}

                  {/* Selected Plan */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{selectedPlan?.name} Package</p>
                      <p className="text-sm text-muted-foreground">{selectedPlan?.description}</p>
                    </div>
                    <span className="font-semibold text-foreground">${selectedPlan?.price}</span>
                  </div>

                  {/* State Fee */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">State Filing Fee</p>
                      <p className="text-sm text-muted-foreground">{selectedState?.label}</p>
                    </div>
                    <span className="font-semibold text-foreground">${selectedState?.fee}</span>
                  </div>

                  {/* Add-ons */}
                  {selectedAddons.length > 0 && (
                    <div className="space-y-2 border-t border-border pt-4">
                      <p className="text-sm font-medium text-muted-foreground">Add-ons</p>
                      {selectedAddons.map((addon) => (
                        <div key={addon.id} className="flex items-center justify-between">
                          <span className="text-sm text-foreground">{addon.name}</span>
                          <span className="text-sm font-medium text-foreground">${addon.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Total */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-2xl font-bold text-primary">${calculateTotal()}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">One-time payment, no hidden fees</p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>48-Hour Formation Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Secure SSL Encrypted Checkout</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
