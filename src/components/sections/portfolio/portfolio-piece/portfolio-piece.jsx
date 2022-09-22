import React from 'react';
import './portfolio-piece.scss';
import Button from '@components/shared/button';
import BouncingArrow from '@components/shared/bouncing-arrow/bouncing-arrow';
import Section from '../../../shared/section/section';
import clsx from 'clsx';

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
  const isOdd = checkIsOdd(index + 1);
  const theme = isOdd ? 'odd' : 'even';
  const textContainerAnimation = isOdd ? 'fade-right' : 'fade-left';
  const imageContainerAnimation = isOdd ? 'fade-left' : 'fade-right';
  return (
    <Section section={title} showSidebar={false}>
      <div className={clsx('portfolio-piece', theme)}>
        <div className="text-container" data-aos={textContainerAnimation}>
          {technology.length !== 0 && (
            <div className="technology-container">
              {technology.map(tech => {
                return (
                  <p key={tech} className="technology">
                    {tech}
                  </p>
                );
              })}
            </div>
          )}
          <p className="website-name">{title}</p>
          <p className="website-description">{description}</p>
          <div className="buttonContainer">
            <Button>Project details</Button>
            <Button href={href}>Live site</Button>
          </div>
        </div>
        <div className="image-container" data-aos={imageContainerAnimation}>
          <img src={src} alt={alt} />
        </div>
      </div>
      <BouncingArrow href={nextSectionHref} />
    </Section>
  );
}
