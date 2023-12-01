'use client';

import { CartItemRow } from '@/components/cart/CartItemRow';
import { useAppSelector } from '@/lib/redux/hooks';
import { cn } from '@/lib/utils';

interface CartProps {}

export const Cart = ({}: CartProps) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const itemList = useAppSelector((state) => state.itemList.items);
  const totalPriceInCent = cartItems.reduce((acc, item) => {
    const price = itemList.find((i) => i.id === item.id)?.priceInCent;
    return price ? acc + price * item.quantity : acc;
  }, 0);

  return (
    <>
      <div className="p-3">
        <h2 className="text-2xl font-bold mb-3">Shopping Cart</h2>
        <div>
          {cartItems.map((cartItem) => (
            <CartItemRow key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <div
        className={cn(
          'fixed bottom-0 w-full p-5 rounded-3xl shadow-[0_-15px_50px_-12px_rgb(0,0,0,0.25)]',
        )}
      >
        <div className="mb-3 flex justify-between text-xl font-bold">
          <div className="flex items-center gap-1">
            Total <span className="font-normal text-lg">({totalQuantity} items)</span>
          </div>
          <div className="">$ {totalPriceInCent / 100}</div>
        </div>
        <button className="py-4 w-full bg-black text-white rounded-2xl text-xl font-bold">
          Checkout
        </button>
      </div>
    </>
  );
};
