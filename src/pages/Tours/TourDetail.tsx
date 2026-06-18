import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_TOURS } from "../../data/tours";
import { MOCK_REVIEWS } from "../../data/reviews";
import { generateHotelsForTour } from "../../data/hotel-generator";
import { useCartStore } from "../../data/store"; // Ваш Zustand store
import TourCard from "../../components/TourCard/TourCard"; // Ваш компонент карточки
import "./TourDetail.css";

const TourDetail: React.FC = () => {
  const { id } = useParams();
  const [tour, setTour] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<
    "overview" | "itinerary" | "included" | "reviews"
  >("overview");
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [hotels, setHotels] = useState<any[]>([]);
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);

  const [showToast, setShowToast] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    // Скролл наверх при смене тура
    window.scrollTo(0, 0);

    const foundTour = MOCK_TOURS.find((t) => t.id === id);
    if (foundTour) {
      setTour(foundTour);

      // Если в туре уже есть отели - берем их, иначе генерируем
      const tourHotels = foundTour.hotels?.length
        ? foundTour.hotels
        : generateHotelsForTour(foundTour);
      setHotels(tourHotels);

      if (tourHotels.length > 0) {
        setSelectedHotelId(tourHotels[0].id);
      }
    }
  }, [id]);

  if (!tour) {
    return (
      <div className="empty-state text-center py-5 mt-5">
        <h2 className="text-white">Тур не найден</h2>
        <Link
          to="/tours"
          className="primary-btn mt-3 d-inline-block text-decoration-none"
        >
          Вернуться к турам
        </Link>
      </div>
    );
  }

  // Данные для вычислений
  const selectedHotel = hotels.find((h) => h.id === selectedHotelId);
  const priceModifier = selectedHotel ? selectedHotel.priceModifier : 1;
  const finalPrice = Math.round(tour.price * priceModifier);
  const tourReviews = MOCK_REVIEWS.filter((r) => r.tourId === tour.id);

  // Похожие туры (той же категории, но не текущий, максимум 2)
  const relatedTours = MOCK_TOURS.filter(
    (t) => t.category === tour.category && t.id !== tour.id,
  ).slice(0, 2);

  const handleAddToCart = () => {
    addToCart({
      id: tour.id,
      title: `${tour.title} (${selectedHotel?.name || "Стандарт"})`,
      price: finalPrice,
      image: tour.image,
      quantity: quantity,
      duration: tour.duration,
    });

    // Показываем плашку
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <main className="tour-detail-wrapper">
      {/* Плашка об успехе */}
      <div className={`toast-notification ${showToast ? "show" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        Тур успешно добавлен в корзину!
      </div>

      <div className="container-fluid max-w-container py-5">
        {/* Кнопка НАЗАД */}
        <div className="mb-4">
          <Link to="/tours" className="back-link">
            ← Назад к списку туров
          </Link>
        </div>

        <div className="row g-5">
          {/* Левая колонка: Галерея */}
          <div className="col-lg-8">
            <div className="gallery-main mb-3">
              <img
                src={tour.images?.[imageIndex] || tour.image}
                alt={tour.title}
              />
            </div>
            {tour.images && (
              <div className="gallery-thumbnails d-flex gap-2">
                {tour.images.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className={`thumb-wrapper ${idx === imageIndex ? "active" : ""}`}
                    onClick={() => setImageIndex(idx)}
                  >
                    <img src={img} alt="Thumb" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Правая колонка: Карточка бронирования */}
          <div className="col-lg-4">
            <div className="booking-card sticky-top" style={{ top: "100px" }}>
              <div className="price-header border-bottom border-secondary pb-3 mb-4">
                <span className="price-value">
                  ${(finalPrice * quantity).toLocaleString()}
                </span>
                <span className="price-label">Итоговая стоимость</span>
              </div>

              <div className="tour-quick-info mb-4">
                <div className="info-item">
                  <span>⏱</span> {tour.duration} дней
                </div>
                <div className="info-item">
                  <span>👥</span> Макс. {tour.groupSize} чел
                </div>
                <div className="info-item">
                  <span>📍</span> {tour.destination}
                </div>
              </div>

              {/* Выбор отеля */}
              {hotels.length > 0 && (
                <div className="hotel-selection mb-4">
                  <label className="text-white fw-bold mb-2 d-block">
                    Выберите отель:
                  </label>
                  <div className="d-flex flex-column gap-2">
                    {hotels.map((hotel: any) => (
                      <div
                        key={hotel.id}
                        className={`hotel-option ${selectedHotelId === hotel.id ? "active" : ""}`}
                        onClick={() => setSelectedHotelId(hotel.id)}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="hotel-name">{hotel.name}</span>
                          <span className="hotel-modifier text-accent">
                            {hotel.priceModifier > 1
                              ? `+${Math.round((hotel.priceModifier - 1) * 100)}%`
                              : "Базовая"}
                          </span>
                        </div>
                        <div className="hotel-stars text-warning fs-6">
                          {"★".repeat(hotel.stars)}
                          {"☆".repeat(5 - hotel.stars)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Количество */}
              <div className="quantity-selector mb-4">
                <label className="text-white fw-bold mb-2 d-block">
                  Количество персон:
                </label>
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="qty-btn"
                    onClick={() => quantity > 1 && setQuantity((q) => q - 1)}
                  >
                    -
                  </button>
                  <span className="qty-value text-white fw-bold fs-5">
                    {quantity}
                  </span>
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="book-now-btn w-100" onClick={handleAddToCart}>
                Забронировать тур
              </button>
            </div>
          </div>
        </div>

        {/* Секция с Табами */}
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="tour-tabs d-flex gap-4 mb-4 border-bottom border-secondary overflow-auto">
              <button
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Описание
              </button>
              <button
                className={`tab-btn ${activeTab === "itinerary" ? "active" : ""}`}
                onClick={() => setActiveTab("itinerary")}
              >
                Программа
              </button>
              <button
                className={`tab-btn ${activeTab === "included" ? "active" : ""}`}
                onClick={() => setActiveTab("included")}
              >
                Включено
              </button>
              <button
                className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Отзывы ({tourReviews.length})
              </button>
            </div>

            <div
              className="tab-content text-light"
              style={{ opacity: 0.9, lineHeight: 1.8 }}
            >
              {/* ОПИСАНИЕ */}
              {activeTab === "overview" && (
                <div className="fade-in">
                  <h2 className="text-white mb-3">{tour.title}</h2>
                  <p>{tour.longDescription}</p>
                  <h4 className="text-accent mt-4 mb-3">Главные фишки:</h4>
                  <ul className="custom-list">
                    {tour.highlights?.map((h: string, i: number) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ПРОГРАММА ТУРА */}
              {activeTab === "itinerary" && (
                <div className="itinerary-list fade-in">
                  {tour.itinerary?.map((day: any, i: number) => (
                    <div className="itinerary-day" key={i}>
                      <div className="day-badge">День {day.day}</div>
                      <div className="day-content">
                        <h5 className="text-white">{day.title}</h5>
                        <p className="mb-2">{day.description}</p>
                        <div className="day-meta d-flex gap-3 flex-wrap">
                          <span className="meta-badge">
                            🍽 Питание: {day.meals.join(", ")}
                          </span>
                          <span className="meta-badge">
                            🛏 Ночлег:{" "}
                            {selectedHotel?.name || day.accommodation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ЧТО ВКЛЮЧЕНО */}
              {activeTab === "included" && (
                <div className="row fade-in">
                  <div className="col-md-6 mb-4">
                    <h5 className="text-success mb-3">Включено:</h5>
                    <ul className="custom-list success">
                      {tour.included?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-danger mb-3">Не включено:</h5>
                    <ul className="custom-list danger">
                      {tour.notIncluded?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* ОТЗЫВЫ */}
              {activeTab === "reviews" && (
                <div className="reviews-list fade-in">
                  {tourReviews.length > 0 ? (
                    tourReviews.map((review) => (
                      <div key={review.id} className="review-card">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={review.avatar}
                              alt="Avatar"
                              className="review-avatar"
                            />
                            <div>
                              <h6 className="text-white mb-0">
                                {review.author}
                              </h6>
                              <small className="text-muted-light">
                                {review.date}
                              </small>
                            </div>
                          </div>
                          <div className="review-stars text-warning">
                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}
                          </div>
                        </div>
                        <h6 className="text-white mt-3 mb-2 fw-bold">
                          {review.title}
                        </h6>
                        <p className="mb-0 text-muted-light">
                          {review.content}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-light">
                      Отзывов пока нет. Будьте первыми!
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Секция: ПОХОЖИЕ ТУРЫ */}
        {relatedTours.length > 0 && (
          <div className="related-tours-section mt-5 pt-5 border-top border-secondary">
            <h2 className="text-white mb-4">Похожие туры</h2>
            <div className="row g-4">
              {relatedTours.map((relatedTour) => (
                <div className="col-12 col-md-6 col-lg-4" key={relatedTour.id}>
                  {/* Переиспользуем вашу карточку */}
                  <TourCard tour={relatedTour} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TourDetail;
