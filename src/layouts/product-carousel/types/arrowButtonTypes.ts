import type { ReactElement } from "../../../types/reactTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for ArrowButton props
type ArrowButtonProps = {
  icon: ReactElement;
  className?: PrimitiveTypes["string"];
  onClick: () => void;
};

export type { ArrowButtonProps };
