import { Category } from '@/constants/whisky';
import React from 'react';

interface CategoryFilterProps {
  c: Category;
  category?: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ c, category, setCategory }) => {
  return (
    <li>
      <button
        className={`${c === category && 'text-red-500'}`}
        onClick={() => {
          setCategory(c);
        }}
      >
        {c}
      </button>
    </li>
  );
};

export default CategoryFilter;
