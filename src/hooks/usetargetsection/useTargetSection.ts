import type { RefReturnValue } from "../../types/reactTypes";

//custom hook to move target to particular section
const useTargetSection = () => {
  //function to focus the target
  const handleTargetSection = (
    element: RefReturnValue<HTMLDivElement | null>
  ) => {
    if (element?.current) {
      element?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { handleTargetSection };
};

export { useTargetSection };
