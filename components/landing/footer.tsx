"use client";

import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#quickstart" className="hover:text-foreground">
                  Quick Start
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Documentation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/docs/getting-started"
                  className="hover:text-foreground"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api-reference"
                  className="hover:text-foreground"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/routing" className="hover:text-foreground">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/Nehonix-Team/XyPriss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nehonix-Team/XyPriss/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Discussions
                </a>
              </li>
              <li>
                <Link
                  href="/docs/contributing"
                  className="hover:text-foreground"
                >
                  Contributing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://nehonix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  About Nehonix
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@team.nehonix.com"
                  className="hover:text-foreground"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://dll.nehonix.com/licenses/NOSL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            Licensed under{" "}
            <a
              href="https://dll.nehonix.com/licenses/NOSL"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground"
            >
              NOSL
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
