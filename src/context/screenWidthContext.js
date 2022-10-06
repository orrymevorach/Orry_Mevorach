import React, { useEffect, createContext, useState } from 'react';
import { debounce } from '@root/utils/debounce';

export const ScreenWidthContext = createContext('screenWidth');

export default function ScreenWidthContextProvider({ children }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isMobile: undefined,
    isSectionMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 850,
        isSectionMobile: window.innerWidth <= 650,
      });
    }

    window.addEventListener('resize', debounce(handleResize, 250));
    handleResize();

    return () =>
      window.removeEventListener('resize', debounce(handleResize, 250));
  }, []);

  return (
    <ScreenWidthContext.Provider value={windowSize}>
      {children}
    </ScreenWidthContext.Provider>
  );
}
