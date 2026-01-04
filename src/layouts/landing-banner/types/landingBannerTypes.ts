//type for landing banner props

import type { PrimitiveTypes } from "../../../types/basicTypes";
import type { RefReturnValue } from "../../../types/reactTypes";

type LandingBannerProps = {
  shopRef: RefReturnValue<HTMLDivElement | PrimitiveTypes["null"]>;
};

export type { LandingBannerProps };
