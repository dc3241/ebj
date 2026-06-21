import fs from "node:fs";
import path from "node:path";
import { getAltText, getGridClass, gallerySrc } from "@/lib/image-alt";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  gridClass: string;
};

function loadGalleryImages(): GalleryImage[] {
  const galleryDir = path.join(process.cwd(), "public/images/gallery");

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  return fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .map((file, index) => {
      const id = file.replace(/\.[^.]+$/, "");

      return {
        id,
        src: gallerySrc(file),
        alt: getAltText(id),
        gridClass: getGridClass(index, id),
      };
    });
}

export const galleryImages: GalleryImage[] = loadGalleryImages();

/** @deprecated Use galleryImages — alias for GalleryGrid prop name. */
export const galleryWeddings = galleryImages;

export type GalleryWedding = GalleryImage;
