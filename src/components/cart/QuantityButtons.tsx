import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

import { useAppDispatch } from '@/lib/redux/hooks';
import { decrement, increment } from '@/lib/redux/slices/cartSlice';

interface QuantityButtonsProps {
  itemId: number;
  quantity: number;
}

export const QuantityButtons = ({ itemId, quantity }: QuantityButtonsProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center">
      <QuantityButton
        onClick={() => {
          dispatch(decrement({ itemId: itemId }));
        }}
      >
        <FaMinus />
      </QuantityButton>
      <div className="w-8 text-center">{quantity}</div>
      <QuantityButton
        onClick={() => {
          dispatch(increment({ itemId: itemId }));
        }}
      >
        <FaPlus />
      </QuantityButton>
    </div>
  );
};

interface QuantityButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const QuantityButton = ({ children, onClick }: QuantityButtonProps) => {
  return (
    <button
      className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-lg text-xs"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
