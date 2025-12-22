import { BiChevronDown } from "react-icons/bi";
import useCustomSearchStates from "./hooks/useCustomSearchStates";
import classNames from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import type { PrimitiveTypes } from "../../types/basicTypes";

const options = ["Ragi", "Wheat", "Rice"];

const CustomSearch = () => {
  //hook for accessing custom search states
  const {
    isSelectOpened,
    setIsSelectOpened,
    inputValue,
    setInputValue,
    selectedOption,
    setSelectedOption,
  } = useCustomSearchStates();
  return (
    <div className="relative w-50 md:w-150 font-medium">
      <div
        className="bg-white w-full p-2 flex items-center justify-between border rounded-xl"
        onClick={() => {
          setIsSelectOpened(!isSelectOpened);
        }}
      >
        <span className="text-black">
          {selectedOption || "Select Products"}
        </span>

        {selectedOption ? (
          <RxCross2
            size={20}
            color="black"
            onClick={() => setSelectedOption("")}
          />
        ) : (
          <BiChevronDown
            size={20}
            color="black"
            className={classNames({ "rotate-180": isSelectOpened })}
          />
        )}
      </div>
      <ul
        className={`${classNames({
          "max-h-60 border border-primary rounded-xl": isSelectOpened,
        })} absolute w-50 lg:w-150 text-left bg-white mt-2 overflow-y-auto max-h-0 `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white border-b border-primary">
          <AiOutlineSearch size={18} color="black" />
          <input
            type="text"
            value={inputValue}
            autoFocus
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Product Name"
            className="placeholder:text-gray-700 p-2 text-black outline-none"
          />
        </div>
        {options?.map((option: PrimitiveTypes["string"]) => (
          <li
            key={option}
            className={classNames({
              "text-black": true,
              "p-2 text-sm hover:bg-primary hover:text-white": true,
              "bg-primary text-white": option === selectedOption,
              hidden: inputValue
                ? !option?.toLowerCase().startsWith(inputValue!)
                : false,
            })}
            onClick={() => {
              setSelectedOption(option);
              setInputValue("");
              setIsSelectOpened(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSearch;
