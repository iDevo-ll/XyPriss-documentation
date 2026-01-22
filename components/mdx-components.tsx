"use client";

import React from "react";
import Link from "next/link";
import { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  language: string;
  value: string;
}

function CodeBlock({ language, value }: CodeBlockProps) {
  const isBash =
    language === "bash" ||
    language === "sh" ||
    language === "shell" ||
    language === "terminal";

  return (
    <div className="code-block-wrapper group relative my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl animate-fade-in ring-1 ring-white/5">
      {/* Real macOS-style header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_10px_rgba(255,95,87,0.2)]" />
            <div className="w-3 h-3 rounded-full bg-[#FEB12E] shadow-[0_0_10px_rgba(254,177,46,0.2)]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_10px_rgba(40,200,64,0.2)]" />
          </div>
          <span className="text-[11px] text-zinc-500 font-mono tracking-widest uppercase font-bold opacity-70">
            {isBash ? "terminal — bash" : language}
          </span>
        </div>

        <button
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 border border-white/10 hover:text-white flex items-center gap-2"
          onClick={() => {
            navigator.clipboard.writeText(value);
          }}
        >
          <span>Copy</span>
        </button>
      </div>

      {/* Code content */}
      <div className="relative font-mono">
        {isBash && (
          <div className="absolute left-5 top-[1.45rem] text-primary/60 select-none text-sm font-bold">
            $
          </div>
        )}
        <SyntaxHighlighter
          language={language || "text"}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1.75rem",
            paddingLeft: isBash ? "2.75rem" : "1.75rem",
            background: "transparent",
            fontSize: "0.85rem",
            lineHeight: "1.8",
            border: "none",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-mono), monospace",
              textShadow: "none",
            },
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export const mdxComponents: Partial<Components> = {
  // Override pre to avoid div-in-pre invalid HTML
  pre({ children }) {
    return <>{children}</>;
  },

  code({ className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";
    const value = String(children).replace(/\n$/, "");

    const isCodeBlock = className && language;

    if (isCodeBlock) {
      return <CodeBlock language={language} value={value} />;
    }

    // Inline code
    return (
      <code
        className="px-1.5 py-0.5 rounded bg-zinc-800/80 text-[0.85em] font-mono text-primary font-bold border border-white/10 shadow-sm"
        {...props}
      >
        {children}
      </code>
    );
  },

  // Minimalist, Modern Table (Stripe style, no vertical borders)
  table({ children }) {
    return (
      <div className="my-10 w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm leading-relaxed">
          {children}
        </table>
      </div>
    );
  },

  thead({ children }) {
    return (
      <thead className="border-b-2 border-zinc-800 text-zinc-100">
        {children}
      </thead>
    );
  },

  th({ children }) {
    return (
      <th className="px-6 py-4 font-black uppercase tracking-[0.1em] text-[10px] text-zinc-500">
        {children}
      </th>
    );
  },

  td({ children }) {
    return (
      <td className="px-6 py-5 border-b border-zinc-800/50 text-zinc-400 font-medium">
        {children}
      </td>
    );
  },

  tr({ children }) {
    return (
      <tr className="hover:bg-white/[0.03] transition-colors duration-100 even:bg-white/[0.01]">
        {children}
      </tr>
    );
  },

  // Robust Link Handling
  a({ href, children }: any) {
    if (!href) return <span>{children}</span>;

    const isExternal = href.startsWith("http") || href.startsWith("//");
    const isAnchor = href.startsWith("#");

    if (isExternal) {
      return (
        <a
          href={href}
          className="text-primary hover:text-primary/80 transition-all font-bold underline underline-offset-4 decoration-primary/20 hover:decoration-primary decoration-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    if (isAnchor) {
      return (
        <a
          href={href}
          className="text-primary hover:text-primary/80 transition-all font-bold"
        >
          {children}
        </a>
      );
    }

    // Internal link sanitization (Strict /docs/ mapping)
    let cleanHref = href;

    // 1. Remove .md or .mdx extension
    cleanHref = cleanHref.replace(/\.mdx?$/, "");

    // 2. Clear all relative dots like ../ or ./
    cleanHref = cleanHref.replace(/^(\.\.?\/)+/, "");

    // 3. Ensure it starts with /docs/
    cleanHref = `/docs/${cleanHref}`;

    // 4. Sanitation: and remove possible double /docs/docs/
    cleanHref = cleanHref.replace(/\/docs\/docs\//g, "/docs/");

    // 5. Final sanitation for multiple slashes
    cleanHref = cleanHref.replace(/\/+/g, "/");

    return (
      <Link
        href={cleanHref}
        className="text-primary hover:text-primary/80 transition-all font-bold underline underline-offset-4 decoration-primary/20 hover:decoration-primary decoration-2"
      >
        {children}
      </Link>
    );
  },

  blockquote({ children }) {
    return (
      <blockquote className="my-10 border-l-[3px] border-primary bg-primary/5 px-8 py-6 rounded-r-2xl text-zinc-300 font-medium leading-relaxed shadow-sm">
        {children}
      </blockquote>
    );
  },

  h1({ children }) {
    return (
      <h1 className="scroll-m-20 text-4xl font-black tracking-tight mb-12 text-white">
        {children}
      </h1>
    );
  },

  h2({ children }) {
    return (
      <h2 className="scroll-m-20 text-2xl font-bold tracking-tight mt-16 mb-8 text-white border-b border-white/5 pb-3">
        {children}
      </h2>
    );
  },

  h3({ children }) {
    return (
      <h3 className="scroll-m-20 text-xl font-bold tracking-tight mt-12 mb-6 text-zinc-100">
        {children}
      </h3>
    );
  },

  p({ children }) {
    return (
      <p className="leading-8 [&:not(:first-child)]:mt-6 text-zinc-400 font-medium">
        {children}
      </p>
    );
  },

  ul({ children }) {
    return (
      <ul className="my-8 ml-6 list-disc [&>li]:mt-3 text-zinc-400 marker:text-primary/50">
        {children}
      </ul>
    );
  },

  ol({ children }) {
    return (
      <ol className="my-8 ml-6 list-decimal [&>li]:mt-3 text-zinc-400 marker:text-primary/50">
        {children}
      </ol>
    );
  },
};
