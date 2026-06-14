import PopularCard from "./PopularCard";
import type { Destination } from "../../../types/types";

interface PopularGridProps {
  destinations: Destination[];
}

export default function PopularGrid({ destinations }: PopularGridProps) {
  return (
    <div className="row g-3">
      {destinations.map((destination) => (
        <div key={destination.id} className="col-6 col-md-4 col-lg-2">
          <PopularCard destination={destination} />
        </div>
      ))}
    </div>
  );
}
