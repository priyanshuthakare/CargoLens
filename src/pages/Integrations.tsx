import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const integrations = [
  {
    name: 'QuickBooks',
    category: 'Accounting',
    status: 'Live',
    desc: 'Sync normalized quote data directly to QuickBooks as bills and purchase orders. Eliminate double entry.',
    features: ['Auto-create bills from quotes', 'Match vendors to forwarders', 'Sync payment status'],
  },
  {
    name: 'Xero',
    category: 'Accounting',
    status: 'Live',
    desc: 'Two-way sync with Xero. Quotes become bills. Payments update quote status automatically.',
    features: ['Draft bills from comparisons', 'Track freight spend by lane', 'Reconcile invoices'],
  },
  {
    name: 'GoFreight',
    category: 'TMS',
    status: 'Beta',
    desc: 'Push normalized quotes directly to GoFreight for booking execution. Quote to booking in one click.',
    features: ['Send winner quote to GoFreight', 'Auto-populate booking fields', 'Track shipment status'],
  },
  {
    name: 'NetSuite',
    category: 'ERP',
    status: 'Beta',
    desc: 'Enterprise-grade integration with NetSuite. Purchase orders, vendor management, and spend analytics.',
    features: ['Create POs from comparisons', 'Vendor rate history', 'Custom field mapping'],
  },
  {
    name: 'SAP',
    category: 'ERP',
    status: 'On Request',
    desc: 'Custom SAP integration for enterprise deployments. Connect to your existing procurement module.',
    features: ['OData API connectivity', 'Custom module integration', 'Dedicated implementation'],
  },
  {
    name: 'Slack',
    category: 'Collaboration',
    status: 'Live',
    desc: 'Get notified in Slack when quotes arrive, comparisons are ready, or outliers are detected.',
    features: ['Quote arrival notifications', 'Comparison ready alerts', 'Approval request pings'],
  },
];

export default function Integrations() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-16">
      {/* Hero */}
      <section ref={ref} className="bg-navy py-20 grid-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4"
          >
            INTEGRATIONS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 text-white mb-4"
          >
            Connects with your existing stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-slate-300 max-w-2xl"
          >
            No rekeying. Quote data flows directly to your ERP, TMS, and accounting system.
          </motion.p>
        </div>
      </section>

      {/* Integration Cards */}
      <section className="bg-[#0a0a0f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="bg-[#14141e] rounded-2xl border border-white/[0.06] p-6 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue">{integration.name.slice(0, 2)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{integration.name}</h3>
                      <span className="text-xs text-white/50">{integration.category}</span>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    integration.status === 'Live' ? 'bg-green/10 text-green' :
                    integration.status === 'Beta' ? 'bg-amber/10 text-amber' :
                    'bg-blue/10 text-blue'
                  }`}>
                    {integration.status}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-4">{integration.desc}</p>
                <ul className="space-y-1 mb-4">
                  {integration.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <Check size={14} className="text-emerald-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => alert('Integration setup coming soon!')}
                  className="text-sm text-blue font-medium inline-flex items-center gap-1 hover:underline"
                >
                  Learn more <ExternalLink size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d16] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom integration?</h2>
          <p className="text-white/60 mb-8">We are always adding new integrations. Let us know what you need.</p>
          <Link
            to="/waitlist"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            Request integration <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
