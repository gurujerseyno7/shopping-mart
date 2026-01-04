import type { ProductCardProps } from "../../../components/productcard/types/productCardTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for useHorizontalScroll hook arguments
type HorizontalScrollParams = {
  element: HTMLDivElement | PrimitiveTypes["null"];
  speed: PrimitiveTypes["number"];
  distance: PrimitiveTypes["number"];
  step: PrimitiveTypes["number"];
};

//type for product carousel props
type ProductCarouselProps = {
  productsDetail: {
    productTitle: PrimitiveTypes["string"];
    products: ProductCardProps[];
  };
};

export type { HorizontalScrollParams, ProductCarouselProps };
