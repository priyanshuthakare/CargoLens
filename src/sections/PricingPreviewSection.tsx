import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PricingCard from '@/components/PricingCard';

/**
 * @intent Dark pricing preview section. All plans/prices/features from PRD unchanged.
 * Visual design updated: dark bg, eyebrow label, heading style per design system.
 */

const plans = [
  {
    tier: 'Free',
    price: 0,
    period: 'mo',
    description: 'For individuals exploring freight AI.',
    users: '1 user',
    quotes: '10 quotes/month',
    cta: 'Get started free',
    ctaLink: '/waitlist',
    features: [
      { text: '10 quotes per month', included: true },
      { text: 'Upload only (PDF, Excel)', included: true },
      { text: 'Basic comparison table', included: true },
      { text: 'Excel export', included: true },
      { text: 'Email ingestion', included: false },
      { text: 'Surcharge detection', included: false },
      { text: 'Historical trends', included: false },
    ],
  },
  {
    tier: 'Starter',
    price: 79,
    period: 'mo',
    description: 'For solo operators processing quotes daily.',
    users: '1 user',
    quotes: '150 quotes/month',
    cta: 'Start free trial',
    ctaLink: '/waitlist',
    features: [
      { text: '150 quotes per month', included: true },
      { text: 'Upload + email ingestion', included: true },
      { text: 'Standard extraction', included: true },
      { text: 'Excel export', included: true },
      { text: '48h email support', included: true },
      { text: 'Advanced surcharge detection', included: false },
      { text: 'Historical trends', included: false },
    ],
  },
  {
    tier: 'Professional',
    price: 249,
    period: 'mo',
    isPopular: true,
    description: 'For growing teams that need full visibility.',
    users: '3 users',
    quotes: 'Unlimited quotes',
    cta: 'Start free trial',
    ctaLink: '/waitlist',
    features: [
      { text: 'Unlimited quotes', included: true },
      { text: 'All ingestion formats', included: true },
      { text: 'Advanced surcharge detection', included: true },
      { text: 'Outlier detection', included: true },
      { text: 'Historical lane trends', included: true },
      { text: 'QuickBooks + Xero sync', included: true },
      { text: '24h email support', included: true },
    ],
  },
];

export default function PricingPreviewSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-[#0a0a0f] py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="eyebrow-label-muted mb-4">PRICING</p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
          >
            Start free. Pay only when you scale.
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            No hidden fees. No credit card required to start. Upgrade when you need more power.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

        {/* Value anchor line — from PRD */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-white/30 mb-6"
        >
          97% cheaper than CargoWise or SAP TM. 10x ROI at 200 quotes/month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/pricing"
            className="text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors inline-flex items-center gap-1"
          >
            See full pricing →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
