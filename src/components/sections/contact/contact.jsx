import React, { useState } from 'react';
import Section from '@components/shared/section';
import Particles from '@components/shared/particles';
import './contact.scss';

export default function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <Section section="contact">
      <Particles opacity={1} />
      {hasSubmitted ? (
        <div className="footer-text content-container">
          <h2 className="heading">Thank You!</h2>
          <p className="footer-email-sent-paragraph">
            I look forward to chatting with you.
          </p>
        </div>
      ) : (
        <>
          <h2 className="heading">Let's Chat!</h2>
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xjvppqdg"
              method="POST"
              onSubmit={e => handleSubmit(e)}
            >
              <div className="form-top-row">
                <div className="form-top-top">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="form-top-bottom">
                  <input
                    type="email"
                    name="_replyto"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
              <div className="form-bottom-row">
                <textarea name="message" placeholder="Enter message" required />
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </>
      )}
    </Section>
  );
}
