import { Sort } from '@/components';
import { Category } from '@/constants/whisky';

interface ResetBtnProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}

const ResetBtn: React.FC<ResetBtnProps> = ({ setKeyword, setCategory, setSort }) => {
  return (
    <div className="my-3 flex justify-center">
      <button
        className="w-[100px] border border-gray-500 rounded-full"
        onClick={() => {
          setKeyword('');
          setCategory(undefined);
          setSort('nameAsc');
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ResetBtn;
