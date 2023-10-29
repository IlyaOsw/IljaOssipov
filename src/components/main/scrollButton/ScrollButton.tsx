import React, { useState } from "react";
import "./ScrollButton.scss";

const ScrollButton: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const toggle = () => {
    if (window.scrollY > 300) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };
  window.addEventListener("scroll", toggle);
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + `/images/arrowUp.png`}
        alt="Arrow up"
        className={`scroll-btn ${isHidden ? "hidden" : ""}`}
        onClick={scrollToTop}
      ></img>
    </div>
  );
};

export default ScrollButton;