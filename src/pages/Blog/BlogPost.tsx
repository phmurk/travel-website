import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_BLOG_POSTS } from "../../data/posts";
import "./Blog.css"; // Переиспользуем стили

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPost(MOCK_BLOG_POSTS.find((p) => p.slug === slug));
  }, [slug]);

  if (!post)
    return <div className="text-center py-5 text-white">Статья не найдена</div>;

  return (
    <main className="blog-post-wrapper">
      <div
        className="post-hero"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="post-hero-overlay"></div>
      </div>

      <div
        className="container-fluid max-w-container position-relative z-1"
        style={{ marginTop: "-100px" }}
      >
        <div className="post-content-card">
          <Link to="/blog" className="back-link mb-4 d-inline-block">
            ← Назад в блог
          </Link>

          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="post-badge">{post.category}</span>
            <span className="text-muted-light">
              ⏱ {post.readTime} мин чтения
            </span>
          </div>

          <h1 className="post-title text-white mb-4">{post.title}</h1>

          <div className="post-author d-flex align-items-center gap-3 mb-5 pb-4 border-bottom border-secondary">
            <div className="author-avatar">{post.author[0]}</div>
            <div>
              <h6 className="text-white mb-0">{post.author}</h6>
              <small className="text-muted-light">{post.date}</small>
            </div>
          </div>

          <div className="post-body text-light">
            {post.content.split("\n").map((paragraph: string, i: number) => (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="post-tags mt-5 pt-4 border-top border-secondary">
            <h5 className="text-white mb-3">Теги:</h5>
            <div className="d-flex gap-2">
              {post.tags.map((tag: string) => (
                <span key={tag} className="tag-pill">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
