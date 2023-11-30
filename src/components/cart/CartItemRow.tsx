'use client';

import { whiskies, Whisky } from '@/data/whisky';
import { useAppDispatch } from '@/lib/redux/hooks';
import { CartItem } from '@/lib/redux/slices/cartSlice';
import { decrement, increment } from '@/lib/redux/slices/cartSlice';

interface CartItemRowProps {
  cartItem: CartItem;
}

export const CartItemRow = ({ cartItem }: CartItemRowProps) => {
  const item: Whisky | undefined = whiskies.find((w) => w.id === cartItem.id);
  const dispatch = useAppDispatch();

  return (
    item && (
      <tr className="w-full px-10 border border-black">
        <th className='w-10'>{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td className="flex items-center">
          <button
            className="p-2"
            onClick={() => {
              dispatch(decrement({ itemId: item.id }));
            }}
          >
            -
          </button>
          <div>{cartItem.quantity}</div>
          <button
            className="p-2"
            onClick={() => {
              dispatch(increment({ itemId: item.id }));
            }}
          >
            +
          </button>
        </td>
      </tr>
    )
  );
};
