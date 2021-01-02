import React, { useContext } from 'react';
import Nav from '@components/shared/nav';
import Sidebar from '@components/shared/sidebar';
import './section.scss';
import HamburgerMenu from '@components/shared/nav/hamburgerMenu';
import { ScreenWidthContext } from '@root/context/screenWidthContext';

export default function Section({ children, classNames, id }) {
  const { isMobile } = useContext(ScreenWidthContext);
  return (
    <section className={classNames} id={id}>
      {children}
      {!isMobile && <Nav />}
      <Sidebar />
    </section>
  );
}
