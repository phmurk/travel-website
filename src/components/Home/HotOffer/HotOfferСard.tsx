import { Link } from "react-router-dom";
import type { HotOffer } from "../../../types/types";

interface HotOfferCardProps {
  offer: HotOffer;
}

export default function HotOfferCard({ offer }: HotOfferCardProps) {
  return (
    <Link to={`/tours/${offer.tourId}`} className="hot-offer-link">
      <div className="hot-offer-card">
        <div className="hot-offer-image-wrapper">
          <img
            src={offer.image}
            alt={offer.title}
            className="hot-offer-image"
          />

          <span className="discount-badge">-{offer.discount}%</span>
        </div>

        <div className="hot-offer-content">
          <p className="hot-offer-country">📍 {offer.destination}</p>

          <h3 className="hot-offer-title">{offer.title}</h3>

          <div className="hot-offer-prices">
            <span className="old-price">${offer.originalPrice}</span>

            <span className="new-price-offer">${offer.discountPrice}</span>

            {/* <span className="offer-btn">Подробнее →</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
