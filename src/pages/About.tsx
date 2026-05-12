import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-16">
      {/* Hero */}
      <section ref={ref} className="bg-navy py-24 grid-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h1 text-white mb-6"
          >
            Built by logistics people, for logistics people
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-slate-300 max-w-2xl mx-auto"
          >
            CargoLens was born from watching too many logistics coordinators spend their
            mornings retyping data that a machine should read. We decided to fix that.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0a0a0f] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Mission', text: 'Eliminate the $12+ billion annual waste in logistics procurement caused by manual quote comparison and hidden surcharges.' },
              { icon: Eye, title: 'Vision', text: 'Become the universal translation layer for logistics procurement — where any freight quote becomes instantly structured, comparable, and actionable.' },
              { icon: Heart, title: 'Values', text: 'Accuracy over speed. Freight domain depth. Zero data lock-in. Privacy by design. Transparent pricing. Human-in-the-loop always.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.15 }}
                className="bg-[#14141e] rounded-2xl border border-white/[0.06] p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-blue" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#0d0d16] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Our story</h2>
            <div className="space-y-4 text-base text-white/60 leading-relaxed">
              <p>
                CargoLens started with a simple observation: logistics coordinators — the people who
                actually move the world&apos;s goods — spend an inordinate amount of time doing data entry.
                Not analyzing, not negotiating, not optimizing. Just retyping numbers from one format into another.
              </p>
              <p>
                We spoke with over 100 logistics professionals across three continents. The pattern was
                universal. Quotes arrive as PDFs, Excel files, emails, WhatsApp messages. Each forwarder
                uses a different template. Critical surcharges hide in footnotes. Unit conversions are
                done manually, often incorrectly.
              </p>
              <p>
                The result? Teams overpay by 5-15% simply because they cannot compare quotes accurately.
                A missed GRI here, an overlooked detention charge there — it adds up to billions in waste
                across the industry.
              </p>
              <p>
                We built CargoLens to change that. Our freight-trained AI reads any quote format, extracts
                every data point, normalizes units and currencies, and presents a clean comparison table —
                in 60 seconds, not 60 minutes.
              </p>
              <p>
                The product is still early. But the response from our beta users has been overwhelming.
                One coordinator told us she got her mornings back. An operations manager caught a $3,800
                surcharge his team had missed. A CFO approved the budget in one meeting because the ROI
                was obvious.
              </p>
              <p className="text-text font-medium text-white">
                This is just the beginning. Every freight quote deserves to be understood.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#0a0a0f] py-24" id="careers">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Join the team</h2>
            <p className="text-base text-white/60 max-w-xl mx-auto mb-8">
              We are hiring across engineering, design, and customer success.
              If you care about logistics and believe AI should make people more effective, not replace them —
              we would love to hear from you.
            </p>
            <a
              href="mailto:careers@cargolens.io"
              className="inline-flex items-center px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press"
            >
              View open roles <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#0d0d16] py-16" id="contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-white/60 mb-6">Questions, partnerships, or just want to say hello?</p>
          <a href="mailto:hello@cargolens.io" className="text-blue text-lg font-medium hover:underline">
            hello@cargolens.io
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0f] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to join the mission?</h2>
          <p className="text-white/60 mb-8">Start free with 10 quotes per month.</p>
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
