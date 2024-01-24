import { Whisky } from '@/data/whisky';
import { Filter, Sort } from '@/types/sortFilterTypes';

export const filterItemsList = (items: Whisky[], filter: Filter): Whisky[] => {
  const keyword = filter.keyword ? filter.keyword.toLowerCase() : '';
  const category = filter.category;
  return items.filter((item) => {
    return (
      (keyword ? item.name.toLowerCase().includes(keyword) : true) &&
      (category ? item.category === category : true)
    );
  });
};

export const sortItemsList = (items: Whisky[], sort: Sort): Whisky[] => {
  const { by, order } = sort;
  items.sort((a, b) => {
    if (by === 'name') {
      return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (by === 'price') {
      return order === 'asc' ? a.priceInCent - b.priceInCent : b.priceInCent - a.priceInCent;
    } else {
      return 0;
    }
  });
  return items;
};
