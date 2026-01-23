"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Github, ExternalLink, BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "./animations";

export function CommunitySection() {
  return (
    <section
      className="unified-section py-24 relative overflow-hidden"
      id="community"
    >
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
                  We take security seriously. If you discover a vulnerability,
                  please report it to us privately.
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
                <CardDescription>Join the XyPriss community</CardDescription>
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
                  <a href="/docs/contributing">Contributing Guide</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
