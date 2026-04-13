import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getFilteredTransactions, formatDate, getCategoryIcon, exportToCSV, exportToJSON } from '../utils/helpers';
import { CATEGORIES, CATEGORY_COLORS } from '../data/mockData';
import TransactionModal from '../components/TransactionModal';
import { Search, Filter, Plus, Download, Edit2, Trash2, ArrowUpDown } from 'lucide-react';

const formatINR = (amount) => {
  const abs = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.abs(amount));
  return amount > 0 ? `+${abs}` : `-${abs}`;
};

export default function Transactions() {
  const { state, dispatch } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editTxn, setEditTxn] = useState(null);
  const [showExport, setShowExport] = useState(false);

  const filtered = getFilteredTransactions(state.transactions, state.filters);
  const setFilter = (obj) => dispatch({ type: 'SET_FILTER', payload: obj });

  const inputClass = `px-3 py-2 rounded-xl text-sm outline-none border transition-colors ${
    state.darkMode
      ? 'bg-ink-100 border-white/8 text-white placeholder-gray-600 focus:border-jade/50'
      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-jade'
  }`;

  const handleDelete = (id) => {
    if (confirm('Delete this transaction?')) {
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className={`font-display font-bold text-2xl ${state.darkMode ? 'text-white' : 'text-ink'}`}>
            Transactions
          </h1>
          <p className={`text-sm mt-1 ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {filtered.length} of {state.transactions.length} transactions
          </p>
        </div>
        <div className="flex gap-3">
          {/* Export */}
          <div className="relative">
            <button
              onClick={() => setShowExport(!showExport)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-medium border transition-colors ${
                state.darkMode ? 'border-white/10 text-gray-300 hover:bg-white/5' : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Download size={15} /> Export
            </button>
            {showExport && (
              <div className={`absolute right-0 top-12 z-10 rounded-xl border shadow-xl overflow-hidden ${
                state.darkMode ? 'bg-ink-50 border-white/10' : 'bg-white border-gray-200'
              }`}>
                {[['CSV', () => exportToCSV(filtered)], ['JSON', () => exportToJSON(filtered)]].map(([label, fn]) => (
                  <button key={label} onClick={() => { fn(); setShowExport(false); }}
                    className={`block w-full text-left px-4 py-2.5 text-sm font-display transition-colors ${
                      state.darkMode ? 'text-gray-300 hover:bg-white/8' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >Export as {label}</button>
                ))}
              </div>
            )}
          </div>
          {state.role === 'admin' && (
            <button
              onClick={() => { setEditTxn(null); setShowModal(true); }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-medium bg-jade text-white hover:bg-jade-dark transition-colors"
            >
              <Plus size={15} /> Add
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className={`rounded-2xl border p-4 ${state.darkMode ? 'bg-ink-50 border-white/8' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 ${state.darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search transactions..."
              value={state.filters.search}
              onChange={e => setFilter({ search: e.target.value })}
              className={`${inputClass} w-full pl-9`}
            />
          </div>
          {/* Type */}
          <select value={state.filters.type} onChange={e => setFilter({ type: e.target.value })} className={inputClass}>
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {/* Category */}
          <select value={state.filters.category} onChange={e => setFilter({ category: e.target.value })} className={inputClass}>
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          {/* Sort */}
          <select value={state.filters.sort} onChange={e => setFilter({ sort: e.target.value })} className={inputClass}>
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="amount-desc">Highest Amount</option>
            <option value="amount-asc">Lowest Amount</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className={`rounded-2xl border overflow-hidden ${state.darkMode ? 'bg-ink-50 border-white/8' : 'bg-white border-gray-200'}`}>
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-4xl mb-3">🔍</p>
            <p className={`font-display font-semibold ${state.darkMode ? 'text-white' : 'text-ink'}`}>No transactions found</p>
            <p className={`text-sm mt-1 ${state.darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Try adjusting your filters</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b text-xs font-display font-semibold uppercase tracking-wider ${
                  state.darkMode ? 'border-white/8 text-gray-500 bg-ink-100/50' : 'border-gray-100 text-gray-400 bg-gray-50/80'
                }`}>
                  {['Date', 'Description', 'Category', 'Account', 'Amount', state.role === 'admin' ? 'Actions' : ''].map((h, i) => (
                    h && <th key={i} className={`px-5 py-3.5 text-left ${i === 4 || i === 5 ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filtered.map((t) => {
                  const color = CATEGORY_COLORS[t.category] || '#6b7280';
                  return (
                    <tr key={t.id} className={`transition-colors ${state.darkMode ? 'hover:bg-white/3' : 'hover:bg-gray-50/80'}`}>
                      <td className={`px-5 py-3.5 text-xs font-mono-fin ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {formatDate(t.date)}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                            style={{ background: `${color}20` }}>
                            {getCategoryIcon(t.category)}
                          </span>
                          <span className={`text-sm font-medium ${state.darkMode ? 'text-white' : 'text-ink'}`}>
                            {t.description}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-display font-medium"
                          style={{ background: `${color}20`, color }}>
                          {t.category}
                        </span>
                      </td>
                      <td className={`px-5 py-3.5 text-sm ${state.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {t.account}
                      </td>
                      <td className={`px-5 py-3.5 text-right text-sm font-mono-fin font-medium ${
                        t.type === 'income' ? 'text-jade' : 'text-coral'
                      }`}>
                        {formatINR(t.amount)}
                      </td>
                      {state.role === 'admin' && (
                        <td className="px-5 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button onClick={() => { setEditTxn(t); setShowModal(true); }}
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                                state.darkMode ? 'hover:bg-white/8 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-700'
                              }`}>
                              <Edit2 size={13} />
                            </button>
                            <button onClick={() => handleDelete(t.id)}
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-coral/15 text-gray-400 hover:text-coral`}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {(showModal) && (
        <TransactionModal txn={editTxn} onClose={() => { setShowModal(false); setEditTxn(null); }} />
      )}
    </div>
  );
}
