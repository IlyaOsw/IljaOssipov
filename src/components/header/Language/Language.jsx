import { useTranslation } from "react-i18next";
import ee from "../Icons/ee.png";
import en from "../Icons/en.png";
import ru from "../Icons/ru.png";

const Language = () => {
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
  return (
    <ul className="dropdown-menu bg-secondary-subtle">{getLanguages()}</ul>
  );
};

export default Language;
