import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "lib/docs");

export interface Doc {
  slug: string;
  realSlug?: string;
  frontmatter: Record<string, any>;
  content: string;
}

// Helper to recursively get all files
function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(getFilesRecursively(file));
    } else {
      /* Is a file */
      if (file.endsWith(".md")) {
        results.push(file);
      }
    }
  });
  return results;
}

/**
 * Normalizes a slug for display in URL:
 * - lowercase
 * - remove trailing /README
 * - handle base README as empty string
 */
export function normalizeSlug(slug: string): string {
  let normalized = slug.toLowerCase().replace(/\\/g, "/");
  if (normalized === "readme") return "";
  if (normalized.endsWith("/readme")) {
    normalized = normalized.substring(0, normalized.length - 7);
  }
  return normalized;
}

export function getAllDocs(): Doc[] {
  const allFiles = getFilesRecursively(docsDirectory);

  const allDocsData = allFiles.map((fullPath) => {
    const relativePath = path.relative(docsDirectory, fullPath);
    // Original slug from filesystem
    const realSlug = relativePath.replace(/\.md$/, "").replace(/\\/g, "/");
    // Normalized slug for URLs
    const slug = normalizeSlug(realSlug);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      realSlug, // Keep track of real slug if needed
      frontmatter: data,
      content,
    } as Doc;
  });

  return allDocsData;
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
  // If slug is empty, it refers to the root README
  const searchSlug = slug === "" || slug === "/" ? "README" : slug;

  // Try exact match first
  let targetPath = path.join(docsDirectory, `${searchSlug}.md`);
  if (!fs.existsSync(targetPath)) {
    // Try as a directory (index)
    targetPath = path.join(docsDirectory, searchSlug, "README.md");
  }

  // If still not found, we need a case-insensitive search
  if (!fs.existsSync(targetPath)) {
    const allDocs = getAllDocs();
    const normalizedTarget = normalizeSlug(slug);
    const found = allDocs.find((d) => d.slug === normalizedTarget);
    if (found) {
      targetPath = path.join(docsDirectory, `${found.realSlug}.md`);
    } else {
      return null;
    }
  }

  const fileContents = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: normalizeSlug(searchSlug),
    frontmatter: data,
    content,
  };
}
