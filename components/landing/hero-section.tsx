"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { VersionBadge } from "@/components/version-badge";
import { fadeInUp, staggerContainer } from "./animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background animate-gradient-shift" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-primary/20"
            style={
              {
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              } as any
            }
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 flex justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/xypriss-logo.png"
              alt="XyPriss Logo"
              width={120}
              height={120}
              className="h-24 w-24 md:h-32 md:w-32 animate-float"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <VersionBadge />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Node.js Web Framework
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Hybrid Rust + TypeScript architecture bridging the power of Rust
            with the flexibility of Node.js. Built for performance, security,
            and scale.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mb-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="code-shimmer">
              <CodeBlock
                code="npm install -g xypriss-cli"
                className="mx-auto max-w-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
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
                className="flex items-center"
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
