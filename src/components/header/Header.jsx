import { useTranslation } from "react-i18next";
import "./Header.scss";
import language from "./Icons/language.png";
import Navigation from "./Navigation/Navigation";
import Language from "./Language/Language";
import Theme from "./Themes/Theme";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid fixed-top header_color">
      <nav className="navbar navbar-expand-lg container">
        <a
          className="navbar-brand fs-2 nav-link title"
          rel="noopener noreferrer"
        >
          {t("resume")}
        </a>
        <button
          id="menu"
          className="navbar-toggler bg-secondary-subtle"
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
          className="collapse navbar-collapse me-4"
          id="navbarSupportedContent"
        >
          <Navigation />
        </div>
        <div className="btn-group">
          <button
            className="btn bg-secondary-subtle dropdown-toggle fw-semibold border"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <a href="/" className="languageBtn">
              <img src={language} alt="lang"></img>
              {t("language")}
            </a>
          </button>
          <Language />
        </div>
        <Theme />
      </nav>
    </div>
  );
};
export default Header;
