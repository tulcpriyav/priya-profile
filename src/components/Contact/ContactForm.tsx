'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqpzdrwr';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const REASONS = [
  'Professional collaboration',
  'Speaking or judging opportunity',
  'Research, book, or publication inquiry',
  'STEM volunteering',
  'Other',
];

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearSuccess() {
    if (successTimerRef.current) clearTimeout(successTimerRef.current);
    setSubmitState('idle');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('sending');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitState('success');
        form.reset();
        successTimerRef.current = setTimeout(() => setSubmitState('idle'), 6000);
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  }

  useEffect(() => () => { if (successTimerRef.current) clearTimeout(successTimerRef.current); }, []);

  return (
    <div className="contact-form-wrapper">
      <header className="contact-form-header">
        <h1 className="page-title">Let&rsquo;s Connect</h1>
        <p className="contact-form-intro">
          I welcome conversations about AI and healthcare, research and publishing collaborations,
          speaking engagements, technical judging, and STEM initiatives.
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitState === 'success' && (
            <div className="contact-feedback contact-feedback--success">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitState === 'error' && (
            <div className="contact-feedback contact-feedback--error">
              We couldn&rsquo;t send your message. Please try again.
            </div>
          )}

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="contact-input"
              placeholder="Your name"
              required
              autoComplete="name"
              onChange={() => submitState === 'success' && clearSuccess()}
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="contact-input"
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-reason">Reason for contacting</label>
            <select
              id="contact-reason"
              name="reason"
              className="contact-input contact-select"
              required
              defaultValue=""
            >
              <option value="" disabled>Select an option</option>
              {REASONS.map((reason) => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </select>
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              className="contact-input contact-textarea"
              placeholder="Your message..."
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="button contact-submit"
            disabled={submitState === 'sending'}
          >
            {submitState === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>

      <div className="contact-form-footer">
        <p className="contact-email-fallback">
          I typically respond within 1–2 business days.
        </p>

        <div className="contact-form-links">
          <a
            href="https://www.linkedin.com/in/tulasipriya/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            LinkedIn
          </a>
          <span className="contact-social-sep" aria-hidden="true">|</span>
          <a
            href="https://github.com/tulcpriyav"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
