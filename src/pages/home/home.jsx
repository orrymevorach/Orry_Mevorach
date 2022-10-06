import React, { useContext, useRef } from 'react';
import Main from '@components/sections/main';
import About from '@components/sections/about';
import Technology from '@components/sections/technology';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import HamburgerMenu from '@components/shared/nav/hamburgerMenu';
import Portfolio from '@components/sections/portfolio';
import ParticlesContainer from '../../components/shared/particles/particles';
import Sidebar from '@components/shared/sidebar';
import { colors } from '@constants';
import Contact from '@components/sections/contact';

export default function Home() {
  const { isMobile } = useContext(ScreenWidthContext);
  const { pink, blue, spacePurple } = colors;
  const mainSectionRef = useRef(); // ref is used to hide sidebar on main section
  return (
    <div style={{ position: 'relative', backgroundColor: spacePurple }}>
      {isMobile && <HamburgerMenu />}
      <Sidebar mainSectionRef={mainSectionRef} />
      <ParticlesContainer color={blue} />
      <ParticlesContainer color={pink} />
      <Main mainSectionRef={mainSectionRef} />
      <div style={{ marginRight: '190px' }}>
        <About />
        <Portfolio />
        <Technology />
        <Contact />
      </div>
    </div>
  );
}
