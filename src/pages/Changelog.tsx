import { motion } from 'framer-motion';
import { CheckCircle, Circle, Rocket, Wrench, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const releases = [
  {
    version: 'v1.0.0',
    date: 'May 2026',
    status: 'Upcoming',
    icon: Rocket,
    changes: [
      'Public launch with Free, Starter, Professional, and Team tiers',
      'Multi-format ingestion: PDF, Excel, Word, email, images',
      'Freight-trained AI extraction for 14+ surcharge types',
      'Side-by-side comparison table with outlier detection',
      'Lane-level historical trends and analytics',
      'QuickBooks and Xero integrations',
      'Slack notifications',
    ],
  },
  {
    version: 'v0.9.0',
    date: 'April 2026',
    status: 'Beta',
    icon: Sparkles,
    changes: [
      'Beta release for 200+ logistics teams',
      'Improved extraction accuracy to 94% on average',
      'Added GoFreight TMS integration',
      'New approval workflow system',
      'Enhanced BAF/GRI detection in footnotes',
      'Mobile-responsive dashboard',
    ],
  },
  {
    version: 'v0.8.0',
    date: 'March 2026',
    status: 'Released',
    icon: Wrench,
    changes: [
      'Alpha release with 50 design partners',
      'Core AI extraction pipeline',
      'Email auto-parsing from dedicated inbox',
      'Confidence scoring system',
      'Human-in-the-loop review interface',
      'Excel export functionality',
    ],
  },
  {
    version: 'v0.1.0',
    date: 'January 2026',
    status: 'Released',
    icon: Circle,
    changes: [
      'Initial prototype and proof of concept',
      'Basic PDF and Excel quote parsing',
      'Manual comparison table generation',
      'Founding team assembled',
    ],
  },
];

const roadmap = [
  { quarter: 'Q3 2026', items: ['WhatsApp ingestion', 'NetSuite integration', 'Advanced analytics dashboard', 'Custom report builder'] },
  { quarter: 'Q4 2026', items: ['SAP integration', 'API access for all tiers', 'Multi-language support', 'Team collaboration v2'] },
  { quarter: '2027', items: ['Predictive rate forecasting', 'Automated RFP generation', 'Carrier API integrations', 'Benchmarking network'] },
];

export default function Changelog() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-16">
      {/* Hero */}
      <section ref={ref} className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h1 text-white mb-4"
          >
            Changelog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-slate-300"
          >
            What we shipped, what we are building, and what is coming next.
          </motion.p>
        </div>
      </section>

      {/* Releases */}
      <section className="bg-bg py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {releases.map((release, i) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    release.status === 'Upcoming' ? 'bg-blue/20' :
                    release.status === 'Beta' ? 'bg-amber/20' :
                    'bg-green/20'
                  }`}>
                    <release.icon size={18} className={
                      release.status === 'Upcoming' ? 'text-blue' :
                      release.status === 'Beta' ? 'text-amber' :
                      'text-green'
                    } />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-semibold text-text">{release.version}</h2>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        release.status === 'Upcoming' ? 'bg-blue/10 text-blue' :
                        release.status === 'Beta' ? 'bg-amber/10 text-amber' :
                        'bg-green/10 text-green'
                      }`}>
                        {release.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted">{release.date}</p>
                  </div>
                </div>
                <ul className="ml-14 space-y-2">
                  {release.changes.map((change, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green mt-0.5 shrink-0" />
                      <span className="text-sm text-muted">{change}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-surface py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2 text-text mb-10 text-center"
          >
            Roadmap
          </motion.h2>

          <div className="space-y-8">
            {roadmap.map((period, i) => (
              <motion.div
                key={period.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="bg-bg rounded-feature border border-border p-6"
              >
                <h3 className="text-lg font-semibold text-text mb-4">{period.quarter}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {period.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Circle size={8} className="text-blue shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
