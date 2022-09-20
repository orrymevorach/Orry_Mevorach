import React, { useContext } from 'react';
import Main from '@components/sections/main';
import Contact from '@components/sections/contact';
import Skills from '@components/sections/skills';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import { NavContext } from '@root/context/navContext';
import HamburgerMenu from '@components/shared/nav/hamburgerMenu';
import Nav from '@components/shared/nav';
import Portfolio from '@components/sections/portfolio';
import ParticlesContainer from '../../components/shared/particles/particles';

export default function Home() {
  const { isMobile } = useContext(ScreenWidthContext);
  const { isNavShowing } = useContext(NavContext);
  const pink = '#FE2AB5';
  const blue = '#55d6ed';
  return (
    <div style={{ position: 'relative', backgroundColor: '#2f2f2f' }}>
      {isMobile && <HamburgerMenu />}
      {isNavShowing && <Nav />}
      <ParticlesContainer color={blue} />
      <ParticlesContainer color={pink} />
      <Main />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}
