import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import type { NavBarLinkProps, NavBarLinkType } from "../types/NavBarTypes";
import classNames from "classnames";
import { useNavBarLinkAction } from "../hooks/useNavBarLinkAction";

const navBarLinks: NavBarLinkType[] = [
  { label: "Home", icon: <IoHomeOutline size={20} className="text-white!" /> },
  {
    label: "Categories",
    icon: <BiCategory size={20} className="text-white!" />,
  },
  { label: "Login", icon: <IoMdContact size={20} className="text-white!" /> },
];

const NavBarLinks = ({ toggleMenu }: NavBarLinkProps) => {
  const { activeLink, setActiveLink } = useNavBarLinkAction();

  return (
    <div
      className={`flex flex-col lg:flex lg:flex-row  gap-5 ${classNames({
        hidden: !toggleMenu,
        "sm:flex flex-col gap-5": toggleMenu,
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
          <span className="text-sm font-semibold text-white!">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default NavBarLinks;
