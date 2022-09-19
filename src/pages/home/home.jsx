import React, { useContext } from 'react';
import About from '@components/sections/about';
import Main from '@components/sections/main';
import Skills from '@components/sections/skills';
import Portfolio from '@components/sections/portfolio/portfolio';
import Contact from '@components/sections/contact/contact';
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
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
    </>
  );
}
