import React from 'react';
import './social-media-icons.scss';

export default function SocialMediaIcons() {
  return (
    <div className="social-media-container">
      <div className="git-hub-container">
        <a href="https://github.com/orrymevorach" className="git-icon">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <div className="linked-in-container">
        <div className="icon-circle">
          <a
            href="https://www.linkedin.com/in/orrymevorach/"
            className="linked-in-icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="email-container">
        <div className="icon-circle">
          <a href="mailto:hello@orrymevorach.com" className="email-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
