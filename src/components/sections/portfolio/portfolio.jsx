import React from 'react';
import Section from '@components/shared/section';
import './portfolio.scss';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <Section
      classNames="section-general section-portfolio"
      id="portfolio"
      innerContainerClassNames="section-container section-portfolio-container"
    >
      <h2>Portfolio</h2>
      <Link to="/portfolio" className="see-projects">
        Click here to see my past projects
      </Link>
    </Section>
  );
}
