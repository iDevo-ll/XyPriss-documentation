import { notFound } from "next/navigation";

export const revalidate = 14400; // 4 hours
import { getAllDocs, getDocBySlug, normalizeSlug } from "@/lib/doc-helper";
import { Metadata } from "next";
import { Pager } from "@/components/pager";
import { SearchHighlight } from "@/components/search-highlight";
import { CodeBlock } from "@/components/ui/code-block";

interface DocPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug ? slug.join("/") : "";
  const doc = await getDocBySlug(slugPath);

  if (!doc) {
    return {
      title: "Document Not Found",
    };
  }

  const title = doc.frontmatter.title || doc.slug;
  const description =
    doc.frontmatter.description ||
    `Explore ${title} in the XyPriss documentation. Build high-performance hybrid Rust + TypeScript web applications.`;
  const url = `https://xypriss.nehonix.com/docs/${doc.slug}`;

  return {
    title: `XyPriss - ${title}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `XyPriss Documentation: ${title}`,
      description,
      url,
      type: "article",
      siteName: "XyPriss",
      images: [
        {
          url: "https://dll.nehonix.com/assets/xypriss/xypriss-og.png",
          width: 1200,
          height: 630,
          alt: `XyPriss - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `XyPriss - ${title}`,
      description,
      images: ["https://dll.nehonix.com/assets/xypriss/xypriss-og.png"],
    },
  };
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug.split("/").filter(Boolean),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const slugPath = slug ? slug.join("/") : "";
  const doc = await getDocBySlug(slugPath);

  if (!doc) {
    if (slugPath === "") {
      const readme = await getDocBySlug("");
      if (readme) return renderDoc(readme, "");
    }
    notFound();
  }

  return renderDoc(doc, doc.slug);
}

function renderDoc(doc: any, slugPath: string) {
  // 0. Remove HTML comments
  let sanitizedContent = doc.content.replace(/<!--[\s\S]*?-->/g, "");

  // 1. Robust Link Sanitization for Internal Links
  sanitizedContent = sanitizedContent.replace(
    /\[(.*?)\]\((.*?)\)/g,
    (match: string, text: string, href: string) => {
      if (
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("#")
      ) {
        return match;
      }

      let target = href.replace(/\.mdx?$/, "");
      target = target.replace(/^(\.\.?\/)+/, "");
      target = target.replace(/^\/+/, "");

      // Use normalizeSlug to ensure lowercase and no README
      const normalizedTarget = normalizeSlug(target.replace(/^docs\//, ""));
      const cleanHref = `/docs/${normalizedTarget}`;

      return `[${text}](${cleanHref})`;
    },
  );

  const title = doc.frontmatter.title || doc.slug;
  const description =
    doc.frontmatter.description ||
    `Explore ${title} in the XyPriss documentation.`;
  const url = `https://xypriss.nehonix.com/docs/${slugPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `XyPriss - ${title}`,
    description: description,
    url: url,
    image: "https://dll.nehonix.com/assets/xypriss/xypriss-og.png",
    author: {
      "@type": "Organization",
      name: "NEHONIX",
      url: "https://nehonix.com",
    },
    publisher: {
      "@type": "Organization",
      name: "NEHONIX",
      logo: {
        "@type": "ImageObject",
        url: "https://dll.nehonix.com/assets/xypriss/file_0000000083bc71f4998cbc2f4f0c9629.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: "XyPriss, Rust, TypeScript, Framework, High Performance, Backend",
  };

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none pb-12 documentation-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SearchHighlight />
      {/* 
          All documentation rendering (Markdown, Highlighting, Code Blocks) 
          is now encapsulated in the CodeBlock component. 
      */}
      <CodeBlock code={sanitizedContent} isMarkdown />

      <Pager slug={slugPath} />
    </article>
  );
}
