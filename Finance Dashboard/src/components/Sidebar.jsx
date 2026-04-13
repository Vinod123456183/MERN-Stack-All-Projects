import { useApp } from '../context/AppContext';
import {
  LayoutDashboard, ArrowLeftRight, Lightbulb, Shield, Moon, Sun, TrendingUp
} from 'lucide-react';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
  { id: 'insights', label: 'Insights', icon: Lightbulb },
];

export default function Sidebar({ mobile, onClose }) {
  const { state, dispatch } = useApp();

  const navigate = (tab) => {
    dispatch({ type: 'SET_TAB', payload: tab });
    if (onClose) onClose();
  };

  return (
    <aside className={`flex flex-col h-full ${state.darkMode
      ? 'bg-ink-50 border-white/5'
      : 'bg-white border-gray-200'} border-r`}>
      {/* Logo */}
      <div className="px-6 py-6 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-jade flex items-center justify-center">
          <TrendingUp size={18} className="text-white" />
        </div>
        <div>
          <p className={`font-display font-bold text-lg leading-none ${state.darkMode ? 'text-white' : 'text-ink'}`}>
            FinFlow
          </p>
          <p className="text-xs text-jade mt-0.5">Finance Dashboard</p>
        </div>
      </div>

      {/* Role switcher */}
      <div className="px-4 mb-4">
        <div className={`rounded-xl p-3 ${state.darkMode ? 'bg-ink-100' : 'bg-gray-50'}`}>
          <p className={`text-xs mb-2 font-medium ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <Shield size={11} className="inline mr-1" />ACTIVE ROLE
          </p>
          <div className="flex gap-2">
            {['admin', 'viewer'].map(r => (
              <button
                key={r}
                onClick={() => dispatch({ type: 'SET_ROLE', payload: r })}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium font-display capitalize transition-all ${
                  state.role === r
                    ? r === 'admin'
                      ? 'bg-jade text-white'
                      : 'bg-coral text-white'
                    : state.darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-500 hover:text-gray-700'
                }`}
              >{r}</button>
            ))}
          </div>
          <p className={`text-xs mt-2 ${state.darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            {state.role === 'admin' ? '✏️ Can add & edit transactions' : '👁️ View only mode'}
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-1">
        {NAV.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => navigate(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium font-display transition-all ${
              state.activeTab === id
                ? state.darkMode
                  ? 'bg-jade/15 text-jade'
                  : 'bg-jade/10 text-jade'
                : state.darkMode
                  ? 'text-gray-400 hover:bg-white/5 hover:text-white'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
            }`}
          >
            <Icon size={18} />
            {label}
            {state.activeTab === id && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-jade" />
            )}
          </button>
        ))}
      </nav>

      {/* Dark mode toggle */}
      <div className="px-4 py-4">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_DARK' })}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-display transition-all ${
            state.darkMode ? 'bg-white/5 text-gray-300 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {state.darkMode ? <Sun size={16} /> : <Moon size={16} />}
          {state.darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </aside>
  );
}
