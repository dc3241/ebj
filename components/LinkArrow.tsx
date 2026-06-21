import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LinkArrowProps = {
  children: ReactNode;
  className?: string;
};

const linkStyles =
  "inline-block border-b border-rose pb-1 font-sans text-[0.84rem] font-normal uppercase tracking-btn text-charcoal transition-colors duration-250 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none";

export function LinkArrow({
  children,
  className = "",
  href,
  ...props
}: LinkArrowProps & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link href={href} className={`${linkStyles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
