"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { AnimatedBackground } from "@/components/animated-background";
import { HeroSection } from "@/components/landing/hero-section";
import { PlatformSupportSection } from "@/components/landing/platform-support-section";
import { RequestFlowSection } from "@/components/landing/request-flow-section";
import { ArchitectureSection } from "@/components/landing/architecture-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { QuickStartSection } from "@/components/landing/quick-start-section";
import { DocsSection } from "@/components/landing/docs-section";
import { CommunitySection } from "@/components/landing/community-section";
import { LandingFooter } from "@/components/landing/footer";

export function LandingPageClient() {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "XyPriss",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows",
    description:
      "Hybrid Rust + TypeScript framework bridging the power of Rust with the flexibility of Node.js. Built for performance, security, and scale.",
    url: "https://xypriss.nehonix.com",
    image: "https://dll.nehonix.com/assets/xypriss/xypriss-og.png",
    softwareVersion: "1.0.0", // Update this as needed
    author: {
      "@type": "Organization",
      name: "NEHONIX",
      url: "https://nehonix.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedBackground />

      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="sticky top-0 z-50"
      >
        <SiteHeader />
      </motion.div>

      <main className="flex-1">
        <HeroSection />
        <PlatformSupportSection />
        <RequestFlowSection />
        <ArchitectureSection />
        <FeaturesSection />
        <QuickStartSection />
        <DocsSection />
        <CommunitySection />
      </main>

      <LandingFooter />
    </div>
  );
}
