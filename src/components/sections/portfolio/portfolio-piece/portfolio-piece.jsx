import React, { useRef, useContext, useEffect } from 'react';
import './portfolio-piece.scss';
import Button from '@components/shared/button';
import BouncingArrow from '@components/shared/bouncing-arrow/bouncing-arrow';
import Section from '../../../shared/section/section';
import clsx from 'clsx';
import useIsVisible from '@root/hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from '@root/context/visibleSectionContext';
import { ScreenWidthContext } from '@root/context/screenWidthContext';

function checkIsOdd(num) {
  return num % 2;
}

export default function PortfolioPiece({
  src,
  alt,
  href,
  title,
  description = '',
  technology = [],
  nextSectionHref,
  index,
}) {
  const { isDesktop } = useContext(ScreenWidthContext);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);

  const isOdd = checkIsOdd(index + 1);
  const textContainerPositionClass = isOdd
    ? 'textContainerLeft'
    : 'textContainerRight';
  const textContainerAnimationClass = isOdd ? 'fade-right' : 'fade-left';
  const imageContainerAnimationClass = isOdd ? 'fade-left' : 'fade-right';
  const buttonColorClass = isOdd ? 'pink-button' : '';
  const mobileAnimationClass = 'fade-up';

  useEffect(() => {
    if (isVisible) setSectionInViewport(title);
  }, [isVisible, setSectionInViewport, title]);

  return (
    <Section section={title} isFullVerticalHeight={isDesktop}>
      <div
        className={clsx('portfolio-piece', textContainerPositionClass)}
        data-aos={!isDesktop ? mobileAnimationClass : ''}
        data-aos-easing="ease-in-sine"
      >
        <div
          className="text-container"
          data-aos={isDesktop && textContainerAnimationClass}
          data-aos-easing="ease-in-sine"
          ref={ref}
        >
          {technology.length !== 0 && (
            <div className="technology-container">
              {technology.map(tech => {
                return (
                  <p key={tech} className="technology-item">
                    {tech}
                  </p>
                );
              })}
            </div>
          )}
          <p className="website-name">{title}</p>
          <p className="website-description">{description}</p>
          <div className="buttonContainer">
            <Button href={href} classNames={buttonColorClass} isNewPage={true}>
              Live site
            </Button>
          </div>
        </div>
        <div
          className="image-container"
          data-aos={isDesktop && imageContainerAnimationClass}
          data-aos-easing="ease-in-sine"
        >
          <img src={src} alt={alt} />
        </div>
      </div>
      {nextSectionHref && isDesktop && <BouncingArrow href={nextSectionHref} />}
    </Section>
  );
}
