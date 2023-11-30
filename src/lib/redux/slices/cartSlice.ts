import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ itemId: number }>) => {
      const targetItem = state.items.find((item) => item.id === action.payload.itemId);
      if (targetItem) {
        targetItem.quantity += 1;
        state.totalQuantity += 1;
      } else {
        state.items.push({ id: action.payload.itemId, quantity: 1 });
        state.totalQuantity += 1;
      }
      console.log({ state: JSON.stringify(state) });
    },
    decrement: (state, action: PayloadAction<{ itemId: number }>) => {
      const targetItem = state.items.find((item) => item.id === action.payload.itemId);
      if (!targetItem) return;
      if (targetItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.itemId);
      } else {
        targetItem.quantity -= 1;
      }
      state.totalQuantity -= 1;
      console.log({ state: JSON.stringify(state) });
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
