import { useApp } from '../context/AppContext';
import { formatDate, getCategoryIcon } from '../utils/helpers';
import { CATEGORY_COLORS } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const formatINR = (amount) => {
  const abs = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.abs(amount));
  return amount > 0 ? `+${abs}` : `-${abs}`;
};

export default function RecentTransactions() {
  const { state, dispatch } = useApp();
  const recent = [...state.transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className={`rounded-2xl border p-6 animate-fade-up stagger-4 ${
      state.darkMode ? 'bg-ink-50 border-white/8' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className={`font-display font-bold text-base ${state.darkMode ? 'text-white' : 'text-ink'}`}>
            Recent Transactions
          </h3>
          <p className={`text-xs mt-0.5 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Latest activity
          </p>
        </div>
        <button
          onClick={() => dispatch({ type: 'SET_TAB', payload: 'transactions' })}
          className="flex items-center gap-1 text-xs text-jade hover:text-jade-light transition-colors font-display font-medium"
        >
          View all <ArrowRight size={13} />
        </button>
      </div>

      <div className="space-y-2">
        {recent.map((t) => {
          const color = CATEGORY_COLORS[t.category] || '#6b7280';
          return (
            <div key={t.id} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
              state.darkMode ? 'hover:bg-white/4' : 'hover:bg-gray-50'
            }`}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: `${color}20` }}>
                {getCategoryIcon(t.category)}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${state.darkMode ? 'text-white' : 'text-ink'}`}>
                  {t.description}
                </p>
                <p className={`text-xs ${state.darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {t.category} · {formatDate(t.date)}
                </p>
              </div>
              <p className={`text-sm font-mono-fin font-medium flex-shrink-0 ${
                t.type === 'income' ? 'text-jade' : 'text-coral'
              }`}>
                {formatINR(t.amount)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
