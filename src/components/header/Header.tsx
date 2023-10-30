import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import Navigation from "./Navigation/Navigation";
import Language from "./Language/Language";
import Theme from "./Themes/Theme";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleBurgerMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  function outsideClick(e: MouseEvent): void {
    if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  }
  if (isMenuOpen) {
    document.addEventListener("click", outsideClick);
  } else {
    document.removeEventListener("click", outsideClick);
  }

  return (
    <div className="container-fluid fixed-top header_color" ref={headerRef}>
      <nav className="navbar navbar-expand-lg container">
        <a
          className="navbar-brand fs-2 nav-link title"
          rel="noopener noreferrer"
        >
          {t("resume")}
        </a>
        <button
          onClick={toggleBurgerMenu}
          id="menu"
          className={`navbar-toggler bg-secondary-subtle ${
            isMenuOpen ? "show" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse me-4 ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <Navigation closeMenu={closeMenu} />
        </div>
        <div className="btn-group">
          <button
            className="btn bg-secondary-subtle dropdown-toggle fw-semibold border"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <a href="/" className="languageBtn">
              <img
                src={process.env.PUBLIC_URL + `/images/language.png`}
                alt="lang"
              ></img>
              {t("language")}
            </a>
          </button>
          <Language closeMenu={closeMenu} />
        </div>
        <Theme closeMenu={closeMenu} />
      </nav>
    </div>
  );
};
export default Header;
