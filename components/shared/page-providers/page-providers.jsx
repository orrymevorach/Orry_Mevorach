import React from 'react';
import ScreenWidthContextProvider from 'context/screenWidthContext';
import NavContextProvider from 'context/navContext';
import VisibleSectionProvider from 'context/visibleSectionContext';

export default function PageProviders({ children }) {
  return (
    <ScreenWidthContextProvider>
      <NavContextProvider>
        <VisibleSectionProvider>{children}</VisibleSectionProvider>
      </NavContextProvider>
    </ScreenWidthContextProvider>
  );
}
