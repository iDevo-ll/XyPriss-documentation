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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="flex min-h-screen flex-col">
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
