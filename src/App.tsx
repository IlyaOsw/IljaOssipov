import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import i18n from "./i18n";

const App: React.FC = () => {
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
  return (
    <div>
      <Header />
      <Main />
      <div className="container">
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
export default App;
