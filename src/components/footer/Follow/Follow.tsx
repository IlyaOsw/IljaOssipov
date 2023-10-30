import React from "react";
import { useTranslation } from "react-i18next";

const Follow: React.FC = () => {
  const { t } = useTranslation();
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
          alt={`${link.label} icon`}
          className="social"
        />
      </a>
    ));
  return (
    <div className="footer-right item-right animation_item">
      <span className="me-3 ln">{t("follow")}</span>
      {getLinks()}
    </div>
  );
};

export default Follow;
