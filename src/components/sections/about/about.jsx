import React, { useRef, useEffect, useContext } from 'react';
import Section from '@components/shared/section';
import './about.scss';
import Button from '@components/shared/button';
import useIsVisible from '@root/hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from '@root/context/visibleSectionContext';
import { s3 } from '@utils/constants';
import { ScreenWidthContext } from '@root/context/screenWidthContext';

export default function About() {
  const { isDesktop } = useContext(ScreenWidthContext);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);
  useEffect(() => {
    if (isVisible) setSectionInViewport('about');
  }, [isVisible, setSectionInViewport]);
  return (
    <Section section="about" isFullVerticalHeight={!isDesktop ? false : true}>
      <div className="image-container">
        <img src={`${s3}/skateboard.png`} alt="" />
      </div>
      <div className="textContainer" ref={ref}>
        <h2 className="title">Hey, I'm Orry!</h2>
        <p>
          I am a web developer based in Toronto, Canada. I have 4+ years of
          experience in the industry, working in full-time, freelance, and team
          lead roles. I enjoy building microsites from scratch as much as I
          enjoy building large applications to scale in a team environment. My
          most notable role was with Loblaw Digital, where I spent 3.5 years
          working on the Shoppers Drug Mart e-commerce application.
        </p>
        <p className="work-together">Let's build something together!</p>
        <div className="button-container">
          <Button classNames="about-buttons">View Resume</Button>
          <Button classNames="about-buttons" href="#portfolio">
            View My Portfolio
          </Button>
        </div>
      </div>
    </Section>
  );
}
