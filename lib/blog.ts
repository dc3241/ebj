import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function parsePostFilename(filename: string) {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = parsePostFilename(filename);
      const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(mdxPath)) {
    return null;
  }

  const raw = fs.readFileSync(mdxPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    content,
  };
}
