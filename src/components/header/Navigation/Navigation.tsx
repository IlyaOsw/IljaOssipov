import React from "react";
import { useTranslation } from "react-i18next";

interface closeMenuProps {
  closeMenu: () => void;
}

const Navigation: React.FC<closeMenuProps> = ({ closeMenu }) => {
  const { t } = useTranslation();
  function scrollToBlock(block: string): void {
    const element = document.querySelector(block) as HTMLElement;
    if (element) {
      const scrollTop = element.offsetTop;
      window.scrollTo({
        left: 0,
        top: scrollTop,
      });
    }
  }

  enum Links {
    ABOUT = "about",
    SKILLS = "skills",
    EXPERIENCE = "experience",
    CONTACT = "contact",
  }
  const headerItems: { id: number; label: Links }[] = [
    { id: 1, label: Links.ABOUT },
    { id: 2, label: Links.SKILLS },
    { id: 3, label: Links.EXPERIENCE },
    { id: 4, label: Links.CONTACT },
  ];

  const getHeaders = () =>
    headerItems.map((item) => (
      <li className="nav-item" key={item.id}>
        <a
          className="nav-link active me-1"
          aria-current="page"
          rel="noopener noreferrer"
          onClick={() => {
            scrollToBlock(`.block-${item.label}`);
            closeMenu();
          }}
        >
          {t(item.label)}
        </a>
      </li>
    ));
  return <ul className="navbar-nav ms-auto mb-lg-0 fs-5">{getHeaders()}</ul>;
};

export default Navigation;
