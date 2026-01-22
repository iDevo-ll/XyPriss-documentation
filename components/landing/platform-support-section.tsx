"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "./animations";

export function PlatformSupportSection() {
  return (
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
              Native Rust binaries (XFPM & XHSC) for universal high-performance
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
                  <th className="p-4 text-left font-semibold">Architecture</th>
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
                  <td className="p-4 text-muted-foreground">x86_64 (AMD64)</td>
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
                  <td className="p-4 text-muted-foreground">aarch64 (ARM64)</td>
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
                  <td className="p-4 text-muted-foreground">x86_64 (AMD64)</td>
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
                  <td className="p-4 text-muted-foreground">aarch64 (ARM64)</td>
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
                  <td className="p-4 text-muted-foreground">x86_64 (Intel)</td>
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
  );
}
