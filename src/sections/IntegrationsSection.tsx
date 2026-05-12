import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * @intent Dark integrations section. Same integration names from existing component.
 * Layout updated to flex row per design system: 2×3 icon grid LEFT, content RIGHT.
 * Icon containers use the .integration-icon glass style from index.css.
 */

const integrations = [
  { name: 'QuickBooks', abbr: 'QB', color: '#2CA01C' },
  { name: 'Xero',       abbr: 'Xr', color: '#13B5EA' },
  { name: 'GoFreight',  abbr: 'GF', color: '#FF6B35' },
  { name: 'Slack',      abbr: 'Sl', color: '#4A154B' },
  { name: 'NetSuite',   abbr: 'NS', color: '#2F9FD7' },
  { name: 'SAP',        abbr: 'SP', color: '#0070F2' },
];

export default function IntegrationsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-[#12121a] py-24">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: 2×3 icon grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4 shrink-0"
          >
            {integrations.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="integration-icon group cursor-pointer flex flex-col gap-1"
                title={item.name}
              >
                <span
                  className="text-lg font-bold transition-colors duration-200"
                  style={{ color: item.color, filter: 'brightness(1.2)' }}
                >
                  {item.abbr}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="font-bold text-white mb-4"
              style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
            >
              Connects with your existing stack
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-[400px]">
              No rekeying. Quote data flows directly to your ERP, TMS, and accounting system.
              CargoLens works with the tools your team already uses.
            </p>
            <Link
              to="/integrations"
              className="text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors inline-flex items-center gap-1"
            >
              See all integrations →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
