import { useTranslation } from "react-i18next";
import "../Experience.scss";

const Description = () => {
  const { t } = useTranslation();
  const desription = [
    { id: 1, label: "html" },
    { id: 2, label: "css" },
    { id: 3, label: "sass" },
    { id: 4, label: "bootstrap" },
    { id: 5, label: "js" },
    { id: 6, label: "ts" },
    { id: 7, label: "git" },
    { id: 8, label: "react" },
  ];
  const getDescription = () =>
    desription.map((text) => (
      <li className="animation_item" key={text.id}>
        <p>{t(text.label)}</p>
      </li>
    ));
  return <ul>{getDescription()}</ul>;
};

export default Description;
