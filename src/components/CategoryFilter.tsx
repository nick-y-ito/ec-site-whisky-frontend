import { Category, categories } from '@/constants/whisky';

interface CategoryFilterProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  category?: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ category, setCategory }) => {
  return (
    <>
      <p className="mt-3 text-xl font-bold">Categories</p>
      <ul>
        {categories.map((c, i) => (
          <li key={i}>
            <button
              className={`w-full text-left ${c === category && 'text-red-500'}`}
              onClick={() => {
                setCategory(c);
              }}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryFilter;
