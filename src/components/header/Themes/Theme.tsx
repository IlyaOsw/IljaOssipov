import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface closeMenuProps {
  closeMenu: () => void;
}

const Theme: React.FC<closeMenuProps> = ({ closeMenu }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const body = document.body;
    const headerColor = document.querySelector(".header_color") as HTMLElement;
    const darkTheme = document.querySelector(".dark_theme") as HTMLElement;
    const lightTheme = document.querySelector(".light_theme") as HTMLElement;

    const nav = document.querySelectorAll(".nav-link");
    const blocks = document.querySelectorAll(
      ".block-about, .block-skills, .block-experience, .block-contact, .block-footer"
    );

    const InputName = document.getElementById("name");
    const InputEmail = document.getElementById("email");
    const Message = document.getElementById("message");

    lightTheme.addEventListener("click", () => {
      body.style.backgroundImage =
        "linear-gradient(to right, #d4d4d4, #f3f3f3)";
      headerColor.style.backgroundImage =
        "linear-gradient(to right, #d4d4d4, #f3f3f3)";

      nav.forEach((link: any) => {
        link.style.color = "#141414";
        link.style.setProperty("color", "#141414", "important");
      });
      const color = "#141414";
      const borderBottom = "1px solid " + color;
      blocks.forEach((block: any) => {
        block.style.color = color;
      });

      [InputName, InputEmail, Message].forEach((input: any) => {
        input.style.color = color;
        input.style.borderBottom = borderBottom;
      });
    });

    darkTheme.addEventListener("click", () => {
      body.style.backgroundImage =
        "linear-gradient(to right, #141414, #494949)";
      headerColor.style.backgroundImage =
        "linear-gradient(to right, #141414, #494949)";

      nav.forEach((link: any) => {
        link.style.color = "#f8f9fa";
        link.style.setProperty("color", "#f8f9fa", "important");
      });

      const color = "#f8f9fa";
      const borderBottom = "1px solid " + color;
      blocks.forEach((block: any) => {
        block.style.color = color;
      });

      [InputName, InputEmail, Message].forEach((input: any) => {
        input.style.color = color;
        input.style.borderBottom = borderBottom;
      });
    });
  }, []);

  enum Theme {
    DARK = "dark",
    LIGHT = "light",
  }
  const themeItems: { id: number; label: Theme }[] = [
    { id: 1, label: Theme.DARK },
    { id: 2, label: Theme.LIGHT },
  ];
  const getThemes = () =>
    themeItems.map((item) => (
      <div
        key={item.id}
        className={`btn ${
          item.label === Theme.DARK ? "btn-secondary" : `btn-${item.label}`
        } ${item.label}_theme fw-semibold ${
          item.label === Theme.LIGHT ? "ms-3" : ""
        }`}
        onClick={closeMenu}
      >
        <img
          src={process.env.PUBLIC_URL + `/${item.label}.svg`}
          alt={item.label}
        />
        <span>{t(item.label)}</span>
      </div>
    ));
  return <div className="theme ms-4 d-flex">{getThemes()}</div>;
};

export default Theme;
