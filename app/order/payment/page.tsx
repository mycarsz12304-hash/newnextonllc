"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, CheckCircle, Loader2 } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  package: string;
  package_price: number;
  state_fee: number;
  addons: any[];
  addons_price: number;
  total: number;
}

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("id");

  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!orderId) {
      router.push("/order");
      return;
    }

    async function fetchOrder() {
      const supabase = createClient();
      const { data } = await supabase
        .from("leads")
        .select("*")
        .eq("id", orderId)
        .single();

      if (data) {
        setLead(data);
      } else {
        router.push("/order");
      }
      setLoading(false);
    }

    fetchOrder();
  }, [orderId, router]);

  const initiatePayment = async () => {
    if (!lead) return;

    setProcessing(true);

    // In production, this would redirect to PayU payment page
    // For demo, we'll simulate a successful payment
    const supabase = createClient();

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Update lead with payment info
    await supabase
      .from("leads")
      .update({
        payment_status: "Paid",
        payment_id: `PAYU_${Date.now()}`,
        status: "Payment Pending",
      })
      .eq("id", lead.id);

    // Redirect to success page
    router.push(`/order/success?id=${lead.id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!lead) {
    return null;
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Payment</h1>
          <p className="text-muted-foreground">
            Secure payment powered by PayU
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-medium">{lead.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{lead.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">State</span>
                  <span className="font-medium">{lead.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Package</span>
                  <Badge>{lead.package}</Badge>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Package Price</span>
                  <span>${lead.package_price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>State Filing Fee</span>
                  <span>${lead.state_fee}</span>
                </div>
                {lead.addons_price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Add-ons</span>
                    <span>${lead.addons_price}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-primary">${lead.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-muted text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  You will be redirected to PayU secure payment gateway
                </p>
                <p className="font-bold text-2xl text-primary">${lead.total}</p>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={initiatePayment}
                disabled={processing}
              >
                {processing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay ${lead.total} Now
                  </>
                )}
              </Button>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>256-bit SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>PCI DSS Compliant</span>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                By proceeding, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        }
      >
        <PaymentContent />
      </Suspense>
      <Footer />
    </main>
  );
}
