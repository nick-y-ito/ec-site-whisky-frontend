import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

interface SearchFieldProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchField: React.FC<SearchFieldProps> = ({ keyword, setKeyword }) => {
  return (
    <div className="h-[30px] border border-black flex items-center">
      <input
        className="h-full"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <HiOutlineMagnifyingGlass />
    </div>
  );
};

export default SearchField;
