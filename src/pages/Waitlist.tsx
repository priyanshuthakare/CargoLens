import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Waitlist() {
  const { ref, isVisible } = useScrollReveal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;

    setIsLoading(true);
    try {
      await fetch('https://formsubmit.co/ajax/priyanshuthakare@zohomail.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          _subject: 'New CargoLens Waitlist Signup!',
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: still show submitted state or show an error
      setSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-16 min-h-screen bg-[#0a0a0f] grid-overlay flex items-center justify-center">
      <div ref={ref} className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#14141e] rounded-2xl border border-white/[0.06] shadow-xl p-8"
        >
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-indigo-400" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Join the waitlist</h1>
                <p className="text-white/60 text-base">
                  Get early access to CargoLens. 10 free quotes per month, no credit card required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-[#0a0a0f] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-[#0a0a0f] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Logistics"
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-[#0a0a0f] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-white/80 mb-1">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-[#0a0a0f] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all [&>option]:bg-[#0a0a0f]"
                  >
                    <option value="">Select your role</option>
                    <option value="coordinator">Logistics Coordinator</option>
                    <option value="manager">Operations Manager</option>
                    <option value="director">Supply Chain Director</option>
                    <option value="cfo">CFO / Finance</option>
                    <option value="forwarder">Freight Forwarder</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Joining...' : 'Join waitlist'}
                  {!isLoading && <ArrowRight size={16} />}
                </button>
              </form>

              <p className="text-xs text-white/40 text-center mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">You are on the list!</h2>
              <p className="text-white/70 mb-2">
                We will email you at <strong className="text-white">{email}</strong> when your spot is ready.
              </p>
              <p className="text-sm text-white/40">
                Early access: 10 free quotes per month, no credit card required.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
