import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBlogStore } from "../../store/blogStore";
import "../Blog/Blog.css"; // Можно использовать те же стили

const DiscussionsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const discussions = useBlogStore((state) => state.discussions);
  const isAuth = true; // Заглушка для проверки авторизации

  const filteredDiscussions = discussions.filter(
    (d) =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleNewDiscussion = () => {
    if (isAuth) navigate("/discussions/new");
    else alert("Пожалуйста, войдите в аккаунт для создания обсуждения");
  };

  return (
    <main className="blog-page-wrapper">
      <section className="blog-page-header text-center">
        <div className="container-fluid max-w-container">
          <h1 className="page-title text-white mb-3">Обсуждения</h1>
          <p className="page-subtitle mb-5">
            Задавайте вопросы и делитесь опытом с комьюнити
          </p>

          <div className="search-box mx-auto">
            <input
              type="text"
              placeholder="Поиск по темам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section
        className="container-fluid max-w-container py-5"
        style={{ maxWidth: "900px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="text-white">Все темы</h3>
          <button className="new-topic-btn" onClick={handleNewDiscussion}>
            + Новая тема
          </button>
        </div>

        <div className="discussions-list d-flex flex-column gap-3">
          {filteredDiscussions.length > 0 ? (
            filteredDiscussions.map((d) => (
              <Link
                to={`/discussions/${d.id}`}
                className="discussion-card"
                key={d.id}
              >
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h4 className="discussion-title">{d.title}</h4>
                  <span className="discussion-date text-muted-light">
                    {new Date(d.createdAt).toLocaleDateString("ru-RU")}
                  </span>
                </div>
                <p className="discussion-excerpt">{d.content}</p>
                <div className="discussion-meta d-flex align-items-center gap-4 text-muted-light mt-3">
                  <span>👤 {d.author}</span>
                  <span>💬 {d.repliesCount} ответов</span>
                  <span>👁 {d.viewsCount} просмотров</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center w-100 py-5 glass-card">
              <p className="text-muted-light fs-5 mb-3">Темы не найдены.</p>
              <button className="action-btn" onClick={handleNewDiscussion}>
                Создать первую тему
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default DiscussionsListPage;
