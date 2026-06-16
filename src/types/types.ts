export interface Destination {
  id: number;
  name: string;
  image: string;
  tours: number;
  slug: string;
}

export interface HotOffer {
  id: number;
  title: string;
  destination: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  image: string;
  tourId: number;
}

export type TourCategory =
  | "beach"
  | "mountain"
  | "city"
  | "adventure"
  | "cultural"
  | "luxury";

export interface Hotel {
  id: string;
  name: string;
  stars: number; // 3-5
  distanceToSea: number; // в метрах
  seaType: "beach" | "river" | "lake" | "none" | "mountin";
  description: string;
  amenities: string[];
  image: string;
  priceModifier: number; // множитель для цены тура (1.0 = нет изменений)
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: TourCategory;
  destination: string;
  country: string;
  price: number;
  originalPrice?: number;
  duration: number; // дней
  groupSize: number;
  startDate: string;
  endDate: string;
  rating: number; // 0-5
  reviewCount: number;
  image: string;
  images: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  difficulty: "easy" | "moderate" | "hard";
  bestSeason: string;
  latitude: number;
  longitude: number;
  hotels?: Hotel[]; // доступные отели для этого тура
  distanceToSea?: number; // в метрах (основное значение)
  seaType?: "beach" | "river" | "lake" | "mountain" | "city"; // тип линии прибоя/местности
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string[];
  accommodation: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: number;
  tags: string[];
}
