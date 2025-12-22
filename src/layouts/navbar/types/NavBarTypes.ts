import type { PrimitiveTypes } from "../../../types/basicTypes";
import type { ReactElement, SetStateUpdate } from "../../../types/reactTypes";

//type for navbar link component props
type NavBarLinkProps = {
  toggleMenu: PrimitiveTypes["boolean"];
  setToggleMenu: SetStateUpdate<PrimitiveTypes["boolean"]>;
};
//type for navbar links
type NavBarLinkType = {
  label: PrimitiveTypes["string"];
  icon: ReactElement;
};

export type { NavBarLinkType, NavBarLinkProps };
