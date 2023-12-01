'use client';

import { useEffect } from 'react';
import { getCartFromCookie } from '@/lib/cookies';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setCartItems } from '@/lib/redux/slices/cartSlice';

export const CartData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const initialCartItems = getCartFromCookie();
    dispatch(setCartItems({ cartItems: initialCartItems }));
  }, [dispatch]);
  return <></>;
};
