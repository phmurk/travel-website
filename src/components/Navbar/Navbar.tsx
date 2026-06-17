import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Offcanvas } from "bootstrap";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("mobileMenu");
    if (offcanvasElement) {
      const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  };

  return (
    <header
      className={`navbar-wrapper shadow-sm ${
        showNavbar ? "navbar-show" : "navbar-hide"
      }`}
    >
      <div className="container-fluid max-w-container h-100 d-flex align-items-center">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <div className="logo-box">
              <span className="logo-letter">V</span>
            </div>
            <span className="logo-text">VOYAGER</span>
          </Link>
        </div>

        <nav className="nav-center d-none d-lg-flex">
          <Link to="/tours" className="nav-item">
            Туры
          </Link>
          <Link to="/blog" className="nav-item">
            Блог
          </Link>
          <Link to="/about" className="nav-item">
            О нас
          </Link>
        </nav>

        <div className="nav-right d-none d-lg-flex">
          <Link to="/cart" className="cart-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#daf1de"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
          </Link>
          <Link to="/login" className="login-btn">
            Вход
          </Link>
        </div>

        <div className="nav-right-mobile d-flex d-lg-none justify-content-end w-100">
          <button
            className="mobile-toggler border-0 p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              //   fill="#daf1de"
              className="bi bi-list navbar-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end custom-offcanvas"
        tabIndex={-1}
        id="mobileMenu"
      >
        <div className="offcanvas-header px-4 border-bottom">
          <div className="logo-link mb-0">
            <div className="logo-box">
              <span className="logo-letter">V</span>
            </div>
            <Link to="/" className="logo-text fs-5" onClick={closeOffcanvas}>
              VOYAGER
            </Link>
          </div>
          <button
            type="button"
            className="btn-close shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column px-4">
          <nav className="d-flex flex-column gap-3 mt-4">
            <Link
              to="/tours"
              className="mobile-nav-item"
              onClick={closeOffcanvas}
            >
              Туры
            </Link>
            <Link
              to="/blog"
              className="mobile-nav-item"
              onClick={closeOffcanvas}
            >
              Блог
            </Link>
            <Link
              to="/about"
              className="mobile-nav-item"
              onClick={closeOffcanvas}
            >
              О нас
            </Link>
            <Link
              to="/cart"
              className="mobile-nav-item d-flex align-items-center gap-2"
              onClick={closeOffcanvas}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              Корзина
            </Link>
          </nav>

          <div className="mt-auto pb-4 d-flex flex-column gap-3">
            <Link
              to="/login"
              className="mobile-login-btn text-center"
              onClick={closeOffcanvas}
            >
              Вход
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
