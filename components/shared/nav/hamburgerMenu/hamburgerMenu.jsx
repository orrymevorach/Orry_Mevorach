import React, { useContext } from 'react';
import './hamburgerMenu.module.scss';
import { NavContext } from 'context/navContext';

export default function HamburgerMenu() {
  const { isNavShowing, setIsNavShowing } = useContext(NavContext);
  return (
    <button
      className="hamburger-menu"
      onClick={() => setIsNavShowing(!isNavShowing)}
    >
      <div id="nav-icon" className={isNavShowing ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}
