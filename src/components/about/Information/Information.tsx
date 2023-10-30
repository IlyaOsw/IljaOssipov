import React from "react";
import { useTranslation } from "react-i18next";
import "../About.scss";

const Information: React.FC = () => {
  const { t } = useTranslation();
  enum title {
    NAME = "name",
    AGE = "age",
    LOCATION = "location",
    JOB = "job",
    PHONE = "phone",
    MAIL = "mail",
  }
  enum Info {
    ILJAOSSIPOV = "IljaOssipov",
    YEARSOLD = "YearsOld",
    ESTONIA = "Estonia",
    FRONTEND = "Frontend",
    PHONENUMBER = "phoneNumber",
    MYMAIL = "myMail",
  }
  const information: { id: number; label: title; info: Info }[] = [
    { id: 1, label: title.NAME, info: Info.ILJAOSSIPOV },
    { id: 2, label: title.AGE, info: Info.YEARSOLD },
    { id: 3, label: title.LOCATION, info: Info.ESTONIA },
    { id: 4, label: title.JOB, info: Info.FRONTEND },
    { id: 5, label: title.PHONE, info: Info.PHONENUMBER },
    { id: 6, label: title.MAIL, info: Info.MYMAIL },
  ];
  const getInformation = (): JSX.Element[] => {
    return information.map((item) => (
      <tr className="animation_item" key={item.id}>
        <td>
          <img
            src={process.env.PUBLIC_URL + `/images/${item.label}.png`}
            alt={item.label}
          />
          {t(item.label)}
        </td>
        <td>{t(item.info)}</td>
      </tr>
    ));
  };
  enum SocialLinks {
    LINKEDIN = "Linkedin",
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram",
    GITHUB = "Github",
  }

  const links: { id: number; url: string; label: SocialLinks }[] = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/ilyaosw/",
      label: SocialLinks.LINKEDIN,
    },
    {
      id: 2,
      url: "https://www.facebook.com/ilyaosw",
      label: SocialLinks.FACEBOOK,
    },
    {
      id: 3,
      url: "https://www.instagram.com/ilya_osw/",
      label: SocialLinks.INSTAGRAM,
    },
    {
      id: 4,
      url: "https://github.com/IlyaOsw",
      label: SocialLinks.GITHUB,
    },
  ];

  const getLinks = (): JSX.Element[] =>
    links.map((link) => (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3"
        key={link.id}
      >
        <img
          src={process.env.PUBLIC_URL + `/images/${link.label}.svg`}
          alt={link.label}
          className="social"
        />
      </a>
    ));
  return (
    <table className="table-striped fs-4 mt-4">
      <tbody>
        {getInformation()}
        <tr className="animation_item">
          <td>
            <img
              src={process.env.PUBLIC_URL + `/images/media.png`}
              alt="Media"
            />
            {t("media")}
          </td>
          <td>{getLinks()}</td>
        </tr>
        <tr className="animation_item">
          <td></td>
          <td>
            <a
              href={
                process.env.PUBLIC_URL + `/images/Front-End Ilja Ossipov CV.pdf`
              }
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
