'use client';

import { useAppDispatch } from '@/lib/redux/hooks';
import { increment, setCartItems } from '@/lib/redux/slices/cartSlice';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { getCartItems, incrementCartItem } from '@/lib/apiClient/cartApiClient';
import { Skeleton } from '@/components/ui/Skeleton';

interface CartIconProps {
  productId: number;
}

export const AddToCartButton = ({ productId }: CartIconProps) => {
  const [added, setAdded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      setAdded(false);
    }, 3000);
  }, [added]);

  const handleClick = async () => {
    setAdded(true);
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
    <button
      className={cn(
        'h-10 px-4 flex justify-center items-center rounded-xl',
        added ? 'border border-black bg-white text-black' : 'bg-black text-white hover:opacity-60',
      )}
      onClick={() => handleClick()}
      disabled={added}
    >
      {added ? (
        <div className="flex items-center gap-2">
          Added <FaCheck />
        </div>
      ) : (
        'Add to Cart'
      )}
    </button>
  );
};

export const AddToCartButtonSkeleton = () => {
  return <Skeleton className="h-10 rounded-xl" />;
};
