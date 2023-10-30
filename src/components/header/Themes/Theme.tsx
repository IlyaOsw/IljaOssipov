import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface closeMenuProps {
  closeMenu: () => void;
}

const Theme: React.FC<closeMenuProps> = ({ closeMenu }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const headerColor = document.querySelector(".header_color") as HTMLElement;
    const darkTheme = document.querySelector(".dark_theme") as HTMLElement;
    const lightTheme = document.querySelector(".light_theme") as HTMLElement;
    const navLinks = document.querySelectorAll(".nav-link");
    const blocks = document.querySelectorAll(
      ".block-about, .block-skills, .block-experience, .block-contact, .block-footer"
    );

    function toggleTheme(background: string, textColor: string): void {
      document.body.style.background =
        headerColor.style.background = `linear-gradient(to right, ${background})`;

      navLinks.forEach((link: Element): void => {
        const linkElement = link as HTMLElement;
        linkElement.style.color = textColor;
        linkElement.style.setProperty("color", textColor, "important");
      });

      blocks.forEach((block: Element): void => {
        const blockElement = block as HTMLElement;
        blockElement.style.color = textColor;
      });
    }

    lightTheme.addEventListener("click", (): void => {
      toggleTheme("#d4d4d4, #f3f3f3", "#141414");
    });

    darkTheme.addEventListener("click", (): void => {
      toggleTheme("#141414, #494949", "#f8f9fa");
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

  const getThemes = (): JSX.Element[] =>
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
          src={process.env.PUBLIC_URL + `/images/${item.label}.svg`}
          alt={item.label}
        />
        <span>{t(item.label)}</span>
      </div>
    ));
  return <div className="theme ms-4 d-flex">{getThemes()}</div>;
};

export default Theme;
