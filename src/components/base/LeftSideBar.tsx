import { CategoryFilter } from "@/components/filter/CategoryFilter";
import { KeywordFilter } from "@/components/filter/KeywordFilter";
import { ResetBtn } from "@/components/filter/ResetBtn";
import { SortField } from "@/components/filter/SortField";

export const LeftSideBar = () => {
  return (
    <aside className="w-[250px] max-md:hidden">
      <KeywordFilter />
      <CategoryFilter />
      <SortField />
      <ResetBtn />
    </aside>
  );
};
