import type { ArrowButtonProps } from "../../types/arrowButtonTypes";

const ArrowButton = ({ icon, className, onClick }: ArrowButtonProps) => {
  return (
    <div
      className={`h-12 w-12 rounded-full bg-white hover:bg-tertiary shadow-md flex items-center justify-center ${className} no-select`}
      onClick={onClick}
      role="button"
    >
      {icon}
    </div>
  );
};
export default ArrowButton;
