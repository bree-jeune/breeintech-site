'use client';

import { useState, FormEvent } from 'react';

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xaqyovgv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState({
          status: 'success',
          message: "Thanks for reaching out! I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try emailing me directly.',
      });
    }
  };

  if (formState.status === 'success') {
    return (
      <div className="contact-form-success">
        <span className="contact-form-icon">&#10003;</span>
        <p>{formState.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input"
          placeholder="Your name"
          disabled={formState.status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
          placeholder="your@email.com"
          disabled={formState.status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input form-textarea"
          placeholder="What's on your mind?"
          disabled={formState.status === 'submitting'}
        />
      </div>

      {formState.status === 'error' && (
        <div className="form-error">
          {formState.message}
        </div>
      )}

      <button
        type="submit"
        className="btn btn--primary"
        disabled={formState.status === 'submitting'}
      >
        {formState.status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
