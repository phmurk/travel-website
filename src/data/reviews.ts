import type { Review } from "../types/types";

export const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    tourId: "1",
    author: "Анастасия Волкова",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    title: "Это был рай на земле!",
    content:
      "Мальдивы - это самое прекрасное место, которое я когда-либо посещала. Команда VOYAGER позаботилась о каждой детали. Спасибо!",
    date: "2024-05-10",
    verified: true,
    helpful: 45,
  },
  {
    id: "2",
    tourId: "1",
    author: "Дмитрий Козлов",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 4,
    title: "Отличный отдых",
    content:
      "Хорошая организация, красивые места. Небольшие улучшения в питании, но в целом рекомендую!",
    date: "2024-05-08",
    verified: true,
    helpful: 32,
  },
];
