"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle2,
  Star,
  ArrowRight,
  MapPin,
  DollarSign,
  Clock,
  Shield,
} from "lucide-react";

const stateData = [
  { rank: 1, state: "Kentucky", filingFee: 40, processing: "3 days", privacy: 3, bestFor: "Cheapest" },
  { rank: 2, state: "Arkansas", filingFee: 45, processing: "3 days", privacy: 3, bestFor: "Low cost" },
  { rank: 3, state: "Arizona", filingFee: 50, processing: "14 days", privacy: 4, bestFor: "Low cost" },
  { rank: 4, state: "Colorado", filingFee: 50, processing: "2 days", privacy: 3, bestFor: "Fast filing" },
  { rank: 5, state: "Hawaii", filingFee: 50, processing: "5 days", privacy: 3, bestFor: "Low cost" },
  { rank: 6, state: "Iowa", filingFee: 50, processing: "3 days", privacy: 3, bestFor: "Low cost" },
  { rank: 7, state: "Michigan", filingFee: 50, processing: "5 days", privacy: 3, bestFor: "Low cost" },
  { rank: 8, state: "Mississippi", filingFee: 50, processing: "3 days", privacy: 4, bestFor: "Low cost" },
  { rank: 9, state: "Missouri", filingFee: 50, processing: "5 days", privacy: 3, bestFor: "Low cost" },
  { rank: 10, state: "New Mexico", filingFee: 50, processing: "2 days", privacy: 4, bestFor: "Lowest maintenance" },
  { rank: 11, state: "Utah", filingFee: 54, processing: "2 days", privacy: 3, bestFor: "Low cost" },
  { rank: 12, state: "California", filingFee: 70, processing: "5 days", privacy: 2, bestFor: "Avoid (high taxes)", warning: true },
  { rank: 13, state: "Montana", filingFee: 70, processing: "10 days", privacy: 4, bestFor: "Privacy" },
  { rank: 14, state: "Ohio", filingFee: 99, processing: "3 days", privacy: 3, bestFor: "No annual fee" },
  { rank: 15, state: "Georgia", filingFee: 100, processing: "7 days", privacy: 3, bestFor: "General" },
  { rank: 16, state: "Idaho", filingFee: 100, processing: "7 days", privacy: 3, bestFor: "General" },
  { rank: 17, state: "Indiana", filingFee: 100, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 18, state: "Louisiana", filingFee: 100, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 19, state: "Maryland", filingFee: 100, processing: "7 days", privacy: 3, bestFor: "General" },
  { rank: 20, state: "Nebraska", filingFee: 100, processing: "3 days", privacy: 3, bestFor: "General" },
  { rank: 21, state: "New Hampshire", filingFee: 100, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 22, state: "Oklahoma", filingFee: 100, processing: "3 days", privacy: 3, bestFor: "General" },
  { rank: 23, state: "Oregon", filingFee: 100, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 24, state: "Virginia", filingFee: 100, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 25, state: "West Virginia", filingFee: 100, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 26, state: "Wyoming", filingFee: 100, processing: "1 day", privacy: 5, bestFor: "Best overall", recommended: true },
  { rank: 27, state: "Connecticut", filingFee: 120, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 28, state: "Florida", filingFee: 125, processing: "5 days", privacy: 3, bestFor: "No income tax" },
  { rank: 29, state: "New Jersey", filingFee: 125, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 30, state: "North Carolina", filingFee: 125, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 31, state: "Pennsylvania", filingFee: 125, processing: "7 days", privacy: 3, bestFor: "General" },
  { rank: 32, state: "Vermont", filingFee: 125, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 33, state: "Wisconsin", filingFee: 130, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 34, state: "North Dakota", filingFee: 135, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 35, state: "Illinois", filingFee: 150, processing: "10 days", privacy: 3, bestFor: "General" },
  { rank: 36, state: "Rhode Island", filingFee: 150, processing: "7 days", privacy: 3, bestFor: "General" },
  { rank: 37, state: "South Dakota", filingFee: 150, processing: "3 days", privacy: 3, bestFor: "General" },
  { rank: 38, state: "Minnesota", filingFee: 155, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 39, state: "Kansas", filingFee: 160, processing: "3 days", privacy: 3, bestFor: "General" },
  { rank: 40, state: "Maine", filingFee: 175, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 41, state: "Alabama", filingFee: 200, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 42, state: "New York", filingFee: 200, processing: "5 days", privacy: 2, bestFor: "Publication required", warning: true },
  { rank: 43, state: "Washington", filingFee: 200, processing: "5 days", privacy: 3, bestFor: "General" },
  { rank: 44, state: "Alaska", filingFee: 250, processing: "10 days", privacy: 3, bestFor: "General" },
  { rank: 45, state: "Tennessee", filingFee: 300, processing: "3 days", privacy: 3, bestFor: "General" },
  { rank: 46, state: "Texas", filingFee: 300, processing: "3 days", privacy: 3, bestFor: "Large market" },
  { rank: 47, state: "Nevada", filingFee: 425, processing: "1 day", privacy: 5, bestFor: "Privacy/Tax-free" },
  { rank: 48, state: "Massachusetts", filingFee: 500, processing: "5 days", privacy: 3, bestFor: "Avoid (expensive)", warning: true },
  { rank: 49, state: "Delaware", filingFee: 110, processing: "1 day", privacy: 4, bestFor: "Investors/VC" },
];

const packages = [
  { name: "Starter", price: 299 },
  { name: "Business", price: 499 },
  { name: "Enterprise", price: 799 },
];

export function StateComparison() {
  const [selectedState, setSelectedState] = useState<string>("Wyoming");
  const [selectedPackage, setSelectedPackage] = useState<string>("Starter");

  const state = stateData.find((s) => s.state === selectedState);
  const pkg = packages.find((p) => p.name === selectedPackage);

  const totalToday = (pkg?.price || 299) + (state?.filingFee || 0);
  const annualCost = (pkg?.price || 299) + (state?.annualFee || 0);

  return (
    <section id="states" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            State Comparison
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Choose the Best State for Your LLC
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare filing fees, annual costs, and benefits across popular
            states for non-resident LLC formation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* State Calculator Card */}
          <Card className="lg:col-span-1 border-primary/20 shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Calculate Your Cost
              </CardTitle>
              <CardDescription>
                Get an instant estimate for your LLC formation
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Select State
                </label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a state" />
                  </SelectTrigger>
                  <SelectContent>
                    {stateData.map((s) => (
                      <SelectItem key={s.state} value={s.state}>
                        {s.state}{" "}
                        {s.recommended && (
                          <span className="text-primary ml-1">
                            (Recommended)
                          </span>
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Package</label>
                <Select
                  value={selectedPackage}
                  onValueChange={setSelectedPackage}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((p) => (
                      <SelectItem key={p.name} value={p.name}>
                        {p.name} - ${p.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {selectedPackage} Package
                  </span>
                  <span>${pkg?.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    State Filing Fee
                  </span>
                  <span>${state?.filingFee}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                  <span>Total Today</span>
                  <span className="text-primary">${totalToday}</span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Processing: {state?.processing}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="flex items-center gap-1">
                    Privacy:{" "}
                    {Array.from({ length: state?.privacy || 0 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-primary text-primary"
                      />
                    ))}
                  </span>
                </div>
              </div>

              <Button className="w-full" size="lg" asChild>
                <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <Card className="lg:col-span-2 overflow-hidden">
            <CardHeader>
              <CardTitle>State-by-State Comparison</CardTitle>
              <CardDescription>
                All fees shown in USD. Recommended state highlighted.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold w-12">#</TableHead>
                      <TableHead className="font-semibold">State</TableHead>
                      <TableHead className="text-right font-semibold">
                        Filing Fee
                      </TableHead>
                      <TableHead className="font-semibold">Processing</TableHead>
                      <TableHead className="font-semibold">Privacy</TableHead>
                      <TableHead className="font-semibold">Best For</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stateData.map((row) => (
                      <TableRow
                        key={row.state}
                        className={
                          row.recommended
                            ? "bg-primary/5 border-l-4 border-l-primary"
                            : row.warning
                              ? "bg-destructive/5"
                              : ""
                        }
                      >
                        <TableCell className="text-muted-foreground">
                          {row.rank}
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            {row.state}
                            {row.recommended && (
                              <Badge
                                variant="default"
                                className="text-xs px-1.5 py-0"
                              >
                                Best
                              </Badge>
                            )}
                            {row.warning && (
                              <Badge
                                variant="destructive"
                                className="text-xs px-1.5 py-0"
                              >
                                Avoid
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          ${row.filingFee}
                        </TableCell>
                        <TableCell>{row.processing}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {Array.from({ length: row.privacy }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 fill-primary text-primary"
                              />
                            ))}
                            {Array.from({ length: 5 - row.privacy }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 text-muted-foreground/30"
                              />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={
                              row.warning
                                ? "text-destructive"
                                : "text-muted-foreground"
                            }
                          >
                            {row.bestFor}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Wyoming Section */}
        <Card className="mt-8 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">
                  Why We Recommend Wyoming
                </h3>
                <p className="text-muted-foreground">
                  Wyoming offers the best combination of low costs, strong
                  privacy protections, no state income tax, and fast processing.
                  It&apos;s the most popular choice for non-resident LLC
                  formation, trusted by over 80% of our international clients.
                </p>
              </div>
              <Button variant="outline" className="shrink-0 bg-transparent" asChild>
                <Link href="/resources/state-guides">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
