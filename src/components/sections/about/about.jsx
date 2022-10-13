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
          lead roles. I enjoy working on large applications within a team
          environment as much as I enjoy owning the entire development cycle of
          a freelance project. My goal as a developer is to to deliver fast,
          attractive, and accessible websites, with clean code, ZERO bugs, and
          to always build on my skills in the process. I primarily build
          hand-coded websites using Javascript, but I love the power of CMS
          platforms and will leverage with them whenever an opportunity arises.
        </p>
        <p className="work-together">Let's build something together!</p>
        <div className="button-container">
          <Button
            classNames="about-buttons"
            href="https://docs.google.com/document/d/e/2PACX-1vQjM71HCH6g5ZGMHnZ2SIchVeEmmWPXI37GkfFVSvw2xBPJrXoM98vV1Xe-n86rt8Gdgezsjdh_jJ4X/pub"
            isNewPage
          >
            View Resume
          </Button>
          <Button classNames="about-buttons" href="#portfolio">
            View Portfolio
          </Button>
        </div>
      </div>
    </Section>
  );
}
