import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

// Интерфейс можно вынести в общий файл types.ts и импортировать оттуда
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: number;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="blog-card-wrapper">
      {/* Вся карточка является кликабельной ссылкой */}
      <Link to={`/blog/${post.slug}`} className="blog-card-link">
        {/* Изображение и бейдж категории */}
        <div className="blog-card-image-box">
          <img src={post.image} alt={post.title} className="blog-card-img" />
          <div className="blog-category-badge">{post.category}</div>
        </div>

        {/* Контентная часть */}
        <div className="blog-card-content">
          {/* Мета-информация (время чтения и дата) */}
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
              {post.readTime} мин чтения
            </span>
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString("ru-RU")}
            </span>
          </div>

          {/* Заголовок и краткое описание */}
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>

          {/* Футер карточки с автором */}
          <div className="blog-card-footer">
            <div className="blog-author-info">
              <div className="blog-author-avatar">
                {post.author.charAt(0)} {/* Первая буква имени автора */}
              </div>
              <span className="blog-author-name">{post.author}</span>
            </div>
            <span className="blog-read-more">Читать →</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
