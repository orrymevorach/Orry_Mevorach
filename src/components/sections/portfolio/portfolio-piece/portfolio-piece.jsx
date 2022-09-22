import React from 'react';
import './portfolio-piece.scss';
import Button from '@components/shared/button';
import BouncingArrow from '@components/shared/bouncing-arrow/bouncing-arrow';
import Section from '../../../shared/section/section';

export default function PortfolioPiece({
  src,
  alt,
  href,
  title,
  description = '',
  technology = [],
  nextSectionHref,
}) {
  return (
    <Section section={title} showSidebar={false}>
      <div className="portfolio-piece">
        <div className="text-container">
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
        <div className="image-container">
          <img src={src} alt={alt} />
        </div>
      </div>
      <BouncingArrow href={nextSectionHref} />
    </Section>
  );
}
