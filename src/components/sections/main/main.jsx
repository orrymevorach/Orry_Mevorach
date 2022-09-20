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
          <h3 className="job-title">I create digital experiences</h3>
        </div>
        <a href="#skills" className="chevron-link">
          <i className="fas fa-chevron-down"></i>
        </a>
        <Particles fullPage={true} color="#55d6ed" />
        <Particles fullPage={true} color="#FE2AB5" />
      </div>
    </Section>
  );
}
