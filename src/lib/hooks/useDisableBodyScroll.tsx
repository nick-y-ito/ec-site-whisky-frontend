import { useEffect } from 'react';

const CLASS_NAME = 'overflow-hidden';

export const useDisableBodyScroll = (active: boolean): void => {
  useEffect(() => {
    const classList = document.body.classList;
    if (active) {
      classList.add(CLASS_NAME);
    } else {
      classList.remove(CLASS_NAME);
    }
    return () => {
      classList.remove(CLASS_NAME);
    };
  }, [active]);
};
