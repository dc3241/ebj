import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
};

const buttonStyles =
  "inline-block border border-rose bg-rose px-[30px] py-[15px] font-sans text-[0.84rem] font-normal uppercase tracking-btn text-white transition-colors duration-250 hover:border-rose-dark hover:bg-rose-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none";

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonBaseProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button type={type} className={`${buttonStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className = "",
  href,
  ...props
}: ButtonBaseProps & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link href={href} className={`${buttonStyles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
