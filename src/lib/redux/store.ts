import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSlice';
import { filterReducer } from '@/lib/redux/slices/itemListSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    itemList: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
