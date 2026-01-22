"use client";

import * as React from "react";
import { Badge } from "./ui/badge";

export function VersionBadge() {
  const [version, setVersion] = React.useState<string>("Loading...");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(
          "http://dll.nehonix.com/dl/mds/xypriss/exec/scripts/checker/meta.txt",
        );
        const text = await response.text();

        // Parse the version from "version=beta" format
        const match = text.match(/version=(.+)/);
        if (match && match[1]) {
          setVersion(match[1].trim());
        } else {
          setVersion("Unknown");
        }
      } catch (error) {
        console.error("Failed to fetch version:", error);
        setVersion("Beta");
      } finally {
        setLoading(false);
      }
    };

    fetchVersion();
  }, []);

  if (loading) {
    return (
      <Badge variant="outline" className="text-sm animate-pulse">
        Loading...
      </Badge>
    );
  }

  return (
    <Badge
      variant="outline"
      className="bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-2xl shadow-emerald-500/25 border-2 border-emerald-300/50 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm tracking-wide hover:from-emerald-600 hover:to-green-700 hover:shadow-3xl hover:shadow-emerald-600/40 transition-all duration-300 ring-2 ring-emerald-400/30 hover:ring-emerald-500/50 gap-1"
    >
      <span className="font-bold">{version}</span>
      <span className="font-medium opacity-90 text-xs -mt-0.5">Version</span>
    </Badge>
  );
}
