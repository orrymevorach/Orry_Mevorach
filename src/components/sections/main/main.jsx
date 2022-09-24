import React from 'react';
import Section from '@components/shared/section';
import './main.scss';
import { sectionsList } from '@components/shared/nav';
import BouncingArrow from '@components/shared/bouncing-arrow';
import SocialMediaIcons from '@components/shared/social-media-icons';

export default function Main({ mainSectionRef }) {
  const nextSection = sectionsList[1];
  return (
    <Section section="home">
      <SocialMediaIcons />
      <div className="content-container" ref={mainSectionRef}>
        <div className="text-container">
          <h1 className="heading">Orry Mevorach</h1>
          <h3 className="job-title">Creator of digital experiences</h3>
        </div>
        <BouncingArrow href={`#${nextSection}`} />
      </div>
    </Section>
  );
}
