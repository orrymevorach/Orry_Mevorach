import React, { useContext } from 'react';
import Nav from '@components/shared/nav';
import Sidebar from '@components/shared/sidebar';
import './section.scss';
import { ScreenWidthContext } from '@root/context/screenWidthContext';

export default function Section({
  children,
  classNames,
  id,
  innerContainerClassNames,
}) {
  const { isMobile } = useContext(ScreenWidthContext);
  return (
    <section className={classNames} id={id}>
      <div className={innerContainerClassNames}>
        {!isMobile && <Nav />}
        {children}
      </div>
      <Sidebar />
    </section>
  );
}
