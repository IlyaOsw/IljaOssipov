import { useTranslation } from "react-i18next";
import "./About.scss";
import React from "react";
import myPhoto from "./images/me.jpg";
import name from "./images/name.png";
import age from "./images/age.png";
import location from "./images/location.png";
import job from "./images/job.png";
import phone from "./images/phone.png";
import mail from "./images/mail.png";
import media from "./images/media.png";
import linkedin from "./images/linkedin.svg";
import fb from "./images/fb.svg";
import ig from "./images/ig.svg";
import git from "./images/git.png";

function About() {
  const { t } = useTranslation();
  return (
    <>
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
          <table className="table-striped fs-4 mt-4">
            <tbody>
              <tr className="animation_item">
                <td>
                  <img src={name} alt="Name icon" />
                  {t("name")}
                </td>
                <td>{t("IljaOssipov")}</td>
              </tr>
              <tr className="animation_item">
                <td>
                  <img src={age} alt="Age icon" />
                  {t("age")}
                </td>
                <td>{t("YearsOld")}</td>
              </tr>
              <tr className="animation_item">
                <td>
                  <img src={location} alt="Location icon" />
                  {t("location")}
                </td>
                <td>{t("Estonia")}</td>
              </tr>
              <tr className="animation_item">
                <td>
                  <img src={job} alt="Job icon" />
                  {t("job")}
                </td>
                <td>{t("Frontend")}</td>
              </tr>
              <tr className="animation_item">
                <td>
                  <img src={phone} alt="Phone icon" />
                  {t("phone")}
                </td>
                <td>+372 5349-4177</td>
              </tr>
              <tr className="animation_item">
                <td>
                  <img src={mail} alt="Mail icon" />
                  {t("mail")}
                </td>
                <td>ossipov96@gmail.com</td>
              </tr>
              <tr className="animation_item">
                <td>
                  <img src={media} alt="Media icon" />
                  {t("media")}
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/in/ilyaosw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                  >
                    <img
                      src={linkedin}
                      alt="Linkedin icon"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/ilyaosw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                  >
                    <img src={fb} alt="Facebook icon" className="social" />
                  </a>
                  <a
                    href="https://www.instagram.com/ilya_osw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                  >
                    <img src={ig} alt="Instagram icon" className="social" />
                  </a>
                  <a
                    href="https://github.com/IlyaOsw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                  >
                    <img src={git} alt="Github icon" className="social" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default About;
