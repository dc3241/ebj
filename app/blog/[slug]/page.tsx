import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { useMDXComponents } from "@/mdx-components";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: useMDXComponents({}),
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <article>
      <Container className="py-16 min-[881px]:py-24">
        <Link
          href="/blog"
          className="mb-8 inline-block border-b border-rose pb-1 font-sans text-[0.84rem] uppercase tracking-btn text-charcoal transition-colors duration-250 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none"
        >
          ← Back to journal
        </Link>

        <Eyebrow className="mb-4">{formatDate(post.date)}</Eyebrow>
        <h1 className="max-w-[16em] font-serif text-[clamp(2rem,4vw,3rem)] tracking-[-0.01em]">
          {post.title}
        </h1>
        <p className="mt-5 max-w-[34em] text-[1.06rem] text-slate">
          {post.excerpt}
        </p>

        <PlaceholderPhoto
          label="Journal cover image"
          alt={`Cover image for ${post.title}`}
          className="mt-10 aspect-[16/9]"
        />
      </Container>

      <Container className="max-w-[40em] pb-20 min-[881px]:pb-28">
        <div className="prose-spacing">{content}</div>
      </Container>
    </article>
  );
}
