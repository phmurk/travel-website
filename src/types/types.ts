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
