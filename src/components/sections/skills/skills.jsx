import React from 'react';
import Section from '@components/shared/section';
import './skills.scss';
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
  ReactRouterIcon,
  ReduxIcon,
  StorybookIcon,
} from './icons';

export default function Skills() {
  const Icon = ({ skill, icon }) => (
    <div className="icon">
      <h3>{skill}</h3>
      {icon()}
    </div>
  );
  return (
    <Section section="skills" title="Skills">
      <div className="skills-icon-container">
        <Icon skill="JavaScript" icon={() => <JavascriptIcon />} />
        <Icon skill="React.JS" icon={() => <ReactIcon />} />
        <Icon skill="Redux" icon={() => <ReduxIcon />} />
        <Icon
          skill="Node.js"
          icon={() => <i className="devicon-nodejs-plain-wordmark"></i>}
        />
        <Icon skill="Contentful" icon={() => <ContentfulIcon />} />
        <Icon skill="Netlify" icon={() => <NetlifyIcon />} />
        <Icon skill="Next.js" icon={() => <NextIcon />} />
        <Icon
          skill="Webpack"
          icon={() => <i className="devicon-webpack-plain"></i>}
        />
        <Icon skill="GraphQL" icon={() => <GraphQLIcon />} />
        <Icon skill="Apollo" icon={() => <ApolloIcon />} />
        <Icon skill="Git" icon={() => <GitIcon />} />
        <Icon
          skill="GitHub"
          icon={() => <i className="devicon-github-plain"></i>}
        />
        <Icon skill="Firebase" icon={() => <FirebaseIcon />} />
        <Icon skill="Airtable" icon={() => <AirtableIcon />} />
        <Icon skill="React Router" icon={() => <ReactRouterIcon />} />
        <Icon skill="Storybook" icon={() => <StorybookIcon />} />
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
