'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

// Replace with a dedicated Formspree form ID for book signups (create at https://formspree.io)
// Using contact form endpoint temporarily
const FORM_ENDPOINT = 'https://formspree.io/f/mqpzdrwr';

export default function BookNewsletterForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (successTimerRef.current) clearTimeout(successTimerRef.current); }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '').trim();

    if (!email) {
      setSubmitState('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setSubmitState('sending');
    setFeedback('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Book Updates: New Subscriber', source: 'book-page' }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitState('success');
      setFeedback("You're on the list. I'll send updates as the book progresses.");
      form.reset();
      successTimerRef.current = setTimeout(() => {
        setSubmitState('idle');
        setFeedback('');
      }, 8000);
    } catch {
      setSubmitState('error');
      setFeedback('Could not send right now. Please try again in a moment.');
    }
  }

  return (
    <>
      <form className="book-newsletter-form" onSubmit={handleSubmit} noValidate>
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
