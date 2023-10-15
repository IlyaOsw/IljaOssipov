import { useTranslation } from "react-i18next";
import "./Experience.scss";
import expImg from "./images/exp.jpg";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="block-experience">
        <div className="experience-tittle mb-5">
          <p className="item animation_item">{t("experience")}</p>
        </div>
        <div className="experience-body">
          <div className="experience-information fs-5">
            <ul>
              <li className="animation_item">
                <p>{t("html")}</p>
              </li>
              <li className="animation_item">
                <p>{t("css")}</p>
              </li>
              <li className="animation_item">
                <p>{t("sass")}</p>
              </li>
              <li className="animation_item">
                <p>{t("bootstrap")}</p>
              </li>
              <li className="animation_item">
                <p>{t("js")}</p>
              </li>
              <li className="animation_item">
                <p>{t("ts")}</p>
              </li>
              <li className="animation_item">
                <p>{t("git")}</p>
              </li>
              <li className="animation_item">
                <p>{t("react")}</p>
              </li>
            </ul>
          </div>
          <div className="exp-image mb-5 mt-5">
            <img src={expImg} alt="" className="img-fluid animation_item"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
