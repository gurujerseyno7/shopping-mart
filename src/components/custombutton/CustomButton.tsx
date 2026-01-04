import type { CustomBuutonProps } from "./types/customButtonTypes";

const CustomButton = ({ name, onClick, className }: CustomBuutonProps) => {
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded bg-secondary cursor-pointer ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CustomButton;
