"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Phone, Clock, FileText } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  package: string;
  total: number;
  payment_id: string;
  created_at: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
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
      }
      setLoading(false);
    }

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-muted-foreground">
            Thank you for your order. We have received your payment and will begin
            processing your LLC formation immediately.
          </p>
        </div>

        {lead && (
          <Card className="mb-8">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono text-sm">{lead.id.slice(0, 8)}...</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Payment ID</span>
                <span className="font-mono text-sm">{lead.payment_id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium">{lead.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">State</span>
                <span className="font-medium">{lead.state}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Package</span>
                <span className="font-medium">{lead.package}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-medium">Total Paid</span>
                <span className="font-bold text-lg text-primary">${lead.total}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg mb-4">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium">Confirmation Email</p>
                  <p className="text-sm text-muted-foreground">
                    You will receive a confirmation email with your order details
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Document Collection</p>
                  <p className="text-sm text-muted-foreground">
                    Our team will reach out to collect any required documents
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">LLC Formation</p>
                  <p className="text-sm text-muted-foreground">
                    We will file your LLC with the state within 48 hours
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Receive Documents</p>
                  <p className="text-sm text-muted-foreground">
                    You will receive all formation documents via email
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg mb-4">Need Help?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:support@nextonenterprises.com"
                className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-sm text-muted-foreground">support@nextonenterprises.com</p>
                </div>
              </a>
              <a
                href="tel:+13073107125"
                className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-muted-foreground">+1 (307) 310-7125</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function SuccessPage() {
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
        <SuccessContent />
      </Suspense>
      <Footer />
    </main>
  );
}
