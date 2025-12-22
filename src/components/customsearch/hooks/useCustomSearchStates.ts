import { useState } from "react";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//custom hook to handle useStates in Custom Search Component
const useCustomSearchStates = () => {
  const [isSelectOpened, setIsSelectOpened] =
    useState<PrimitiveTypes["boolean"]>();
  const [inputValue, setInputValue] = useState<PrimitiveTypes["string"]>();
  const [selectedOption, setSelectedOption] =
    useState<PrimitiveTypes["string"]>();

  return {
    isSelectOpened,
    setIsSelectOpened,
    inputValue,
    setInputValue,
    selectedOption,
    setSelectedOption,
  };
};

export default useCustomSearchStates;
