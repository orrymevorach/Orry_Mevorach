import React, { useState } from 'react';
import Section from '@components/shared/section';
import './contact.scss';

export default function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <Section section="contact">
      {hasSubmitted ? (
        <div className="footer-text content-container">
          <h1>Thank You!</h1>
          <p class="footer-email-sent-paragraph">
            I look forward to chatting with you.
          </p>
        </div>
      ) : (
        <>
          <h1 className="lets-chat">Let's Chat!</h1>
          <div className="contact-form">
            <form
              action="http://www.focuspocus.io/magic/3d5ee69d3208fee340b0a65fa74b4bfd"
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
                    name="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
              <div className="form-bottom-row">
                <textarea
                  name="comments"
                  placeholder="Enter message"
                  required
                ></textarea>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </>
      )}
    </Section>
  );
}
