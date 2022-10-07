import React, { useRef, useContext, useEffect } from 'react';
import Section from '@components/shared/section';
import './contact.scss';
import useIsVisible from '@root/hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from '@root/context/visibleSectionContext';
import { useForm } from '@formspree/react';
import Loader from '@components/shared/loader';

const SuccessMessage = ({ ref }) => {
  return (
    <div className="footer-text content-container" ref={ref}>
      <h2 className="heading">Thank You!</h2>
      <p className="footer-email-sent-paragraph">
        I look forward to chatting about your upcoming project.
      </p>
    </div>
  );
};

export default function Contact() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);
  const [state, handleSubmit] = useForm('xjvppqdg');

  useEffect(() => {
    if (isVisible) setSectionInViewport('contact');
  }, [isVisible, setSectionInViewport]);

  return (
    <Section section="contact">
      {state.succeeded ? (
        <SuccessMessage />
      ) : state.submitting ? (
        <Loader />
      ) : (
        <div className="content-container">
          <h2 className="heading">Let's Chat!</h2>
          <div className="contact-form" ref={ref}>
            <form onSubmit={handleSubmit}>
              <div className="form-top-row">
                <div className="form-top-top">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-top-bottom">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
              <div className="form-bottom-row">
                <textarea
                  name="message"
                  placeholder="Description of your project"
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Section>
  );
}
