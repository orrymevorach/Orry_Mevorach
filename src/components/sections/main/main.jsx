import React, { useContext } from 'react';
import Section from '@components/shared/section';
import './main.scss';
import { sectionsList } from '@components/shared/nav';
import BouncingArrow from '@components/shared/bouncing-arrow';

export default function Main() {
  const nextSection = sectionsList[1];
  return (
    <Section section="home">
      <div className="content-container">
        <div className="text-container">
          <h1 className="heading">Orry Mevorach</h1>
          <h3 className="job-title">I create digital experiences</h3>
        </div>
        <BouncingArrow href={`#${nextSection}`} />
      </div>
    </Section>
  );
}
