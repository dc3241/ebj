type RuleProps = {
  className?: string;
};

export function Rule({ className = "" }: RuleProps) {
  return (
    <div
      className={`mx-auto flex items-center justify-center gap-3.5 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-[60px] bg-blush" />
      <span className="text-[0.7rem] text-rose not-italic">✦</span>
      <span className="h-px w-[60px] bg-blush" />
    </div>
  );
}
