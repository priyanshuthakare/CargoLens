interface ConfidenceBadgeProps {
  level: 'high' | 'medium' | 'low';
  value?: number;
}

const styles = {
  high: {
    bg: 'bg-[#D1FAE5]',
    text: 'text-[#065F46]',
    border: 'border-[#A7F3D0]',
    label: 'confident',
  },
  medium: {
    bg: 'bg-[#FEF3C7]',
    text: 'text-[#92400E]',
    border: 'border-[#FDE68A]',
    label: 'confident',
  },
  low: {
    bg: 'bg-[#FEE2E2]',
    text: 'text-[#991B1B]',
    border: 'border-[#FECACA]',
    label: 'review needed',
  },
};

export default function ConfidenceBadge({ level, value }: ConfidenceBadgeProps) {
  const s = styles[level];
  const displayValue = value ? `${Math.round(value * 100)}%` : null;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium font-mono border ${s.bg} ${s.text} ${s.border}`}
    >
      {displayValue && <span>{displayValue}&nbsp;</span>}
      <span>{level === 'low' ? s.label : s.label}</span>
    </span>
  );
}
