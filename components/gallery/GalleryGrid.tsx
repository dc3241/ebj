"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Photo } from "@/components/Photo";
import type { GalleryImage } from "@/lib/gallery";

type GalleryGridProps = {
  weddings: GalleryImage[];
};

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter(
    (element) =>
      !element.hasAttribute("disabled") && element.offsetParent !== null,
  );
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

  const activeImage = openIndex !== null ? weddings[openIndex] : null;

  return (
    <>
      <Container as="section" className="pb-20 min-[881px]:pb-28">
        <div className="grid auto-rows-[160px] grid-cols-2 gap-5 min-[881px]:auto-rows-[220px] min-[881px]:grid-cols-4 min-[881px]:gap-6">
          {weddings.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className={`group block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none ${image.gridClass}`}
              onClick={(event) => openLightbox(index, event.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`View photo: ${image.alt}`}
            >
              <Photo
                src={image.src}
                alt={image.alt}
                decorative
                className="h-full w-full transition-transform duration-300 group-hover:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </button>
          ))}
        </div>
      </Container>

      {activeImage && (
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

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-line min-[881px]:aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-5 pr-10">
              <h2
                id={titleId}
                className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-charcoal"
              >
                Wedding gallery
              </h2>
              <p id={descriptionId} className="mt-2 text-slate">
                {activeImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
