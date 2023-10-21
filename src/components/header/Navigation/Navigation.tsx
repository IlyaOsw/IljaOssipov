import React from "react";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  // Scroll To Blocks
  const aboutBlock = document.querySelector(".block-about");
  const skilssBlock = document.querySelector(".block-skills");
  const experienceBlock = document.querySelector(".block-experience");
  const contactBlock = document.querySelector(".block-contact");

  function scrollToBlock(element: any) {
    const scrollTopOffset = element.offsetTop;
    window.scroll({
      left: 0,
      top: scrollTopOffset,
      behavior: "smooth",
    });
  }

  const aboutBtn = document.getElementById("aboutBtn");

  if (aboutBtn) {
    aboutBtn.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToBlock(aboutBlock);
    });
  }
  const skillsBtn = document.getElementById("skillsBtn");

  if (skillsBtn) {
    skillsBtn.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToBlock(skilssBlock);
    });
  }

  const experienceBtn = document.getElementById("experienceBtn");

  if (experienceBtn) {
    experienceBtn.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToBlock(experienceBlock);
    });
  }
  const contactBtn = document.getElementById("contactBtn");

  if (contactBtn) {
    contactBtn.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToBlock(contactBlock);
    });
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
          id={`${item.label}Btn`}
          className="nav-link active me-1"
          aria-current="page"
          rel="noopener noreferrer"
        >
          {t(item.label)}
        </a>
      </li>
    ));
  return <ul className="navbar-nav ms-auto mb-lg-0 fs-5">{getHeaders()}</ul>;
};

export default Navigation;
