import React, { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    const animationOnScroll = () => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i] as HTMLElement;
        const itemHeight = item.offsetHeight;
        const itemTop = offset(item).top;
        const start = 6;

        let itemPoint = window.innerHeight - itemHeight / start;
        if (itemHeight > window.innerHeight) {
          itemPoint = window.innerHeight - window.innerHeight / start;
        }
        if (
          window.scrollY > itemTop - itemPoint &&
          window.scrollY < itemTop + itemHeight
        ) {
          item.classList.add("active");
        } else if (!item.classList.contains("hide")) {
          item.classList.remove("active");
        }
      }
      function offset(el: HTMLElement) {
        const rect = el.getBoundingClientRect();
        const scrollLeft =
          window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
    };
    const items = document.querySelectorAll(".animation_item");
    if (items.length > 0) {
      window.addEventListener("scroll", animationOnScroll);

      //   window.addEventListener("load", () => {
      //     animationOnScroll();
      //   });
    }
  }, []);
  return <></>;
};

export default Animation;
