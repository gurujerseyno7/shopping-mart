import { useRef } from "react";
import LandingBanner from "../../../layouts/landing-banner/LandingBanner";
import ProductCarousel from "../../../layouts/product-carousel/ProductCarousel";
import ShopByCategory from "../../../layouts/shopbycategory/ShopByCategory";
import { otherCategories, topSellingProducts } from "./datas/landingPageDatas";
import Footer from "../../../layouts/footer/Footer";
const LandingPage = () => {
  const productsDetails = [
    {
      productTitle: "Top Selling Products",
      products: topSellingProducts,
    },
    ...otherCategories,
  ];
  const shopRef = useRef(null);

  return (
    <div className="mt-2 p-2">
      <LandingBanner shopRef={shopRef} />
      <div ref={shopRef}>
        {productsDetails?.map((productsDetail) => (
          <div className="mb-10" key={productsDetail.productTitle}>
            <ProductCarousel
              productsDetail={productsDetail}
              key={productsDetail.productTitle}
            />
          </div>
        ))}
      </div>
      <ShopByCategory />
      <Footer />
    </div>
  );
};

export default LandingPage;
