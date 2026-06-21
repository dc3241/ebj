export type GalleryWedding = {
  id: string;
  couple: string;
  location: string;
  label: string;
  caption?: string;
  gridClass: string;
};

export const galleryWeddings: GalleryWedding[] = [
  {
    id: "sarah-tom-sedona",
    couple: "Sarah & Tom",
    location: "Sedona, Arizona",
    label: "Featured wedding",
    caption: "Desert modern with terracotta tones",
    gridClass:
      "col-span-2 row-span-2 min-[881px]:col-span-2 min-[881px]:row-span-2",
  },
  {
    id: "aisha-dev-scottsdale",
    couple: "Aisha & Dev",
    location: "Scottsdale, Arizona",
    label: "Wedding photo",
    gridClass: "",
  },
  {
    id: "megan-chris-tuscany",
    couple: "Megan & Chris",
    location: "Tuscany, Italy",
    label: "Wedding photo",
    caption: "Villa ceremony at golden hour",
    gridClass: "",
  },
  {
    id: "lauren-beau-phoenix",
    couple: "Lauren & Beau",
    location: "Phoenix, Arizona",
    label: "Wedding photo",
    gridClass: "col-span-2 min-[881px]:col-span-2",
  },
  {
    id: "elena-marco-amalfi",
    couple: "Elena & Marco",
    location: "Amalfi Coast, Italy",
    label: "Wedding photo",
    gridClass: "row-span-2 min-[881px]:row-span-2",
  },
  {
    id: "jordan-alex-flagstaff",
    couple: "Jordan & Alex",
    location: "Flagstaff, Arizona",
    label: "Wedding photo",
    gridClass: "",
  },
  {
    id: "priya-daniel-cabo",
    couple: "Priya & Daniel",
    location: "Cabo San Lucas, Mexico",
    label: "Wedding photo",
    caption: "Cliffside reception under the stars",
    gridClass: "col-span-2 min-[881px]:col-span-2",
  },
  {
    id: "hannah-luke-tucson",
    couple: "Hannah & Luke",
    location: "Tucson, Arizona",
    label: "Wedding photo",
    gridClass: "",
  },
  {
    id: "nina-oscar-paris",
    couple: "Nina & Oscar",
    location: "Paris, France",
    label: "Wedding photo",
    gridClass: "col-span-2 row-span-1 min-[881px]:col-span-2 min-[881px]:row-span-2",
  },
  {
    id: "rebecca-james-sedona",
    couple: "Rebecca & James",
    location: "Sedona, Arizona",
    label: "Wedding photo",
    gridClass: "",
  },
];
