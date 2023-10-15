import { useTranslation } from "react-i18next";
import "./Header.scss";
import ee from "./icons/ee.png";
import en from "./icons/en.png";
import ru from "./icons/ru.png";
import language from "./icons/language.png";
import light from "./icons/light.svg";
import dark from "./icons/dark.svg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
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
          <ul className="navbar-nav ms-auto mb-lg-0 fs-5">
            <li className="nav-item">
              <a
                id="aboutBtn"
                className="nav-link active me-1"
                aria-current="page"
                rel="noopener noreferrer"
              >
                {t("about")}
              </a>
            </li>
            <li className="nav-item">
              <a
                id="skilssBtn"
                className="nav-link active me-1"
                aria-current="page"
                rel="noopener noreferrer"
              >
                {t("skills")}
              </a>
            </li>
            <li className="nav-item">
              <a
                id="experienceBtn"
                className="nav-link active me-1"
                aria-current="page"
                rel="noopener noreferrer"
              >
                {t("experience")}
              </a>
            </li>
            <li className="nav-item">
              <a
                id="contactBtn"
                className="nav-link active me-1"
                aria-current="page"
                rel="noopener noreferrer"
              >
                {t("contact")}
              </a>
            </li>
          </ul>
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
          <ul className="dropdown-menu bg-secondary-subtle">
            <li>
              <button
                className="dropdown-item"
                onClick={() => changeLanguage("en")}
              >
                <img src={en} alt="EN"></img>
                {t("english")}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => changeLanguage("ee")}
              >
                <img src={ee} alt="EE"></img>
                {t("estonian")}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => changeLanguage("ru")}
              >
                <img src={ru} alt="RU"></img>
                {t("russian")}
              </button>
            </li>
          </ul>
        </div>
        <div className="theme ms-4 d-flex">
          <div className="btn btn-light light_theme fw-semibold">
            <img src={light} alt="Light theme"></img>
            <span>{t("light")}</span>
          </div>
          <div className="btn btn-secondary dark_theme fw-semibold ms-2">
            <img src={dark} alt="Dark theme"></img>
            <span>{t("dark")}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
