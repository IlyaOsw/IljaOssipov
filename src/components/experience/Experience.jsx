import { useTranslation } from "react-i18next";
import "./Experience.scss";
import expImg from "./Images/exp.jpg";
import Description from "./Description/Description";

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
            <Description />
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
