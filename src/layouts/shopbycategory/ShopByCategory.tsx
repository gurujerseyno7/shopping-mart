import CategoryBatch from "./components/CategoryBadge";
import { shopByCategories } from "./datas/shopByCategoryDatas";

const ShopByCategory = () => {
  const CategoryBatches = () => {
    return [...shopByCategories, ...shopByCategories]?.map(
      (category, index) => (
        <div className="p-2" key={index}>
          <CategoryBatch {...category} />
        </div>
      )
    );
  };
  return (
    <div className="flex flex-col items-start p-2 bg-tertiary">
      <div className="flex flex-col  w-auto ">
        <h2 className="text-xl font-bold text-black uppercase">
          SHOP BY CATEGORY
        </h2>
        <hr className="h-0.5 w-full my-2 bg-secondary border-0" />
      </div>
      <div className="category-container w-full overflow-hidden flex lg:gap-45 sm:gap-96 ">
        <div className="flex w-full gap-10 animate-category">
          <CategoryBatches />
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
