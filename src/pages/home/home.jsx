import React, { useContext, useRef } from 'react';
import Main from '@components/sections/main';
import Contact from '@components/sections/contact';
import Skills from '@components/sections/skills';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import { NavContext } from '@root/context/navContext';
import HamburgerMenu from '@components/shared/nav/hamburgerMenu';
import Nav from '@components/shared/nav';
import Portfolio from '@components/sections/portfolio';
import ParticlesContainer from '../../components/shared/particles/particles';
import Sidebar from '@components/shared/sidebar';

export default function Home() {
  const { isMobile } = useContext(ScreenWidthContext);
  const { isNavShowing } = useContext(NavContext);
  const pink = '#ff8fd8';
  const blue = '#5CCCF8';
  const mainSectionRef = useRef(); // ref is used to hide sidebar on main section
  return (
    <div style={{ position: 'relative', backgroundColor: '#140E1A' }}>
      {isMobile && <HamburgerMenu />}
      {isNavShowing && <Nav />}
      <Sidebar mainSectionRef={mainSectionRef} />
      <ParticlesContainer color={blue} />
      <ParticlesContainer color={pink} />
      <Main mainSectionRef={mainSectionRef} />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}
