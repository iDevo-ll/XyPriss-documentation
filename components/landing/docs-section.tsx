"use client";

import { motion } from "framer-motion";
import { DocCard } from "./doc-card";
import { fadeInUp, staggerContainer } from "./animations";

export function DocsSection() {
  return (
    <section
      className="unified-section py-24 relative overflow-hidden"
      id="docs"
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
                { title: "XFPM Guide", href: "/docs/xfpm?kw=XFPM%20is" },
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
  );
}
