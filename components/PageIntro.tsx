import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Container } from "@/components/Container";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  align?: "center" | "left";
};

export function PageIntro({
  eyebrow,
  title,
  description,
  className = "",
  align = "center",
}: PageIntroProps) {
  const alignClass =
    align === "center"
      ? "mx-auto max-w-[34em] text-center"
      : "max-w-[34em] text-left";

  return (
    <Container
      as="section"
      aria-labelledby="page-intro-heading"
      className={`py-16 min-[881px]:py-24 ${alignClass} ${className}`}
    >
      <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
      <h1
        id="page-intro-heading"
        className="font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]"
      >
        {title}
      </h1>
      {description && (
        <p className="mt-[18px] text-slate">{description}</p>
      )}
    </Container>
  );
}
