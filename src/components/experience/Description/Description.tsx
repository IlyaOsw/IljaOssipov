import React from "react";
import { useTranslation } from "react-i18next";

const Description: React.FC = () => {
  const { t } = useTranslation();
  enum Title {
    HTML = "html",
    CSS = "css",
    SASS = "sass",
    BOOTSTRAP = "bootstrap",
    JS = "js",
    TS = "ts",
    REACT = "react",
    REDUX = "redux",
    GIT = "git",
  }
  const desription: { id: number; label: Title }[] = [
    { id: 1, label: Title.HTML },
    { id: 2, label: Title.CSS },
    { id: 3, label: Title.SASS },
    { id: 4, label: Title.BOOTSTRAP },
    { id: 5, label: Title.JS },
    { id: 6, label: Title.TS },
    { id: 7, label: Title.REACT },
    { id: 8, label: Title.REDUX },
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
