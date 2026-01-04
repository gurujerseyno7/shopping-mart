import deliveryImg from "../../assets/images/delivery.webp";
import CustomButton from "../../components/custombutton/CustomButton";
import { useTargetSection } from "../../hooks/usetargetsection/useTargetSection";
import type { LandingBannerProps } from "./types/landingBannerTypes";

const LandingBanner = ({ shopRef }: LandingBannerProps) => {
  const { handleTargetSection } = useTargetSection();
  return (
    <div className="bg-primary flex flex-col lg:flex-row h-100 max-h-auto rounded-t-lg rounded-b-[10%] justify-between relative">
      <div className="flex flex-col items-start justify-center pl-5 lg:pl-15  gap-4">
        <span className="text-5xl font-bold  text-white text-left">
          We bring the store to your door
        </span>
        <span className="text-md text-white text-left">
          Free delivery above ₹499. Use Coupon and get extra off.
        </span>
        <CustomButton
          name={"Shop Now"}
          className="bg-[#baeb6f]! text-black!"
          onClick={() => {
            handleTargetSection(shopRef);
          }}
        />
      </div>

      <div className="absolute bottom-0 right-0">
        <img
          src={deliveryImg}
          alt="Delivery products"
          className="object-cover h-50 lg:h-90"
        />
      </div>
    </div>
  );
};
export default LandingBanner;
