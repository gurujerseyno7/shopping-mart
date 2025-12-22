import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import type { NavBarLinkProps, NavBarLinkType } from "../types/NavBarTypes";
import classNames from "classnames";
import { useNavBarLinkAction } from "../hooks/useNavBarLinkAction";
import { MdOutlineMenu } from "react-icons/md";

const navBarLinks: NavBarLinkType[] = [
  { label: "Home", icon: <IoHomeOutline size={20} /> },
  { label: "Categories", icon: <BiCategory size={20} /> },
  { label: "Login", icon: <IoMdContact size={20} /> },
];

const NavBarLinks = ({ toggleMenu, setToggleMenu }: NavBarLinkProps) => {
  const { activeLink, setActiveLink } = useNavBarLinkAction();

  return (
    <div
      className={`lg:flex-row  gap-5 ${classNames({
        hidden: !toggleMenu,
        "flex flex-col gap-5": toggleMenu,
      })}`}
    >
      {navBarLinks?.map(({ label, icon }: NavBarLinkType) => (
        <div
          className={`flex items-center justify-start gap-2 w-auto max-w- cursor-pointer ${classNames(
            {
              "border border-white p-2 rounded-xl": activeLink === label,
            }
          )}`}
          key={label}
          onClick={() => setActiveLink(label)}
        >
          {icon}
          <span className="text-sm font-semibold">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default NavBarLinks;
