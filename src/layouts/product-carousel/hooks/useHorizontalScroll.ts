//custom hook to handle horizontal scroll

import { useState } from "react";
import type { HorizontalScrollParams } from "../types/productCarouselTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

const useHorizontalScroll = () => {
  const [isStartScroll, setisStartScroll] = useState(true);
  const [isEndScroll, setisEndScroll] = useState(false);

  const handleHorizontalScroll = ({
    element,
    speed,
    distance,
    step,
  }: HorizontalScrollParams) => {
    let scrollAmount = 0;

    const slideTimer = setInterval(() => {
      element!.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      handleArrowButtons(element);
    }, speed);
  };

  //function to handle arrow buttons
  const handleArrowButtons = (
    element: HTMLDivElement | PrimitiveTypes["null"]
  ) => {
    if (element) {
      if (element.scrollWidth - element.clientWidth - element.scrollLeft <= 1) {
        setisEndScroll(true);
      } else {
        setisEndScroll(false);
      }

      if (element.scrollLeft === 0) {
        setisStartScroll(true);
      } else {
        setisStartScroll(false);
      }
    }
  };

  return {
    handleHorizontalScroll,
    isStartScroll,
    isEndScroll,
    handleArrowButtons,
  };
};

export { useHorizontalScroll };
