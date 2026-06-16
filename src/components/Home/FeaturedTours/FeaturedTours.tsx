import { Link } from "react-router-dom";

import { MOCK_TOURS } from "../../../data/tours";

import FeaturedToursGrid from "./FeaturedToursGrid";

import "./FeaturedTours.css";

export default function FeaturedTours() {
  const featuredTours = MOCK_TOURS.slice(0, 6);

  return (
    <section className="featured-tours-section">
      <div className="container">
        <div className="featured-tours-header">
          <div>
            <h2 className="featured-tours-title">Популярные туры</h2>

            <p className="featured-tours-description">
              Лучшие предложения для вашего идеального отдыха
            </p>
          </div>

          <Link to="/tours" className="featured-tours-link">
            Смотреть все →
          </Link>
        </div>

        <FeaturedToursGrid tours={featuredTours} />
      </div>
    </section>
  );
}
