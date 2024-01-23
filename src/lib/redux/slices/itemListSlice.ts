import { Whisky } from '@/data/whisky';
import { filterItemsList, sortItemsList } from '@/lib/filter';
import { Category } from '@/types/productType';
import { Filter, Sort, SortBy, SortOrder } from '@/types/sortFilterTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ItemListState {
  items: Whisky[];
  filteredItems: Whisky[];
  filter: Filter;
  sort: Sort;
}

const initialState: ItemListState = {
  items: [],
  filteredItems: [],
  filter: {
    keyword: '',
    category: undefined,
  },
  sort: {
    by: 'name',
    order: 'asc',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setItems(state, action: PayloadAction<Whisky[]>) {
      state.items = [...action.payload].sort((a, b) => a.name.localeCompare(b.name));
      state.filteredItems = [...state.items];
    },
    filterItems: (state, action: PayloadAction<{ keyword?: string; category?: Category }>) => {
      const { keyword, category } = action.payload;
      state.filter = { keyword, category };
      const filtered = filterItemsList(state.items, state.filter);
      state.filteredItems = sortItemsList(filtered, state.sort);
    },
    sortItems(state, action: PayloadAction<{ by: SortBy; order: SortOrder }>) {
      state.sort = action.payload;
      state.filteredItems = sortItemsList(state.filteredItems, state.sort);
    },
    reset: (state) => {
      state.filter = initialState.filter;
      state.sort = initialState.sort;
      state.filteredItems = [...state.items].sort((a, b) => a.name.localeCompare(b.name));
    },
  },
});

export const { setItems, filterItems, sortItems, reset } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
