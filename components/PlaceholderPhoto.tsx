import type { ReactNode } from "react";

type PlaceholderPhotoProps = {
  label: string;
  alt: string;
  className?: string;
  children?: ReactNode;
  /** Set when a parent control already exposes an accessible name (e.g. gallery button). */
  decorative?: boolean;
};

export function PlaceholderPhoto({
  label,
  alt,
  className = "",
  children,
  decorative = false,
}: PlaceholderPhotoProps) {
  return (
    <div
      className={`photo-placeholder relative overflow-hidden rounded-[2px] border border-line ${className}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : alt}
      aria-hidden={decorative ? true : undefined}
    >
      {/* TODO: replace with real photo */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-[0.66rem] font-normal uppercase tracking-[0.18em] text-slate opacity-65"
        aria-hidden="true"
      >
        {label}
      </span>
      {children}
    </div>
  );
}
