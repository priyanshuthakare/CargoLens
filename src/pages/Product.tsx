import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Upload, Mail, BarChart3, Users, Plug, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ComparisonTable from '@/components/ComparisonTable';
import ConfidenceBadge from '@/components/ConfidenceBadge';

const steps = [
  {
    icon: Upload,
    title: 'Upload or Forward',
    desc: 'Drag and drop PDFs, Excel files, or images. Or forward quote emails to your unique CargoLens address.',
    visual: 'upload',
  },
  {
    icon: Mail,
    title: 'AI Extraction',
    desc: 'Freight-trained AI reads every line — base rates, FSC, BAF, detention, DTHC. Low-confidence fields are flagged for your review.',
    visual: 'extraction',
  },
  {
    icon: BarChart3,
    title: 'Compare Instantly',
    desc: 'Side-by-side comparison table highlights the lowest total cost, flags outliers, and surfaces every surcharge.',
    visual: 'comparison',
  },
  {
    icon: TrendingUp,
    title: 'Historical Intelligence',
    desc: 'Every quote is stored against its lane. See rate trends, get spike alerts, and know if a quote is good or suspicious.',
    visual: 'analytics',
  },
  {
    icon: Users,
    title: 'Collaborate',
    desc: 'Share comparisons with your team. Add annotations. Get approval — all in one shared workspace.',
    visual: 'collaboration',
  },
  {
    icon: Plug,
    title: 'Export & Integrate',
    desc: 'Export to Excel, CSV, or JSON. Sync with QuickBooks, Xero, or your ERP. No rekeying.',
    visual: 'integrations',
  },
];

export default function Product() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

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
                PRODUCT
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-h1 text-white mb-4"
              >
                The freight quote normalizer built for logistics teams
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-lg text-slate-300 mb-8"
              >
                From chaotic inbox to clean comparison in 60 seconds. See every
                surcharge. Know every trend. Make every decision with confidence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/waitlist"
                  className="px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press"
                >
                  Start free trial
                </Link>
                <Link
                  to="/pricing"
                  className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-all btn-press"
                >
                  View pricing
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
                src="/images/dashboard.jpg"
                alt="CargoLens Dashboard"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#0a0a0f] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <StepSection key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a0a0f] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to see it in action?</h2>
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

function StepSection({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className={isReversed ? 'lg:order-2' : ''}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center">
              <step.icon size={20} className="text-blue" />
            </div>
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              Step {index + 1}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
          <p className="text-base text-white/60 leading-relaxed mb-6">{step.desc}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`bg-[#14141e] rounded-2xl border border-white/[0.06] p-6 ${isReversed ? 'lg:order-1' : ''}`}
      >
        {step.visual === 'upload' && (
          <div className="border-2 border-dashed border-indigo-500/30 rounded-xl p-8 text-center bg-indigo-500/5">
            <Upload size={32} className="mx-auto mb-2 text-indigo-400" />
            <p className="text-sm text-white/50">Drop PDF, Excel, or email here</p>
            <div className="flex justify-center gap-2 mt-4">
              {['PDF', 'XLSX', 'MSG'].map((fmt) => (
                <span key={fmt} className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-white/50 border border-white/10">
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        )}

        {step.visual === 'extraction' && (
          <div className="space-y-2">
            {[
              { field: 'Origin', value: 'CNSHA', conf: 0.98 },
              { field: 'Destination', value: 'USLGB', conf: 0.97 },
              { field: 'Base Rate', value: '$1,200', conf: 0.95 },
              { field: 'FSC', value: '$350', conf: 0.88 },
              { field: 'BAF', value: '$400', conf: 0.96 },
              { field: 'DTHC', value: '$280', conf: 0.94 },
            ].map((item) => (
              <div key={item.field} className="flex items-center justify-between bg-[#0a0a0f] rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <span className="text-sm text-white/80">{item.field}:</span>
                  <span className="text-sm font-mono text-white">{item.value}</span>
                </div>
                <ConfidenceBadge level={item.conf > 0.95 ? 'high' : 'medium'} value={item.conf} />
              </div>
            ))}
          </div>
        )}

        {step.visual === 'comparison' && (
          <div className="overflow-x-auto">
            <ComparisonTable />
          </div>
        )}

        {step.visual === 'analytics' && (
          <div>
            <svg viewBox="0 0 400 100" className="w-full" preserveAspectRatio="none">
              <motion.path
                d="M0 80 L40 70 L80 75 L120 60 L160 55 L200 45 L240 50 L280 35 L320 30 L360 25 L400 15"
                fill="none"
                stroke="#1A56DB"
                strokeWidth={2}
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5 }}
              />
              <circle cx="400" cy="15" r="4" fill="#EF4444" />
            </svg>
            <div className="flex items-center justify-between mt-2 text-xs text-muted">
              <span>6 months ago</span>
              <span className="text-red font-medium flex items-center gap-1">
                <AlertTriangle size={10} /> 22% above average
              </span>
              <span>Now</span>
            </div>
          </div>
        )}

        {step.visual === 'collaboration' && (
          <div className="flex items-center justify-center gap-4 py-4">
            {['JD', 'SM', 'AP', 'LK'].map((initials, i) => (
              <motion.div
                key={initials}
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
                className="w-12 h-12 rounded-full bg-blue/10 border-2 border-blue/30 flex items-center justify-center"
              >
                <span className="text-sm font-semibold text-blue">{initials}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.9, type: 'spring' }}
              className="w-12 h-12 rounded-full border-2 border-dashed border-border flex items-center justify-center"
            >
              <span className="text-muted text-lg">+</span>
            </motion.div>
          </div>
        )}

        {step.visual === 'integrations' && (
          <div className="grid grid-cols-3 gap-3">
            {['QuickBooks', 'Xero', 'Excel', 'CSV', 'JSON', 'API'].map((name, i) => (
              <motion.div
                key={name}
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                className="bg-[#0a0a0f] rounded-lg px-3 py-2 text-center border border-white/[0.06]"
              >
                <span className="text-xs font-medium text-white/70">{name}</span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
