import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ROICalculator from '@/components/ROICalculator';

export default function ROISection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-[#12121a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          CALCULATE YOUR ROI
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-bold mb-12 max-w-xl" style={{fontSize:'clamp(24px,3vw,36px)',lineHeight:'1.2',letterSpacing:'-0.01em'}}>
          See what CargoLens saves your team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a24] rounded-2xl border border-white/[0.06] p-8"
        >
          <ROICalculator />
        </motion.div>
      </div>
    </section>
  );
}
