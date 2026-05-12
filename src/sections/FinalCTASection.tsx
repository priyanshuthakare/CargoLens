import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * @intent Dark final CTA section. Same copy from PRD.
 * Visual: dark bg, gradient button matching hero CTA.
 */

export default function FinalCTASection() {
  const { ref, isVisible } = useScrollReveal();

  const words = 'Stop overpaying for freight you already quoted.'.split(' ');

  return (
    <section ref={ref} className="bg-[#0a0a0f] py-28 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="font-bold text-white mb-6"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.04 * i }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Join 200+ procurement teams catching hidden surcharges and making faster carrier decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/waitlist"
            className="gradient-btn inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white"
          >
            Start free — 10 quotes, no credit card
          </Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Demo booking coming soon!');
            }}
            className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:bg-white/[0.06] hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Book a 20-min demo →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
