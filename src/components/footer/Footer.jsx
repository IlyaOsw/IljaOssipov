import { useTranslation } from "react-i18next";
import "./Footer.scss";
import linkedin from "./icons/linkedin.svg";
import fb from "./icons/fb.svg";
import ig from "./icons/ig.svg";
import git from "./icons/git.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="d-sm-flex justify-content-around fs-4 block-footer">
        <div className="footer-left">
          <p className="item-left animation_item">© 2023 By Ilja Ossipov</p>
        </div>
        <div className="footer-right item-right animation_item">
          <span className="me-3 ln">{t("follow")}</span>
          <a
            href="https://www.linkedin.com/in/ilyaosw/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <img src={linkedin} alt="Linkedin icon" className="social" />
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
        </div>
      </div>
    </div>
  );
};
export default Footer;
