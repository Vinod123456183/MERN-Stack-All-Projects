import { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Transactions from './views/Transactions';
import Insights from './views/Insights';
import { Menu } from 'lucide-react';

function AppShell() {
  const { state } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const view = {
    dashboard: <Dashboard />,
    transactions: <Transactions />,
    insights: <Insights />,
  }[state.activeTab] || <Dashboard />;

  return (
    <div className={`min-h-screen flex ${state.darkMode ? 'bg-ink text-white' : 'bg-cream text-ink'}`}>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 lg:w-72 flex-shrink-0 h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 z-50">
            <Sidebar mobile onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Mobile header */}
        <div className={`md:hidden flex items-center justify-between px-4 py-4 border-b ${
          state.darkMode ? 'border-white/8 bg-ink-50' : 'border-gray-200 bg-white'
        }`}>
          <button onClick={() => setSidebarOpen(true)} className={`w-9 h-9 rounded-xl flex items-center justify-center ${
            state.darkMode ? 'hover:bg-white/8 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Menu size={20} />
          </button>
          <span className={`font-display font-bold text-base ${state.darkMode ? 'text-white' : 'text-ink'}`}>
            FinFlow
          </span>
          <div className="w-9" />
        </div>

        <div className="p-4 md:p-6 lg:p-8 max-w-7xl">
          {view}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
