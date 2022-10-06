import React, { useRef, useContext } from 'react';
import './nav.scss';
import clsx from 'clsx';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import { NavContext } from '@root/context/navContext';

const sections = {
  home: {
    left: '20px',
    width: '45px',
  },
  about: {},
  portfolio: {},
  technology: {},
  contact: {},
};

export const sectionsList = Object.keys(sections);

export default function Nav({ section }) {
  const { isMobile } = useContext(ScreenWidthContext);
  const { setIsNavShowing } = useContext(NavContext);

  const navLineRef = useRef(section);
  function handleMouseOver(e) {
    const isAnchorElement = e?.target?.tagName === 'A';
    if (!isMobile && isAnchorElement) {
      navLineRef.current.style.left = `${e.target.offsetLeft}px`;
      navLineRef.current.style.width = `${e.target.offsetWidth}px`;
    }
  }
  function handleMouseLeave() {
    if (!isMobile) {
      navLineRef.current.style.left = sections.home.left;
      navLineRef.current.style.width = sections.home.width;
    }
  }
  function handleClick() {
    if (isMobile) {
      setIsNavShowing(false);
    }
  }
  const ListItem = ({ section }) => (
    <li onMouseOver={e => handleMouseOver(e)} onMouseLeave={handleMouseLeave}>
      <a href={`#${section}`} onClick={handleClick}>
        {section}
      </a>
    </li>
  );

  return (
    <nav className="navigation">
      <ul>
        {!isMobile && (
          <div ref={navLineRef} className={clsx('nav-line', section)}></div>
        )}
        {sectionsList.map(section => (
          <ListItem section={section} key={section} />
        ))}
      </ul>
    </nav>
  );
}
