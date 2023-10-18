export type Sort = 'nameAsc' | 'nameDesc' | 'priceAsc' | 'priceDesc' | undefined;

interface SortProps {
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}

type SortType = {
  value: Sort;
  labe: string;
};

const sortTypes: SortType[] = [
  { value: 'nameAsc', labe: 'A → Z' },
  { value: 'nameDesc', labe: 'Z → A' },
  { value: 'priceAsc', labe: '$ → $$$' },
  { value: 'priceDesc', labe: '$$$ → $' },
];

const SortField: React.FC<SortProps> = ({ sort, setSort }) => {
  const onSortChange = (val: Sort) => {
    setSort(val);
  };

  return (
    <>
      <p className="mt-3 text-xl font-bold">Sort</p>
      <ul>
        {sortTypes.map((c, i) => (
          <li key={i}>
            <button
              className={`w-full text-left mr-2 hover:opacity-50 ${
                c.value === sort && 'text-red-500'
              }`}
              onClick={() => onSortChange(c.value)}
            >
              {' '}
              {c.labe}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SortField;
