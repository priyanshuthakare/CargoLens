import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const personas: Record<string, {
  title: string;
  headline: string;
  subheadline: string;
  image: string;
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];
  features: { title: string; desc: string }[];
  testimonial: { quote: string; role: string; company: string };
  ctaText: string;
}> = {
  'procurement-teams': {
    title: 'For Procurement Teams',
    headline: 'Stop being a data entry clerk. Compare any quote format in 60 seconds.',
    subheadline: 'Save 20+ hours per month. Every quote, any format — CargoLens reads the fine print so you do not have to.',
    image: '/images/persona-coordinator.jpg',
    problemTitle: 'Your process is broken. You are not slow.',
    problems: [
      'Spend 1+ hours per day manually retyping quotes into Excel',
      'Miss surcharges buried in footnotes — causing invoice surprises',
      'Cannot compare quotes with different units (CBM vs TEU vs per-kg)',
      'No audit trail when finance questions a rate discrepancy',
    ],
    solutionTitle: 'CargoLens gives you back your time and dignity.',
    solutions: [
      'Forward any quote — PDF, Excel, email — and get structured data in seconds',
      'All surcharges surfaced as line items. Nothing hidden, nothing missed.',
      'Automatic unit conversion: everything normalized to one basis',
      'Full audit trail for every quote, every edit, every decision',
    ],
    features: [
      { title: 'Multi-format ingestion', desc: 'PDF, Excel, Word, email, images — all without configuration' },
      { title: 'Surcharge detection', desc: 'BAF, GRI, FSC, detention — extracted from footnotes automatically' },
      { title: 'Smart normalization', desc: 'All units and currencies converted to your preferred basis' },
      { title: 'Comparison table', desc: 'Side-by-side view with lowest/highest highlighting' },
    ],
    testimonial: {
      quote: 'I used to spend an hour every morning retyping quotes. Now it is 5 minutes. The surcharge detection alone paid for 6 months of the subscription.',
      role: 'Logistics Coordinator',
      company: 'Mid-sized Importer',
    },
    ctaText: 'Try free — 10 quotes, no card',
  },
  'freight-forwarders': {
    title: 'For Freight Forwarders',
    headline: 'Win more business with quotes your clients can instantly compare.',
    subheadline: 'Reduce client response time from days to hours. Position yourself as the most transparent forwarder in the market.',
    image: '/images/persona-forwarder.jpg',
    problemTitle: 'Your clients are comparing you manually — and slowly.',
    problems: [
      'Clients take days to respond because they manually compare with 5 other forwarders',
      'Your professional quote format gets retyped into their Excel sheet — errors happen',
      'You have no visibility into your win/loss rate by lane or season',
      'Complex surcharges confuse clients, leading to disputes and delays',
    ],
    solutionTitle: 'Make your quotes the easiest to evaluate.',
    solutions: [
      'Clients receive CargoLens-normalized comparisons — your quote stands out',
      'See exactly where you rank on price, transit time, and surcharges',
      'Analytics on win/loss rates by lane, season, and client segment',
      'Complex surcharges presented clearly — fewer disputes, faster approvals',
    ],
    features: [
      { title: 'Outbound standardization', desc: 'Send quotes in a format clients can instantly process' },
      { title: 'Win/loss analytics', desc: 'Track performance by lane, season, and client type' },
      { title: 'Competitive positioning', desc: 'See where you rank against other forwarders' },
      { title: 'Client insights', desc: 'Understand procurement patterns and decision timing' },
    ],
    testimonial: {
      quote: 'Since adopting CargoLens for our outbound quotes, our client response time dropped by 40%. We are winning more lanes because our quotes are the easiest to evaluate.',
      role: 'Managing Director',
      company: 'Independent Forwarder',
    },
    ctaText: 'See CargoLens for Forwarders',
  },
  'operations-managers': {
    title: 'For Operations Managers',
    headline: 'Make carrier decisions in minutes, not hours. Never miss a sailing window again.',
    subheadline: 'Your coordinators spend 20+ hours per month retyping quotes. That stops on Day 1. Decision time: 4 hours to 15 minutes.',
    image: '/images/persona-ops-manager.jpg',
    problemTitle: 'By the time the comparison is done, the sailing schedule has changed.',
    problems: [
      'Carrier decisions take 4+ hours from quote receipt — missing optimal sailing windows',
      'Invoice variances of 5-15% from missed surcharges blow your freight budget',
      'No visibility into lane-level rate trends — cannot spot bad quotes',
      'Team works in silos, no shared view of quotes or decisions',
    ],
    solutionTitle: 'Visibility and speed, without the overhead.',
    solutions: [
      'Carrier decisions in 15 minutes, not 4 hours',
      'All surcharges surfaced — eliminate invoice surprises',
      'Lane-level rate history with outlier detection',
      'Shared workspace: your entire team sees the same data',
    ],
    features: [
      { title: 'Real-time comparison', desc: 'Side-by-side table with intelligent highlighting' },
      { title: 'Surcharge alerts', desc: 'Every hidden fee surfaced before you commit' },
      { title: 'Historical trends', desc: 'Know if a rate is good, bad, or suspicious' },
      { title: 'Team collaboration', desc: 'Shared workspace with role-based access' },
    ],
    testimonial: {
      quote: 'We caught a $3,800 GRI our team missed. CargoLens paid for itself in week one. The ROI summary is what I forward to finance every quarter.',
      role: 'Operations Manager',
      company: '3PL Provider',
    },
    ctaText: 'See the comparison view live',
  },
};

export default function UseCase() {
  const { persona } = useParams<{ persona: string }>();
  const data = personas[persona || ''];
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: problemRef, isVisible: problemVisible } = useScrollReveal();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();

  if (!data) {
    return (
      <main className="pt-24 text-center">
        <h1 className="text-h1 text-text mb-4">Page not found</h1>
        <Link to="/" className="text-blue hover:underline">Go home</Link>
      </main>
    );
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section ref={heroRef} className="bg-navy py-24 grid-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={heroVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="section-label mb-4"
              >
                {data.title}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-h1 text-white mb-4"
              >
                {data.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-lg text-slate-300 mb-8"
              >
                {data.subheadline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to="/waitlist"
                  className="inline-flex items-center px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press"
                >
                  {data.ctaText}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-feature overflow-hidden shadow-2xl"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section ref={problemRef} className="bg-bg py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={problemVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-3 text-red">THE PROBLEM</p>
              <h2 className="text-h2 text-text mb-6">{data.problemTitle}</h2>
              <ul className="space-y-4">
                {data.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red text-xs">✕</span>
                    </span>
                    <span className="text-body-md text-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={problemVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="section-label mb-3">THE SOLUTION</p>
              <h2 className="text-h2 text-text mb-6">{data.solutionTitle}</h2>
              <ul className="space-y-4">
                {data.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-green" />
                    </span>
                    <span className="text-body-md text-text">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2 text-text mb-12 text-center"
          >
            Built for your workflow
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={featuresVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-bg rounded-feature border border-border p-6 card-hover group"
              >
                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-blue transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-bg py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-cyan text-[80px] font-serif leading-none mb-4"
          >
            &ldquo;
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text italic leading-relaxed mb-6"
          >
            {data.testimonial.quote}
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted not-italic"
          >
            — {data.testimonial.role}, {data.testimonial.company}
          </motion.cite>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 text-white mb-4">Ready to transform your quote process?</h2>
          <p className="text-slate-300 mb-8">Start free with 10 quotes per month. No credit card required.</p>
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press animate-glow-pulse"
          >
            {data.ctaText}
          </Link>
        </div>
      </section>
    </main>
  );
}
