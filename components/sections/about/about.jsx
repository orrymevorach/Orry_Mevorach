import React, { useRef, useEffect, useContext } from 'react';
import Section from 'components/shared/section';
import styles from './about.module.scss';
import Button from 'components/shared/button';
import useIsVisible from 'hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from 'context/visibleSectionContext';
import { s3 } from 'utils/constants';
import { ScreenWidthContext } from 'context/screenWidthContext';

export default function About() {
  const { isDesktop } = useContext(ScreenWidthContext);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);
  useEffect(() => {
    if (isVisible) setSectionInViewport('about');
  }, [isVisible, setSectionInViewport]);

  const currentYear = new Date().getFullYear();
  const startYear = 2018;
  const yearsOfExperience = currentYear - startYear;
  return (
    <Section
      section="about"
      isFullVerticalHeight={!isDesktop ? false : true}
      classNames={styles.about}
    >
      <div className={styles['image-container']}>
        <img src={`${s3}/skateboard.png`} alt="" />
      </div>
      <div className={styles.textContainer} ref={ref}>
        <h2 className={styles.title}>Hey, I'm Orry!</h2>
        <p>
          I am a web developer based in Toronto, Canada. I have{' '}
          {yearsOfExperience}+ years of experience in the industry, working in
          full-time, freelance, and team lead roles. I enjoy working on large
          applications within a team environment as much as I enjoy owning the
          entire development cycle of a freelance project. My goal as a
          developer is to to deliver fast, attractive, and accessible websites,
          with clean and scalable code, no bugs, and to always build on my
          skills in the process. I build hand-coded websites using Javascript,
          which means every website I build is 100% customizable.
        </p>
        <p className={styles['work-together']}>Let's work together.</p>
        <div className={styles['button-container']}>
          <Button
            classNames={styles['about-buttons']}
            href="https://docs.google.com/document/d/e/2PACX-1vQjM71HCH6g5ZGMHnZ2SIchVeEmmWPXI37GkfFVSvw2xBPJrXoM98vV1Xe-n86rt8Gdgezsjdh_jJ4X/pub"
            isNewPage
          >
            View Resume
          </Button>
          <Button classNames={styles['about-buttons']} href="#portfolio">
            View Portfolio
          </Button>
        </div>
      </div>
    </Section>
  );
}
