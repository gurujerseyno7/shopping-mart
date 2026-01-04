import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for custom button props
type CustomBuutonProps = {
  name: PrimitiveTypes["string"];
  onClick?: () => void;
  className?: PrimitiveTypes["string"];
};

export type { CustomBuutonProps };
