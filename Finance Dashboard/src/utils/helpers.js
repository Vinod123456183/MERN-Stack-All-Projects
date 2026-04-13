export const formatCurrency = (amount, showSign = false) => {
  const abs = Math.abs(amount);
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(abs);
  if (showSign && amount > 0) return `+${formatted}`;
  if (amount < 0) return `-${formatted}`;
  return formatted;
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
};

export const formatShortDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
};

export const getCategoryIcon = (category) => {
  const icons = {
    'Food & Dining': '🍜',
    'Shopping': '🛍️',
    'Housing': '🏠',
    'Transportation': '🚗',
    'Entertainment': '🎬',
    'Health & Fitness': '💪',
    'Utilities': '⚡',
    'Education': '📚',
    'Income': '💰',
  };
  return icons[category] || '💳';
};

export const getFilteredTransactions = (transactions, filters) => {
  let result = [...transactions];

  if (filters.type !== 'all') {
    result = result.filter(t => t.type === filters.type);
  }
  if (filters.category !== 'All') {
    result = result.filter(t => t.category === filters.category);
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(t =>
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.account.toLowerCase().includes(q)
    );
  }

  switch (filters.sort) {
    case 'date-desc': result.sort((a, b) => new Date(b.date) - new Date(a.date)); break;
    case 'date-asc': result.sort((a, b) => new Date(a.date) - new Date(b.date)); break;
    case 'amount-desc': result.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount)); break;
    case 'amount-asc': result.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount)); break;
  }

  return result;
};

export const computeSummary = (transactions) => {
  const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + Math.abs(t.amount), 0);
  return { income, expenses, balance: income - expenses };
};

export const computeSpendingByCategory = (transactions) => {
  const map = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    map[t.category] = (map[t.category] || 0) + Math.abs(t.amount);
  });
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

export const computeMonthlyData = (transactions) => {
  const map = {};
  transactions.forEach(t => {
    const date = new Date(t.date);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const label = date.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
    if (!map[key]) map[key] = { month: label, income: 0, expenses: 0 };
    if (t.type === 'income') map[key].income += t.amount;
    else map[key].expenses += Math.abs(t.amount);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, v]) => ({ ...v, balance: v.income - v.expenses }));
};

export const exportToCSV = (transactions) => {
  const headers = ['Date', 'Description', 'Category', 'Type', 'Amount', 'Account'];
  const rows = transactions.map(t => [
    t.date, t.description, t.category, t.type, t.amount, t.account
  ]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'transactions.csv'; a.click();
};

export const exportToJSON = (transactions) => {
  const blob = new Blob([JSON.stringify(transactions, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'transactions.json'; a.click();
};
