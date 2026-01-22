import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-primary text-primary-foreground shadow hover:bg-primary/80": variant === "default",
          "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200": variant === "success",
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200": variant === "warning",
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
