import { useApp } from '../context/AppContext';
import { computeSpendingByCategory } from '../utils/helpers';
import { CATEGORY_COLORS } from '../data/mockData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const formatINR = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const CustomTooltip = ({ active, payload, darkMode }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={`rounded-xl border px-4 py-3 shadow-xl text-sm ${
      darkMode ? 'bg-ink-50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-800'
    }`}>
      <p className="font-display font-semibold">{payload[0].name}</p>
      <p className="font-mono-fin text-jade">{formatINR(payload[0].value)}</p>
    </div>
  );
};

export default function SpendingBreakdown() {
  const { state } = useApp();
  const data = computeSpendingByCategory(state.transactions);
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className={`rounded-2xl border p-6 animate-fade-up stagger-6 ${
      state.darkMode ? 'bg-ink-50 border-white/8' : 'bg-white border-gray-200'
    }`}>
      <div className="mb-5">
        <h3 className={`font-display font-bold text-base ${state.darkMode ? 'text-white' : 'text-ink'}`}>
          Spending Breakdown
        </h3>
        <p className={`text-xs mt-0.5 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          By category
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-44 h-44 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={48} outerRadius={72} paddingAngle={3} dataKey="value">
                {data.map((entry) => (
                  <Cell key={entry.name} fill={CATEGORY_COLORS[entry.name] || '#6b7280'} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip darkMode={state.darkMode} />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-2 w-full">
          {data.slice(0, 6).map((item) => {
            const pct = total > 0 ? ((item.value / total) * 100).toFixed(1) : 0;
            const color = CATEGORY_COLORS[item.name] || '#6b7280';
            return (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                <span className={`text-xs flex-1 truncate ${state.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.name}
                </span>
                <div className="flex items-center gap-2">
                  <div className={`w-16 h-1.5 rounded-full overflow-hidden ${state.darkMode ? 'bg-white/8' : 'bg-gray-100'}`}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                  </div>
                  <span className={`text-xs font-mono-fin w-8 text-right ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {pct}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
