"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Server } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "./animations";

export function ArchitectureSection() {
  return (
    <section className="py-20" id="architecture">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Unified Hybrid Architecture
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Three powerful layers working together for maximum performance and
              developer experience
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-primary/20 transition-all hover:shadow-2xl hover:border-primary/50">
                <CardHeader>
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Zap className="h-6 w-6" />
                  </motion.div>
                  <CardTitle>XHSC</CardTitle>
                  <CardDescription className="text-xs uppercase tracking-wider">
                    Rust Engine
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High-performance Rust server core handling HTTP/S stack,
                    ultra-fast radix routing, and real-time hardware monitoring.
                    Acts as the high-speed gateway for all traffic.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-secondary/20 transition-all hover:shadow-2xl hover:border-secondary/50">
                <CardHeader>
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Layers className="h-6 w-6" />
                  </motion.div>
                  <CardTitle>Node.js Runtime</CardTitle>
                  <CardDescription className="text-xs uppercase tracking-wider">
                    Application Layer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-ready application layer where developers manage
                    business logic, security middlewares, and data processing
                    using TypeScript.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-accent/20 transition-all hover:shadow-2xl hover:border-accent/50">
                <CardHeader>
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Server className="h-6 w-6" />
                  </motion.div>
                  <CardTitle>XFPM</CardTitle>
                  <CardDescription className="text-xs uppercase tracking-wider">
                    Package Manager
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ultra-fast Rust-powered developer tool with optimized
                    resolution, extraction, and caching tailored for the XyPriss
                    ecosystem.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
