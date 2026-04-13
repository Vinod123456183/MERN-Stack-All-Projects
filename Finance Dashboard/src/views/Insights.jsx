import { useApp } from '../context/AppContext';
import { computeSpendingByCategory, computeMonthlyData, computeSummary } from '../utils/helpers';
import { CATEGORY_COLORS } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Award, AlertTriangle, Target, Zap } from 'lucide-react';

const formatINR = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const CustomTooltip = ({ active, payload, label, darkMode }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={`rounded-xl border px-4 py-3 shadow-xl text-sm ${
      darkMode ? 'bg-ink-50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-800'
    }`}>
      <p className="font-display font-semibold mb-1">{label}</p>
      {payload.map(p => (
        <p key={p.name} className="font-mono-fin text-sm" style={{ color: p.fill }}>
          {formatINR(p.value)}
        </p>
      ))}
    </div>
  );
};

export default function Insights() {
  const { state } = useApp();
  const spending = computeSpendingByCategory(state.transactions);
  const monthly = computeMonthlyData(state.transactions);
  const { income, expenses, balance } = computeSummary(state.transactions);

  const topCategory = spending[0];
  const savingsRate = income > 0 ? ((balance / income) * 100).toFixed(1) : 0;
  const expenseRatio = income > 0 ? ((expenses / income) * 100).toFixed(1) : 0;

  const lastTwo = monthly.slice(-2);
  const expenseTrend = lastTwo.length === 2
    ? (((lastTwo[1].expenses - lastTwo[0].expenses) / lastTwo[0].expenses) * 100).toFixed(1)
    : 0;

  const insights = [
    {
      icon: Award,
      color: 'jade',
      title: 'Top Spending Category',
      value: topCategory ? topCategory.name : 'N/A',
      sub: topCategory ? `${formatINR(topCategory.value)} spent` : '',
      bg: 'bg-jade/10 border-jade/20',
    },
    {
      icon: Target,
      color: expenseRatio > 70 ? 'coral' : 'jade',
      title: 'Expense Ratio',
      value: `${expenseRatio}%`,
      sub: expenseRatio > 70 ? '⚠️ High — consider reducing spend' : '✅ Healthy expense ratio',
      bg: expenseRatio > 70 ? 'bg-coral/10 border-coral/20' : 'bg-jade/10 border-jade/20',
    },
    {
      icon: TrendingUp,
      color: 'jade',
      title: 'Savings Rate',
      value: `${savingsRate}%`,
      sub: savingsRate > 20 ? '✅ Great job saving!' : '⚠️ Try to save more',
      bg: parseFloat(savingsRate) > 20 ? 'bg-jade/10 border-jade/20' : 'bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: expenseTrend > 0 ? TrendingUp : TrendingDown,
      color: expenseTrend > 0 ? 'coral' : 'jade',
      title: 'Expense Trend',
      value: `${expenseTrend > 0 ? '+' : ''}${expenseTrend}%`,
      sub: `vs previous month`,
      bg: expenseTrend > 0 ? 'bg-coral/10 border-coral/20' : 'bg-jade/10 border-jade/20',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`font-display font-bold text-2xl ${state.darkMode ? 'text-white' : 'text-ink'}`}>
          Insights
        </h1>
        <p className={`text-sm mt-1 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Smart observations from your data
        </p>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((ins) => {
          const Icon = ins.icon;
          return (
            <div key={ins.title} className={`rounded-2xl border p-5 animate-fade-up ${ins.bg} ${
              state.darkMode ? '' : ''
            }`}>
              <Icon size={18} className={`mb-3 ${ins.color === 'jade' ? 'text-jade' : ins.color === 'coral' ? 'text-coral' : 'text-amber-500'}`} />
              <p className={`text-xs font-display font-medium mb-1 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {ins.title}
              </p>
              <p className={`font-display font-bold text-xl ${state.darkMode ? 'text-white' : 'text-ink'}`}>
                {ins.value}
              </p>
              <p className={`text-xs mt-1 ${state.darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{ins.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Monthly comparison bar chart */}
      <div className={`rounded-2xl border p-6 ${state.darkMode ? 'bg-ink-50 border-white/8' : 'bg-white border-gray-200'}`}>
        <h3 className={`font-display font-bold text-base mb-1 ${state.darkMode ? 'text-white' : 'text-ink'}`}>
          Monthly Comparison
        </h3>
        <p className={`text-xs mb-6 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Income vs expenses per month
        </p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={monthly} barGap={4} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={state.darkMode ? '#ffffff08' : '#f0f0f0'} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: state.darkMode ? '#6b7280' : '#9ca3af' }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={v => v >= 1000 ? `₹${v / 1000}k` : `₹${v}`} tick={{ fontSize: 11, fill: state.darkMode ? '#6b7280' : '#9ca3af' }} axisLine={false} tickLine={false} width={52} />
            <Tooltip content={<CustomTooltip darkMode={state.darkMode} />} />
            <Bar dataKey="income" fill="#00B37E" radius={[6, 6, 0, 0]} />
            <Bar dataKey="expenses" fill="#FF6B6B" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex gap-6 mt-4 justify-center">
          {[['#00B37E', 'Income'], ['#FF6B6B', 'Expenses']].map(([c, l]) => (
            <div key={l} className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 rounded" style={{ background: c }} />
              <span className={state.darkMode ? 'text-gray-400' : 'text-gray-500'}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Spending breakdown table */}
      <div className={`rounded-2xl border overflow-hidden ${state.darkMode ? 'bg-ink-50 border-white/8' : 'bg-white border-gray-200'}`}>
        <div className="px-6 py-5">
          <h3 className={`font-display font-bold text-base ${state.darkMode ? 'text-white' : 'text-ink'}`}>
            Category Breakdown
          </h3>
          <p className={`text-xs mt-0.5 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Ranked by total spending
          </p>
        </div>
        <div className={`border-t ${state.darkMode ? 'border-white/8' : 'border-gray-100'}`}>
          {spending.map((item, i) => {
            const color = CATEGORY_COLORS[item.name] || '#6b7280';
            const pct = expenses > 0 ? ((item.value / expenses) * 100).toFixed(1) : 0;
            return (
              <div key={item.name} className={`flex items-center gap-4 px-6 py-4 border-b last:border-b-0 ${
                state.darkMode ? 'border-white/[0.04] hover:bg-white/3' : 'border-gray-50 hover:bg-gray-50/50'
              } transition-colors`}>
                <span className={`w-6 text-center font-display font-bold text-sm ${state.darkMode ? 'text-gray-600' : 'text-gray-300'}`}>
                  {i + 1}
                </span>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{ background: `${color}20` }}>
                  {['🍜','🛍️','🏠','🚗','🎬','💪','⚡','📚'][i] || '💳'}
                </span>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${state.darkMode ? 'text-white' : 'text-ink'}`}>{item.name}</p>
                  <div className={`mt-1.5 h-1.5 rounded-full overflow-hidden ${state.darkMode ? 'bg-white/8' : 'bg-gray-100'}`}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-mono-fin font-medium ${state.darkMode ? 'text-white' : 'text-ink'}`}>
                    {formatINR(item.value)}
                  </p>
                  <p className={`text-xs ${state.darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{pct}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
