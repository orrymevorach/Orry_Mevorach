import React, { useContext } from 'react';
import Main from '@components/sections/main';
import Contact from '@components/sections/contact';
import Skills from '@components/sections/skills';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import { NavContext } from '@root/context/navContext';
import HamburgerMenu from '@components/shared/nav/hamburgerMenu';
import Nav from '@components/shared/nav';

export default function Home() {
  const { isMobile } = useContext(ScreenWidthContext);
  const { isNavShowing } = useContext(NavContext);
  return (
    <>
      {isMobile && <HamburgerMenu />}
      {isNavShowing && <Nav />}
      <Main />
      <Skills />
      <Contact />
    </>
  );
}
