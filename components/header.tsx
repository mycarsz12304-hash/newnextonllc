"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">N</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Nexton</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" asChild>
            <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="#features" className="text-sm text-muted-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground">
              Pricing
            </Link>
            <Link href="#process" className="text-sm text-muted-foreground">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground">
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button size="sm" className="w-full" asChild>
                <Link href="https://wa.link/d9r319" target="_blank" rel="noopener noreferrer">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
