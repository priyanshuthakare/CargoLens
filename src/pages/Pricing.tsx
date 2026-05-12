import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PricingCard from '@/components/PricingCard';

const plans = [
  {
    tier: 'Free',
    price: 0,
    priceAnnual: 0,
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
      { text: '1 user', included: true },
      { text: 'Community support', included: true },
      { text: 'Email ingestion', included: false },
      { text: 'Surcharge detection', included: false },
      { text: 'Historical trends', included: false },
      { text: 'QuickBooks / Xero sync', included: false },
    ],
  },
  {
    tier: 'Starter',
    price: 79,
    priceAnnual: 63,
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
      { text: '1 user', included: true },
      { text: '48h email support', included: true },
      { text: 'Advanced surcharge detection', included: false },
      { text: 'Historical trends', included: false },
      { text: 'Outlier detection', included: false },
      { text: 'QuickBooks / Xero sync', included: false },
    ],
  },
  {
    tier: 'Professional',
    price: 249,
    priceAnnual: 199,
    isPopular: true,
    period: 'mo',
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
      { text: '3 users', included: true },
      { text: 'QuickBooks + Xero sync', included: true },
      { text: '24h email support', included: true },
      { text: 'Approval workflows', included: false },
      { text: 'API access', included: false },
    ],
  },
  {
    tier: 'Team',
    price: 499,
    priceAnnual: 399,
    period: 'mo',
    description: 'For departments managing complex workflows.',
    users: '15 users',
    quotes: 'Unlimited quotes',
    cta: 'Start free trial',
    ctaLink: '/waitlist',
    features: [
      { text: 'Unlimited quotes', included: true },
      { text: 'All ingestion formats + API', included: true },
      { text: 'Advanced surcharge detection', included: true },
      { text: 'Outlier detection', included: true },
      { text: 'Historical trends + alerts', included: true },
      { text: '15 users', included: true },
      { text: 'TMS / ERP API integrations', included: true },
      { text: 'Approval workflows', included: true },
      { text: 'Priority chat support', included: true },
      { text: 'Workspace-specific AI learning', included: true },
    ],
  },
];

const enterpriseFeatures = [
  'Unlimited users',
  'SSO (SAML / OIDC)',
  'Audit logs',
  'Custom model training',
  'Dedicated CSM',
  'EU / US data residency',
  'SLA guarantee',
  'Custom ERP integrations',
];

const featureMatrix = [
  { name: 'Quotes/month', free: '10', starter: '150', pro: 'Unlimited', team: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Users', free: '1', starter: '1', pro: '3', team: '15', enterprise: 'Unlimited' },
  { name: 'Ingestion formats', free: 'Upload', starter: 'Upload + Email', pro: 'All formats', team: 'All + API', enterprise: 'Custom' },
  { name: 'Surcharge detection', free: '—', starter: 'Standard', pro: 'Advanced', team: 'Advanced', enterprise: 'Custom training' },
  { name: 'Historical trends', free: '—', starter: '—', pro: 'Yes', team: 'Yes + alerts', enterprise: 'Yes + benchmarking' },
  { name: 'Collaboration', free: '—', starter: '—', pro: 'Shared workspace', team: 'Approval workflows', enterprise: 'SSO + audit logs' },
  { name: 'Integrations', free: 'Excel export', starter: 'Excel export', pro: 'QuickBooks, Xero', team: 'TMS, ERP APIs', enterprise: 'Custom ERP, SAP' },
  { name: 'Support', free: 'Community', starter: 'Email (48h)', pro: 'Email (24h)', team: 'Priority chat', enterprise: 'Dedicated CSM' },
];

const faqs = [
  { q: 'Is there really a free tier with no credit card?', a: 'Yes — 10 quotes per month, forever free. No time limit. No credit card required. Upgrade anytime when you need more.' },
  { q: 'What counts as a "quote"?', a: 'One document processed through the AI pipeline, regardless of page count. A 10-page PDF counts as one quote.' },
  { q: 'Can I export all my data?', a: 'Always, in CSV, Excel, or JSON format. No data lock-in — it is a core product principle.' },
  { q: 'Do you use my quote data to train your models?', a: 'Never without your explicit opt-in. Data is isolated in single-tenant storage per customer.' },
  { q: 'What\'s the difference between upload and email ingestion?', a: 'Upload = manual drag-and-drop. Email = forward to your unique CargoLens inbox for automatic processing.' },
  { q: 'What counts as a "user"?', a: 'Anyone with a CargoLens login who can create, view, or approve comparisons.' },
  { q: 'Can I change plans?', a: 'Yes, upgrade or downgrade anytime. Prorated billing on upgrades.' },
  { q: 'Do you have annual plans?', a: 'Yes, with a 20% discount. Monthly billing is also available — no lock-in.' },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();
  const { ref: roiRef, isVisible: roiVisible } = useScrollReveal();

  return (
    <main className="pt-16">
      {/* Hero */}
      <section ref={heroRef} className="bg-[#0a0a0f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto tracking-tight"
          >
            Pricing that&apos;s honest, transparent, and ROI-positive on day one.
          </motion.h1>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-indigo-600 text-white' : 'text-white/50 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-indigo-600 text-white' : 'text-white/50 hover:text-white'}`}
            >
              Annual
              <span className="px-1.5 py-0.5 bg-green/20 text-green text-xs rounded-full">-20%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-[#0a0a0f] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <PricingCard
                  {...plan}
                  price={annual ? plan.priceAnnual : plan.price}
                />
              </motion.div>
            ))}
          </div>

          {/* Enterprise card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 bg-navy rounded-feature border border-blue/20 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Enterprise</h3>
              <p className="text-sm text-slate-300 mb-4">For large organizations with custom needs.</p>
              <div className="flex flex-wrap gap-2">
                {enterpriseFeatures.map((f) => (
                  <span key={f} className="inline-flex items-center gap-1 text-xs text-cyan bg-cyan/10 px-2 py-1 rounded-full">
                    <Check size={12} /> {f}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/waitlist"
              className="px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press shrink-0"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="bg-[#0d0d16] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Feature comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider sticky left-0 bg-[#0d0d16] z-10">Feature</th>
                  <th className="text-center py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Free</th>
                  <th className="text-center py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Starter</th>
                  <th className="text-center py-3 px-4 text-xs font-medium text-indigo-400 uppercase tracking-wider bg-indigo-500/10">Professional</th>
                  <th className="text-center py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Team</th>
                  <th className="text-center py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row, i) => (
                  <motion.tr
                    key={row.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/[0.06] hover:bg-white/[0.03]"
                  >
                    <td className="py-3 px-4 text-sm text-white font-medium sticky left-0 bg-[#0d0d16] z-10">{row.name}</td>
                    <td className="py-3 px-4 text-center text-sm text-white/50">{row.free}</td>
                    <td className="py-3 px-4 text-center text-sm text-white/50">{row.starter}</td>
                    <td className="py-3 px-4 text-center text-sm text-indigo-400 bg-indigo-500/10">{row.pro}</td>
                    <td className="py-3 px-4 text-center text-sm text-white/50">{row.team}</td>
                    <td className="py-3 px-4 text-center text-sm text-white/50">{row.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Anchor */}
      <section ref={roiRef} className="bg-[#0a0a0f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Per quote at Professional (200/mo)', value: '$1.25', sub: 'vs $12.50 manual cost' },
              { label: 'Manual cost', value: '$12.50', sub: '25 min @ $30/hr average' },
              { label: 'ROI on day 1', value: '10x', sub: 'Professional at 200 quotes/month' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={roiVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15 }}
                className="bg-[#14141e] rounded-xl p-6 text-center border border-white/[0.06]"
              >
                <p className="text-3xl font-bold text-indigo-400 font-mono mb-1">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
                <p className="text-xs text-white/40 mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-white/40 mt-6">
            vs. CargoWise or SAP TM at $100K-$500K/year — CargoLens Professional is 97% cheaper.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="bg-[#0d0d16] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={faqVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-10 text-center"
          >
            Frequently asked questions
          </motion.h2>

          <Accordion.Root type="single" collapsible>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={faqVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Accordion.Item value={`faq-${i}`} className="border-b border-white/[0.06]">
                  <Accordion.Trigger className="w-full flex items-center justify-between py-4 text-left group">
                    <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                    <ChevronDown size={16} className="text-white/40 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-4 text-sm text-white/50 leading-relaxed">{faq.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0a0a0f] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to stop overpaying for freight?</h2>
          <p className="text-white/60 mb-8">Start free with 10 quotes per month. No credit card required.</p>
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            Start free — 10 quotes, no card
          </Link>
        </div>
      </section>
    </main>
  );
}
