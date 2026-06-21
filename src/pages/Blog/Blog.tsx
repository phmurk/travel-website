import React, { useState } from "react";
import { MOCK_BLOG_POSTS } from "../../data/posts";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Blog.css";

const CATEGORIES = [
  "Все",
  "Советы",
  "Приключения",
  "Бюджет",
  "Практика",
  "Направления",
];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = MOCK_BLOG_POSTS.filter((post) => {
    const categoryMatch =
      selectedCategory === "Все" || post.category === selectedCategory;
    const searchMatch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <main className="blog-page-wrapper">
      <section className="blog-page-header text-center">
        <div className="container-fluid max-w-container">
          <h1 className="page-title text-white mb-3">Блог путешественников</h1>
          <p className="page-subtitle mb-5">
            Полезные советы и статьи от наших экспертов
          </p>

          <div className="search-box mx-auto">
            <input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="container-fluid max-w-container py-5">
        <div className="categories-pills d-flex flex-wrap gap-2 mb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pill-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <BlogCard post={post} />
              </div>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              <p className="text-muted-light fs-5">Статьи не найдены.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
