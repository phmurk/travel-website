import { create } from "zustand";
import { MOCK_DISCUSSIONS } from "../data/discussion"; // путь к вашим мок-данным
import type { Discussion, Reply } from "../types/types";

interface BlogStore {
  discussions: Discussion[];
  addDiscussion: (discussion: Discussion) => void;
  addReply: (discussionId: string, reply: Reply) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  // Изначально загружаем замоканные данные
  discussions: MOCK_DISCUSSIONS,

  // Добавление новой темы в начало списка
  addDiscussion: (discussion) =>
    set((state) => ({
      discussions: [discussion, ...state.discussions],
    })),

  // Добавление ответа в конкретную тему
  addReply: (discussionId, reply) =>
    set((state) => ({
      discussions: state.discussions.map((d) =>
        d.id === discussionId
          ? {
              ...d,
              replies: [...d.replies, reply],
              repliesCount: d.repliesCount + 1,
            }
          : d,
      ),
    })),
}));
