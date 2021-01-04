import React from 'react';
import Section from '@components/shared/section';
import './about.scss';
import Particles from '@components/sections/main/particles';
export default function About() {
  return (
    <Section section="about">
      <div className="content-container">
        <Particles opacity={1} />
        <div className="headshot-container">
          {/* <img
            // src="https://orry-mevorach.s3.ca-central-1.amazonaws.com/headshot.png"
            src="https://orry-mevorach.s3.ca-central-1.amazonaws.com/or+and+cor-1.jpg"
            alt="Orry Mevorach Headshot"
          /> */}
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            Hello! My name is Orry Mevorach and I am a front-end web developer.
            I love tackling problems, and learning new ways to problem solve.
          </p>
          <p>
            I have a a keen eye for colours and animations, and appreciate any
            website that blends practicality, efficiency, and a strong
            aesthetic. In other words, I appreciate a site that is easy to use,
            nice to look at, fun to click on, and all-around
            <span className="funky-fresh">Funky Fresh!</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
