"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Route,
  Upload,
  Puzzle,
  Server,
  Rocket,
} from "lucide-react";
import { FeatureCard } from "./feature-card";
import { fadeInUp, staggerContainer } from "./animations";

export function FeaturesSection() {
  return (
    <section
      className="bg-gradient-to-b from-muted/30 to-background py-20"
      id="features"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Core Features
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Built for production with security, performance, and developer
              experience in mind
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap />}
              title="High Performance XHSC Engine"
              description="Independent Rust server core with multi-core clustering and high-precision system telemetry"
            />
            <FeatureCard
              icon={<Shield />}
              title="Security-First Architecture"
              description="12+ built-in security middleware modules including CSRF protection, XSS prevention, and rate limiting"
            />
            <FeatureCard
              icon={<Route />}
              title="Advanced Radix Routing"
              description="Ultra-fast routing powered by Rust, handling complex path matching with microsecond latency"
            />
            <FeatureCard
              icon={<Upload />}
              title="File Upload Management"
              description="Production-ready multipart/form-data handling with automatic validation and error handling"
            />
            <FeatureCard
              icon={<Puzzle />}
              title="Extensible Plugin System"
              description="Permission-based plugin architecture with lifecycle hooks and security controls"
            />
            <FeatureCard
              icon={<Server />}
              title="Multi-Server Support"
              description="Run multiple server instances with isolated configurations and security policies"
            />
            <FeatureCard
              icon={<Rocket />}
              title="Native Production Integration"
              description="Built for automated deployments and SSL management via XyNginC plugin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
