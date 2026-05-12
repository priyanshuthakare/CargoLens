import { Link } from 'react-router';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * @intent Dark premium pricing card.
 * Popular card gets indigo gradient border + gradient button.
 * Free tier gets outline button. Paid non-popular gets outline button.
 * All props/data unchanged — only visual styles updated per design system.
 */

interface PricingCardProps {
  tier: string;
  price: number;
  period: string;
  isPopular?: boolean;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaLink: string;
  description: string;
  users: string;
  quotes: string;
}

export default function PricingCard({
  tier,
  price,
  period,
  isPopular = false,
  features,
  cta,
  ctaLink,
  description,
  users,
  quotes,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'relative flex flex-col h-full p-8',
        isPopular
          ? 'pricing-featured'
          : 'bg-[#1a1a24] border border-white/[0.06] rounded-3xl'
      )}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="shimmer-badge inline-flex items-center px-4 py-1 rounded-full bg-violet-500 text-white text-[10px] font-semibold uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <p
        className={cn(
          'text-sm font-semibold text-center mb-2',
          isPopular ? 'text-violet-400' : 'text-white/70'
        )}
      >
        {tier}
      </p>

      {/* Price */}
      <div className="text-center mb-1">
        <span className="inline-flex items-start gap-0.5">
          <span className="text-xl text-white font-semibold mt-2">$</span>
          <span
            className="font-bold text-white"
            style={{ fontSize: '32px', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            {price}
          </span>
        </span>
        <span className="text-sm text-white/50 ml-1">/{period}</span>
      </div>

      {/* Description + meta */}
      <p className="text-center text-xs text-white/40 mb-1">{description}</p>
      <div className="flex justify-center gap-3 text-xs text-white/40 mb-6">
        <span>{users}</span>
        <span>·</span>
        <span>{quotes}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.06] mb-6" />

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {feature.included ? (
              <div className="w-4 h-4 rounded-sm bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={10} className="text-violet-400" />
              </div>
            ) : (
              <div className="w-4 h-4 rounded-sm border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <X size={9} className="text-white/20" />
              </div>
            )}
            <span className={cn('text-sm', feature.included ? 'text-white/70' : 'text-white/30')}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <Link
        to={ctaLink}
        className={cn(
          'block w-full text-center py-3 px-4 rounded-full text-sm font-semibold transition-all duration-200',
          isPopular
            ? 'gradient-btn text-white'
            : 'border border-white/15 text-white hover:bg-white/[0.05] hover:border-white/25'
        )}
      >
        {cta}
      </Link>
    </motion.div>
  );
}
