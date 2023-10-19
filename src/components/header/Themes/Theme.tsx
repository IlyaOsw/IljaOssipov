import React from "react";
import { useTranslation } from "react-i18next";

const Theme: React.FC = () => {
  const { t } = useTranslation();
  enum Theme {
    DARK = "dark",
    LIGHT = "light",
  }
  const themeItems: { id: number; label: Theme }[] = [
    { id: 1, label: Theme.DARK },
    { id: 2, label: Theme.LIGHT },
  ];
  const getThemes = () =>
    themeItems.map((item) => (
      <div
        key={item.id}
        className={`btn ${
          item.label === Theme.DARK ? "btn-secondary" : `btn-${item.label}`
        } ${item.label}_theme fw-semibold ${
          item.label === Theme.LIGHT ? "ms-3" : ""
        }`}
      >
        <img
          src={process.env.PUBLIC_URL + `/${item.label}.svg`}
          alt={item.label}
        />
        <span>{t(item.label)}</span>
      </div>
    ));
  return <div className="theme ms-4 d-flex">{getThemes()}</div>;
};

export default Theme;
