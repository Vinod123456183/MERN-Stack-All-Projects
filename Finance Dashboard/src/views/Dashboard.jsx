import SummaryCards from '../components/SummaryCards';
import BalanceTrend from '../components/BalanceTrend';
import SpendingBreakdown from '../components/SpendingBreakdown';
import RecentTransactions from '../components/RecentTransactions';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const { state } = useApp();
  return (
    <div className="space-y-6">
      <div>
        <h1 className={`font-display font-bold text-2xl ${state.darkMode ? 'text-white' : 'text-ink'}`}>
          Good morning 👋
        </h1>
        <p className={`text-sm mt-1 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Here's your financial overview
        </p>
      </div>

      <SummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <BalanceTrend />
        </div>
        <div className="lg:col-span-2">
          <SpendingBreakdown />
        </div>
      </div>

      <RecentTransactions />
    </div>
  );
}
