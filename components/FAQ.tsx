"use client";

import { useId, useState } from "react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import type { FAQItem } from "@/lib/faq";

type FAQProps = {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
  allowMultiple?: boolean;
};

export function FAQ({
  items,
  eyebrow,
  title,
  className = "",
  allowMultiple = false,
}: FAQProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggleItem(id: string) {
    setOpenIds((current) => {
      const isOpen = current.includes(id);

      if (allowMultiple) {
        return isOpen
          ? current.filter((openId) => openId !== id)
          : [...current, id];
      }

      return isOpen ? [] : [id];
    });
  }

  const content = (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-[0.92rem] font-normal uppercase tracking-[0.12em] text-charcoal transition-colors duration-200 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none min-[881px]:py-6 min-[881px]:text-[0.84rem]"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 font-serif text-xl text-rose transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-[0.98rem] leading-[1.7] text-slate min-[881px]:pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (!eyebrow && !title) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Container as="section" className={`py-16 min-[881px]:py-24 ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="mb-10 font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
          {title}
        </h2>
      )}
      {content}
    </Container>
  );
}
