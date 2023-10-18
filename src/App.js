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
    // Hide Burger-Menu
    const body = document.body;
    const burgerBtn = document.getElementById("menu");
    const burgerMenu = document.getElementById("navbarSupportedContent");
    const languageBtn = document.querySelector(".btn-group");
    const navItems = document.querySelectorAll(".nav-item");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    body.addEventListener("click", (event) => {
      if (
        !burgerMenu.contains(event.target) &&
        !languageBtn.contains(event.target)
      ) {
        if (burgerMenu.classList.contains("show")) {
          burgerBtn.click();
        }
      }
    });

    function closeMenu() {
      if (burgerBtn.getAttribute("aria-expanded") === "true") {
        burgerBtn.click();
      }
    }

    navItems.forEach((navItems) => {
      navItems.addEventListener("click", closeMenu);
    });

    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.addEventListener("click", closeMenu);
    });

    // Dark/Light Theme
    const headerColor = document.querySelector(".header_color");
    const darkTheme = document.querySelector(".dark_theme");
    const lightTheme = document.querySelector(".light_theme");

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

      nav.forEach((link) => {
        link.style.color = "#141414";
        link.style.setProperty("color", "#141414", "important");
      });
      const color = "#141414";
      const borderBottom = "1px solid " + color;
      blocks.forEach((block) => {
        block.style.color = color;
      });

      [InputName, InputEmail, Message].forEach((input) => {
        input.style.color = color;
        input.style.borderBottom = borderBottom;
      });
    });

    darkTheme.addEventListener("click", () => {
      body.style.backgroundImage =
        "linear-gradient(to right, #141414, #494949)";
      headerColor.style.backgroundImage =
        "linear-gradient(to right, #141414, #494949)";

      nav.forEach((link) => {
        link.style.color = "#f8f9fa";
        link.style.setProperty("color", "#f8f9fa", "important");
      });

      const color = "#f8f9fa";
      const borderBottom = "1px solid " + color;
      blocks.forEach((block) => {
        block.style.color = color;
      });

      [InputName, InputEmail, Message].forEach((input) => {
        input.style.color = color;
        input.style.borderBottom = borderBottom;
      });
    });

    // Scroll To Blocks
    const aboutBlock = document.querySelector(".block-about");
    const skilssBlock = document.querySelector(".block-skills");
    const experienceBlock = document.querySelector(".block-experience");
    const contactBlock = document.querySelector(".block-contact");

    function scrollToBlock(element) {
      const windowHeight = window.innerHeight;
      const elementHeight = element.clientHeight;

      const scrollTopOffset = element.offsetTop;
      window.scroll({
        left: 0,
        top: scrollTopOffset,
        behavior: "smooth",
      });
    }
    document.getElementById("aboutBtn").addEventListener("click", (event) => {
      event.preventDefault();
      scrollToBlock(aboutBlock);
    });
    document.getElementById("skillsBtn").addEventListener("click", (event) => {
      event.preventDefault();
      scrollToBlock(skilssBlock);
    });
    document
      .getElementById("experienceBtn")
      .addEventListener("click", (event) => {
        event.preventDefault();
        scrollToBlock(experienceBlock);
      });
    document.getElementById("contactBtn").addEventListener("click", (event) => {
      event.preventDefault();
      scrollToBlock(contactBlock);
    });

    // Animations
    const animationItems = document.querySelectorAll(".animation_item");
    if (animationItems.length > 0) {
      window.addEventListener("scroll", animationOnScroll);
      function animationOnScroll() {
        for (let i = 0; i < animationItems.length; i++) {
          const animationItem = animationItems[i];
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
      }
      animationOnScroll();

      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.scrollX || document.documentElement.scrollLeft,
          scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
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
