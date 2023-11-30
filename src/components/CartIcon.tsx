'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import Link from 'next/link';
import { IoCart } from 'react-icons/io5';

export const CartIcon = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <Link
      href="/cart"
      className="top-0 right-0 w-14 h-full flex items-center justify-center"
    >
      <IoCart className="text-white w-6 h-6" />
      {totalQuantity > 0 && (
        <div className="absolute top-2 right-6 rounded-full text-xs bg-red-500 text-white h-5 w-5 flex items-center justify-center">
          {totalQuantity > 9 ? '9+' : totalQuantity}
        </div>
      )}
    </Link>
  );
};
