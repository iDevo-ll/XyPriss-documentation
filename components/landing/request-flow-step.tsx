"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

export function RequestFlowStep({
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
