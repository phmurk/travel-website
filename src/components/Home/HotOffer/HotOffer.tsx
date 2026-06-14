import { hotOffers } from "../../../data/hotOffers";
import HotOffersGrid from "./HotOfferGrid";

import "./HotOffer.css";

export default function HotOffers() {
  return (
    <section className="hot-offers-section">
      <div className="container">
        <div className="hot-offers-header">
          <span className="fire-icon">🔥</span>

          <h2>Горячие предложения</h2>

          <span className="fire-icon">🔥</span>
        </div>

        <HotOffersGrid offers={hotOffers} />
      </div>
    </section>
  );
}
