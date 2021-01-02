import React from 'react';
import './nav.scss';

export default function Nav() {
  return (
    <nav className="navigation">
      <ul>
        <li className="home-link">
          <a href="#home">Home</a>
        </li>
        <li className="about-link">
          <a href="#about">About</a>
        </li>
        <li className="skills-link">
          <a href="#skills">Skills</a>
        </li>
        <li className="portfolio-link">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="contact-link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
