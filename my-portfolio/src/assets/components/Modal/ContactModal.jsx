import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactModal({ isOpen, onClose, recipientEmail }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Use Vite environment variables from .env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSend = async () => {
    setIsSending(true);
    setError(null);

    const formattedDate = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const templateParams = {
      from_email: email,
      message: message,
      to_email: recipientEmail,
      date: formattedDate, 
    };

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration. Check your .env file.');
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setEmail('');
      setMessage('');
      setIsSending(false);
      onClose();
    } catch (error) {
      setError('Failed to send message. Please try again.');
      setIsSending(false);
      console.error('EmailJS error:', error.message);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50 font-jetbrains-mono"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#1B2A3A] rounded-md p-6 w-full max-w-md border border-[#00FFCC]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#00FFCC] text-lg font-semibold">Contact Me</h2>
          <button
            onClick={onClose}
            className="text-[#4CD2BC] hover:text-[#00FFCC] text-xl cursor-pointer"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#4CD2BC] text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-[#131A26] text-[#4CD2BC] border border-[#4CD2BC] rounded-md focus:outline-none focus:border-[#00FFCC]"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-[#4CD2BC] text-sm">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 bg-[#131A26] text-[#4CD2BC] border border-[#4CD2BC] rounded-md focus:outline-none focus:border-[#00FFCC] h-24 resize-none"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={onClose}
              className="border border-[#4CD2BC] text-[#4CD2BC] px-4 py-1 rounded hover:bg-[#4CD2BC] hover:text-[#131A26] cursor-pointer"
              disabled={isSending}
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              className="border border-[#00FFCC] text-[#00FFCC] px-4 py-1 rounded hover:bg-[#00FFCC] hover:text-[#131A26] cursor-pointer"
              disabled={!email || !message || isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
