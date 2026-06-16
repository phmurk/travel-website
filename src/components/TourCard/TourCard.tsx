import { Link } from "react-router-dom";

import type { Tour } from "../../types/types";

import "./TourCard.css";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const discount = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  return (
    <div className="tour-card">
      <div className="tour-card-image-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-card-image" />

        {discount > 0 && (
          <div className="tour-discount-badge">-{discount}%</div>
        )}
      </div>

      <div className="tour-card-content">
        <h3 className="tour-title">{tour.title}</h3>

        <div className="tour-rating">
          ⭐ {tour.rating}
          <span>({tour.reviewCount} отзывов)</span>
        </div>

        <p className="tour-description">{tour.description}</p>

        <div className="tour-info">
          <span>📍 {tour.destination}</span>

          <span>⏰ {tour.duration} дней</span>

          <span>👥 {tour.groupSize} чел.</span>
        </div>

        <div className="tour-footer">
          <div>
            {tour.originalPrice && (
              <span className="old-price">${tour.originalPrice}</span>
            )}

            <span className="new-price">${tour.price}</span>
          </div>

          <Link to={`/tours/${tour.id}`} className="tour-details-btn">
            Смотреть детали
          </Link>
        </div>
      </div>
    </div>
  );
}
