import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.scss";
import SkillIcons from "./SkillsIcons/SkillIcons";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="block-skills">
      <div className="skills-tittle">
        <p className="animation_item">{t("skills")}</p>
      </div>
      <div className="skills-info fs-2">
        <p className="animation_item">{t("Stack")}</p>
      </div>
      <SkillIcons />
    </div>
  );
};
export default Skills;
