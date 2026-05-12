import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, useSpring, useTransform } from 'framer-motion';

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsub = display.on('change', (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [display]);

  return <span ref={ref} className="font-mono font-bold text-2xl text-blue">0</span>;
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  prefix?: string;
  suffix?: string;
}

function Slider({ label, value, min, max, step, onChange, prefix = '', suffix = '' }: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-white/80">{label}</label>
        <span className="text-sm font-mono text-blue">
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue to-cyan"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label={label}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md border-2 border-indigo-500 pointer-events-none"
          style={{ left: `calc(${percentage}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-white/40">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [coordinators, setCoordinators] = useState(3);
  const [quotesPerWeek, setQuotesPerWeek] = useState(50);
  const [avgFreightValue, setAvgFreightValue] = useState(5000);

  const hoursSaved = coordinators * quotesPerWeek * 4 * 0.33;
  const quarterlyRecovery = quotesPerWeek * 4 * 13 * avgFreightValue * 0.08 * 0.25;
  const annualCost = 249 * 12;
  const annualSavings = hoursSaved * 12 * 30 + quarterlyRecovery * 4;
  const roi = annualSavings / annualCost;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-8 mb-10">
        <Slider
          label="Coordinators handling quotes"
          value={coordinators}
          min={1}
          max={20}
          step={1}
          onChange={setCoordinators}
        />
        <Slider
          label="Quotes processed per week"
          value={quotesPerWeek}
          min={10}
          max={500}
          step={10}
          onChange={setQuotesPerWeek}
        />
        <Slider
          label="Average freight spend per shipment"
          value={avgFreightValue}
          min={500}
          max={50000}
          step={500}
          onChange={setAvgFreightValue}
          prefix="$"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <motion.div
          key={`hours-${coordinators}-${quotesPerWeek}`}
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#14141e] rounded-xl p-4 text-center border border-white/[0.06]"
        >
          <div className="text-sm text-white/50 mb-1">Hours saved per month</div>
          <AnimatedNumber value={Math.round(hoursSaved)} />
        </motion.div>

        <motion.div
          key={`recovery-${quotesPerWeek}-${avgFreightValue}`}
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#14141e] rounded-xl p-4 text-center border border-white/[0.06]"
        >
          <div className="text-sm text-white/50 mb-1">Missed surcharge recovery</div>
          <div className="flex items-center justify-center gap-0.5">
            <span className="text-lg text-blue">$</span>
            <AnimatedNumber value={Math.round(quarterlyRecovery)} />
            <span className="text-sm text-muted">/qtr</span>
          </div>
        </motion.div>

        <motion.div
          key={`roi-${Math.round(roi)}`}
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-indigo-500/5 rounded-xl p-4 text-center border border-indigo-500/20"
        >
          <div className="text-sm text-white/50 mb-1">Annual ROI</div>
          <div className="flex items-center justify-center gap-0.5">
            <AnimatedNumber value={Math.round(roi)} />
            <span className="font-mono font-bold text-2xl text-blue">x</span>
          </div>
        </motion.div>
      </div>

      <p className="text-center text-sm text-white/40 mb-6">
        At $249/month, CargoLens pays for itself if it catches one missed surcharge per month.
      </p>

      <div className="text-center">
        <Link
          to="/waitlist"
          className="inline-flex items-center px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press"
        >
          Start your free trial
        </Link>
      </div>
    </div>
  );
}
