import { useTranslation } from "react-i18next";
import "./Skills.scss";
import React from "react";
import htmlIcon from "./icons/html.svg";
import cssIcon from "./icons/css.svg";
import sassIcon from "./icons/sass.svg";
import jsIcon from "./icons/js.svg";
import tsIcon from "./icons/ts.svg";
import reactIcon from "./icons/react.svg";
import gitIcon from "./icons/git.svg";
import bootstrapIcon from "./icons/bootstrap.svg";

function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <div className="block-skills">
        <div className="skills-tittle">
          <p className="animation_item">{t("skills")}</p>
        </div>
        <div className="skills-info fs-2">
          <p className="animation_item">{t("Stack")}</p>
        </div>
        <div className="skills-icons">
          <img src={htmlIcon} alt="Html icon" className="animation_item"></img>
          <img src={cssIcon} alt="Css icon" className="animation_item"></img>
          <img src={sassIcon} alt="Sass icon" className="animation_item"></img>
          <img
            src={bootstrapIcon}
            alt="Bootstrap icon"
            className="animation_item"
          ></img>
          <img
            src={jsIcon}
            alt="Javascript icon"
            className="animation_item"
          ></img>
          <img
            src={tsIcon}
            alt="Typescript icon"
            className="animation_item"
          ></img>
          <img
            src={reactIcon}
            alt="React icon"
            className="animation_item"
          ></img>
          <img src={gitIcon} alt="Git icon" className="animation_item"></img>
        </div>
      </div>
    </>
  );
}
export default Skills;
