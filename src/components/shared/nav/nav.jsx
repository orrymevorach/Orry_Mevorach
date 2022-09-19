import React, { useRef, useContext } from 'react';
import './nav.scss';
import clsx from 'clsx';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import { NavContext } from '@root/context/navContext';

export default function Nav({ section }) {
  const { isMobile } = useContext(ScreenWidthContext);
  const { setIsNavShowing } = useContext(NavContext);
  const sections = {
    home: {
      startingLeftPosition: '29px',
    },
    about: {
      startingLeftPosition: '95px',
    },
    skills: {
      startingLeftPosition: '165px',
    },
    // portfolio: {
    //   startingLeftPosition: '247px',
    // },
    contact: {
      startingLeftPosition: '237px',
    },
  };
  const sectionsList = Object.keys(sections);

  const navLineRef = useRef(section);
  function handleMouseOver(e) {
    if (!isMobile) {
      const innerText = e.target.innerText.toLowerCase();
      navLineRef.current.style.transform = 'rotate(90deg)';
      navLineRef.current.style.left = sections[innerText]?.startingLeftPosition;
    }
  }
  function handleMouseLeave() {
    if (!isMobile) {
      navLineRef.current.style.transform = 'rotate(0deg)';
      navLineRef.current.style.left = sections[section].startingLeftPosition;
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
      <div ref={navLineRef} className={clsx('nav-line', section)}></div>
      <ul>
        {sectionsList.map(section => (
          <ListItem section={section} key={section} />
        ))}
      </ul>
    </nav>
  );
}
