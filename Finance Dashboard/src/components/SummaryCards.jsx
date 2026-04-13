import { useApp } from '../context/AppContext';
import { computeSummary } from '../utils/helpers';
import { TrendingUp, TrendingDown, Wallet, ArrowUpRight } from 'lucide-react';

const formatINR = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

export default function SummaryCards() {
  const { state } = useApp();
  const { income, expenses, balance } = computeSummary(state.transactions);
  const savingsRate = income > 0 ? Math.round((balance / income) * 100) : 0;

  const cards = [
    {
      label: 'Total Balance',
      value: formatINR(balance),
      sub: `${savingsRate}% savings rate`,
      icon: Wallet,
      color: 'jade',
      bg: state.darkMode ? 'bg-jade/10 border-jade/20' : 'bg-jade/5 border-jade/30',
      textColor: 'text-jade',
      delay: 'stagger-1',
    },
    {
      label: 'Total Income',
      value: formatINR(income),
      sub: 'Across all sources',
      icon: TrendingUp,
      color: 'jade',
      bg: state.darkMode ? 'bg-white/3 border-white/8' : 'bg-white border-gray-200',
      textColor: 'text-jade',
      delay: 'stagger-2',
    },
    {
      label: 'Total Expenses',
      value: formatINR(expenses),
      sub: 'All categories',
      icon: TrendingDown,
      color: 'coral',
      bg: state.darkMode ? 'bg-white/3 border-white/8' : 'bg-white border-gray-200',
      textColor: 'text-coral',
      delay: 'stagger-3',
    },
    {
      label: 'Net Savings',
      value: formatINR(balance),
      sub: `${income > 0 ? ((expenses / income) * 100).toFixed(0) : 0}% expense ratio`,
      icon: ArrowUpRight,
      color: balance >= 0 ? 'jade' : 'coral',
      bg: state.darkMode ? 'bg-white/3 border-white/8' : 'bg-white border-gray-200',
      textColor: balance >= 0 ? 'text-jade' : 'text-coral',
      delay: 'stagger-4',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className={`animate-fade-up ${card.delay} rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg cursor-default ${card.bg} ${
              state.darkMode ? 'shadow-black/20' : 'shadow-gray-100'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <p className={`text-xs font-display font-semibold uppercase tracking-wider ${
                state.darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>{card.label}</p>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                card.textColor === 'text-jade' ? 'bg-jade/15' : 'bg-coral/15'
              }`}>
                <Icon size={15} className={card.textColor} />
              </div>
            </div>
            <p className={`font-display font-bold text-xl lg:text-2xl ${
              state.darkMode ? 'text-white' : 'text-ink'
            }`}>{card.value}</p>
            <p className={`text-xs mt-1 ${state.darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{card.sub}</p>
          </div>
        );
      })}
    </div>
  );
}
