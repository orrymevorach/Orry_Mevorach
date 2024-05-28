import React, { useContext } from 'react';
import Section from 'components/shared/section';
import styles from './main.module.scss';
import BouncingArrow from 'components/shared/bouncing-arrow';
import SocialMediaIcons from 'components/shared/social-media-icons';
import { NavContext } from 'context/navContext';
import Nav from 'components/shared/nav';
import { sectionsList } from 'components/shared/nav';

export default function Main({ mainSectionRef }) {
  const { isNavShowing } = useContext(NavContext);
  const nextSection = sectionsList[1];
  return (
    <Section section="home" classNames={styles.home}>
      {isNavShowing && <Nav />}
      <SocialMediaIcons />
      <div className={styles['content-container']} ref={mainSectionRef}>
        <h1 className={styles.hide}>Freelance web developer</h1>
        <h2 className={styles.heading}>Orry Mevorach</h2>
        <h3 className={styles['job-title']}>I create digital experiences</h3>
        <BouncingArrow
          href={`#${nextSection}`}
          classNames={styles['main-section-arrow']}
        />
      </div>
    </Section>
  );
}
