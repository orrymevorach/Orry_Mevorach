import React from 'react';
import ScreenWidthContextProvider from '@root/context/screenWidthContext';
import NavContextProvider from '@root/context/navContext';
import VisibleSectionProvider from '@root/context/visibleSectionContext';

export default function PageProviders({ children }) {
  return (
    <ScreenWidthContextProvider>
      <NavContextProvider>
        <VisibleSectionProvider>{children}</VisibleSectionProvider>
      </NavContextProvider>
    </ScreenWidthContextProvider>
  );
}
