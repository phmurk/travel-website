import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useBlogStore } from "../../store/blogStore";
import "../Blog/Blog.css";

// Умная функция форматирования даты
const formatPostDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const timeStr = date.toLocaleTimeString("ru-RU", timeOptions);

  if (isToday) {
    return timeStr; // Только время
  } else if (isYesterday) {
    return `Вчера в ${timeStr}`;
  } else {
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return `${date.toLocaleDateString("ru-RU", dateOptions)}`;
  }
};

const DiscussionPage: React.FC = () => {
  const { id } = useParams();
  const discussions = useBlogStore((state) => state.discussions);
  const addReply = useBlogStore((state) => state.addReply);

  const [discussion, setDiscussion] = useState<any>(null);
  const [replyText, setReplyText] = useState("");

  const isAuth = true;

  useEffect(() => {
    window.scrollTo(0, 0);
    setDiscussion(discussions.find((d) => d.id === id));
  }, [id, discussions]);

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !discussion) return;

    const newReply = {
      id: Date.now().toString(),
      author: "Вы (Пользователь)",
      avatar: "https://i.pravatar.cc/150?img=3",
      content: replyText,
      createdAt: new Date().toISOString(),
    };

    addReply(discussion.id, newReply);
    setReplyText("");
  };

  if (!discussion)
    return (
      <div className="text-center py-5 text-white">Обсуждение не найдено</div>
    );

  return (
    <main className="discussion-page-wrapper py-5">
      <div
        className="container-fluid max-w-container"
        style={{ maxWidth: "800px" }}
      >
        <Link to="/discussions" className="back-link mb-4">
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
          Ко всем темам
        </Link>

        {/* Главный пост */}
        <div className="thread-main-post">
          <h1 className="text-white mb-4">{discussion.title}</h1>
          <div className="thread-message">
            <div className="thread-avatar-col">
              <img
                src={discussion.avatar}
                alt="Avatar"
                className="thread-avatar"
              />
              <div className="thread-line"></div>
            </div>
            <div className="thread-content-col">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-white fw-bold">{discussion.author}</span>
                <span className="text-muted-light fs-7">
                  {formatPostDate(discussion.createdAt)}
                </span>
              </div>
              <p className="text-light">{discussion.content}</p>
            </div>
          </div>
        </div>

        {/* Ответы */}
        <div className="thread-replies">
          {discussion.replies.map((reply: any, index: number) => (
            <div className="thread-message" key={reply.id}>
              <div className="thread-avatar-col">
                <img
                  src={reply.avatar}
                  alt="Avatar"
                  className="thread-avatar"
                />
                {index !== discussion.replies.length - 1 && (
                  <div className="thread-line"></div>
                )}
              </div>
              <div className="thread-content-col">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-white fw-bold">{reply.author}</span>
                  <span className="text-muted-light fs-7">
                    {formatPostDate(reply.createdAt)}
                  </span>
                </div>
                <p className="text-light mb-0">{reply.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Форма ответа */}
        <div className="thread-reply-form mt-4">
          {isAuth ? (
            <form onSubmit={handleReplySubmit} className="d-flex gap-3">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="You"
                className="thread-avatar"
              />
              <div className="flex-grow-1">
                <textarea
                  className="custom-textarea w-100"
                  rows={2}
                  placeholder="Написать ответ..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                ></textarea>
                <div className="text-end mt-3">
                  <button
                    type="submit"
                    className="action-btn"
                    disabled={!replyText.trim()}
                  >
                    Ответить
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center p-4 auth-prompt-card">
              <p className="text-white mb-3">
                Войдите, чтобы присоединиться к обсуждению
              </p>
              <Link to="/auth" className="action-btn text-decoration-none">
                Авторизоваться
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default DiscussionPage;
