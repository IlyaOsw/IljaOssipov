import { useEffect } from "react";
import arrowUp from "../Images/arrowUp.png";
import "./ScrollButton.scss";

const ScrollButton = () => {
  useEffect(() => {
    const scrollButton = document.querySelector(".scroll-btn");
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
      <img src={arrowUp} alt="Arrow up" className="scroll-btn hidden"></img>
    </div>
  );
};

export default ScrollButton;
