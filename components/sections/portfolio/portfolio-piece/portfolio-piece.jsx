import React, { useRef, useContext, useEffect } from 'react';
import styles from './portfolio-piece.module.scss';
import Button from 'components/shared/button';
import BouncingArrow from 'components/shared/bouncing-arrow/bouncing-arrow';
import Section from '../../../shared/section/section';
import clsx from 'clsx';
import useIsVisible from 'hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from 'context/visibleSectionContext';
import { ScreenWidthContext } from 'context/screenWidthContext';
import RichText from 'components/shared/rich-text/rich-text';
import Image from 'next/image';
import { checkIsOdd, mapIndexToMonth } from 'utils/utils';

export default function PortfolioPiece({
  url,
  title,
  description = '',
  technologyList = [],
  nextSectionHref,
  index,
  image,
  lastUpdate,
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
  const buttonColorClass = isOdd ? styles['pink-button'] : '';
  const mobileAnimationClass = 'fade-up';

  useEffect(() => {
    if (isVisible) setSectionInViewport(title);
  }, [isVisible, setSectionInViewport, title]);

  const projectStatus = lastUpdate ? 'Complete' : 'In Progress';
  const dateOfLastUpdate = new Date(lastUpdate);
  const month = mapIndexToMonth[dateOfLastUpdate.getMonth()];
  const day = dateOfLastUpdate.getDate();
  const year = dateOfLastUpdate.getFullYear();

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
          {technologyList.length !== 0 && (
            <div className={styles['technology-container']}>
              {technologyList.map(tech => {
                return (
                  <p key={tech} className={styles['technology-item']}>
                    {tech}
                  </p>
                );
              })}
            </div>
          )}
          <p className={styles['website-name']}>{title}</p>
          <div className={styles['website-description']}>
            <RichText json={description} />
          </div>
          <div style={{ marginBottom: '50px' }}>
            <p>
              Project Status:{' '}
              <span className={lastUpdate ? styles.complete : styles.ongoing}>
                {projectStatus}
              </span>
            </p>
            {lastUpdate && (
              <p>
                Date of Last Update: {month} {day}, {year}
              </p>
            )}
          </div>
          <div className={styles.buttonContainer}>
            <Button href={url} classNames={buttonColorClass} isNewPage={true}>
              Live site
            </Button>
          </div>
        </div>
        <div
          className={styles['image-container']}
          data-aos={isDesktop && imageContainerAnimationClass}
          data-aos-easing="ease-in-sine"
        >
          <Image
            src={`https:${image.fields.file.url}`}
            alt={image.fields.file.title}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        </div>
      </div>
      {nextSectionHref && isDesktop && <BouncingArrow href={nextSectionHref} />}
    </Section>
  );
}
