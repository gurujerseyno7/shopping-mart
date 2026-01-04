import type { CategoryBadgeProps } from "../types/categoryBadgeTypes";

const CategoryBatch = ({ categoryImage, categoryName }: CategoryBadgeProps) => {
  return (
    <div className="flex flex-col w-30 items-center">
      <div className="h-40 w-40 rounded-full bg-white hover:bg-secondary active:bg-secondary shadow-lg flex justify-center items-center hover:scale-105 transition-transform duration-200 ">
        <img
          src={categoryImage}
          alt={categoryName}
          className="h-25 w-25 object-cover"
        />
      </div>
      <span className="text-sm font-semibold text-black">{categoryName}</span>
    </div>
  );
};
export default CategoryBatch;
