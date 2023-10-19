import { useTranslation } from "react-i18next";
import light from "../Icons/light.svg";
import dark from "../Icons/dark.svg";

const Theme = () => {
  const { t, i18n } = useTranslation();
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
        <img src={item.image} alt={`${item.label} theme`} />
        <span>{t(item.label)}</span>
      </div>
    ));
  return <div className="theme ms-4 d-flex">{getThemes()}</div>;
};

export default Theme;
