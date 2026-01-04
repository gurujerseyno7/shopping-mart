import Logo from "../../assets/images/g-mart-logo.webp";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import SocialMediaButton from "./components/SocialMediaButton";
import { constants } from "./utils/constants";

const socialLinks = [
  {
    name: "instagram",
    icon: <FaInstagram className="text-primary" size={20} />,
  },
  {
    name: "facebook",
    icon: <FaFacebookF className="text-primary" size={20} />,
  },
  {
    name: "whatsapp",
    icon: <FaWhatsapp className="text-primary" size={20} />,
    link: "https://wa.me",
  },
];

const customerPolicyLinks = [
  "Privacy Policy",
  "Terms and Conditions",
  "Return and Replacement Policy",
  "Shipping and Delivery Policy",
  "Contact Us",
];
const Footer = () => {
  return (
    <div className="bg-primary w-auto overflow-hidden max-h-auto ">
      <div className="flex flex-col justify-evenly pl-4 pt-4 py-2">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-20 text-left ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1 items-start">
              <img
                src={Logo}
                alt="Logo"
                className="object-cover h-10 w-10 rounded-md"
              />
              <span className="text-white font-semibold text-sm">
                {constants.footerSlogan1}
              </span>
              <span className="text-white font-semibold text-sm">
                {constants.footerSlogan2}
              </span>
            </div>
            <div className="flex gap-2">
              {socialLinks?.map((item) => (
                <SocialMediaButton
                  icon={item.icon}
                  key={item.name}
                  href={item.link}
                />
              ))}
            </div>
          </div>
          <div className="flex w-auto flex-col items-start">
            <span className="text-xl! font-bold!">
              {constants.customerPolicy}
            </span>
            <hr className="h-0.5 w-full text-white" />
            <div className="flex flex-col items-start">
              {customerPolicyLinks?.map((link) => (
                <span className="text-white text-sm cursor-pointer" key={link}>
                  {link}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-auto flex-col items-start">
            <span className="text-xl! font-bold!">{constants.needHelp}</span>
            <hr className="h-0.5 w-full text-white " />
            <div className="flex flex-col items-start">
              <span className="text-md font-bold">{constants.emailHeader}</span>
              <span className="text-sm">{constants.emailId}</span>
            </div>
          </div>
          <div className="flex w-auto flex-col items-start">
            <span className="text-xl! font-bold!">{constants.address}</span>
            <hr className="h-0.5 w-full text-white " />
            <div className="flex flex-col items-start">
              <span className="text-md">{constants.address1}</span>
              <span className="text-md">{constants.address2}</span>
            </div>
          </div>
        </div>
        <hr className="h-0.5 w-auto text-gray-400 mt-5" />
        <span className="text-sm text-left">{constants.rights}</span>
      </div>
    </div>
  );
};

export default Footer;
