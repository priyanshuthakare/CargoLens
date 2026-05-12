import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Table2, Mail, Image, MessageCircle, AlertTriangle, ArrowRight, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ConfidenceBadge from '@/components/ConfidenceBadge';

/* ─── Feature 1: Multi-Format Ingestion ─── */

const formatIcons = [
  { Icon: FileText, label: 'PDF', color: '#EF4444' },
  { Icon: Table2, label: 'Excel', color: '#10B981' },
  { Icon: FileText, label: 'Word', color: '#1A56DB' },
  { Icon: Mail, label: 'Email', color: '#F59E0B' },
  { Icon: Image, label: 'PNG/JPG', color: '#8B5CF6' },
  { Icon: MessageCircle, label: 'WhatsApp', color: '#10B981' },
];

function FeatureIngestion() {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
      <div>
        <p className="section-label mb-3">MULTI-FORMAT INGESTION</p>
        <h2 className="text-white font-bold mb-4" style={{fontSize:'clamp(24px,3vw,36px)',lineHeight:'1.2',letterSpacing:'-0.01em'}}>
          Quotes arrive in chaos. We handle all of it.
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-6">
          PDFs with merged cells. Excel files structured for no one but the forwarder.
          Email bodies. Scanned images. WhatsApp messages. CargoLens ingests all formats
          without configuration.
        </p>
        <div className="flex flex-wrap gap-2">
          {formatIcons.map((f, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white/60"
            >
              {f.label}
            </span>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="relative h-64 flex items-center justify-center">
        {formatIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="absolute cursor-pointer transition-all duration-300"
            style={{
              left: `${15 + (i % 3) * 30}%`,
              top: `${15 + Math.floor(i / 3) * 50}%`,
              transform:
                hoveredIdx === i
                  ? 'scale(1.3)'
                  : hoveredIdx !== null
                  ? 'scale(0.85)'
                  : 'scale(1)',
              opacity: hoveredIdx !== null && hoveredIdx !== i ? 0.4 : 1,
            }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/[0.06] flex flex-col items-center justify-center gap-1"
            >
              <item.Icon size={24} style={{ color: item.color }} />
              <span className="text-[10px] font-medium text-white/50">{item.label}</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Center processing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.5)]">
            <ArrowRight size={20} className="text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Feature 2: Surcharge Detection ─── */

function FeatureSurcharge() {
  const { ref, isVisible } = useScrollReveal();
  const [scanned, setScanned] = useState(false);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
      {/* Visual left */}
      <div
        className="relative rounded-2xl overflow-hidden bg-[#1a1a24] border border-white/[0.06] min-h-[300px] flex items-center justify-center cursor-pointer"
        onClick={() => setScanned(!scanned)}
      >
        {/* PDF side */}
        <motion.div
          animate={{ opacity: scanned ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#12121a] p-6 flex flex-col"
        >
          <div className="text-xs text-white/40 mb-2">Freight Quote - Global Forwarding.pdf</div>
          <div className="space-y-2 opacity-40">
            <div className="h-3 bg-white/10 rounded w-3/4" />
            <div className="h-3 bg-white/10 rounded w-1/2" />
            <div className="h-3 bg-white/10 rounded w-5/6" />
          </div>
          <div className="mt-auto pt-4 border-t border-white/[0.06]">
            <p className="text-[10px] text-white/30 italic blur-[1px]">
              *Peak season surcharge applies to all shipments departing...
            </p>
          </div>
        </motion.div>

        {/* Scanner line */}
        {isVisible && !scanned && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="absolute left-0 right-0 h-1 z-20"
            style={{
              background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
              boxShadow: '0 0 10px rgba(139,92,246,0.5), 0 0 20px rgba(139,92,246,0.3)',
            }}
          />
        )}

        {/* Extracted side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: scanned ? 1 : 0, scale: scanned ? 1 : 0.9 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 p-6 flex flex-col items-center justify-center"
        >
          <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-4 max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                <span className="text-[#10b981] text-xs">✓</span>
              </span>
              <span className="text-sm font-semibold text-[#10b981]">Surcharge Found</span>
            </div>
            <p className="text-sm text-white/80 font-mono">
              Peak Season Surcharge: <span className="font-bold">$275</span>
            </p>
            <p className="text-xs text-white/40 mt-1">extracted from footnote</p>
          </div>
          <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2 flex items-center gap-2">
            <AlertTriangle size={14} className="text-amber-400" />
            <span className="text-xs text-amber-400 font-medium">You would have missed this</span>
          </div>
          <div className="mt-2 text-xs text-[#10b981] font-mono">
            +$275 identified
          </div>
        </motion.div>
      </div>

      {/* Text right */}
      <div>
        <p className="section-label mb-3">SURCHARGE DETECTION</p>
        <h2 className="text-white font-bold mb-4" style={{fontSize:'clamp(24px,3vw,36px)',lineHeight:'1.2',letterSpacing:'-0.01em'}}>
          The fine print costs you money. We read it for you.
        </h2>
        <p className="text-white/60 text-base leading-relaxed">
          Hidden surcharges — BAF, GRI, peak season fees, chassis splits — account for
          5–15% cost variance. CargoLens surfaces every charge as a named line item, not
          buried in footnotes where it gets missed.
        </p>
      </div>
    </div>
  );
}

/* ─── Feature 3: Intelligent Normalization ─── */

function FeatureNormalization() {
  const { ref, isVisible } = useScrollReveal();
  const [converted, setConverted] = useState(false);

  const quotes = [
    { raw: 'EUR 1,200/TEU', converted: '$1,308/TEU' },
    { raw: 'USD 85/CBM', converted: '$1,275/TEU' },
    { raw: 'SGD 450/pallet', converted: '$1,847/TEU' },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
      {/* Text left */}
      <div>
        <p className="section-label mb-3">INTELLIGENT NORMALIZATION</p>
        <h2 className="text-white font-bold mb-4" style={{fontSize:'clamp(24px,3vw,36px)',lineHeight:'1.2',letterSpacing:'-0.01em'}}>Apples to apples. Finally.</h2>
        <p className="text-white/60 text-base leading-relaxed">
          Forwarder A quotes per CBM. Forwarder B per TEU. Forwarder C in EUR. CargoLens
          converts everything to a single basis so your comparison is real — not guesswork.
        </p>
      </div>

      {/* Visual right */}
      <div
        className="bg-[#1a1a24] rounded-2xl border border-white/[0.06] p-6 cursor-pointer"
        onClick={() => setConverted(!converted)}
      >
        <div className="space-y-4">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="flex items-center gap-4"
            >
              <motion.div
                animate={{ x: converted ? 0 : [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className={`px-4 py-3 rounded-lg font-mono text-sm transition-all duration-500 ${
                  converted ? 'bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981]' : 'bg-white/[0.04] border border-white/[0.06] text-white/80'
                }`}
              >
                {converted ? q.converted : q.raw}
              </motion.div>
              {i < quotes.length - 1 && (
                <ArrowRight size={16} className="text-muted shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

        {converted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 pt-4 border-t border-white/[0.06]"
          >
            <p className="text-xs text-white/40 text-center">
              All converted to USD per TEU equivalent
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─── Feature 4: Historical Lane Intelligence ─── */

function FeatureAnalytics() {
  const { ref, isVisible } = useScrollReveal();

  // Sparkline data points
  const points = [2800, 2950, 3100, 3050, 3200, 3350, 3500, 3400, 3600, 3800, 3700, 4100];
  const maxVal = Math.max(...points);
  const minVal = Math.min(...points);
  const avg = Math.round(points.reduce((a, b) => a + b, 0) / points.length);

  // Build SVG path
  const width = 400;
  const height = 120;
  const padding = 10;
  const xStep = (width - padding * 2) / (points.length - 1);
  const yScale = (val: number) => height - padding - ((val - minVal) / (maxVal - minVal)) * (height - padding * 2);

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${padding + i * xStep} ${yScale(p)}`)
    .join(' ');

  const avgY = yScale(avg);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
      {/* Visual left */}
      <div className="bg-[#1a1a24] rounded-2xl border border-white/[0.06] p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider">Shanghai → Los Angeles</p>
            <p className="text-lg font-semibold text-white">Lane: CNSHA-USLGB</p>
          </div>
          <ConfidenceBadge level="medium" value={0.92} />
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
          {/* Average line */}
          <line
            x1={padding}
            y1={avgY}
            x2={width - padding}
            y2={avgY}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
          <text x={width - padding} y={avgY - 4} textAnchor="end" fill="rgba(255,255,255,0.35)" fontSize="10">
            90-day avg: ${avg.toLocaleString()}
          </text>

          {/* Trend line */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#6366f1"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Current quote dot */}
          <motion.circle
            cx={padding + (points.length - 1) * xStep}
            cy={yScale(points[points.length - 1])}
            r={6}
            fill="#EF4444"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: [0, 1.2, 1] } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.circle
            cx={padding + (points.length - 1) * xStep}
            cy={yScale(points[points.length - 1])}
            r={6}
            fill="#EF4444"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={isVisible ? { scale: [1, 2], opacity: [0.5, 0] } : {}}
            transition={{ duration: 1.5, delay: 2, repeat: Infinity }}
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-3 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 flex items-center gap-2"
        >
          <TrendingUp size={14} className="text-red-400" />
          <span className="text-xs text-red-400 font-medium">
            22% above 90-day average — unusual
          </span>
        </motion.div>
      </div>

      {/* Text right */}
      <div>
        <p className="section-label mb-3">HISTORICAL LANE INTELLIGENCE</p>
        <h2 className="text-white font-bold mb-4" style={{fontSize:'clamp(24px,3vw,36px)',lineHeight:'1.2',letterSpacing:'-0.01em'}}>
          Know if that rate is good or a red flag.
        </h2>
        <p className="text-white/60 text-base leading-relaxed">
          Every normalized quote is stored against its lane. CargoLens builds your personal
          rate history — so when a forwarder quotes 40% above last quarter, you see it instantly.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */

export default function FeaturesSection() {
  return (
    <section className="bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureIngestion />
        <FeatureSurcharge />
        <FeatureNormalization />
        <FeatureAnalytics />
      </div>
    </section>
  );
}
