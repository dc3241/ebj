import Link from "next/link";

type BrandProps = {
  size?: "nav" | "footer";
  showTagline?: boolean;
};

export function Brand({ size = "nav", showTagline = true }: BrandProps) {
  const isFooter = size === "footer";

  return (
    <Link
      href="/"
      className={`font-serif tracking-[0.01em] text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose ${
        isFooter ? "text-[1.7rem]" : "text-[1.45rem]"
      }`}
    >
      Events by Jordyn
      {showTagline && (
        <small className="mt-[-2px] block font-sans text-[0.58rem] font-medium uppercase tracking-[0.34em] text-slate">
          Wedding Planning
        </small>
      )}
    </Link>
  );
}
