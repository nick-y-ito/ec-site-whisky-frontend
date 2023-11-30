import clsx, { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return clsx(...inputs);
};
