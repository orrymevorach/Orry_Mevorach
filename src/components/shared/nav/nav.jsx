import React, { useRef } from 'react';
import './nav.scss';
import clsx from 'clsx';

export default function Nav({ section }) {
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
    portfolio: {
      startingLeftPosition: '247px',
    },
    contact: {
      startingLeftPosition: '343px',
    },
  };
  const sectionsList = Object.keys(sections);

  const navLineRef = useRef(section);
  function handleMouseOver(e) {
    const innerText = e.target.innerText.toLowerCase();
    navLineRef.current.style.transform = 'rotate(90deg)';
    navLineRef.current.style.left = sections[innerText]?.startingLeftPosition;
  }
  function handleMouseLeave() {
    navLineRef.current.style.transform = 'rotate(0deg)';
    navLineRef.current.style.left = sections[section].startingLeftPosition;
  }
  const ListItem = ({ section }) => (
    <li onMouseOver={e => handleMouseOver(e)} onMouseLeave={handleMouseLeave}>
      <a href={`#${section}`}>{section}</a>
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
