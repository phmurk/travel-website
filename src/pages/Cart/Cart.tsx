import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../data/store";
import "./Cart.css";

const Cart: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
    getTotalItems,
  } = useCartStore();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  // Состояние пустой корзины
  if (items.length === 0) {
    return (
      <main className="cart-page-wrapper d-flex align-items-center justify-content-center">
        <div className="container-fluid max-w-container text-center py-5">
          <div className="empty-cart-icon mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="var(--accent-color)"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>
          <h1 className="text-white mb-3 fw-bold">Ваша корзина пуста</h1>
          <p className="text-muted-light mb-4 fs-5">
            Добавьте туры, чтобы начать планирование своего приключения
          </p>
          <Link
            to="/tours"
            className="primary-btn d-inline-flex align-items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Вернуться к турам
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page-wrapper">
      {/* Шапка */}
      <section className="cart-header text-center">
        <h1 className="text-white fw-bold mb-2">Корзина</h1>
        <p className="text-accent">{totalItems} туров в ожидании</p>
      </section>

      <section className="container-fluid max-w-container py-5">
        <div className="row g-5">
          {/* Левая колонка: Список туров */}
          <div className="col-lg-8">
            <div className="cart-items-list d-flex flex-column gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="cart-item-card d-flex flex-column flex-md-row gap-4 align-items-center"
                >
                  {/* Изображение тура */}
                  <div className="cart-item-img-box">
                    <img src={item.image} alt={item.title} />
                  </div>

                  {/* Контент тура */}
                  <div className="cart-item-content flex-grow-1 w-100">
                    <Link to={`/tours/${item.id}`} className="cart-item-title">
                      {item.title}
                    </Link>
                    <p className="text-muted-light mb-3 mt-1 fs-6">
                      Продолжительность: {item.duration} дней
                    </p>

                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                      {/* Управление количеством */}
                      <div className="qty-control d-flex align-items-center gap-2">
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="qty-value text-white fw-bold">
                          {item.quantity}
                        </span>
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      {/* Кнопка удаления */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-item-btn d-flex align-items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                        Удалить
                      </button>
                    </div>
                  </div>

                  {/* Цена (Итого за тур) */}
                  <div className="cart-item-price text-md-end">
                    <span className="total-item-price text-accent d-block fs-3 fw-bold">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                    <span className="single-item-price text-muted-light fs-6">
                      ${item.price.toLocaleString()} за человека
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 border-top border-secondary pt-4">
              <Link
                to="/tours"
                className="continue-shopping-link text-accent text-decoration-none fw-bold"
              >
                ← Продолжить покупки
              </Link>
            </div>
          </div>

          {/* Правая колонка: Сумма заказа */}
          <div className="col-lg-4">
            <div className="summary-card sticky-top" style={{ top: "100px" }}>
              <h3 className="text-white fw-bold mb-4">Сумма заказа</h3>

              <div className="summary-details border-bottom border-secondary pb-4 mb-4">
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted-light">Туры ({totalItems}):</span>
                  <span className="text-white fw-bold">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted-light">Налог (10%):</span>
                  <span className="text-white fw-bold">
                    ${(totalPrice * 0.1).toLocaleString()}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted-light">Сервис VOYAGER:</span>
                  <span className="text-accent fw-bold">Бесплатно</span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-white fs-5 fw-bold">Итого:</span>
                <span className="text-accent fs-2 fw-bold">
                  ${(totalPrice * 1.1).toLocaleString()}
                </span>
              </div>

              <button className="primary-btn w-100 mb-3 d-flex justify-content-center align-items-center gap-2">
                Оформить заказ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>

              <button onClick={clearCart} className="clear-cart-btn w-100">
                Очистить корзину
              </button>

              <div className="summary-features mt-4 pt-4 border-top border-secondary">
                <p>✓ Безопасная оплата</p>
                <p>✓ Гарантия лучшей цены</p>
                <p>✓ Персональный координатор</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
