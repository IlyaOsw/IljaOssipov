import { useTranslation } from "react-i18next";
import "../About.scss";
import name from "../Images/name.png";
import age from "../Images/age.png";
import location from "../Images/location.png";
import job from "../Images/job.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import media from "../Images/media.png";
import linkedin from "../Images/linkedin.svg";
import fb from "../Images/fb.svg";
import ig from "../Images/ig.svg";
import git from "../Images/git.png";
import cv from "../Cv/Front-End Ilja Ossipov CV.pdf";

const Information = () => {
  const { t } = useTranslation();
  const information = [
    { id: 1, label: "name", info: "IljaOssipov", icon: name },
    { id: 2, label: "age", info: "YearsOld", icon: age },
    { id: 3, label: "location", info: "Estonia", icon: location },
    { id: 4, label: "job", info: "Frontend", icon: job },
    { id: 5, label: "phone", info: "phoneNumber", icon: phone },
    { id: 6, label: "mail", info: "myMail", icon: mail },
  ];
  const getInformation = () => {
    return information.map((item) => (
      <tr className="animation_item" key={item.id}>
        <td>
          <img src={item.icon} alt="Name icon" />
          {t(item.label)}
        </td>
        <td>{t(item.info)}</td>
      </tr>
    ));
  };
  const links = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/ilyaosw/",
      img: linkedin,
      label: "Linkedin",
    },
    {
      id: 2,
      url: "https://www.facebook.com/ilyaosw",
      img: fb,
      label: "Facebook",
    },
    {
      id: 3,
      url: "https://www.instagram.com/ilya_osw/",
      img: ig,
      label: "Instagram",
    },
    {
      id: 4,
      url: "https://github.com/IlyaOsw",
      img: git,
      label: "Github",
    },
  ];
  const getLinks = () =>
    links.map((link) => (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3"
        key={link.id}
      >
        <img src={link.img} alt={`${link.label} icon`} className="social" />
      </a>
    ));
  return (
    <table className="table-striped fs-4 mt-4">
      <tbody>
        {getInformation()}
        <tr className="animation_item">
          <td>
            <img src={media} alt="Media icon" />
            {t("media")}
          </td>
          <td>{getLinks()}</td>
        </tr>
        <tr className="animation_item">
          <td></td>
          <td>
            <a
              href={cv}
              download="Front-End Ilja Ossipov CV.pdf"
              className="about-cv"
            >
              {t("downloadCV")}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Information;
