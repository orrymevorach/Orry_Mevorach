import React, { useContext, useRef, useEffect } from 'react';
import Section from 'components/shared/section';
import styles from './technology.module.scss';
import clsx from 'clsx';
import {
  AirtableIcon,
  ApolloIcon,
  ContentfulIcon,
  FirebaseIcon,
  GitIcon,
  GraphQLIcon,
  JavascriptIcon,
  JestIcon,
  NetlifyIcon,
  NextIcon,
  PuppeteerIcon,
  ReactIcon,
  GatsbyIcon,
  ReduxIcon,
  StorybookIcon,
} from './icons';
import useIsVisible from 'hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from 'context/visibleSectionContext';
import { ScreenWidthContext } from 'context/screenWidthContext';

const Icon = ({ skill, Svg }) => {
  const className = skill.replace(/ /g, '');
  return (
    <div className={clsx(styles.icon, className)}>
      <h3>{skill}</h3>
      <div className={styles['svg-container']}>
        <Svg />
      </div>
    </div>
  );
};

export default function Technology() {
  const { isMobile } = useContext(ScreenWidthContext);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);
  useEffect(() => {
    if (isVisible) setSectionInViewport('technology');
  }, [isVisible, setSectionInViewport]);
  return (
    <Section
      section="technology"
      isFullVerticalHeight={!isMobile}
      classNames={styles.technology}
    >
      <div>
        <h3 className={styles.heading}>Technology</h3>
        <div className={styles['technology-icon-container']} ref={ref}>
          <Icon skill="JavaScript" Svg={() => <JavascriptIcon />} />
          <Icon skill="React" Svg={() => <ReactIcon />} />
          <Icon skill="Gatsby" Svg={() => <GatsbyIcon />} />
          <Icon skill="Next" Svg={() => <NextIcon />} />
          <Icon skill="Redux" Svg={() => <ReduxIcon />} />
          <Icon skill="Apollo" Svg={() => <ApolloIcon />} />
          <Icon skill="GraphQL" Svg={() => <GraphQLIcon />} />
          <Icon
            skill="Node"
            Svg={() => (
              <i className={styles['devicon-nodejs-plain-wordmark']}></i>
            )}
          />
          <Icon skill="Contentful" Svg={() => <ContentfulIcon />} />
          <Icon skill="Netlify" Svg={() => <NetlifyIcon />} />
          <Icon skill="Firebase" Svg={() => <FirebaseIcon />} />
          <Icon skill="Airtable" Svg={() => <AirtableIcon />} />
          <Icon skill="Storybook" Svg={() => <StorybookIcon />} />
          <Icon
            skill="Webpack"
            Svg={() => <i className={styles['devicon-webpack-plain']}></i>}
          />
          <Icon skill="Git" Svg={() => <GitIcon />} />
          <Icon
            skill="GitHub"
            Svg={() => <i className={styles['devicon-github-plain']}></i>}
          />
          <Icon
            skill="HTML5"
            Svg={() => <i className={styles['devicon-html5-plain']}></i>}
          />
          <Icon
            skill="CSS3"
            Svg={() => <i className={styles['devicon-css3-plain']}></i>}
          />
          <Icon
            skill="Sass"
            Svg={() => <i className={styles['devicon-sass-original']}></i>}
          />
          <Icon
            skill="jQuery"
            Svg={() => <i className={styles['devicon-jquery-plain']}></i>}
          />
          <Icon
            skill="GULP"
            Svg={() => <i className={styles['devicon-gulp-plain']}></i>}
          />
          <Icon skill="Jest" Svg={() => <JestIcon />} />
          <Icon
            skill="React Testing Library"
            Svg={() => (
              <img
                src="https://orry-mevorach.s3.ca-central-1.amazonaws.com/rtl.png"
                alt="React Testing Library"
              />
            )}
          />
          <Icon skill="Puppeteer" Svg={() => <PuppeteerIcon />} />
        </div>
      </div>
    </Section>
  );
}
