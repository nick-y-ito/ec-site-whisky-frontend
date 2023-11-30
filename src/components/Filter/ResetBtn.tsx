'use client';

import { useAppDispatch } from '@/lib/redux/hooks';
import { reset } from '@/lib/redux/slices/itemListSlice';

export const ResetBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="my-3 flex justify-center">
      <button
        className="w-[100px] border border-black rounded-full hover:text-white hover:bg-black"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};
