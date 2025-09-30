'use client';

import { useState } from 'react';
import Input from '@/components/atoms/Input';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email);
      setStatus('success');
      setEmail('');

      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-end" aria-label="Formulario de newsletter">
      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Tu dirección de email
        </label>
        <Input
          type="email"
          id="newsletter-email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="white-border"
          className="w-[300px]"
          required
          aria-required="true"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="text-white border-b-2 border-white px-4 py-2 hover:bg-white/10 transition font-semibold uppercase text-[13px] disabled:opacity-50 flex items-center gap-2"
        aria-label="Suscribirse al newsletter"
      >
        {status === 'loading' ? 'Enviando...' : status === 'success' ? '✓ Enviado' : (
          <>
            Info
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
