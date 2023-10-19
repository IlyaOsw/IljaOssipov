import { useTranslation } from "react-i18next";
import linkedin from "./Icons/linkedin.svg";
import fb from "./Icons/fb.svg";
import ig from "./Icons/ig.svg";
import git from "./Icons/git.png";

const Follow = () => {
  const { t } = useTranslation();
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
    <div className="footer-right item-right animation_item">
      <span className="me-3 ln">{t("follow")}</span>
      {getLinks()}
    </div>
  );
};

export default Follow;
