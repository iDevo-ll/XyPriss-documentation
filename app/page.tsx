"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { VersionBadge } from "@/components/version-badge";
import { AnimatedBackground } from "@/components/animated-background";
import { ParallaxSection } from "@/components/parallax-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  Shield,
  Route,
  Upload,
  Puzzle,
  Server,
  Layers,
  Code2,
  BookOpen,
  Github,
  Mail,
  ExternalLink,
  CheckCircle2,
  Wrench,
  ArrowRight,
  Rocket,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <motion.div style={{ scale: scaleProgress, opacity: opacityProgress }}>
        <SiteHeader />
      </motion.div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background animate-gradient-shift" />
          <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5" />

          {/* Floating particles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle absolute rounded-full bg-primary/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                }}
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
                with the flexibility of Node.js. Built for performance,
                security, and scale.
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
                  <a href="#quickstart" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#docs" className="flex items-center">
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

        {/* Platform Support */}
        <section className="border-y border-border bg-muted/30 py-16 relative overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer" />
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="mb-8 text-center">
                <h2 className="mb-3 text-3xl font-bold">
                  Cross-Platform Foundation
                </h2>
                <p className="text-muted-foreground">
                  Native Rust binaries (XFPM & XHSC) for universal
                  high-performance
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="overflow-x-auto"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <table className="w-full border-collapse rounded-lg bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left font-semibold">OS</th>
                      <th className="p-4 text-left font-semibold">
                        Architecture
                      </th>
                      <th className="p-4 text-left font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-sm">
                    <motion.tr
                      className="border-b border-border/50"
                      whileHover={{
                        backgroundColor: "rgba(34, 76, 152, 0.05)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <td className="p-4 font-medium">Linux</td>
                      <td className="p-4 text-muted-foreground">
                        x86_64 (AMD64)
                      </td>
                      <td className="p-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="success" className="gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Supported
                          </Badge>
                        </motion.div>
                      </td>
                    </motion.tr>
                    <motion.tr
                      className="border-b border-border/50"
                      whileHover={{
                        backgroundColor: "rgba(34, 76, 152, 0.05)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <td className="p-4 font-medium">Linux</td>
                      <td className="p-4 text-muted-foreground">
                        aarch64 (ARM64)
                      </td>
                      <td className="p-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="success" className="gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Supported
                          </Badge>
                        </motion.div>
                      </td>
                    </motion.tr>
                    <motion.tr
                      className="border-b border-border/50"
                      whileHover={{
                        backgroundColor: "rgba(34, 76, 152, 0.05)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <td className="p-4 font-medium">Windows</td>
                      <td className="p-4 text-muted-foreground">
                        x86_64 (AMD64)
                      </td>
                      <td className="p-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="success" className="gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Supported
                          </Badge>
                        </motion.div>
                      </td>
                    </motion.tr>
                    <motion.tr
                      className="border-b border-border/50"
                      whileHover={{
                        backgroundColor: "rgba(34, 76, 152, 0.05)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <td className="p-4 font-medium">Windows</td>
                      <td className="p-4 text-muted-foreground">
                        aarch64 (ARM64)
                      </td>
                      <td className="p-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="success" className="gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Supported
                          </Badge>
                        </motion.div>
                      </td>
                    </motion.tr>
                    <motion.tr
                      className="border-b border-border/50"
                      whileHover={{
                        backgroundColor: "rgba(34, 76, 152, 0.05)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <td className="p-4 font-medium">macOS</td>
                      <td className="p-4 text-muted-foreground">
                        x86_64 (Intel)
                      </td>
                      <td className="p-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="warning" className="gap-1">
                            <Wrench className="h-3 w-3" />
                            Source-only
                          </Badge>
                        </motion.div>
                      </td>
                    </motion.tr>
                    <motion.tr
                      whileHover={{
                        backgroundColor: "rgba(34, 76, 152, 0.05)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <td className="p-4 font-medium">macOS</td>
                      <td className="p-4 text-muted-foreground">
                        aarch64 (Apple Silicon)
                      </td>
                      <td className="p-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="warning" className="gap-1">
                            <Wrench className="h-3 w-3" />
                            Source-only
                          </Badge>
                        </motion.div>
                      </td>
                    </motion.tr>
                  </tbody>
                </table>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-4 text-center text-sm text-muted-foreground"
              >
                Future-proofing for emerging architectures like RISC-V
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Request Flow */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                  How XyPriss Handles Requests
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Lightning-fast request processing powered by Rust with
                  intelligent load management
                </p>
              </motion.div>

              <div className="mx-auto max-w-5xl">
                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

                  {/* Steps */}
                  <div className="space-y-12">
                    <RequestFlowStep
                      step={1}
                      title="Developer writes business logic"
                      description="Build your backend application using TypeScript with XyPriss's intuitive API"
                      icon={<Code2 />}
                      color="primary"
                      code={`app.get("/api/users", async (req, res) => {
  const users = await db.users.findMany();
  res.json({ users });
});`}
                      delay={0}
                    />

                    <RequestFlowStep
                      step={2}
                      title="XyPriss receives incoming requests"
                      description="Client requests arrive at your XyPriss server endpoint"
                      icon={<Server />}
                      color="secondary"
                      highlight="HTTP/HTTPS requests handled by the Rust-powered gateway"
                      delay={0.1}
                      isRight
                    />

                    <RequestFlowStep
                      step={3}
                      title="XHSC Core processes the request"
                      description="Ultra-fast Rust engine handles routing, parsing, and initial processing"
                      icon={<Zap />}
                      color="accent"
                      highlight="Microsecond-level radix routing with zero overhead"
                      delay={0.2}
                    />

                    <RequestFlowStep
                      step={4}
                      title="Cluster mode check"
                      description="Smart load balancing across multiple workers if cluster mode is enabled"
                      icon={<Layers />}
                      color="primary"
                      highlight="Prevents saturation • Optimal resource utilization • Auto-scaling"
                      delay={0.3}
                      isRight
                    />

                    <RequestFlowStep
                      step={5}
                      title="Security validation"
                      description="12+ middleware modules verify request integrity and security"
                      icon={<Shield />}
                      color="secondary"
                      highlight="CSRF protection • XSS prevention • Rate limiting • Body validation"
                      delay={0.4}
                    />

                    <RequestFlowStep
                      step={6}
                      title="Response delivered"
                      description="Optimized response sent back to client with minimal latency"
                      icon={<CheckCircle2 />}
                      color="accent"
                      highlight="Average response time: <10ms for simple routes"
                      delay={0.5}
                      isRight
                      isLast
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Architecture Overview */}
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
                  Three powerful layers working together for maximum performance
                  and developer experience
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
                        ultra-fast radix routing, and real-time hardware
                        monitoring. Acts as the high-speed gateway for all
                        traffic.
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
                        Enterprise-ready application layer where developers
                        manage business logic, security middlewares, and data
                        processing using TypeScript.
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
                        resolution, extraction, and caching tailored for the
                        XyPriss ecosystem.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Features */}
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

        {/* Quick Start */}
        <section className="py-20" id="quickstart">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                  Quick Start
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Get up and running in minutes with XyPriss CLI or manual setup
                </p>
              </motion.div>

              <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-primary" />
                        Using CLI (Recommended)
                      </CardTitle>
                      <CardDescription>
                        The fastest way to get started with XyPriss
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="mb-2 text-sm font-medium">
                          1. Install the CLI
                        </p>
                        <CodeBlock code="npm install -g xypriss-cli" />
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium">
                          2. Create a new project
                        </p>
                        <CodeBlock code="xfpm init" />
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium">
                          3. Start development server
                        </p>
                        <CodeBlock code="cd my-app && xfpm dev" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-secondary" />
                        Manual Setup
                      </CardTitle>
                      <CardDescription>
                        Set up XyPriss with xfpm
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="mb-2 text-sm font-medium">
                          Install XyPriss
                        </p>
                        <CodeBlock code="xfpm install xypriss" />
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium">
                          Create your server
                        </p>
                        <CodeBlock
                          language="typescript"
                          code={`import { createServer } from "xypriss";

const app = createServer({
  server: { port: 3000 },
  security: { enabled: true },
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from XyPriss" });
});

app.start();`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className="bg-muted/30 py-20" id="docs">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                  Documentation
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Comprehensive guides and API references to help you build with
                  XyPriss
                </p>
              </motion.div>

              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                <DocCard
                  title="Getting Started"
                  links={[
                    {
                      title: "Quick Start Guide",
                      href: "/docs/getting-started",
                    },
                    { title: "XFPM Guide", href: "/docs/xfpm" },
                    { title: "Examples", href: "/docs/examples" },
                    {
                      title: "Features Overview",
                      href: "/docs/features-overview",
                    },
                  ]}
                />
                <DocCard
                  title="Core Guides"
                  links={[
                    { title: "Routing", href: "/docs/routing" },
                    { title: "Security", href: "/docs/security" },
                    { title: "File Upload", href: "/docs/file-upload" },
                    { title: "Configuration", href: "/docs/configuration" },
                  ]}
                />
                <DocCard
                  title="Plugin System"
                  links={[
                    {
                      title: "Plugin Development",
                      href: "/docs/plugin-development-guide",
                    },
                    { title: "Plugin Hooks", href: "/docs/plugin-core-hooks" },
                    {
                      title: "Plugin Permissions",
                      href: "/docs/plugin-permissions",
                    },
                    {
                      title: "Console Intercept",
                      href: "/docs/console-interception-guide",
                    },
                  ]}
                />
                <DocCard
                  title="Advanced Topics"
                  links={[
                    { title: "XJson API", href: "/docs/xjson-api" },
                    { title: "Clustering", href: "/docs/cluster-overview" },
                    {
                      title: "Performance Tuning",
                      href: "/docs/cluster-performance-tuning-updated",
                    },
                    { title: "Multi-Server", href: "/docs/multi-server" },
                  ]}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security & Community */}
        <section className="py-20" id="community">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      Security Disclosure
                    </CardTitle>
                    <CardDescription>
                      Report security vulnerabilities responsibly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      We take security seriously. If you discover a
                      vulnerability, please report it to us privately.
                    </p>
                    <div className="flex items-center gap-2 rounded-lg bg-muted p-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <a
                        href="mailto:support@team.nehonix.com"
                        className="text-sm font-mono text-primary hover:underline"
                      >
                        support@team.nehonix.com
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Please do not open public GitHub issues for security
                      vulnerabilities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-primary" />
                      Community & Contributing
                    </CardTitle>
                    <CardDescription>
                      Join the XyPriss community
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <a
                        href="https://github.com/Nehonix-Team/XyPriss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        GitHub Repository
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a
                        href="https://github.com/Nehonix-Team/XyPriss/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary"
                      >
                        <BookOpen className="h-4 w-4" />
                        Discussions
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a
                        href="https://github.com/Nehonix-Team/XyPriss/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary"
                      >
                        <Shield className="h-4 w-4" />
                        Issue Tracker
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://github.com/Nehonix-Team/XyPriss/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contributing Guide
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="hover:text-foreground">
                    Roadmap
                  </Link>
                </li> */}
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
                  <Link href="/docs/examples" className="hover:text-foreground">
                    Examples
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
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
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
                {/* <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li> */}
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
              {/* Built by{" "}
              <a
                href="https://nehonix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground"
              >
                Nehonix Team
              </a> */}
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
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full transition-all hover:shadow-xl hover:border-primary/30">
        <CardHeader>
          <motion.div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function DocCard({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <motion.li
                key={link.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-3 w-3" />
                  </motion.div>
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function RequestFlowStep({
  step,
  title,
  description,
  icon,
  color,
  code,
  highlight,
  delay,
  isRight = false,
  isLast = false,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "primary" | "secondary" | "accent";
  code?: string;
  highlight?: string;
  delay: number;
  isRight?: boolean;
  isLast?: boolean;
}) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative ${isRight ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"} md:w-[calc(50%-2rem)]`}
    >
      {/* Step Number Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 z-10 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-background ${colorClasses[color]} font-mono text-lg font-bold shadow-lg`}
        >
          {step}
        </motion.div>
      </div>

      <Card
        className={`relative overflow-hidden transition-all hover:shadow-lg ${isLast ? "" : "mb-8"}`}
      >
        <CardHeader>
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${colorClasses[color]}`}
            >
              {icon}
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground md:hidden">
                  Step {step}
                </span>
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-2">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {code && (
            <div className="mb-4">
              <CodeBlock code={code} language="typescript" />
            </div>
          )}
          {highlight && (
            <div
              className={`rounded-lg border p-3 text-sm ${colorClasses[color]}`}
            >
              <p className="font-medium">{highlight}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
