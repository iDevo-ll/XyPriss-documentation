"use client";

import * as React from "react";
import { Search, Command } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = React.useState(searchParams.get("q") || "");

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  // Handle keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        const input = document.getElementById(
          "global-search",
        ) as HTMLInputElement;
        input?.focus();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Update local state if URL change externally (e.g. click on a term)
  React.useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (value: string) => {
    setQuery(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
      params.set("kw", value);
    } else {
      params.delete("q");
      params.delete("kw");
    }

    const queryString = params.toString();
    const newUrl = `${pathname.startsWith("/docs") ? pathname : "/docs"}?${queryString}`;

    // If we are already on a docs page, just replace the URL to avoid history bloat
    // If we are redirecting from main page, push to docs
    if (pathname.startsWith("/docs")) {
      router.replace(newUrl, { scroll: false });
    } else {
      router.push(newUrl);
    }
  };

  return (
    <div className="relative group w-full max-w-sm">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search
          className={cn(
            "h-4 w-4 transition-colors",
            query
              ? "text-amber-500"
              : "text-muted-foreground group-focus-within:text-amber-500",
          )}
        />
      </div>
      <input
        id="global-search"
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search documentation..."
        className={cn(
          "w-full h-9 pl-10 pr-12 rounded-full border border-border/40 bg-zinc-900/50 backdrop-blur-xl",
          "text-sm placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50",
          "transition-all duration-300",
        )}
      />
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded border border-border/40 bg-zinc-950/50 text-[10px] text-muted-foreground font-mono">
          <Command className="h-2.5 w-2.5" />
          <span>K</span>
        </div>
      </div>

      {/* Animated glow effect on focus */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-0 group-focus-within:opacity-10 blur-[8px] transition-opacity -z-10" />
    </div>
  );
}
