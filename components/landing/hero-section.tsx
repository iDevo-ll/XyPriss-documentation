"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { VersionBadge } from "@/components/version-badge";
import { fadeInUp, staggerContainer } from "./animations";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: i,
    },
  }),
};

const typingChar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

function TypewriterText({
  text,
  className,
  delay = 0,
  as: Component = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: any;
}) {
  return (
    <motion.div
      variants={typingContainer}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={className}
    >
      <Component className="sr-only">{text}</Component>
      <span aria-hidden="true">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={typingChar}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
      <div className="video-background-container">
        <video
          autoPlay
          loop={false}
          muted
          playsInline
          className="hero-video-bg"
        >
          <source
            src="https://dll.nehonix.com/assets/xypriss/xypriss%20animation%20futuriste%20par%20seth%20eleazar.webm"
            type="video/webm"
          />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            className="mb-8 flex justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* <Image
              src="http://dll.nehonix.com/assets/xypriss/mode/transparent/logo.png"
              alt="XyPriss Logo"
              width={120}
              height={120}
              className="h-24 w-24 md:h-32 md:w-32 animate-float"
            /> */}
          </motion.div>

          <motion.div
            className="mb-4"
            animate={{
              opacity: [0, 1],
              scale: [0.9, 1.05, 1],
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{
              opacity: { delay: 0.4, duration: 0.5 },
              scale: {
                delay: 0.4,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <VersionBadge />
          </motion.div>

          <div className="mb-6 space-y-2">
            <h1 className="sr-only">
              XyPriss - Enterprise-Grade Hybrid Rust + TypeScript Web Framework
            </h1>
            <TypewriterText
              text="XyPriss Framework"
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary"
              delay={0.5}
            />
            <div className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <TypewriterText
                text="Hybrid Rust + TypeScript"
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift"
                delay={1.2}
              />
            </div>
          </div>

          <TypewriterText
            as="p"
            text="Hybrid Rust + TypeScript architecture bridging the power of Rust with the flexibility of Node.js. Built for performance, security, and scale."
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            delay={2.5}
          />

          <motion.div
            className="mb-12"
            whileHover={{ scale: 1.02 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              delay: 5.5,
              duration: 0.5,
              scale: { duration: 0.2 }, // nested transition for hover
            }}
          >
            <div className="code-shimmer">
              <CodeBlock
                code="npm install -g xypriss-cli"
                className="mx-auto max-w-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 6.5, duration: 0.5 }}
          >
            <Button size="lg" asChild>
              <a href="/docs/QUICK_START" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/docs" className="flex items-center">
                Documentation
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://github.com/Nehonix-Team/XyPriss"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
