export type Sort = 'nameAsc' | 'nameDesc' | 'priceAsc' | 'priceDesc' | undefined;

interface SortProps {
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}

type Category = {
  value: Sort;
  labe: string;
};

const categories: Category[] = [
  { value: 'nameAsc', labe: 'A → Z' },
  { value: 'nameDesc', labe: 'Z → A' },
  { value: 'priceAsc', labe: '$ → $$$' },
  { value: 'priceDesc', labe: '$$$ → $' },
];

const SortField: React.FC<SortProps> = ({ setSort }) => {
  const onSortChange = (val: Sort) => {
    setSort(val);
  };

  return (
    <>
      {categories.map((c, i) => (
        <div key={i}>
          <input
            className="mr-2"
            type="radio"
            name="sort"
            id={c.value}
            value={c.value}
            onChange={(e) => onSortChange(e.target.value as Sort)}
          />
          <label htmlFor={c.value}>{c.labe}</label>
        </div>
      ))}
    </>
  );
};

export default SortField;
