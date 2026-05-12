import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Lock, Shield, CheckCircle, Server } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const badges = [
  { icon: Lock, label: 'AES-256 Encryption' },
  { icon: Shield, label: 'SOC 2 Type II (In Progress)' },
  { icon: CheckCircle, label: 'GDPR Compliant' },
  { icon: Server, label: 'Single-tenant Storage' },
];

export default function SecurityTrustSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-[#0a0a0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-navy rounded-feature border border-blue/20 p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h1 text-white mb-4">
                Enterprise-grade security, mid-market price
              </h2>
              <p className="text-body-md text-slate-300 mb-6">
                No quote data is used to train our models without your explicit opt-in.
                Your data is isolated in single-tenant storage, encrypted at rest and in transit.
              </p>
              <Link
                to="/security"
                className="text-cyan text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                Read our security page →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={isVisible ? { opacity: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.12, type: 'spring', bounce: 0.5 }}
                  >
                    <badge.icon size={20} className="text-cyan" />
                  </motion.div>
                  <span className="text-sm text-white/90 font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
