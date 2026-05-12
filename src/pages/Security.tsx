import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Lock, Shield, Database, Users, ClipboardList, Mail, CheckCircle, FileText, Bug } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const sections = [
  {
    icon: Lock,
    title: 'Encryption',
    body: 'AES-256 at rest. TLS 1.3 in transit. Every byte of your quote data is encrypted from the moment it enters our system until it reaches your browser.',
    diagram: true,
  },
  {
    icon: Shield,
    title: 'Authentication',
    body: 'OAuth 2.0 via Google and Microsoft. Optional MFA on all plans. SSO via SAML/OIDC on Team and Enterprise. No passwords stored — ever.',
    diagram: false,
  },
  {
    icon: Database,
    title: 'Data Isolation',
    body: 'Single-tenant storage per customer. Your data is never co-mingled with another customer\'s. Each workspace runs in its own isolated database schema.',
    diagram: true,
  },
  {
    icon: Users,
    title: 'Access Control',
    body: 'Role-based access control: Owner, Admin, Member, Viewer. Granular permissions on quotes, comparisons, and settings. Permission changes are logged immutably.',
    diagram: false,
  },
  {
    icon: ClipboardList,
    title: 'Audit Logging',
    body: 'Immutable log of all access, modification, and export events. Downloadable on request. Retained for 7 years on Enterprise. Who touched what, when — always known.',
    diagram: false,
  },
  {
    icon: Mail,
    title: 'Email Security',
    body: 'Dedicated subdomain per customer. SPF, DKIM, and DMARC enforced. No email content is retained beyond the extraction window (24 hours by default).',
    diagram: false,
  },
];

const complianceItems = [
  { name: 'SOC 2 Type II', status: 'In Progress', target: 'Month 9, 2026' },
  { name: 'GDPR', status: 'Live', target: 'At launch' },
  { name: 'CCPA', status: 'Live', target: 'At launch' },
  { name: 'ITAR/EAR', status: 'On Request', target: 'Enterprise' },
];

export default function Security() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: sectionsRef, isVisible: sectionsVisible } = useScrollReveal();
  const { ref: complianceRef, isVisible: complianceVisible } = useScrollReveal();

  return (
    <main className="pt-16">
      {/* Hero */}
      <section ref={heroRef} className="bg-navy py-24 grid-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center mx-auto mb-6"
          >
            <Shield size={32} className="text-cyan" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 text-white mb-4"
          >
            Security &amp; Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-slate-300 max-w-2xl mx-auto"
          >
            Enterprise-grade security architecture designed to unblock procurement gates,
            not just check compliance boxes.
          </motion.p>
        </div>
      </section>

      {/* AI Policy Banner */}
      <section className="bg-[#0a0a0f] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-indigo-500/5 border-2 border-indigo-500/20 rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
              <CheckCircle size={20} className="text-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">AI &amp; Data Policy</h3>
              <p className="text-sm text-white/60">
                No quote data is used to train our models without your explicit opt-in. Period.
                Your freight data belongs to you — always.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Sections */}
      <section ref={sectionsRef} className="bg-bg py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={sectionsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center">
                      <s.icon size={20} className="text-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                  </div>
                  <p className="text-base text-white/60 leading-relaxed">{s.body}</p>
                </div>

                {s.diagram ? (
                  <div className={`bg-[#14141e] rounded-2xl border border-white/[0.06] p-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {s.title === 'Encryption' ? (
                      <div className="flex items-center justify-center gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-xl bg-navy flex items-center justify-center mb-2">
                            <Database size={24} className="text-cyan" />
                          </div>
                          <p className="text-xs text-muted">At Rest</p>
                          <p className="text-xs font-mono text-blue">AES-256</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-12 h-0.5 bg-cyan"
                          />
                          <Lock size={14} className="text-cyan" />
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="w-12 h-0.5 bg-cyan"
                          />
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-xl bg-navy flex items-center justify-center mb-2">
                            <Mail size={24} className="text-cyan" />
                          </div>
                          <p className="text-xs text-muted">In Transit</p>
                          <p className="text-xs font-mono text-blue">TLS 1.3</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-20 h-20 rounded-xl bg-navy flex items-center justify-center"
                        >
                          <Database size={28} className="text-cyan" />
                        </motion.div>
                        <div className="flex gap-2">
                          {[1, 2, 3].map((box) => (
                            <motion.div
                              key={box}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.3 + box * 0.15, type: 'spring' }}
                              className="w-14 h-14 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center"
                            >
                              <span className="text-xs font-mono text-blue">T{box}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={`bg-[#14141e] rounded-2xl border border-white/[0.06] p-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-3">
                        {['Owner', 'Admin', 'Member', 'Viewer'].map((role) => (
                          <div key={role} className="bg-[#0a0a0f] rounded-lg px-3 py-2 text-center">
                            <p className="text-xs font-medium text-white/80">{role}</p>
                            <div className="flex gap-1 justify-center mt-1">
                              {[1, 2, 3].map((d) => (
                                <div
                                  key={d}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    role === 'Viewer' && d > 1 ? 'bg-white/10' : 'bg-green'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Roadmap */}
      <section ref={complianceRef} className="bg-[#0d0d16] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={complianceVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-10 text-center"
          >
            Compliance Roadmap
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border">
              <motion.div
                initial={{ height: '0%' }}
                animate={complianceVisible ? { height: '100%' } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="w-full bg-cyan"
              />
            </div>

            <div className="space-y-6">
              {complianceItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={complianceVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="relative pl-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={complianceVisible ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.2, type: 'spring' }}
                    className="absolute left-2 top-1 w-5 h-5 rounded-full bg-cyan border-4 border-surface"
                  />
                  <div className="bg-[#14141e] rounded-xl p-4 border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        item.status === 'Live' ? 'bg-green/10 text-green' :
                        item.status === 'In Progress' ? 'bg-amber/10 text-amber' :
                        'bg-blue/10 text-blue'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-white/40">Target: {item.target}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DPA + Responsible Disclosure */}
      <section className="bg-[#0a0a0f] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#14141e] rounded-2xl border border-white/[0.06] p-6"
            >
              <FileText size={24} className="text-blue mb-3" />
              <h3 className="font-semibold text-white mb-2">Data Processing Agreement</h3>
              <p className="text-sm text-white/60 mb-4">
                Download our DPA for your legal team. Standard GDPR-compliant terms.
              </p>
              <button
                onClick={() => alert('DPA download coming soon!')}
                className="text-sm text-blue font-medium hover:underline"
              >
                Download DPA (PDF)
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#14141e] rounded-2xl border border-white/[0.06] p-6"
            >
              <Bug size={24} className="text-blue mb-3" />
              <h3 className="font-semibold text-white mb-2">Responsible Disclosure</h3>
              <p className="text-sm text-white/60 mb-4">
                Found a vulnerability? We take security seriously and appreciate your help.
              </p>
              <a href="mailto:security@cargolens.io" className="text-sm text-blue font-medium hover:underline">
                security@cargolens.io
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0a0a0f] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Questions about security?</h2>
          <p className="text-white/60 mb-8">Our security team is happy to walk you through our architecture.</p>
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            Contact security team
          </Link>
        </div>
      </section>
    </main>
  );
}
