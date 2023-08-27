import { useTranslation } from 'react-i18next';
import './header.scss';
import ee from './icons/ee.png';
import en from './icons/en.png';
import ru from './icons/ru.png';
import language from './icons/language.png';
import light from './icons/light.svg';
import dark from './icons/dark.svg';
import React from 'react';

function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
      <div className='wrapper'>
        <div className="container-fluid fixed-top header_color">
          <nav className="navbar navbar-expand-lg container">
            <a className="navbar-brand fs-2 nav-link" href="#">{t("resume")}</a>
            <button className="navbar-toggler bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 fs-5">
              <li className="nav-item">
                <a id='aboutBtn' className="nav-link active me-1" aria-current="page" href="#">{t("about")}</a>
              </li>
              <li className="nav-item">
                <a id='skilssBtn' className="nav-link active me-1" aria-current="page" href="#">{t("skills")}</a>
              </li>
              <li className="nav-item">
                <a id='experienceBtn' className="nav-link active me-1" aria-current="page" href="#">{t("experience")}</a>
              </li>
              <li className="nav-item">
                <a id='contactBtn' className="nav-link active me-1" aria-current="page" href="#">{t("contact")}</a>
              </li>
            </ul>
          </div>
            <div className="btn-group">
              <button className="btn bg-secondary-subtle dropdown-toggle fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <a><img src={language} alt='lang'></img>{t("language")}</a>
              </button>
              <ul className="dropdown-menu bg-secondary-subtle">
                <li><a className="dropdown-item" href="#" onClick={() => changeLanguage("en")}><img src={en} alt='EN'></img>{t("English")}</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => changeLanguage("ee")}><img src={ee} alt='EE'></img>{t("Estonian")}</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => changeLanguage("ru")}><img src={ru} alt='RU'></img>{t("Russian")}</a></li>
              </ul>
            </div>
            <div className='theme ms-5'> 
              <div className="btn btn-light light_theme fw-semibold">
                <img src={light} alt='Light theme'></img>
                <span>{t("light")}</span>
              </div>
              <div className="btn btn-secondary dark_theme fw-semibold">
                <img src={dark} alt='Dark theme'></img>
                <span>{t("dark")}</span>
              </div>
            </div>
          </nav>
      </div>
    </div>
  );
}
export default Header;