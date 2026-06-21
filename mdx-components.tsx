import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.01em] text-charcoal first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-serif text-[1.35rem] text-charcoal">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-5 text-body leading-[1.7] text-slate">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-5 text-slate">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-5 text-slate">{children}</ol>
    ),
    li: ({ children }) => <li className="text-body">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="border-b border-rose text-charcoal transition-colors duration-250 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-blush pl-5 font-serif text-[1.25rem] italic leading-[1.5] text-charcoal">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
