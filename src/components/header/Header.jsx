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

  const languageItems = [
    { id: 1, label: "ee", image: ee },
    { id: 2, label: "ru", image: ru },
    { id: 3, label: "en", image: en },
  ];
  const getLanguages = () =>
    languageItems.map((lang) => (
      <li key={lang.id}>
        <button
          className="dropdown-item"
          onClick={() => changeLanguage(lang.label)}
        >
          <img src={lang.image} alt={lang.label}></img>
          {t(lang.label)}
        </button>
      </li>
    ));

  const headerItems = ["about", "skills", "experience", "contact"];
  const getHeaders = () =>
    headerItems.map((item) => (
      <li className="nav-item" key={item}>
        <a
          id={`${item}Btn`}
          className="nav-link active me-1"
          aria-current="page"
          rel="noopener noreferrer"
        >
          {t(item)}
        </a>
      </li>
    ));

  const themeItems = [
    { id: 1, label: "dark", image: dark },
    { id: 2, label: "light", image: light },
  ];
  const getThemes = () =>
    themeItems.map((item) => (
      <div
        key={item.id}
        className={`btn ${
          item.label === "dark" ? "btn-secondary" : `btn-${item.label}`
        } ${item.label}_theme fw-semibold ${
          item.label === "light" ? "ms-3" : ""
        }`}
      >
        <img src={item.image} alt={`${item.label} theme`}></img>
        <span>{t(item.label)}</span>
      </div>
    ));
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
          <ul className="navbar-nav ms-auto mb-lg-0 fs-5">{getHeaders()}</ul>
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
            {getLanguages()}
          </ul>
        </div>
        <div className="theme ms-4 d-flex">{getThemes()}</div>
      </nav>
    </div>
  );
};
export default Header;
