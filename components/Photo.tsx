import type { ReactNode } from "react";

type PhotoProps = {
  src?: string;
  alt: string;
  className?: string;
  children?: ReactNode;
  /** Set when a parent control already exposes an accessible name (e.g. gallery button). */
  decorative?: boolean;
  priority?: boolean;
};

export function Photo({
  src,
  alt,
  className = "",
  children,
  decorative = false,
  priority = false,
}: PhotoProps) {
  const wrapperClass = `relative overflow-hidden rounded-[2px] border border-line ${className}`;

  if (!src) {
    return (
      <div
        className={`photo-placeholder ${wrapperClass}`}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : alt}
        aria-hidden={decorative ? true : undefined}
      >
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-[0.66rem] font-normal uppercase tracking-[0.18em] text-slate opacity-65"
          aria-hidden="true"
        >
          Photo coming soon
        </span>
        {children}
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={decorative ? "" : alt}
        aria-hidden={decorative ? true : undefined}
        className="h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
      />
      {children}
    </div>
  );
}
