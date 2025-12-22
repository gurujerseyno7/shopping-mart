//custom hook to handle navbar link actions

import { useState } from "react";
import type { PrimitiveTypes } from "../../../types/basicTypes";

const useNavBarLinkAction = () => {
  const [activeLink, setActiveLink] =
    useState<PrimitiveTypes["string"]>("Home");

  //function to handle active link

  return { activeLink, setActiveLink };
};
export { useNavBarLinkAction };
