import { CategoryFilter } from "@/components/FilterStash/CategoryFilter";
import { KeywordFilter } from "@/components/FilterStash/KeywordFilter";
import { ResetBtn } from "@/components/FilterStash/ResetBtn";
import { SortField } from "@/components/FilterStash/SortField";

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
