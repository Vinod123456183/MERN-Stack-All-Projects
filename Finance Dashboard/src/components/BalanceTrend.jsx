import { useApp } from '../context/AppContext';
import { computeMonthlyData } from '../utils/helpers';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const formatK = (v) => {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  if (v >= 1000) return `₹${(v / 1000).toFixed(0)}k`;
  return `₹${v}`;
};

const CustomTooltip = ({ active, payload, label, darkMode }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={`rounded-xl border px-4 py-3 shadow-xl text-sm ${
      darkMode ? 'bg-ink-50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-800'
    }`}>
      <p className="font-display font-semibold mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-gray-400 capitalize">{p.name}:</span>
          <span className="font-mono-fin font-medium">{formatK(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

export default function BalanceTrend() {
  const { state } = useApp();
  const data = computeMonthlyData(state.transactions);

  return (
    <div className={`rounded-2xl border p-6 animate-fade-up stagger-5 ${
      state.darkMode ? 'bg-ink-50 border-white/8' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={`font-display font-bold text-base ${state.darkMode ? 'text-white' : 'text-ink'}`}>
            Monthly Trend
          </h3>
          <p className={`text-xs mt-0.5 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Income vs Expenses over time
          </p>
        </div>
        <div className="flex gap-4 text-xs">
          {[['#00B37E', 'Income'], ['#FF6B6B', 'Expenses'], ['#6366F1', 'Balance']].map(([c, l]) => (
            <div key={l} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: c }} />
              <span className={state.darkMode ? 'text-gray-400' : 'text-gray-500'}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <defs>
            {[['income', '#00B37E'], ['expenses', '#FF6B6B'], ['balance', '#6366F1']].map(([k, c]) => (
              <linearGradient key={k} id={`grad-${k}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={c} stopOpacity={0.2} />
                <stop offset="95%" stopColor={c} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={state.darkMode ? '#ffffff08' : '#f0f0f0'} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: state.darkMode ? '#6b7280' : '#9ca3af' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={formatK} tick={{ fontSize: 11, fill: state.darkMode ? '#6b7280' : '#9ca3af' }} axisLine={false} tickLine={false} width={52} />
          <Tooltip content={<CustomTooltip darkMode={state.darkMode} />} />
          <Area type="monotone" dataKey="income" stroke="#00B37E" strokeWidth={2} fill="url(#grad-income)" dot={false} />
          <Area type="monotone" dataKey="expenses" stroke="#FF6B6B" strokeWidth={2} fill="url(#grad-expenses)" dot={false} />
          <Area type="monotone" dataKey="balance" stroke="#6366F1" strokeWidth={2} fill="url(#grad-balance)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
