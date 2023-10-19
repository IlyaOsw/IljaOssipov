import React from "react";
import { useTranslation } from "react-i18next";

const Language: React.FC = () => {
  const { t, i18n } = useTranslation();

  enum Locales {
    EE = "ee",
    RU = "ru",
    EN = "en",
  }

  const changeLanguage = (language: Locales) => {
    i18n.changeLanguage(language);
  };

  const languageItems: { id: number; label: Locales }[] = [
    { id: 1, label: Locales.EE },
    { id: 2, label: Locales.RU },
    { id: 3, label: Locales.EN },
  ];
  const getLanguages = () =>
    languageItems.map((lang) => (
      <li key={lang.id}>
        <button
          className="dropdown-item"
          onClick={() => changeLanguage(lang.label)}
        >
          <img
            src={process.env.PUBLIC_URL + `/${lang.label}.png`}
            alt={lang.label}
          />

          {t(lang.label)}
        </button>
      </li>
    ));
  return (
    <ul className="dropdown-menu bg-secondary-subtle">{getLanguages()}</ul>
  );
};

export default Language;
