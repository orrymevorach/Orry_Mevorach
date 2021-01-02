import React from 'react';
import Section from '@components/shared/section';
import './main.scss';
import Particles from './particles';

export default function Main() {
  return (
    <Section
      classNames="section-general section-home"
      innerContainerClassNames="section-container section-home-container"
      id="home"
    >
      <div className="content-container">
        <h1>Orry Mevorach</h1>
        <h3>Front End Web Developer</h3>
      </div>
      <Particles />
    </Section>
  );
}
