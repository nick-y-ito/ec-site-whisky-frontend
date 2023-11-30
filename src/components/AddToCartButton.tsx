import { useAppDispatch } from '@/lib/redux/hooks';
import { increment } from '@/lib/redux/slices/cartSlice';

interface CartIconProps {
  itemId: number;
}

export const AddToCartButton = ({ itemId }: CartIconProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="h-10 p-4 flex justify-center items-center border-2 bg-black hover:opacity-60 text-white rounded-xl"
      onClick={() => dispatch(increment({ itemId: itemId }))}
    >
      Add to Cart
    </button>
  );
};
