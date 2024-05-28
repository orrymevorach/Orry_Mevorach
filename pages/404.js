import React, { useContext } from 'react';
import { ScreenWidthContext } from 'context/screenWidthContext';
import HamburgerMenu from 'components/shared/nav/hamburgerMenu';
import ParticlesContainer from 'components/shared/particles/particles';
import PageProviders from 'components/shared/page-providers';
import Head from 'components/shared/head';
import { colors } from 'utils/constants';

const Home = () => {
  const { isMobile } = useContext(ScreenWidthContext);
  return (
    <div style={{ position: 'relative', backgroundColor: colors.spacePurple }}>
      {isMobile && <HamburgerMenu />}
      <ParticlesContainer />
      <h1>Sorry, this page could not be found.</h1>
    </div>
  );
};

export default function App() {
  return (
    <PageProviders>
      <Head title="Page Not Found" />
      <Home />
    </PageProviders>
  );
}
