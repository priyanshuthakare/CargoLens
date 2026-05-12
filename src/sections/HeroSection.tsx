import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import ComparisonTable from '@/components/ComparisonTable';

/**
 * @intent Dark premium hero section with aurora gradient background, centered
 * text block, and glassmorphic dashboard preview visual below CTA.
 * All copy and CTAs are original CargoLens content from the PRD.
 * Layout/visual design follows desgin_implementation.md spec.
 */
export default function HeroSection() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showDemoModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showDemoModal]);

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden aurora-bg grid-overlay min-h-screen">
        {/* Light ray accents */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(99,102,241,0.03) 0%, transparent 50%), ' +
              'linear-gradient(225deg, rgba(236,72,153,0.03) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center pt-40 pb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] text-white/80 text-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              Now in Beta · Join 200+ logistics teams
            </span>
          </motion.div>

          {/* H1 — CargoLens copy from PRD */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-bold leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
          >
            Every freight quote.{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              One format.
            </span>{' '}
            Zero typing.
          </motion.h1>

          {/* Subtitle — PRD copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/60 text-lg leading-relaxed max-w-[560px] mx-auto mb-10"
          >
            CargoLens uses freight-trained AI to extract, normalize, and compare quotes from
            PDFs, Excel, emails — regardless of format. Catch hidden surcharges and make
            decisions in minutes, not hours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/waitlist"
              className="gradient-btn inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white"
            >
              Start free — 10 quotes/month, no card
            </Link>
            <button
              onClick={() => setShowDemoModal(true)}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:bg-white/[0.06] hover:border-white/30 hover:text-white transition-all duration-200"
            >
              <Play size={16} className="text-white/60" />
              Watch 2-min demo
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <span className="text-xs text-white/30 uppercase tracking-wider">Trusted by teams at</span>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {['Acme Logistics', 'GlobalShip', 'FreightCo', 'PacificTrade'].map((name) => (
                <span key={name} className="text-xs font-semibold text-white/25 uppercase tracking-wider">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── Dashboard Preview (Glassmorphic Visual) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 pb-24 animate-float-dashboard"
        >
          {/* Glow behind dashboard */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Glass frame */}
          <div className="glass-card p-4 sm:p-6 relative overflow-hidden">
            {/* Top inner highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="flex-1 mx-3 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center px-3">
                <span className="text-[11px] text-white/30">app.cargolens.io/compare</span>
              </div>
            </div>

            {/* ComparisonTable inside glass frame — existing component */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#12121a]">
              <ComparisonTable />
            </div>

            {/* Toast badge */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="absolute right-4 top-20 bg-[#1a1a24] border border-amber-500/30 rounded-xl shadow-xl px-4 py-3 max-w-[220px]"
            >
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-amber-400 text-xs font-bold">!</span>
                </span>
                <p className="text-xs text-white/80">
                  <span className="font-semibold text-amber-400">BAF $425</span> extracted from footnote — would have been missed
                </p>
              </div>
            </motion.div>
          </div>

          {/* METRIX pill */}
          <div className="flex justify-center mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-[11px] uppercase tracking-[0.1em] text-white/30 font-medium">
              <span className="w-1 h-1 rounded-full bg-white/20" />
              METRIX
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/15 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/30"
            />
          </div>
        </motion.div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowDemoModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#12121a] border border-white/[0.08] rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/[0.06] flex justify-between items-center">
              <h3 className="font-semibold text-white">CargoLens Demo</h3>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-[#0a0a0f] flex items-center justify-center">
              <div className="text-center text-white/40">
                <Play size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-sm">Demo video loading...</p>
                <p className="text-xs mt-2 text-white/30">Contact sales for a live demo</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
