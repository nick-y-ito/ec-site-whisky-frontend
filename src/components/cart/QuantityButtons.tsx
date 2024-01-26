import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

import { useAppDispatch } from '@/lib/redux/hooks';
import { decrement, increment, setCartItems } from '@/lib/redux/slices/cartSlice';
import { decrementCartItem, getCartItems, incrementCartItem } from '@/lib/apiClient/cartApiClient';
import { ReactNode } from 'react';

interface QuantityButtonsProps {
  productId: number;
  quantity: number;
}

export const QuantityButtons = ({ productId, quantity }: QuantityButtonsProps) => {
  const dispatch = useAppDispatch();

  const handleDecrement = async () => {
    try {
      dispatch(decrement({ productId }));
      await decrementCartItem(productId);
    } catch (error) {
      alert('Failed to update cart.');
      const cartItems = await getCartItems();
      dispatch(setCartItems({ cartItems }));
    }
  };

  const handleIncrement = async () => {
    try {
      dispatch(increment({ productId }));
      await incrementCartItem(productId);
    } catch (error) {
      alert('Failed to update cart.');
      const cartItems = await getCartItems();
      dispatch(setCartItems({ cartItems }));
    }
  };

  return (
    <div className="flex items-center">
      <QuantityButton onClick={() => handleDecrement()}>
        <FaMinus />
      </QuantityButton>
      <div className="w-8 text-center">{quantity}</div>
      <QuantityButton onClick={() => handleIncrement()}>
        <FaPlus />
      </QuantityButton>
    </div>
  );
};

interface QuantityButtonProps {
  children: ReactNode;
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
