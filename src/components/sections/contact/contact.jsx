import React, { useState, useRef, useContext, useEffect } from 'react';
import Section from '@components/shared/section';
import Particles from '@components/shared/particles';
import './contact.scss';
import useIsVisible from '@root/hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from '@root/context/visibleSectionContext';

export default function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);
  }

  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);

  useEffect(() => {
    if (isVisible) setSectionInViewport('contact');
  }, [isVisible, setSectionInViewport]);

  return (
    <Section section="contact">
      {hasSubmitted ? (
        <div className="footer-text content-container" ref={ref}>
          <h2 className="heading">Thank You!</h2>
          <p className="footer-email-sent-paragraph">
            I look forward to chatting with you.
          </p>
        </div>
      ) : (
        <div className="content-container">
          <h2 className="heading">Let's Chat!</h2>
          <div className="contact-form" ref={ref}>
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
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-top-bottom">
                  <input
                    type="email"
                    name="_replyto"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
              <div className="form-bottom-row">
                <textarea
                  name="message"
                  placeholder="Project description"
                  required
                />
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </Section>
  );
}
