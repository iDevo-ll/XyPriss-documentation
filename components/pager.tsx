import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllDocs } from "@/lib/doc-helper";
import { cn } from "@/lib/utils";

interface PagerProps {
  slug: string;
}

export function Pager({ slug }: PagerProps) {
  const docs = getAllDocs();

  const activeIndex = docs.findIndex((doc) => doc.slug === slug);

  if (activeIndex === -1) {
    return null;
  }

  const prev = activeIndex > 0 ? docs[activeIndex - 1] : null;
  const next = activeIndex < docs.length - 1 ? docs[activeIndex + 1] : null;

  if (!prev && !next) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between mt-10">
      {prev && (
        <Link
          href={`/docs/${prev.slug}`}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mr-auto",
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          {prev.frontmatter.title || prev.slug}
        </Link>
      )}
      {next && (
        <Link
          href={`/docs/${next.slug}`}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto",
          )}
        >
          {next.frontmatter.title || next.slug}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
