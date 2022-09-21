import React, { useState, createContext, useContext, useEffect } from 'react';
import { ScreenWidthContext } from '@root/context/screenWidthContext';

export const NavContext = createContext('nav');

export default function NavContextProvider({ children }) {
  const { isMobile } = useContext(ScreenWidthContext);
  const [isNavShowing, setIsNavShowing] = useState();
  useEffect(() => {
    setIsNavShowing(isMobile ? false : true);
  }, [isMobile]);

  return (
    <NavContext.Provider value={{ isNavShowing, setIsNavShowing }}>
      {children}
    </NavContext.Provider>
  );
}
