import React, { useState, useMemo } from "react";
import TourCard from "../../components/TourCard/TourCard"; // Путь к вашей карточке
import { MOCK_TOURS } from "../../data/tours"; // Путь к вашим данным
import "./Tours.css";

import Newsletter from "../../components/About/Newsletter/Newsletter";

const CATEGORIES = [
  { value: "beach", label: "Пляжный отдых" },
  { value: "mountain", label: "Горные туры" },
  { value: "adventure", label: "Приключения" },
  { value: "cultural", label: "Культура" },
  { value: "luxury", label: "Люкс" },
];

const DIFFICULTIES = [
  { value: "easy", label: "Простой" },
  { value: "moderate", label: "Средний" },
  { value: "hard", label: "Сложный" },
];

const Tours: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null,
  );
  const [sortBy, setSortBy] = useState<
    "popular" | "price-low" | "price-high" | "rating"
  >("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Фильтрация и сортировка
  const filteredTours = useMemo(() => {
    let filtered = MOCK_TOURS.filter((tour) => {
      // Поиск по стране, названию или направлению
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        tour.title.toLowerCase().includes(searchLower) ||
        tour.destination.toLowerCase().includes(searchLower) ||
        (tour.country && tour.country.toLowerCase().includes(searchLower));

      // Категории
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(tour.category);

      // Сложность
      const matchesDifficulty =
        !selectedDifficulty || tour.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    // Сортировка
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "popular":
      default:
        return filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }
  }, [searchQuery, selectedCategories, selectedDifficulty, sortBy]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <main className="tours-page-wrapper">
      {/* Шапка страницы */}
      <section className="tours-page-header">
        <div className="container-fluid max-w-container text-center">
          <h1 className="page-title">Каталог туров</h1>
          <p className="page-subtitle">
            Найдите идеальное путешествие из {MOCK_TOURS.length} вариантов
          </p>
        </div>
      </section>

      <div className="container-fluid max-w-container py-5">
        <div className="row g-4">
          {/* Кнопка мобильных фильтров */}
          <div className="col-12 d-lg-none mb-3">
            <button
              className="mobile-filter-btn"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              Фильтры и поиск
            </button>
          </div>

          {/* Сайдбар с фильтрами */}
          <div
            className={`col-lg-3 ${showMobileFilters ? "d-block" : "d-none d-lg-block"}`}
          >
            <div
              className="filters-sidebar sticky-top"
              style={{ top: "100px" }}
            >
              <h3 className="filters-title">Фильтры</h3>

              {/* Поиск */}
              <div className="filter-group">
                <label className="filter-label">Поиск направления</label>
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    placeholder="Страна или город..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="filter-search-input"
                  />
                </div>
              </div>

              {/* Категории */}
              <div className="filter-group">
                <label className="filter-label">Тип отдыха</label>
                <div className="checkbox-list">
                  {CATEGORIES.map((cat) => (
                    <label key={cat.value} className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.value)}
                        onChange={() => toggleCategory(cat.value)}
                      />
                      <span className="checkmark"></span>
                      {cat.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Сложность */}
              <div className="filter-group">
                <label className="filter-label">Сложность</label>
                <div className="checkbox-list">
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="difficulty"
                      checked={selectedDifficulty === null}
                      onChange={() => setSelectedDifficulty(null)}
                    />
                    <span className="radio-mark"></span>
                    Любая
                  </label>
                  {DIFFICULTIES.map((diff) => (
                    <label key={diff.value} className="custom-radio">
                      <input
                        type="radio"
                        name="difficulty"
                        checked={selectedDifficulty === diff.value}
                        onChange={() => setSelectedDifficulty(diff.value)}
                      />
                      <span className="radio-mark"></span>
                      {diff.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Сетка туров */}
          <div className="col-lg-9">
            {/* Панель сортировки */}
            <div className="tours-toolbar mb-4">
              <span className="results-count">
                Найдено: <strong>{filteredTours.length}</strong>
              </span>
              <select
                className="custom-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="popular">Сначала популярные</option>
                <option value="price-low">Сначала дешевле</option>
                <option value="price-high">Сначала дороже</option>
                <option value="rating">По высокому рейтингу</option>
              </select>
            </div>

            {/* Карточки */}
            {filteredTours.length > 0 ? (
              <div className="row g-4">
                {filteredTours.map((tour) => (
                  <div className="col-12 col-md-6 col-xl-4" key={tour.id}>
                    <TourCard tour={tour} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state text-center py-5">
                <h3 className="mb-3 text-white">Туры не найдены</h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <button
                  className="reset-filters-btn mt-3"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setSelectedDifficulty(null);
                  }}
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Newsletter />
    </main>
  );
};

export default Tours;
