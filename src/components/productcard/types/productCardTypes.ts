// type for product card props

import type { PrimitiveTypes } from "../../../types/basicTypes";

type ProductCardProps = {
  productImage: PrimitiveTypes["string"];
  offer: PrimitiveTypes["number"] | PrimitiveTypes["string"];
  productName: PrimitiveTypes["string"];
  productPrice: PrimitiveTypes["number"];
  initialPrice?: PrimitiveTypes["number"];
};

export type { ProductCardProps };
