import React from 'react';
import './social-media-icons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function SocialMediaIcons() {
  return (
    <div className="social-media-container">
      <div className="git-hub-container">
        <a
          href="https://github.com/orrymevorach"
          className="git-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
      </div>

      <div className="linked-in-container">
        <div className="icon-circle">
          <a
            href="https://www.linkedin.com/in/orrymevorach/"
            target="_blank"
            className="linked-in-icon"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
        </div>
      </div>

      <div className="email-container">
        <div className="icon-circle">
          <a href="#contact" className="email-icon">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
