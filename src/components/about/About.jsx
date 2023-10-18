import { useTranslation } from "react-i18next";
import "./About.scss";
import myPhoto from "./Images/me.jpg";
import Information from "./Information/Information";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="block-about">
      <div className="about-tittle mb-5">
        <p className="animation_item">{t("about")}</p>
      </div>
      <div className="about-information">
        <div className="about-photo">
          <img
            src={myPhoto}
            alt="Ilja Ossipov"
            className="img-fluid animation_item"
          />
        </div>
        <Information />
      </div>
    </div>
  );
};
export default About;
