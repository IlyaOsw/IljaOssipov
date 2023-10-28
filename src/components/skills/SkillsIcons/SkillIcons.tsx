import React from "react";
import ".././Skills.scss";

const SkillIcons: React.FC = () => {
  enum Skills {
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
  const skillIcons: { id: number; label: Skills }[] = [
    { id: 1, label: Skills.HTML },
    { id: 2, label: Skills.CSS },
    { id: 3, label: Skills.SASS },
    { id: 4, label: Skills.BOOTSTRAP },
    { id: 5, label: Skills.JS },
    { id: 6, label: Skills.TS },
    { id: 7, label: Skills.REACT },
    { id: 8, label: Skills.REDUX },
    { id: 9, label: Skills.GIT },
  ];
  const getSkillIcons = () =>
    skillIcons.map((icon) => (
      <img
        src={process.env.PUBLIC_URL + `/images/${icon.label}.svg`}
        alt={`${icon.label} icon`}
        className="animation_item"
        key={icon.id}
      />
    ));
  return <div className="skills-icons">{getSkillIcons()}</div>;
};

export default SkillIcons;
