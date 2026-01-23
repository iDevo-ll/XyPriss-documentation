"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Check, Copy, Info, X, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import "highlight.js/styles/tokyo-night-dark.css";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  isMarkdown?: boolean;
}

/**
 * Helper to recursively extract text from React nodes
 */
function extractText(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node.props?.children) return extractText(node.props.children);
  return "";
}

/**
 * Parses <link to="...">label</link> inside comment strings
 */
function parseCommentContent(content: string) {
  const parts = content.split(/(<link to="[^"]+">.*?<\/link>)/g);
  return parts.map((part, i) => {
    const match = part.match(/<link to="([^"]+)">([\s\S]*?)<\/link>/);
    if (match) {
      const url = match[1];
      const label = match[2];
      const isExternal = url.startsWith("http");
      if (isExternal) {
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener"
            className="text-amber-400 font-bold underline decoration-amber-400/30 hover:decoration-amber-400 transition-all mx-1"
          >
            {label}
          </a>
        );
      }
      return (
        <Link
          key={i}
          href={url}
          className="text-amber-400 font-bold underline decoration-amber-400/30 hover:decoration-amber-400 transition-all mx-1"
        >
          {label}
        </Link>
      );
    }
    return part;
  });
}

/**
 * Portal Overlay Component for Internal Comments
 */
const CommentOverlay = ({
  content,
  isOpen,
  onClose,
  triggerRect,
}: {
  content: string;
  isOpen: boolean;
  onClose: () => void;
  triggerRect: DOMRect | null;
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !triggerRect) return null;

  // Calculate target position for the overlay
  // We want it "detached" from the code block, so let's aim for a float position
  // on the right or staggered above.
  const overlayX = Math.min(window.innerWidth - 320, triggerRect.right + 100);
  const overlayY = triggerRect.top - 60;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Backdrop for closing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/5 pointer-events-auto"
          />

          {/* Flux Connector */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                strokeDashoffset: [0, -20],
              }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{
                pathLength: { duration: 0.6, ease: "easeInOut" },
                opacity: { duration: 0.3 },
                strokeDashoffset: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              d={`M ${triggerRect.left + 10} ${triggerRect.top + 10} 
                 C ${triggerRect.left + 50} ${triggerRect.top + 10}, 
                   ${overlayX} ${overlayY + 100}, 
                   ${overlayX} ${overlayY + 50}`}
              fill="none"
              stroke="url(#amber-gradient)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            <defs>
              <linearGradient
                id="amber-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Overlay Box */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: triggerRect.left,
              y: triggerRect.top,
            }}
            animate={{ opacity: 1, scale: 1, x: overlayX, y: overlayY }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: triggerRect.left,
              y: triggerRect.top,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute pointer-events-auto w-72"
          >
            <div className="relative group p-5 rounded-2xl bg-[#0d1117]/95 backdrop-blur-2xl border border-amber-500/40 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-white/10">
              {/* Pulse effect */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-500/20">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">
                      Internal Flux
                    </span>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-zinc-500" />
                  </button>
                </div>

                <div className="text-sm font-medium leading-relaxed text-zinc-100">
                  {parseCommentContent(content)}
                </div>
              </div>

              {/* Connector Point on the box */}
              <div className="absolute -left-1 bottom-10 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

/**
 * Internal Comment Trigger Component
 */
function InternalComment({ content }: { content: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [rect, setRect] = React.useState<DOMRect | null>(null);

  const toggle = () => {
    if (triggerRef.current) {
      setRect(triggerRef.current.getBoundingClientRect());
    }
    setIsOpen(!isOpen);
  };

  // Update rect on scroll/resize if open
  React.useEffect(() => {
    if (!isOpen) return;
    const handleUpdate = () => {
      if (triggerRef.current) {
        setRect(triggerRef.current.getBoundingClientRect());
      }
    };
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate);
    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate);
    };
  }, [isOpen]);

  return (
    <>
      <span className="inline-flex items-center relative mx-1 align-middle">
        <motion.button
          ref={triggerRef}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggle}
          className={cn(
            "w-4 h-4 rounded-full flex items-center justify-center transition-all shadow-lg pointer-events-auto cursor-pointer border",
            isOpen
              ? "bg-amber-500 border-amber-400 text-black shadow-amber-500/50"
              : "bg-[#1e1e1e] border-white/20 text-amber-500 hover:border-amber-500/50 shadow-black/50",
          )}
        >
          <Zap className={cn("w-2.5 h-2.5", !isOpen && "animate-pulse")} />
        </motion.button>
      </span>

      <CommentOverlay
        content={content}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRect={rect}
      />
    </>
  );
}

/**
 * Helper to recursively find and style internal comments [#! ... !#] or [#!] ...
 */
function processInternalComments(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!child) return child;
    if (typeof child === "string" && child.includes("[#!]")) {
      const parts = child.split(/(\[#!\][\s\S]*?(?:!#|\n|$))/g);
      return parts.map((part, i) => {
        if (part.startsWith("[#!]")) {
          let content = part.slice(4);
          if (content.endsWith("!#")) content = content.slice(0, -2);
          if (content.endsWith("\n")) content = content.slice(0, -1);
          return <InternalComment key={i} content={content.trim()} />;
        }
        return part;
      });
    }
    if (
      React.isValidElement(child) &&
      child.props &&
      (child.props as any).children
    ) {
      return React.cloneElement(child, {
        children: processInternalComments((child.props as any).children),
      } as any);
    }
    return child;
  });
}

/**
 * Main CodeBlock component
 */
export function CodeBlock({
  code,
  language = "bash",
  className,
  isMarkdown = false,
}: CodeBlockProps) {
  if (isMarkdown) {
    return (
      <div className={cn("documentation-article", className)}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            a: ({ href, children }) => {
              const isExternal = href?.startsWith("http");
              if (isExternal)
                return (
                  <a href={href} target="_blank" rel="noopener">
                    {children}
                  </a>
                );
              return <Link href={href || "#"}>{children}</Link>;
            },
            pre: ({ children, ...props }) => {
              const raw = extractText(children).replace(/\n$/, "");
              return (
                <CodeBlockWrapper code={raw}>
                  <pre {...props}>{children}</pre>
                </CodeBlockWrapper>
              );
            },
            code: ({ children, ...props }) => {
              const processed = processInternalComments(children);
              return <code {...props}>{processed}</code>;
            },
          }}
        >
          {code}
        </ReactMarkdown>
      </div>
    );
  }

  return <CodeBlock code={`\`\`\`${language}\n${code}\n\`\`\``} isMarkdown />;
}

/**
 * Wrapper for the Copy Button logic
 */
function CodeBlockWrapper({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = React.useState(false);

  const cleanCode = React.useMemo(() => {
    // Preserve newlines by using lookahead for the newline terminator
    return code.replace(/\[#!\][\s\S]*?(?:!#|(?=\n)|$)/g, "").trim();
  }, [code]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute right-6 top-6 z-50 opacity-0 group-hover:opacity-100 transition-all duration-200">
        <Button
          size="sm"
          variant="secondary"
          onClick={copyToClipboard}
          className={cn(
            "cursor-pointer h-8 px-2 flex items-center gap-1.5 bg-background/50 backdrop-blur-md border border-white/10 shadow-lg hover:bg-background/80",
            copied && "border-green-500/50 text-green-500",
          )}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Copy
              </span>
            </>
          )}
        </Button>
      </div>
      {children}
    </div>
  );
}
