import React, { useContext } from 'react';
import Section from '@components/shared/section';
import './main.scss';
import Particles from './particles';

export default function Main() {
  return (
    <Section section="home">
      <div className="content-container">
        <div className="text-container">
          <h1 className="heading">Orry Mevorach</h1>
          <h3 className="job-title">Front End Web Developer</h3>
        </div>
        <a href="#about" className="chevron-link">
          <i className="fas fa-chevron-down"></i>
        </a>
        <Particles classNames="home-particles" />
      </div>
    </Section>
  );
}
