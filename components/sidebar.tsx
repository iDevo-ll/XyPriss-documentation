"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/lib/docs-config";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r border-border/40">
      <div className="h-full overflow-y-auto py-6 pr-6 lg:py-8">
        {docsConfig.map((group, index) => (
          <div key={index} className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold tracking-tight">
              {group.title}
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 pl-1">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline",
                    pathname === item.href
                      ? "font-medium text-foreground underline"
                      : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
