import React, { useRef, useContext, useEffect } from 'react';
import styles from './portfolio-piece.module.scss';
import Button from 'components/shared/button';
import BouncingArrow from 'components/shared/bouncing-arrow/bouncing-arrow';
import Section from '../../../shared/section/section';
import clsx from 'clsx';
import useIsVisible from 'hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from 'context/visibleSectionContext';
import { ScreenWidthContext } from 'context/screenWidthContext';

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
    ? styles.textContainerLeft
    : styles.textContainerRight;
  const textContainerAnimationClass = isOdd ? 'fade-right' : 'fade-left';
  const imageContainerAnimationClass = isOdd ? 'fade-left' : 'fade-right';
  const buttonColorClass = isOdd ? 'pink-button' : '';
  const mobileAnimationClass = 'fade-up';

  useEffect(() => {
    if (isVisible) setSectionInViewport(title);
  }, [isVisible, setSectionInViewport, title]);

  return (
    <Section section={title} isFullVerticalHeight={!!isDesktop}>
      <div
        className={clsx(styles['portfolio-piece'], textContainerPositionClass)}
        data-aos={!isDesktop ? mobileAnimationClass : ''}
        data-aos-easing="ease-in-sine"
      >
        <div
          className={styles['text-container']}
          data-aos={isDesktop && textContainerAnimationClass}
          data-aos-easing="ease-in-sine"
          ref={ref}
        >
          {technology.length !== 0 && (
            <div className={styles['technology-container']}>
              {technology.map(tech => {
                return (
                  <p key={tech} className={styles['technology-item']}>
                    {tech}
                  </p>
                );
              })}
            </div>
          )}
          <p className={styles['website-name']}>{title}</p>
          <p className={styles['website-description']}>{description}</p>
          <div className={styles.buttonContainer}>
            <Button
              href={href}
              classNames={styles.buttonColorClass}
              isNewPage={true}
            >
              Live site
            </Button>
          </div>
        </div>
        <div
          className={styles['image-container']}
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
