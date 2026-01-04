import type { PrimitiveTypes } from "../../types/basicTypes";

//type fornproduct list request payload
type fetchProductListRequest = {
  q: PrimitiveTypes["string"];
};

export type { fetchProductListRequest };
