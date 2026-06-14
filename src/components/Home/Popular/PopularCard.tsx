import { Link } from "react-router-dom";
import "./PopularDestinations.css";
import type { Destination } from "../../../types/types";

interface PopularCardProps {
  destination: Destination;
}

export default function PopularCard({ destination }: PopularCardProps) {
  return (
    <Link
      to={`/tours?destination=${destination.slug}`}
      className="popular-card-link"
    >
      <div className="popular-card">
        <img
          src={destination.image}
          alt={destination.name}
          className="popular-card-image"
        />

        <div className="popular-card-overlay">
          <div>
            <h3>{destination.name}</h3>
            <p>{destination.tours} туров</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
