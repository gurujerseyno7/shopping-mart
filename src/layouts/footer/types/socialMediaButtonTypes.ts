import type { ReactNode } from "react";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for social media button
type SocialMediaButtonProps = {
  icon: ReactNode;
  href?: PrimitiveTypes["string"];
};

export type { SocialMediaButtonProps };
