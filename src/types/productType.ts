/**
 * Types for category
 */
export const categories = ['scotch', 'bourbon', 'irish', 'canadian', 'japanese'] as const;
export type Category = (typeof categories)[number] & string;
// Type guard
export const isCategory = (str: string | null): str is Category =>
  categories.includes(str as Category);
