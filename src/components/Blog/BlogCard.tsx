import React from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../../types/types";
import "./BlogCard.css";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card-link">
      <article className="blog-card">
        <div className="blog-card-img-wrapper">
          <img src={post.image} alt={post.title} className="blog-card-img" />
          <div className="blog-category-badge">{post.category}</div>
        </div>

        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="blog-read-time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-clock me-1"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              {post.readTime} мин чтение
            </span>
            <span className="blog-date">{post.date}</span>
          </div>

          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
