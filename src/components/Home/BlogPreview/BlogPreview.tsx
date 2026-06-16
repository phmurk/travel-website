import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../Blog/BlogCard";
import { MOCK_BLOG_POSTS } from "../../../data/posts";
import "./BlogPreview.css";

const BlogPreview: React.FC = () => {
  const recentPosts = MOCK_BLOG_POSTS.slice(0, 3);

  return (
    <section className="blog-preview-section">
      <div className="container-fluid max-w-container">
        <div className="blog-preview-header">
          <div className="blog-preview-title-box">
            <h2 className="blog-preview-title">Блог путешественников</h2>
            <p className="blog-preview-subtitle">
              Советы, истории и рекомендации от наших экспертов
            </p>
          </div>

          <Link to="/blog" className="view-all-link">
            Все статьи
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Link>
        </div>

        <div className="row g-4">
          {recentPosts.map((post) => (
            <div className="col-12 col-md-6 col-lg-4" key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
