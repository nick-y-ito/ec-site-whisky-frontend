import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

interface KeywordFilterProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const KeywordFilter: React.FC<KeywordFilterProps> = ({ keyword, setKeyword }) => {
  return (
    <div className="h-[35px] border border-black flex items-center relative">
      <input
        className="h-full w-full"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <HiOutlineMagnifyingGlass className="absolute right-2" />
    </div>
  );
};

export default KeywordFilter;
