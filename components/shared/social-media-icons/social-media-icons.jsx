import React, { useContext } from 'react';
import styles from './social-media-icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ScreenWidthContext } from 'context/screenWidthContext';

export default function SocialMediaIcons() {
  const { isMobile } = useContext(ScreenWidthContext);
  const iconSize = isMobile ? 'lg' : 'xl';
  return (
    <div className={styles['social-media-container']}>
      <div className={styles['git-hub-container']}>
        <a
          href="https://github.com/orrymevorach"
          className={styles['git-icon']}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size={iconSize} />
        </a>
      </div>

      <div className={styles['instagram-container']}>
        <div className={styles['icon-circle']}>
          <a
            href="https://www.instagram.com/mev.dev.o/"
            className={styles['email-icon']}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          </a>
        </div>
      </div>

      <div className={styles['linked-in-container']}>
        <div className={styles['icon-circle']}>
          <a
            href="https://www.linkedin.com/in/orrymevorach/"
            target="_blank"
            className={styles['linked-in-icon']}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
          </a>
        </div>
      </div>

      <div className={styles['email-container']}>
        <div className={styles['icon-circle']}>
          <a href="#contact" className={styles['email-icon']}>
            <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
          </a>
        </div>
      </div>
    </div>
  );
}
