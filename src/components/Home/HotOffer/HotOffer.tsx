import { hotOffers } from "../../../data/hotOffers";
import HotOffersGrid from "./HotOfferGrid";

import "./HotOffer.css";

export default function HotOffers() {
  return (
    <section className="hot-offers-section">
      <div className="container">
        <div className="hot-offers-header">
          <span className="hot-offers-subtitle">Эксклюзивные предложения</span>
          <h2>Горячие туры</h2>
          <div className="hot-offers-divider"></div>
        </div>

        <HotOffersGrid offers={hotOffers} />
      </div>
    </section>
  );
}
