import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../../assets/wet-vietnam-mountain-flow-stream-rural.webp";

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tours?country=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/tours");
    }
  };

  return (
    <section
      className="hero-wrapper"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container-fluid max-w-container position-relative z-1">
        <div className="hero-content text-center">
          <h1 className="hero-title">Откройте мир приключений</h1>
          <p className="hero-subtitle">
            Исследуйте самые красивые места на земле с <span>VOYAGER</span>
          </p>

          <form className="hero-search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-geo-alt search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <input
                type="text"
                placeholder="В какую страну отправимся?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hero-search-input"
              />
            </div>
            <button type="submit" className="hero-search-btn">
              Найти туры
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
