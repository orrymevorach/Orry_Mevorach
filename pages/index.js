import React, { useContext, useRef, useEffect } from 'react';
import Main from 'components/sections/main';
import About from 'components/sections/about';
import Technology from 'components/sections/technology';
import { ScreenWidthContext } from 'context/screenWidthContext';
import HamburgerMenu from 'components/shared/nav/hamburgerMenu';
import Portfolio from 'components/sections/portfolio';
import ParticlesContainer from 'components/shared/particles/particles';
import Sidebar from 'components/shared/sidebar';
import Contact from 'components/sections/contact';
import PageProviders from 'components/shared/page-providers';
import Head from 'components/shared/head';
// Animation library init
import AOS from 'aos';
import 'aos/dist/aos.css';
import { colors } from 'utils/constants';

const Home = () => {
  const { isMobile } = useContext(ScreenWidthContext);
  const mainSectionRef = useRef(); // ref is used to hide sidebar on main section
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ position: 'relative', backgroundColor: colors.spacePurple }}>
      {isMobile && <HamburgerMenu />}
      {!isMobile && <Sidebar mainSectionRef={mainSectionRef} />}
      <ParticlesContainer />
      <Main mainSectionRef={mainSectionRef} />/
      <div style={!isMobile ? { marginRight: '190px' } : {}}>
        <About />
        <Portfolio />
        {/* <Technology /> */}
        <Contact />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <PageProviders>
      <Head />
      <Home />
    </PageProviders>
  );
}
