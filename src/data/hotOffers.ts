import type { HotOffer } from "../types/types";
import Kilimanjaro from "../assets/kilimanjaro.jpg";

export const hotOffers: HotOffer[] = [
  {
    id: 1,
    title: "Килиманджаро Экспедиция",
    destination: "Танзания",
    originalPrice: 2500,
    discountPrice: 1800,
    discount: 28,
    image: Kilimanjaro,
    tourId: 1,
  },
];
