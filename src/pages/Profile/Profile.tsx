import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

// --- МОК-ДАННЫЕ (Потом замените на данные из Store/Бекенда) ---
const MOCK_USER = {
  id: "u1",
  name: "Александр Путешественник",
  email: "alex.travel@example.com",
  joinDate: "15 Марта 2024",
};

const MOCK_ORDERS = [
  {
    id: "o1",
    tourId: "1",
    title: "Мальдивы - Рай на Земле",
    date: "10 Июня 2024",
    price: 2500,
    status: "Оплачен",
  },
];

const MOCK_FAVORITES = [
  {
    id: "f1",
    tourId: "3",
    title: "Римские Каникулы",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=200&h=150&fit=crop",
  },
];

const MOCK_ACTIVITY = [
  {
    id: "a1",
    type: "discussion", // Создал тему
    discussionId: "1",
    title: "Как лучше добраться до Мачу-Пикчу в 2024?",
    content:
      "Планирую поездку в Перу на сентябрь. Кто недавно был, поделитесь опытом: лучше брать поезд из Куско или идти по тропе инков?",
    date: "15 Мая 2024",
  },
  {
    id: "a2",
    type: "reply", // Ответил в теме
    discussionId: "2",
    title: "Ответ в теме: Выбор страховки для Азии",
    content:
      "Я всегда беру расширенную медицинскую с покрытием активного спорта. Пару раз спасало при аренде байка в Таиланде.",
    date: "10 Мая 2024",
  },
];

const Profile: React.FC = () => {
  const navigate = useNavigate();

  // Состояния
  const [activeTab, setActiveTab] = useState<"tours" | "activity">("tours");
  const [isEditing, setIsEditing] = useState(false);

  const [userName, setUserName] = useState(MOCK_USER.name);
  const [tempName, setTempName] = useState(userName);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setUserName(tempName);
    } else {
      setTempName(userName); // Сброс, если ввели пустоту
    }
    setIsEditing(false);
  };

  const handleLogout = () => {
    // В будущем здесь будет логика очистки токенов/zustand
    navigate("/login");
  };

  return (
    <main className="profile-page-wrapper py-5">
      <div className="container-fluid max-w-container">
        <div className="row g-5">
          {/* ЛЕВАЯ КОЛОНКА: ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ */}
          <div className="col-lg-4">
            <div
              className="glass-card profile-sidebar sticky-top"
              style={{ top: "100px" }}
            >
              <div className="text-center border-bottom border-secondary pb-4 mb-4">
                <div className="profile-avatar mx-auto mb-3">
                  {userName.charAt(0).toUpperCase()}
                </div>

                {/* Редактирование имени */}
                {isEditing ? (
                  <div className="edit-name-form mb-2">
                    <input
                      type="text"
                      className="custom-input text-center"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      autoFocus
                    />
                    <div className="d-flex justify-content-center gap-2 mt-2">
                      <button
                        className="action-btn-sm"
                        onClick={handleSaveName}
                      >
                        Сохранить
                      </button>
                      <button
                        className="cancel-btn-sm"
                        onClick={() => {
                          setIsEditing(false);
                          setTempName(userName);
                        }}
                      >
                        Отмена
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                    <h3 className="text-white mb-0">{userName}</h3>
                    <button
                      className="edit-icon-btn"
                      onClick={() => setIsEditing(true)}
                      title="Редактировать имя"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                  </div>
                )}

                <p className="text-muted-light mb-0">{MOCK_USER.email}</p>
              </div>

              <div className="profile-stats mb-4">
                <div className="stat-item d-flex justify-content-between mb-2">
                  <span className="text-muted-light">Дата регистрации:</span>
                  <span className="text-white fw-bold">
                    {MOCK_USER.joinDate}
                  </span>
                </div>
                <div className="stat-item d-flex justify-content-between mb-2">
                  <span className="text-muted-light">Куплено туров:</span>
                  <span className="text-accent fw-bold">
                    {MOCK_ORDERS.length}
                  </span>
                </div>
                <div className="stat-item d-flex justify-content-between">
                  <span className="text-muted-light">В избранном:</span>
                  <span className="text-white fw-bold">
                    {MOCK_FAVORITES.length}
                  </span>
                </div>
              </div>

              <button className="logout-btn w-100" onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
                Выйти из аккаунта
              </button>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: КОНТЕНТ */}
          <div className="col-lg-8">
            <div className="profile-content-tabs d-flex gap-4 mb-4 border-bottom border-secondary">
              <button
                className={`tab-btn ${activeTab === "tours" ? "active" : ""}`}
                onClick={() => setActiveTab("tours")}
              >
                Мои путешествия
              </button>
              <button
                className={`tab-btn ${activeTab === "activity" ? "active" : ""}`}
                onClick={() => setActiveTab("activity")}
              >
                Моя активность (Форум)
              </button>
            </div>

            <div className="tab-content fade-in">
              {/* Вкладка 1: ТУРЫ (Заказы и Избранное) */}
              {activeTab === "tours" && (
                <div className="tours-tab-wrapper">
                  {/* Заказы */}
                  <h4 className="text-white mb-3">История бронирований</h4>
                  {MOCK_ORDERS.length > 0 ? (
                    <div className="d-flex flex-column gap-3 mb-5">
                      {MOCK_ORDERS.map((order) => (
                        <div
                          key={order.id}
                          className="glass-card order-card d-flex justify-content-between align-items-center p-4"
                        >
                          <div>
                            <Link
                              to={`/tours/${order.tourId}`}
                              className="text-white fw-bold text-decoration-none fs-5 d-block mb-1 hover-accent"
                            >
                              {order.title}
                            </Link>
                            <span className="text-muted-light fs-7">
                              Оформлен: {order.date}
                            </span>
                          </div>
                          <div className="text-end">
                            <span className="text-accent fw-bold fs-4 d-block">
                              ${order.price}
                            </span>
                            <span className="status-badge success">
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-light mb-5">
                      У вас пока нет оформленных заказов.
                    </p>
                  )}

                  {/* Избранное */}
                  <h4 className="text-white mb-3">Избранные туры</h4>
                  {MOCK_FAVORITES.length > 0 ? (
                    <div className="row g-3">
                      {MOCK_FAVORITES.map((fav) => (
                        <div className="col-md-6" key={fav.id}>
                          <Link
                            to={`/tours/${fav.tourId}`}
                            className="glass-card favorite-card d-flex gap-3 text-decoration-none p-3"
                          >
                            <img
                              src={fav.image}
                              alt={fav.title}
                              className="fav-img"
                            />
                            <div className="fav-info d-flex flex-column justify-content-center">
                              <h6 className="text-white mb-1">{fav.title}</h6>
                              <span className="text-accent fw-bold">
                                ${fav.price}
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-light">Список избранного пуст.</p>
                  )}
                </div>
              )}

              {/* Вкладка 2: АКТИВНОСТЬ НА ФОРУМЕ */}
              {activeTab === "activity" && (
                <div className="activity-tab-wrapper d-flex flex-column gap-3">
                  {MOCK_ACTIVITY.length > 0 ? (
                    MOCK_ACTIVITY.map((act) => (
                      <Link
                        to={`/discussions/${act.discussionId}`}
                        key={act.id}
                        className="glass-card activity-card p-4 text-decoration-none"
                      >
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className={`activity-type-badge ${act.type}`}>
                            {act.type === "discussion"
                              ? "Создана тема"
                              : "Ваш комментарий"}
                          </span>
                          <span className="text-muted-light fs-7">
                            {act.date}
                          </span>
                        </div>
                        <h5 className="text-white mb-2">{act.title}</h5>
                        {/* Обрезка текста до 2х строк */}
                        <p className="text-muted-light mb-0 truncate-text">
                          {act.content}
                        </p>
                      </Link>
                    ))
                  ) : (
                    <div className="text-center py-5 glass-card">
                      <p className="text-muted-light mb-3">
                        Вы еще не участвовали в обсуждениях.
                      </p>
                      <Link
                        to="/discussions"
                        className="action-btn text-decoration-none"
                      >
                        Перейти на форум
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
