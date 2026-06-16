import TourCard from "../../TourCard/TourCard";

import type { Tour } from "../../../types/types";

interface FeaturedToursGridProps {
  tours: Tour[];
}

export default function FeaturedToursGrid({ tours }: FeaturedToursGridProps) {
  return (
    <div className="row g-4">
      {tours.map((tour) => (
        <div key={tour.id} className="col-12 col-md-6 col-lg-4">
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
}
