'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const res = await axios.post('/api/contact', formData);
      if (res.status === 200) {
        router.push('/thank-you');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative bg-white dark:bg-slate-950 py-16">
      <div className="fixed inset-0 bg-[url('/streaks.png')] bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-[0.02]" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-900/50 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/30">
            <div className="p-6 md:p-10">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-3 text-gray-800 dark:text-white">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Have questions or want to get involved? We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm border border-red-100">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-base font-medium mb-2 text-gray-800 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-base bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/30 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:text-white transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium mb-2 text-gray-800 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-base bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/30 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:text-white transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium mb-2 text-gray-800 dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-6 py-4 text-base bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/30 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:text-white transition-all duration-200"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md 
                      bg-[#A27707] hover:bg-[#8B6506]
                      px-8 text-sm font-medium text-white 
                      transition"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 