import React, { useContext } from 'react';
import './hamburgerMenu.scss';
import { NavContext } from '@root/context/navContext';

export default function HamburgerMenu() {
  const { isNavShowing, setIsNavShowing } = useContext(NavContext);
  return (
    <button
      className="hamburger-menu"
      onClick={() => setIsNavShowing(!isNavShowing)}
    >
      <i className="fas fa-bars"></i>
    </button>
  );
}
