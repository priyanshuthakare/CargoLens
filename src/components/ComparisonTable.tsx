import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import ConfidenceBadge from './ConfidenceBadge';

interface Quote {
  id: string;
  forwarder: string;
  baseRate: number;
  fsc: number;
  baf: number;
  dthc: number;
  detention: number;
  demurrage: number;
  total: number;
  validity: string;
  confidence: number;
  outlier?: string;
}

interface ComparisonTableProps {
  quotes?: Quote[];
}

const defaultQuotes: Quote[] = [
  {
    id: '1', forwarder: 'Carrier A', baseRate: 1200, fsc: 350, baf: 400, dthc: 280, detention: 260, demurrage: 350, total: 3840, validity: 'May 15', confidence: 0.96,
  },
  {
    id: '2', forwarder: 'Carrier B', baseRate: 1300, fsc: 380, baf: 400, dthc: 280, detention: 260, demurrage: 350, total: 4060, validity: 'May 12', confidence: 0.94,
  },
  {
    id: '3', forwarder: 'Carrier C', baseRate: 1250, fsc: 360, baf: 410, dthc: 280, detention: 380, demurrage: 350, total: 4180, validity: 'May 10', confidence: 0.88, outlier: '40% above average',
  },
  {
    id: '4', forwarder: 'Carrier D', baseRate: 1400, fsc: 360, baf: 290, dthc: 270, detention: 330, demurrage: 350, total: 4920, validity: 'May 8', confidence: 0.88,
  },
];

export default function ComparisonTable({ quotes = defaultQuotes }: ComparisonTableProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const totals = quotes.map((q) => q.total);
  const minTotal = Math.min(...totals);
  const maxTotal = Math.max(...totals);

  const getRowStyle = (quote: Quote) => {
    if (quote.total === minTotal) return 'bg-emerald-500/10 border-l-4 border-l-emerald-500';
    if (quote.total === maxTotal) return 'bg-red-500/10 border-l-4 border-l-red-500';
    return 'border-l-4 border-l-transparent';
  };

  const getCellStyle = (value: number, field: keyof Quote) => {
    const values = quotes.map((q) => q[field] as number);
    const min = Math.min(...values);
    const max = Math.max(...values);
    if (value === min) return 'text-emerald-400 font-semibold';
    if (value === max) return 'text-red-400 font-semibold';
    return '';
  };

  return (
    <div className="overflow-x-auto rounded-2xl bg-[#14141e] shadow-lg border border-white/[0.06]">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-[#0a0a0f] text-white/80 text-left">
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider">Forwarder</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-right">Base Rate</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-right">FSC</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-right">BAF</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-right">DTHC</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-right">Detention</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-right">Demurrage</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-right">Total</th>
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider">Validity</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote, idx) => (
            <tr
              key={quote.id}
              className={`${getRowStyle(quote)} transition-all cursor-pointer hover:bg-white/[0.03] ${selectedId === quote.id ? 'ring-2 ring-indigo-500/40 ring-inset' : ''}`}
              onClick={() => setSelectedId(quote.id === selectedId ? null : quote.id)}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <td className="px-4 py-3 font-medium text-sm text-white/90">{quote.forwarder}</td>
              <td className={`px-4 py-3 text-sm text-right font-mono ${getCellStyle(quote.baseRate, 'baseRate')}`}>
                ${quote.baseRate.toLocaleString()}
              </td>
              <td className={`px-4 py-3 text-sm text-right font-mono ${getCellStyle(quote.fsc, 'fsc')}`}>
                {quote.fsc}
              </td>
              <td className={`px-4 py-3 text-sm text-right font-mono ${getCellStyle(quote.baf, 'baf')}`}>
                {quote.baf}
              </td>
              <td className={`px-4 py-3 text-sm text-right font-mono ${getCellStyle(quote.dthc, 'dthc')}`}>
                {quote.dthc}
              </td>
              <td className={`px-4 py-3 text-sm text-right font-mono ${getCellStyle(quote.detention, 'detention')} relative`}>
                <div className="flex items-center justify-end gap-1">
                  {quote.outlier && (
                    <span className="relative group">
                      <AlertTriangle size={14} className="text-amber" />
                      <span className="absolute bottom-full right-0 mb-1 hidden group-hover:block w-40 bg-navy text-white text-xs rounded-lg px-2 py-1 z-10">
                        {quote.outlier}
                      </span>
                    </span>
                  )}
                  {quote.detention}
                </div>
              </td>
              <td className={`px-4 py-3 text-sm text-right font-mono ${getCellStyle(quote.demurrage, 'demurrage')}`}>
                {quote.demurrage}
              </td>
              <td className="px-4 py-3 text-right">
                <span className={`font-mono font-bold text-sm ${quote.total === minTotal ? 'text-emerald-400' : quote.total === maxTotal ? 'text-red-400' : 'text-white/80'}`}>
                  ${quote.total.toLocaleString()}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/40">{quote.validity}</span>
                  <ConfidenceBadge
                    level={quote.confidence > 0.95 ? 'high' : quote.confidence > 0.85 ? 'medium' : 'low'}
                    value={quote.confidence}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-4 py-2 bg-[#0a0a0f] border-t border-white/[0.06] flex items-center justify-between text-xs text-white/40">
        <span>Prices in USD</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green" /> Lowest</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red" /> Highest</span>
          <span className="flex items-center gap-1"><AlertTriangle size={10} className="text-amber" /> Outlier</span>
        </div>
      </div>
    </div>
  );
}
