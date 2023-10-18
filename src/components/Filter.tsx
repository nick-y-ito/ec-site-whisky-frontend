import { CategoryFilter, SearchField } from '@/components';
import { Category, categories } from '@/constants/whisky';

interface FilterProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  category?: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

const Filter: React.FC<FilterProps> = ({ keyword, setKeyword, category, setCategory }) => {
  return (
    <>
      <SearchField keyword={keyword} setKeyword={setKeyword} />
      <p className="mt-3 text-xl font-bold">Categories</p>
      <ul>
        {categories.map((c, i) => (
          <CategoryFilter key={i} c={c} category={category} setCategory={setCategory} />
        ))}
      </ul>
    </>
  );
};

export default Filter;
