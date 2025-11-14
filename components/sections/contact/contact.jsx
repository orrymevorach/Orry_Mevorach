'use client';
import React, { useRef, useContext, useEffect, useState } from 'react';
import Section from 'components/shared/section';
import styles from './contact.module.scss';
import useIsVisible from 'hooks/useIsVisible/useIsVisible';
import { VisibleSectionContext } from 'context/visibleSectionContext';
import SubmissionForm from 'components/shared/submission-form/submission-form';
import useContactFormReducer from 'components/shared/submission-form/useContactForm';
import { sendContactFormSubmission } from 'lib/mailgun';
import Loader from 'components/shared/loader';

const SuccessMessage = ({ ref }) => {
  return (
    <div className={styles['footer-text content-container']} ref={ref}>
      <h2 className={styles.heading}>Thank You!</h2>
      <p className={styles['footer-email-sent-paragraph']}>
        I look forward to chatting about your upcoming project.
      </p>
    </div>
  );
};

export default function Contact() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { setSectionInViewport } = useContext(VisibleSectionContext);

  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const { dispatch, stages, state, actions } = useContactFormReducer({
    initialState,
  });

  const { stage } = state;

  useEffect(() => {
    if (isVisible) setSectionInViewport('contact');
  }, [isVisible, setSectionInViewport]);

  const handleSubmit = async () => {
    setIsLoading(true);

    const fields = {
      Name: state.name,
      Email: state.email,
      Message: state.message,
    };

    await sendContactFormSubmission({
      fields,
      subject: 'New Portfolio Site Submission',
      title: 'Portfolio Site Submission',
    });

    dispatch({ type: actions.SET_STAGE, stage: stages.CONFIRMATION });
    setIsLoading(false);
  };

  const formConfig = [
    {
      type: 'text',
      placeholder: 'Your name',
      id: 'name',
      value: state.name,
      handleChange: value =>
        dispatch({ type: actions.SET_FIELD, field: 'name', value }),
      required: true,
    },
    {
      type: 'text',
      placeholder: 'Your email address',
      id: 'email',
      value: state.email,
      handleChange: value =>
        dispatch({ type: actions.SET_FIELD, field: 'email', value }),
      required: true,
    },
    {
      type: 'textarea',
      placeholder: 'Description of your project',
      id: 'message',
      value: state.message,
      handleChange: value =>
        dispatch({ type: actions.SET_FIELD, field: 'message', value }),
      required: true,
      minRows: 6,
    },
  ];

  return (
    <Section section="contact" classNames={styles.contact}>
      {stage === stages.CONFIRMATION ? (
        <SuccessMessage />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className={styles['content-container']}>
          <h2 className={styles.heading}>Let's Chat!</h2>
          <p className={styles['description-text']}>
            Tell me a little bit about your project! I will get back to you
            shortly, and we can discuss the project in more detail.
          </p>

          <div className={styles['contact-form']} ref={ref}>
            <SubmissionForm
              formConfig={formConfig}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              inputClassNames={styles.input}
              buttonLabel="Submit"
            />
          </div>
        </div>
      )}
    </Section>
  );
}
