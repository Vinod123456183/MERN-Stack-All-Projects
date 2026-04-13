import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

const EXPENSE_CATS = CATEGORIES.filter(c => c !== 'All' && c !== 'Income');

export default function TransactionModal({ txn, onClose }) {
  const { state, dispatch } = useApp();
  const isEdit = !!txn;

  const [form, setForm] = useState({
    date: new Date().toISOString().split('T')[0],
    description: '',
    category: 'Food & Dining',
    type: 'expense',
    amount: '',
    account: 'UPI',
  });

  useEffect(() => {
    if (txn) setForm({ ...txn, amount: Math.abs(txn.amount).toString() });
  }, [txn]);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.description || !form.amount || !form.date) return;
    const amt = parseFloat(form.amount);
    const payload = {
      ...form,
      id: isEdit ? txn.id : Date.now(),
      amount: form.type === 'expense' ? -amt : amt,
      category: form.type === 'income' ? 'Income' : form.category,
    };
    dispatch({ type: isEdit ? 'UPDATE_TRANSACTION' : 'ADD_TRANSACTION', payload });
    onClose();
  };

  const inputClass = `w-full px-3 py-2.5 rounded-xl text-sm font-body outline-none border transition-colors ${
    state.darkMode
      ? 'bg-ink-100 border-white/8 text-white placeholder-gray-600 focus:border-jade/50'
      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-jade'
  }`;

  const labelClass = `block text-xs font-display font-medium mb-1.5 ${state.darkMode ? 'text-gray-400' : 'text-gray-600'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative z-10 w-full max-w-md rounded-2xl border shadow-2xl animate-fade-up ${
          state.darkMode ? 'bg-ink-50 border-white/10' : 'bg-white border-gray-200'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between px-6 py-5 border-b ${state.darkMode ? 'border-white/8' : 'border-gray-100'}`}>
          <h2 className={`font-display font-bold text-base ${state.darkMode ? 'text-white' : 'text-ink'}`}>
            {isEdit ? 'Edit Transaction' : 'Add Transaction'}
          </h2>
          <button onClick={onClose} className={`w-8 h-8 rounded-lg flex items-center justify-center ${state.darkMode ? 'hover:bg-white/8 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
            <X size={16} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Type toggle */}
          <div className={`flex gap-2 p-1 rounded-xl ${state.darkMode ? 'bg-ink-100' : 'bg-gray-100'}`}>
            {['expense', 'income'].map(t => (
              <button
                key={t}
                onClick={() => set('type', t)}
                className={`flex-1 py-2 rounded-lg text-sm font-display capitalize transition-all ${
                  form.type === t
                    ? t === 'income' ? 'bg-jade text-white' : 'bg-coral text-white'
                    : state.darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >{t}</button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" value={form.date} onChange={e => set('date', e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Amount (₹)</label>
              <input type="number" value={form.amount} onChange={e => set('amount', e.target.value)} placeholder="0" className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <input type="text" value={form.description} onChange={e => set('description', e.target.value)} placeholder="What was this for?" className={inputClass} />
          </div>

          {form.type === 'expense' && (
            <div>
              <label className={labelClass}>Category</label>
              <select value={form.category} onChange={e => set('category', e.target.value)} className={inputClass}>
                {EXPENSE_CATS.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          )}

          <div>
            <label className={labelClass}>Account</label>
            <select value={form.account} onChange={e => set('account', e.target.value)} className={inputClass}>
              {['UPI', 'Savings', 'Credit Card', 'Net Banking', 'Cash'].map(a => <option key={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <div className={`flex gap-3 px-6 py-5 border-t ${state.darkMode ? 'border-white/8' : 'border-gray-100'}`}>
          <button onClick={onClose} className={`flex-1 py-2.5 rounded-xl text-sm font-display font-medium border transition-colors ${
            state.darkMode ? 'border-white/10 text-gray-400 hover:bg-white/5' : 'border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}>Cancel</button>
          <button onClick={submit} className="flex-1 py-2.5 rounded-xl text-sm font-display font-medium bg-jade text-white hover:bg-jade-dark transition-colors">
            {isEdit ? 'Save Changes' : 'Add Transaction'}
          </button>
        </div>
      </div>
    </div>
  );
}
