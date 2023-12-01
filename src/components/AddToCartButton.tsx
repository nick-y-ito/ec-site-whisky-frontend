import { useAppDispatch } from '@/lib/redux/hooks';
import { increment } from '@/lib/redux/slices/cartSlice';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface CartIconProps {
  itemId: number;
}

export const AddToCartButton = ({ itemId }: CartIconProps) => {
  const [added, setAdded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      setAdded(false);
    }, 3000);
  }, [added]);

  return (
    <button
      className={cn(
        'h-10 p-4 flex justify-center items-center rounded-xl bg-black text-white',
        added ? 'border border-black bg-white text-black' : 'hover:opacity-60',
      )}
      onClick={() => {
        dispatch(increment({ itemId: itemId }));
        setAdded(true);
      }}
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
