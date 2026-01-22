"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/xypriss-logo.png"
              alt="XyPriss"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-mono text-lg font-semibold">XyPriss</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="#features"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#quickstart"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Quick Start
            </Link>
            <Link
              href="/docs/getting-started"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="#community"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/Nehonix-Team/XyPriss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">GitHub</span>
            </a>
          </Button>
          <Button size="sm" asChild>
            <Link href="#quickstart">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
