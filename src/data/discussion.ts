import type { Discussion } from "../types/types";

export const MOCK_DISCUSSIONS: Discussion[] = [
  {
    id: "1",
    title: "Как лучше добраться до Мачу-Пикчу в 2024?",
    content:
      "Планирую поездку в Перу на сентябрь. Кто недавно был, поделитесь опытом: лучше брать поезд из Куско или идти по тропе инков? Насколько сложно получить пермит?",
    author: "Максим_Трэвел",
    avatar: "https://i.pravatar.cc/150?img=11",
    repliesCount: 2,
    viewsCount: 145,
    createdAt: "2024-05-15T10:30:00Z",
    replies: [
      {
        id: "1-1",
        author: "Анна Explorer",
        avatar: "https://i.pravatar.cc/150?img=5",
        content:
          "Тропа Инков - это мастхэв, но бронировать пермиты нужно за полгода! Если нет времени, берите поезд Vistadome, виды там потрясающие.",
        createdAt: "2024-05-15T11:15:00Z",
      },
      {
        id: "1-2",
        author: "Игорь_Горный",
        avatar: "https://i.pravatar.cc/150?img=8",
        content:
          "Согласен с Анной. Ездил на поезде в прошлом месяце. Обязательно берите билеты на утро, чтобы избежать толп туристов.",
        createdAt: "2024-05-16T09:20:00Z",
      },
    ],
  },
];
