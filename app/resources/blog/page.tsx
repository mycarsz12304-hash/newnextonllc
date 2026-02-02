import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const featuredPost = {
  title: "Complete Guide to US LLC Formation for Non-Residents in 2026",
  excerpt:
    "Everything you need to know about forming a US LLC as a non-resident, from choosing the right state to opening a bank account.",
  category: "Guides",
  author: "Sarah Johnson",
  date: "Jan 28, 2026",
  readTime: "15 min read",
  slug: "#",
};

const posts = [
  {
    title: "Wyoming vs Delaware: Which State is Best for Your LLC?",
    excerpt:
      "A detailed comparison of the two most popular states for LLC formation, including costs, privacy, and tax implications.",
    category: "Comparisons",
    author: "Michael Chen",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    slug: "#",
  },
  {
    title: "How to Open a US Bank Account as a Non-Resident",
    excerpt:
      "Step-by-step guide to opening a business bank account in the US without having to visit in person.",
    category: "Banking",
    author: "Emily Rodriguez",
    date: "Jan 22, 2026",
    readTime: "10 min read",
    slug: "#",
  },
  {
    title: "Understanding US Tax Obligations for Foreign-Owned LLCs",
    excerpt:
      "What you need to know about IRS requirements, tax treaties, and filing obligations for your US LLC.",
    category: "Taxes",
    author: "David Park",
    date: "Jan 19, 2026",
    readTime: "12 min read",
    slug: "#",
  },
  {
    title: "5 Mistakes to Avoid When Forming Your US LLC",
    excerpt:
      "Learn from common errors that international entrepreneurs make when setting up their US business.",
    category: "Tips",
    author: "Sarah Johnson",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "EIN Application Process for Non-Residents Explained",
    excerpt:
      "A complete walkthrough of the SS-4 form and how to obtain your Employer Identification Number.",
    category: "Guides",
    author: "Michael Chen",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "Using Stripe and PayPal with Your US LLC",
    excerpt:
      "How to set up payment processing for your international business using popular US platforms.",
    category: "Payments",
    author: "Emily Rodriguez",
    date: "Jan 8, 2026",
    readTime: "9 min read",
    slug: "#",
  },
];

const categories = [
  "All",
  "Guides",
  "Comparisons",
  "Banking",
  "Taxes",
  "Tips",
  "Payments",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert guides, tips, and insights for international entrepreneurs
              starting their US business journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary/10 aspect-video md:aspect-auto flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20">
                    Featured
                  </span>
                </div>
                <div className="p-8">
                  <Badge variant="secondary" className="mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button asChild>
                    <Link href={featuredPost.slug}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest guides and tips for running your US business
            delivered to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
