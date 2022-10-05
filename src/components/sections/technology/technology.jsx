import React, { useContext, useRef, useEffect } from 'react';
import Section from '@components/shared/section';
import './technology.scss';
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
import useIsVisible from '@root/hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from '@root/context/visibleSectionContext';

const Icon = ({ skill, icon }) => (
  <div className="icon">
    <h3>{skill}</h3>
    {icon()}
  </div>
);

export default function Technology() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);
  useEffect(() => {
    if (isVisible) setSectionInViewport('technology');
  }, [isVisible, setSectionInViewport]);
  return (
    <Section section="technology" title="Technology">
      <div className="technology-icon-container" ref={ref}>
        <Icon skill="JavaScript" icon={() => <JavascriptIcon />} />
        <Icon skill="React" icon={() => <ReactIcon />} />
        <Icon skill="Gatsby" icon={() => <GatsbyIcon />} />
        <Icon skill="Next" icon={() => <NextIcon />} />
        <Icon skill="Redux" icon={() => <ReduxIcon />} />
        <Icon skill="Apollo" icon={() => <ApolloIcon />} />
        <Icon skill="GraphQL" icon={() => <GraphQLIcon />} />
        <Icon
          skill="Node"
          icon={() => <i className="devicon-nodejs-plain-wordmark"></i>}
        />
        <Icon skill="Contentful" icon={() => <ContentfulIcon />} />
        <Icon skill="Netlify" icon={() => <NetlifyIcon />} />
        <Icon skill="Firebase" icon={() => <FirebaseIcon />} />
        <Icon skill="Airtable" icon={() => <AirtableIcon />} />
        <Icon skill="Storybook" icon={() => <StorybookIcon />} />
        <Icon
          skill="Webpack"
          icon={() => <i className="devicon-webpack-plain"></i>}
        />
        <Icon skill="Git" icon={() => <GitIcon />} />
        <Icon
          skill="GitHub"
          icon={() => <i className="devicon-github-plain"></i>}
        />
        <Icon
          skill="HTML5"
          icon={() => <i className="devicon-html5-plain"></i>}
        />
        <Icon
          skill="CSS3"
          icon={() => <i className="devicon-css3-plain"></i>}
        />
        <Icon
          skill="Sass"
          icon={() => <i className="devicon-sass-original"></i>}
        />
        <Icon
          skill="jQuery"
          icon={() => <i className="devicon-jquery-plain"></i>}
        />
        <Icon
          skill="GULP"
          icon={() => <i className="devicon-gulp-plain"></i>}
        />
        <Icon skill="Jest" icon={() => <JestIcon />} />
        <Icon
          skill="React Testing Library"
          icon={() => (
            <img
              src="https://orry-mevorach.s3.ca-central-1.amazonaws.com/rtl.png"
              alt="React Testing Library"
            />
          )}
        />
        <Icon skill="Puppeteer" icon={() => <PuppeteerIcon />} />
      </div>
    </Section>
  );
}
