import type { Destination } from "../types/types";
import Tanzania from "../assets/tanzania.jpg";
import Turkey from "../assets/turkey.jpg";

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Танзания",
    image: Tanzania,
    tours: 15,
    slug: "tanzania",
  },
  {
    id: 2,
    name: "Турция",
    image: Turkey,
    tours: 22,
    slug: "turkey",
  },
];
