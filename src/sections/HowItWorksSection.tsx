import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Cpu, SlidersHorizontal, BarChart3, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    icon: Upload,
    title: 'INGEST',
    desc: 'Forward emails, drop PDFs, connect your inbox. Any format, any forwarder.',
  },
  {
    icon: Cpu,
    title: 'EXTRACT',
    desc: 'Freight-trained AI reads every line — base rates, FSC, BAF, detention. Nothing buried.',
  },
  {
    icon: SlidersHorizontal,
    title: 'NORMALIZE',
    desc: 'All units converted to same basis. All currencies to USD. All lanes to UN/LOCODE.',
  },
  {
    icon: BarChart3,
    title: 'COMPARE',
    desc: 'Side-by-side table highlights best total cost, flags outliers, surfaces savings.',
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [showWalkthrough, setShowWalkthrough] = useState(false);

  return (
    <section ref={ref} className="bg-[#12121a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          HOW IT WORKS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-bold mb-16 max-w-xl" style={{fontSize:'clamp(24px,3vw,36px)',lineHeight:'1.2',letterSpacing:'-0.01em'}}
        >
          From chaotic inbox to clean comparison in 60 seconds
        </motion.h2>

        {/* Steps flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-white/[0.06]">
            <motion.div
              initial={{ width: '0%' }}
              animate={isVisible ? { width: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#1a1a24] border-2 border-violet-500/30 flex items-center justify-center">
                <step.icon size={32} className="text-violet-400" />
              </motion.div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Toggle walkthrough */}
        <div className="text-center">
          <button
            onClick={() => setShowWalkthrough(!showWalkthrough)}
            className="inline-flex items-center gap-2 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors"
          >
            See it in action
            <motion.span animate={{ rotate: showWalkthrough ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </div>

        {/* Animated walkthrough */}
        <AnimatePresence>
          {showWalkthrough && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-8 bg-[#1a1a24] rounded-2xl border border-white/[0.06] p-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-6">
                  {/* Upload zone */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-full max-w-sm border-2 border-dashed border-violet-500/30 rounded-xl p-8 text-center bg-violet-500/5"
                  >
                    <Upload size={32} className="mx-auto mb-2 text-violet-400" />
                    <p className="text-sm text-white/50">Drop PDF, Excel, or email here</p>
                  </motion.div>

                  {/* Processing spinner */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
                    className="flex items-center gap-3"
                  >
                     <div className="w-5 h-5 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                     <span className="text-sm text-white/50">Extracting fields...</span>
                  </motion.div>

                  {/* Extracted fields */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="w-full max-w-lg grid grid-cols-2 gap-3"
                  >
                    {['Origin: CNSHA', 'Dest: USLGB', 'Mode: FCL', 'Incoterm: FOB', 'Base Rate: $1,200', 'FSC: $350', 'BAF: $400', 'DTHC: $280'].map((field, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.6 + i * 0.1, type: 'spring', bounce: 0.3 }}
                        className="bg-[#10b981]/10 border border-[#10b981]/20 rounded-md px-3 py-2 text-xs font-mono text-[#10b981]"
                      >
                        ✓ {field}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
