import React, { useContext, useRef } from 'react';
import Main from '@components/sections/main';
import Contact from '@components/sections/contact';
import Technology from '@components/sections/technology';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import HamburgerMenu from '@components/shared/nav/hamburgerMenu';
import Portfolio from '@components/sections/portfolio';
import ParticlesContainer from '../../components/shared/particles/particles';
import Sidebar from '@components/shared/sidebar';

export default function Home() {
  const { isMobile } = useContext(ScreenWidthContext);
  const pink = '#ff8fd8';
  const blue = '#5CCCF8';
  const mainSectionRef = useRef(); // ref is used to hide sidebar on main section
  return (
    <div style={{ position: 'relative', backgroundColor: '#140E1A' }}>
      {isMobile && <HamburgerMenu />}
      <Sidebar mainSectionRef={mainSectionRef} />
      <ParticlesContainer color={blue} />
      <ParticlesContainer color={pink} />
      <Main mainSectionRef={mainSectionRef} />
      <div style={{ marginRight: '190px' }}>
        <Portfolio />
        <Technology />
        <Contact />
      </div>
    </div>
  );
}
