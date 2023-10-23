import React from "react";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  function scrollToBlock(block: string): void {
    const element = document.querySelector(block) as HTMLElement;
    if (element) {
      const scrollTopOffset = element.offsetTop;
      window.scroll({
        left: 0,
        top: scrollTopOffset,
        behavior: "smooth",
      });
    }
  }
  // // Hide Burger-Menu
  // // const body = document.body;
  // const burgerBtn = document.getElementById("menu") as HTMLElement;
  // // const burgerMenu = document.getElementById(
  // //   "navbarSupportedContent"
  // // ) as HTMLElement;
  // // const languageBtn = document.querySelector(".btn-group") as HTMLElement;
  // const navItems = document.querySelectorAll(".nav-item");
  // const dropdownItems = document.querySelectorAll(".dropdown-item");

  // // body.addEventListener("click", (event: any) => {
  // //   if (
  // //     !burgerMenu.contains(event.target) &&
  // //     !languageBtn.contains(event.target)
  // //   ) {
  // //     if (burgerMenu.classList.contains("show")) {
  // //       burgerBtn.click();
  // //     }
  // //   }
  // // });

  // function closeMenu() {
  //   if (burgerBtn.getAttribute("aria-expanded") === "true") {
  //     burgerBtn.click();
  //   }
  // }

  // navItems.forEach((navItems) => {
  //   navItems.addEventListener("click", closeMenu);
  // });

  // dropdownItems.forEach((dropdownItem) => {
  //   dropdownItem.addEventListener("click", closeMenu);
  // });
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
          onClick={() => {
            scrollToBlock(`.block-${item.label}`);
          }}
        >
          {t(item.label)}
        </a>
      </li>
    ));
  return <ul className="navbar-nav ms-auto mb-lg-0 fs-5">{getHeaders()}</ul>;
};

export default Navigation;
