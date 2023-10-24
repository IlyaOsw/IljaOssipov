import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Particle from "./components/Particle";
import i18n from "./i18n";

function App() {
  i18n.init({
    resources: {
      en: {
        translation: require("./locales/en/translation.json"),
      },
      ee: {
        translation: require("./locales/ee/translation.json"),
      },
      ru: {
        translation: require("./locales/ru/translation.json"),
      },
    },
  });
  useEffect(() => {
    // Dark/Light Theme
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

    // Animations
    function animationOnScroll() {
      for (let i = 0; i < animationItems.length; i++) {
        const animationItem = animationItems[i] as HTMLElement;
        const animationItemHeight = animationItem.offsetHeight;
        const animationItemOffset = offset(animationItem).top;
        const animationStart = 4;

        let animationItemPoint =
          window.innerHeight - animationItemHeight / animationStart;
        if (animationItemHeight > window.innerHeight) {
          animationItemPoint =
            window.innerHeight - window.innerHeight / animationStart;
        }

        if (
          window.scrollY > animationItemOffset - animationItemPoint &&
          window.scrollY < animationItemOffset + animationItemHeight
        ) {
          animationItem.classList.add("active");
        } else if (!animationItem.classList.contains("hide")) {
          animationItem.classList.remove("active");
        }
      }
      function offset(el: HTMLElement) {
        const rect = el.getBoundingClientRect();
        const scrollLeft =
          window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
    }

    const animationItems = document.querySelectorAll(".animation_item");
    if (animationItems.length > 0) {
      window.addEventListener("scroll", animationOnScroll);

      window.addEventListener("load", () => {
        animationOnScroll();
      });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <div className="container">
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Particle />
      </div>
      <Footer />
    </div>
  );
}
export default App;
