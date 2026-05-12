import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * @intent Dark testimonials section. Same content/testimonials as before.
 * Visual design: dark bg, glassmorphic card, purple quote icon, purple
 * pagination dots, avatar initials circle. Per desgin_implementation.md.
 */

const testimonials = [
  {
    quote:
      "I used to spend an hour every morning retyping quotes. Now it's 5 minutes. The surcharge detection alone paid for 6 months of the subscription.",
    name: 'Logistics Coordinator',
    role: 'Mid-sized Importer',
    initial: 'LC',
  },
  {
    quote:
      "We caught a $3,800 GRI our team missed. CargoLens paid for itself in week one. I approved the Professional plan the same day.",
    name: 'Operations Manager',
    role: '3PL Provider',
    initial: 'OM',
  },
  {
    quote:
      "The ROI summary in the comparison report is exactly what I needed to approve the spend. Signed off in one meeting.",
    name: 'CFO',
    role: 'Manufacturing Company',
    initial: 'CF',
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="bg-[#0a0a0f] py-24">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow-label mb-4">TESTIMONIALS</p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
          >
            Trusted by logistics teams worldwide
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="card-dark p-8 sm:p-12"
            >
              {/* Large quote mark */}
              <Quote
                size={48}
                className="mb-6"
                style={{ color: '#8b5cf6', opacity: 0.5 }}
              />

              {/* Quote text */}
              <p className="text-xl font-medium text-white/90 leading-relaxed mb-8">
                "{testimonials[active].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">{testimonials[active].initial}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonials[active].name}</p>
                  <p className="text-xs text-white/50">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-200"
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: i === active ? '#8b5cf6' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
