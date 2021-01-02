import React from 'react';
import './sidebar.scss';

export default function Sidebar() {
  return (
    // <section className="section-general section-home" id="home">
    <div className="social-media-container">
      <div className="git-hub-container">
        <a href="https://github.com/orrymevorach" className="git-icon">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="twitter-container">
        <div className="icon-circle">
          <a href="https://twitter.com/orrymevorach" className="twitter-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
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
    // {/* </section> */}
  );
}
