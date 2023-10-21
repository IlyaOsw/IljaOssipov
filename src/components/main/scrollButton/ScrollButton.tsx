import React from "react";
import { useEffect } from "react";
import "./ScrollButton.scss";

const ScrollButton = () => {
  useEffect(() => {
    const scrollButton = document.querySelector(".scroll-btn") as HTMLElement;
    scrollButton.addEventListener("click", () => {
      window.scroll(0, 0);
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollButton.classList.remove("hidden");
      } else {
        scrollButton.classList.add("hidden");
      }
    });
  }, []);

  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + `/arrowUp.png`}
        alt="Arrow up"
        className="scroll-btn hidden"
      ></img>
    </div>
  );
};

export default ScrollButton;
