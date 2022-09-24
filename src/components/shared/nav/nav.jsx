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
  portfolio: {
    left: '105px',
    width: '84px',
  },
  skills: {
    left: '229px',
    width: '51px',
  },
  contact: {
    left: '318px',
    width: '69px',
  },
};

export const sectionsList = Object.keys(sections);

export default function Nav({ section }) {
  const { isMobile } = useContext(ScreenWidthContext);
  const { setIsNavShowing } = useContext(NavContext);

  const navLineRef = useRef(section);
  function handleMouseOver(e) {
    if (!isMobile) {
      const innerText = e.target.innerText.toLowerCase();
      navLineRef.current.style.left = sections[innerText]?.left;
      navLineRef.current.style.width = sections[innerText]?.width;
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
        <div ref={navLineRef} className={clsx('nav-line', section)}></div>
        {sectionsList.map(section => (
          <ListItem section={section} key={section} />
        ))}
      </ul>
    </nav>
  );
}
