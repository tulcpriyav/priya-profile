'use client';

import { FormEvent, useState } from 'react';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tulcpriya@gmail.com';

export default function BookNewsletterForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setSubmitState('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '').trim();

    if (!email) {
      setSubmitState('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    formData.set('email', email);

    setSubmitState('sending');
    setFeedback('Sending...');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitState('success');
      setFeedback(
        'Thanks. Your request was sent successfully. Check your inbox for confirmation.',
      );
      form.reset();
    } catch {
      setSubmitState('error');
      setFeedback('Could not send right now. Please try again in a moment.');
    }
  }

  return (
    <>
      <form className="book-newsletter-form" onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value="New Book Waitlist Signup" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for joining the journey. You are on the Enterprise AI on AWS updates list."
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          className="book-hidden-field"
        />

        <label htmlFor="book-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="book-newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          required
          disabled={submitState === 'sending'}
        />
        <button
          type="submit"
          className="button book-button-primary"
          disabled={submitState === 'sending'}
        >
          {submitState === 'sending' ? 'Sending...' : 'Notify Me'}
        </button>
      </form>

      {submitState !== 'idle' && (
        <p
          className={`book-newsletter-feedback book-newsletter-feedback-${submitState}`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      )}
    </>
  );
}
