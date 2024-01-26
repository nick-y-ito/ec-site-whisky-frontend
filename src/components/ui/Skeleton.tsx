import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('animate-pulse rounded-md bg-gray-300', className)} {...props} />;
};
