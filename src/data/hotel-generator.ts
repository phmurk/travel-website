import type { Hotel, Tour } from "../types/types";

export function generateHotelsForTour(tour: Tour): Hotel[] {
  const baseHotels: Record<string, Hotel[]> = {
    beach: [
      {
        id: `${tour.id}-h-luxury`,
        name: `${tour.destination} Luxury Resort 5*`,
        stars: 5,
        distanceToSea: 0,
        seaType: "beach",
        description: `Роскошный курорт с прямым доступом на приватный пляж и мировым уровнем сервиса в ${tour.destination}`,
        amenities: [
          "Приватный пляж",
          "SPA",
          "Снорклинг",
          "Дайвинг",
          "Ресторан",
          "Бар",
          "Бассейн",
          "Wi-Fi",
        ],
        image:
          "https://images.unsplash.com/photo-1520506684286-f6aa5e92de42?w=400&h=300&fit=crop",
        priceModifier: 1.3,
      },
      {
        id: `${tour.id}-h-comfort`,
        name: `${tour.destination} Comfort Hotel 4*`,
        stars: 4,
        distanceToSea: 100,
        seaType: "beach",
        description: `Комфортный отель с доступом на пляж, хороший баланс цены и качества`,
        amenities: [
          "Пляж",
          "Бассейн",
          "Ресторан",
          "Фитнес",
          "Развлечения",
          "Wi-Fi",
        ],
        image:
          "https://images.unsplash.com/photo-1551524164-0996dfd4fcc0?w=400&h=300&fit=crop",
        priceModifier: 1.0,
      },
      {
        id: `${tour.id}-h-budget`,
        name: `${tour.destination} Budget Hotel 3*`,
        stars: 3,
        distanceToSea: 300,
        seaType: "beach",
        description: `Экономичный вариант размещения с хорошей доступностью к пляжу`,
        amenities: ["Доступ к пляжу", "Столовая", "Кондиционер", "Развлечения"],
        image:
          "https://images.unsplash.com/photo-1455849318169-8c8e66a28608?w=400&h=300&fit=crop",
        priceModifier: 0.8,
      },
    ],
    mountain: [
      {
        id: `${tour.id}-h-luxury`,
        name: `${tour.destination} Mountain Luxury Lodge 5*`,
        stars: 5,
        distanceToSea: 999999,
        seaType: "mountain",
        description: `Премиум горный лодж с панорамным видом на горы и полной безопасностью`,
        amenities: [
          "Панорамный вид",
          "Отопление",
          "SPA",
          "Ресторан",
          "Гиды",
          "Медицинская помощь",
        ],
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        priceModifier: 1.2,
      },
      {
        id: `${tour.id}-h-comfort`,
        name: `${tour.destination} Mountain Hotel 3*`,
        stars: 3,
        distanceToSea: 999999,
        seaType: "mountain",
        description: `Комфортный горный отель с хорошей инфраструктурой для альпинистов`,
        amenities: [
          "Теплое питание",
          "Гиды",
          "Базовое оборудование",
          "Аккредитизация",
        ],
        image:
          "https://images.unsplash.com/photo-1455849318169-8c8e66a28608?w=400&h=300&fit=crop",
        priceModifier: 0.9,
      },
    ],
    city: [
      {
        id: `${tour.id}-h-luxury`,
        name: `${tour.destination} City Palace 5*`,
        stars: 5,
        distanceToSea: 999999,
        seaType: "city",
        description: `Роскошный отель в центре города с видом на достопримечательности`,
        amenities: [
          "Центр города",
          "SPA",
          "Ресторан Мишленовских шефов",
          "Консьерж",
          "Бизнес центр",
        ],
        image:
          "https://images.unsplash.com/photo-1520506684286-f6aa5e92de42?w=400&h=300&fit=crop",
        priceModifier: 1.25,
      },
      {
        id: `${tour.id}-h-comfort`,
        name: `${tour.destination} City Hotel 4*`,
        stars: 4,
        distanceToSea: 999999,
        seaType: "city",
        description: `Удобный отель рядом с основными достопримечательностями`,
        amenities: [
          "Центральное местоположение",
          "Ресторан",
          "Бассейн",
          "Тренажёрный зал",
          "Ночной клуб",
        ],
        image:
          "https://images.unsplash.com/photo-1551524164-0996dfd4fcc0?w=400&h=300&fit=crop",
        priceModifier: 1.0,
      },
    ],
    adventure: [
      {
        id: `${tour.id}-h-luxury`,
        name: `${tour.destination} Adventure Camp Premium`,
        stars: 4,
        distanceToSea: 999999,
        seaType: "mountain",
        description: `Премиум базовый лагерь с современными условиями и полной поддержкой`,
        amenities: [
          "Генератор",
          "Отопление",
          "Теплая пища",
          "Опытные гиды",
          "Аптека",
        ],
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        priceModifier: 1.15,
      },
    ],
    cultural: [
      {
        id: `${tour.id}-h-luxury`,
        name: `${tour.destination} Cultural Palace Hotel 5*`,
        stars: 5,
        distanceToSea: 999999,
        seaType: "city",
        description: `Историческое здание в центре наследия с изысканным дизайном`,
        amenities: [
          "История",
          "Музей",
          "Культурные мероприятия",
          "Ресторан",
          "Библиотека",
        ],
        image:
          "https://images.unsplash.com/photo-1520506684286-f6aa5e92de42?w=400&h=300&fit=crop",
        priceModifier: 1.2,
      },
    ],
    luxury: [
      {
        id: `${tour.id}-h-ultra-luxury`,
        name: `${tour.destination} Ultra-Luxury Resort`,
        stars: 5,
        distanceToSea: 0,
        seaType: "beach",
        description: `Самый эксклюзивный курорт с безупречным сервисом и роскошью`,
        amenities: [
          "Приватный остров",
          "Личный шеф-повар",
          "Консьерж 24/7",
          "SPA мирового уровня",
          "Яхта",
        ],
        image:
          "https://images.unsplash.com/photo-1520506684286-f6aa5e92de42?w=400&h=300&fit=crop",
        priceModifier: 1.5,
      },
    ],
  };

  return baseHotels[tour.category] || baseHotels.beach;
}
