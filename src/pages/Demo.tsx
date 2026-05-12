import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Demo() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main className="pt-16 min-h-screen bg-navy grid-overlay flex items-center justify-center">
      <div ref={ref} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-surface rounded-feature border border-border shadow-xl p-8"
        >
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar size={24} className="text-blue" />
                </div>
                <h1 className="text-h1 text-text mb-2">Book a 20-minute demo</h1>
                <p className="text-body-md text-muted">
                  See CargoLens in action with your own freight quotes. No commitment required.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  'Live product walkthrough',
                  'Upload your own quotes',
                  'ROI analysis for your team',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-text">
                    <CheckCircle size={14} className="text-green shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">First name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Last name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">Work email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Logistics"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">Quotes processed per week</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all">
                    <option value="">Select range</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press mt-6"
                >
                  Request demo
                  <ArrowRight size={16} />
                </button>
              </form>

              <p className="text-xs text-muted text-center mt-4">
                Or email us directly at{' '}
                <a href="mailto:demo@cargolens.io" className="text-blue hover:underline">
                  demo@cargolens.io
                </a>
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-green" />
              </div>
              <h2 className="text-h2 text-text mb-2">Demo request received!</h2>
              <p className="text-body-md text-muted mb-2">
                We will contact you at <strong className="text-text">{email}</strong> within 24 hours to schedule your demo.
              </p>
              <p className="text-sm text-muted mb-6">
                In the meantime, you can start a free trial with 10 quotes per month.
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press"
              >
                Start free trial <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
