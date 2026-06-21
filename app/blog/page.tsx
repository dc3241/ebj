import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Journal",
  description:
    "Wedding planning tips, real wedding stories, and venue spotlights from Events by Jordyn.",
  path: "/blog",
});

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageIntro
        eyebrow="Journal"
        title="Planning notes, real weddings, and the occasional venue love letter."
        description="Thoughts from the work — short reads for couples in the thick of planning (or just starting to dream)."
      />

      <Container as="section" className="pb-20 min-[881px]:pb-28">
        <div className="grid grid-cols-1 gap-10 min-[881px]:grid-cols-2 min-[881px]:gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link
                href={`/blog/${post.slug}`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
              >
                <Photo
                  alt={`Cover image for ${post.title}`}
                  className="aspect-[16/10] transition-transform duration-300 group-hover:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div className="mt-5">
                  <Eyebrow className="mb-3">
                    {formatDate(post.date)}
                  </Eyebrow>
                  <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.01em] text-charcoal transition-colors duration-200 group-hover:text-rose motion-reduce:transition-none">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-slate">{post.excerpt}</p>
                  <span className="mt-4 inline-block border-b border-rose pb-1 font-sans text-[0.84rem] uppercase tracking-btn text-charcoal transition-colors duration-250 group-hover:text-rose motion-reduce:transition-none">
                    Read post →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
