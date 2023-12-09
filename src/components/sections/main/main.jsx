import React, { useContext } from 'react';
import Section from '@components/shared/section';
import './main.scss';
import { sectionsList } from '@components/shared/nav';
import BouncingArrow from '@components/shared/bouncing-arrow';
import SocialMediaIcons from '@components/shared/social-media-icons';
import { NavContext } from '@root/context/navContext';
import Nav from '@components/shared/nav';

export default function Main({ mainSectionRef }) {
  const { isNavShowing } = useContext(NavContext);
  const nextSection = sectionsList[1];
  return (
    <Section section="home">
      {isNavShowing && <Nav />}
      <SocialMediaIcons />
      <div className="content-container" ref={mainSectionRef}>
        <h1 className='hide'>Freelance web developer</h1>
        <h2 className="heading">Orry Mevorach</h2>
        <h3 className="job-title">I create digital experiences</h3>
        <BouncingArrow
          href={`#${nextSection}`}
          classNames="main-section-arrow"
        />
      </div>
    </Section>
  );
}
