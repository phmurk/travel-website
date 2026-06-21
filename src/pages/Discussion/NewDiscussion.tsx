import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useBlogStore } from "../../store/blogStore";
import "../Blog/Blog.css";

const NewDiscussionPage: React.FC = () => {
  const navigate = useNavigate();
  const addDiscussion = useBlogStore((state) => state.addDiscussion);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsLoading(true);

    // Имитация задержки сервера
    await new Promise((res) => setTimeout(res, 1000));

    // Создаем новую тему
    const newTopic = {
      id: Date.now().toString(),
      title,
      content,
      author: "Вы (Пользователь)",
      avatar: "https://i.pravatar.cc/150?img=3",
      repliesCount: 0,
      viewsCount: 1,
      createdAt: new Date().toISOString(),
      replies: [],
    };

    addDiscussion(newTopic);
    navigate("/discussions"); // Возвращаемся в блог
  };

  return (
    <main className="discussion-page-wrapper py-5">
      <div
        className="container-fluid max-w-container"
        style={{ maxWidth: "700px" }}
      >
        {/* Кнопка с новым стилем back-link */}
        <Link to="/blog" className="back-link mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Назад к темам
        </Link>

        <div className="glass-card p-5">
          <h2 className="text-white mb-2">Новое обсуждение</h2>
          <p className="text-muted-light mb-4">
            Поделитесь вопросом или историей с комьюнити
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-white fw-bold mb-2">Заголовок</label>
              <input
                type="text"
                className="custom-input w-100"
                placeholder="Кратко опишите суть..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={150}
              />
            </div>

            <div className="mb-4">
              <label className="text-white fw-bold mb-2">Текст сообщения</label>
              <textarea
                className="custom-textarea w-100"
                rows={6}
                placeholder="Подробности вашего вопроса..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="text-end">
              {/* Кнопка с новым стилем action-btn */}
              <button
                type="submit"
                className="action-btn"
                disabled={isLoading || !title.trim() || !content.trim()}
              >
                {isLoading ? "Публикация..." : "Опубликовать тему"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default NewDiscussionPage;
