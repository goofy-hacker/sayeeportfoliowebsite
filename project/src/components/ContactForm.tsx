import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-mono">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-typewriter text-matrix-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-matrix-900 bg-black px-4 py-2.5 text-matrix-400 tracking-wide transition-colors focus:border-matrix-500 focus:outline-none focus:ring-2 focus:ring-matrix-500/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-typewriter text-matrix-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-matrix-900 bg-black px-4 py-2.5 text-matrix-400 tracking-wide transition-colors focus:border-matrix-500 focus:outline-none focus:ring-2 focus:ring-matrix-500/20"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-typewriter text-matrix-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-matrix-900 bg-black px-4 py-2.5 text-matrix-400 tracking-wide transition-colors focus:border-matrix-500 focus:outline-none focus:ring-2 focus:ring-matrix-500/20"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-typewriter text-matrix-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-matrix-900 bg-black px-4 py-2.5 text-matrix-400 tracking-wide transition-colors focus:border-matrix-500 focus:outline-none focus:ring-2 focus:ring-matrix-500/20"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`inline-flex items-center justify-center rounded-lg bg-matrix-500 px-5 py-2.5 text-center text-sm font-typewriter text-black tracking-wide shadow-lg transition-all ${
          isSubmitting || isSubmitted 
            ? 'cursor-not-allowed opacity-70' 
            : 'hover:bg-matrix-400 hover:shadow-xl'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            SENDING...
          </>
        ) : isSubmitted ? (
          'MESSAGE SENT!'
        ) : (
          <>
            SEND MESSAGE <Send size={16} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;