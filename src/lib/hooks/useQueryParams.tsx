import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const replaceParams = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  return { params, pathname, replaceParams };
};
