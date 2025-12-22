import CustomSearch from "../../components/customsearch/CustomSearch";
import MeviMartLogo from "../../assets/mevi-mart-logo.webp";
import NavBarLinks from "./components/NavbarLinks";
import { useNavBarMenu } from "./hooks/useNavBarMenu";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import classNames from "classnames";

const NavBar = () => {
  const { toggleMenu, setToggleMenu } = useNavBarMenu();
  return (
    <nav className="fixed top-0 w-full bg-primary h-auto flex items-center p-2">
      <div
        className={`w-full h-auto flex lg:flex-row justify-between gap-5 ${classNames(
          { "flex-col": toggleMenu ,}
        )}`}
      >
        <div className="w-full flex items-center justify-between">
          <img
            src={MeviMartLogo}
            alt="Mevi Mart Logo"
            className="h-8 rounded"
          />
          <CustomSearch />
          <FaShoppingCart size={20} />
          <MdOutlineMenu
            className="lg:hidden"
            size={20}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
        </div>

        <NavBarLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
