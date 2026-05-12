import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '1 hr/day', label: 'spent re-typing quotes per coordinator' },
  { value: '5\u201315%', label: 'cost variance from missed surcharges (quoted vs. invoiced)' },
  { value: '4+ hrs', label: 'average time from quote receipt to carrier decision' },
];

const timeline = [
  { time: '8:30 AM', activity: 'Check email for overnight quotes from 3 Asian forwarders (PDF attachments)' },
  { time: '9:00 AM', activity: 'Open PDF in one window, Excel master sheet in another. Manually type origin, destination, rate, validity, FSC, BAF, detention, chassis.' },
  { time: '9:45 AM', activity: 'Receive WhatsApp from local trucker with spot rate. Screenshot and paste into email to self.' },
  { time: '10:30 AM', activity: 'Forwarder sends revised quote (v2). Find original in Excel, mark superseded, re-enter new data.' },
  { time: '11:00 AM', activity: 'Ops manager asks for "best option for Shanghai\u2013LA this week." Scroll through Excel, manually compare 5 quotes with different units.' },
  { time: '2:00 PM', activity: 'Finance questions why invoice was $3,200 higher than quoted rate. Dig through email. Discover "peak season surcharge" was in footnote.' },
  { time: '4:30 PM', activity: 'Email comparison table to sales team for client quote preparation. They retype everything into their own template.' },
];

export default function ProblemSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          THE PROBLEM
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-h1 text-white mb-12 max-w-2xl"
        >
          Your team is a data entry machine. It shouldn&apos;t be.
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="relative bg-[#1E293B] rounded-feature p-6 overflow-hidden"
            >
              {/* Cyan wipe effect */}
              <motion.div
                initial={{ left: '-100%' }}
                animate={isVisible ? { left: '200%' } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.2, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent w-1/2"
              />
              <div className="relative z-10">
                <p className="text-3xl sm:text-4xl font-bold text-indigo-400 font-mono mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Patty&apos;s day before CargoLens
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
                className="min-w-[260px] max-w-[260px] bg-[#1E293B] rounded-lg p-4 border-l-4 border-l-red-400 snap-start card-hover"
              >
                <p className="text-xs font-mono text-red-400 mb-2">{item.time}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.activity}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-cyan/30 text-[80px] font-serif leading-none">
            &ldquo;
          </span>
          <p className="text-xl sm:text-2xl text-slate-300 italic leading-relaxed mb-4 relative z-10">
            I found out we overpaid $8,000 last quarter because I missed a GRI in the footnote.
          </p>
          <cite className="text-sm text-slate-500 not-italic relative z-10">
            — Logistics Coordinator, Mid-sized Importer
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
