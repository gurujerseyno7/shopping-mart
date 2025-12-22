import { useState } from "react";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//custom hook to handle navbar menu
const useNavBarMenu = () => {
  const [toggleMenu, setToggleMenu] =
    useState<PrimitiveTypes["boolean"]>(false);

  return { toggleMenu, setToggleMenu };
};
export { useNavBarMenu };
