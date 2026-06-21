import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "p";
};

export function Eyebrow({ children, className = "", as: Tag = "span" }: EyebrowProps) {
  return (
    <Tag
      className={`block font-sans text-eyebrow font-medium uppercase tracking-eyebrow text-rose ${className}`}
    >
      {children}
    </Tag>
  );
}
