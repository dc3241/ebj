"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import type { GalleryWedding } from "@/lib/gallery";

type GalleryGridProps = {
  weddings: GalleryWedding[];
};

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
}

export function GalleryGrid({ weddings }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  const closeLightbox = useCallback(() => {
    setOpenIndex(null);
  }, []);

  const openLightbox = useCallback((index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
  }, []);

  useEffect(() => {
    if (openIndex === null) {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
      return;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = getFocusableElements(dialogRef.current);
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [closeLightbox, openIndex]);

  const activeWedding = openIndex !== null ? weddings[openIndex] : null;

  return (
    <>
      <Container as="section" className="pb-20 min-[881px]:pb-28">
        <div className="grid auto-rows-[160px] grid-cols-2 gap-5 min-[881px]:auto-rows-[220px] min-[881px]:grid-cols-4 min-[881px]:gap-6">
          {weddings.map((wedding, index) => {
            const caption = wedding.caption ?? `${wedding.couple} · ${wedding.location}`;

            return (
              <button
                key={wedding.id}
                type="button"
                className={`group block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none ${wedding.gridClass}`}
                onClick={(event) => openLightbox(index, event.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`View photo: ${caption}`}
              >
                <PlaceholderPhoto
                  label={wedding.label}
                  alt={`Wedding photo: ${caption}`}
                  decorative
                  className="h-full w-full transition-transform duration-300 group-hover:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <span className="absolute bottom-3.5 left-4 z-[2] bg-white/86 px-[11px] py-[5px] font-sans text-[0.7rem] uppercase tracking-btn text-charcoal">
                    {wedding.couple} · {wedding.location}
                  </span>
                </PlaceholderPhoto>
              </button>
            );
          })}
        </div>
      </Container>

      {activeWedding && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/90 p-4 min-[881px]:items-center min-[881px]:p-8"
          onClick={closeLightbox}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative w-full max-w-4xl rounded-[2px] border border-line bg-white p-4 shadow-xl min-[881px]:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center border border-line bg-white font-sans text-xl text-charcoal transition-colors duration-200 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none min-[881px]:right-4 min-[881px]:top-4"
              aria-label="Close photo"
            >
              ✕
            </button>

            <div
              className="photo-placeholder relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-line min-[881px]:aspect-[16/10]"
              role="img"
              aria-label={`${activeWedding.couple} wedding in ${activeWedding.location}`}
            >
              {/* TODO: replace with real photo */}
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-[0.66rem] font-normal uppercase tracking-[0.18em] text-slate opacity-65"
                aria-hidden="true"
              >
                {activeWedding.label}
              </span>
            </div>

            <div className="mt-5 pr-10">
              <h2
                id={titleId}
                className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-charcoal"
              >
                {activeWedding.couple}
              </h2>
              <p id={descriptionId} className="mt-2 text-slate">
                {activeWedding.location}
                {activeWedding.caption ? ` — ${activeWedding.caption}` : ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
