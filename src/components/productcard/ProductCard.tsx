import CustomButton from "../custombutton/CustomButton";
import type { ProductCardProps } from "./types/productCardTypes";

const ProductCard = ({
  productImage,
  offer,
  productName,
  productPrice,
  initialPrice,
}: ProductCardProps) => {
  return (
    <div className="w-60 max-w-sm min-w-60 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="max-w-sm m-3 bg-tertiary relative rounded-2xl p-4 flex justify-center z-20">
        {Boolean(offer) && (
          <div className="absolute left-3 top-3 h-6 w-20 rounded text-sm bg-secondary">
            <span className="text-white">{`${offer}% OFF`}</span>
          </div>
        )}

        <img
          className="w-40 h-40 object-cover rounded-2xl p-6"
          src={productImage}
          alt={productName}
        />
      </div>
      <div>
        <div className="h-20">
          <span className="font-semibold text-md text-black">
            {productName}
          </span>
        </div>
        <div className="flex justify-between p-2">
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-400">Price</span>

            <div className="flex">
              {Boolean(initialPrice) && (
                <span className="text-sm font-medium text-gray-400 line-through mr-2">
                  {initialPrice}
                </span>
              )}
              <span className="text-sm font-medium text-primary ">
                {`₹${productPrice}`}
              </span>
            </div>
          </div>
          <CustomButton name="Add to Cart" className="bg-secondary!"/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
