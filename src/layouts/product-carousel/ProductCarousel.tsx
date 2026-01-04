import { useRef } from "react";
import ProductCard from "../../components/productcard/ProductCard";
import type { ProductCardProps } from "../../components/productcard/types/productCardTypes";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import ArrowButton from "./components/arrow-button/ArrowButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { ProductCarouselProps } from "./types/productCarouselTypes";

const ProductCarousel = ({
  productsDetail: { productTitle, products },
}: ProductCarouselProps) => {
  const productRef = useRef<HTMLDivElement>(null);

  const {
    handleHorizontalScroll,
    isStartScroll,
    isEndScroll,
    handleArrowButtons,
  } = useHorizontalScroll();
  return (
    <div className="flex flex-col items-start relative overflow-hidden ">
      <div className="flex w-auto flex-col">
        <h2 className="text-xl! font-bold! text-black! uppercase!">
          {productTitle}
        </h2>
        <hr className="h-0.5 w-full my-2 bg-secondary border-0" />
      </div>
      <div
        className="w-screen flex gap-5 p-2 overflow-x-scroll no-scrollbar"
        ref={productRef}
        onScroll={() => {
          handleArrowButtons(productRef.current);
        }}
      >
        {products?.map((product: ProductCardProps) => (
          <ProductCard {...product} key={product.productName} />
        ))}
      </div>

      <ArrowButton
        icon={
          <IoIosArrowBack size={20} color={isStartScroll ? "grey" : "black"} />
        }
        className={`absolute top-50 z-20`}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          handleHorizontalScroll({
            element: productRef.current,
            speed: 25,
            distance: 100,
            step: -10,
          });
        }}
      />
      <ArrowButton
        icon={
          <IoIosArrowForward size={20} color={isEndScroll ? "grey" : "black"} />
        }
        className="absolute top-50 right-0 z-20"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          handleHorizontalScroll({
            element: productRef.current,
            speed: 25,
            distance: 100,
            step: 10,
          });
        }}
      />
    </div>
  );
};

export default ProductCarousel;
