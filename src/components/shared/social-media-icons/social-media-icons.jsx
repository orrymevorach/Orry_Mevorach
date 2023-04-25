import React, { useContext } from 'react';
import './social-media-icons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ScreenWidthContext } from '@root/context/screenWidthContext';

export default function SocialMediaIcons() {
  const { isMobile } = useContext(ScreenWidthContext);
  const iconSize = isMobile ? 'lg' : 'xl';
  return (
    <div className="social-media-container">
      <div className="git-hub-container">
        <a
          href="https://github.com/orrymevorach"
          className="git-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size={iconSize} />
        </a>
      </div>

      <div className="instagram-container">
        <div className="icon-circle">
          <a
            href="https://www.instagram.com/mev.dev.o/"
            className="email-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          </a>
        </div>
      </div>

      <div className="linked-in-container">
        <div className="icon-circle">
          <a
            href="https://www.linkedin.com/in/orrymevorach/"
            target="_blank"
            className="linked-in-icon"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
          </a>
        </div>
      </div>

      <div className="email-container">
        <div className="icon-circle">
          <a href="#contact" className="email-icon">
            <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
          </a>
        </div>
      </div>
    </div>
  );
}
