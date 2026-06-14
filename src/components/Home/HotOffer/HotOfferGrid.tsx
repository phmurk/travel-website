import HotOfferCard from "./HotOfferСard";
import type { HotOffer } from "../../../types/types";

interface HotOffersGridProps {
  offers: HotOffer[];
}

export default function HotOffersGrid({ offers }: HotOffersGridProps) {
  return (
    <div className="row g-4">
      {offers.map((offer) => (
        <div key={offer.id} className="col-12 col-md-6 col-lg-4">
          <HotOfferCard offer={offer} />
        </div>
      ))}
    </div>
  );
}
