import React, { useState, createContext } from 'react';

export const NavContext = createContext('nav');

export default function NavContextProvider({ children }) {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <NavContext.Provider value={{ isNavShowing, setIsNavShowing }}>
      {children}
    </NavContext.Provider>
  );
}
