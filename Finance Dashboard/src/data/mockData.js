// Mock transaction data
export const TRANSACTIONS = [
  { id: 1, date: '2024-01-02', description: 'Salary Deposit', category: 'Income', type: 'income', amount: 85000, account: 'Savings' },
  { id: 2, date: '2024-01-03', description: 'Netflix Subscription', category: 'Entertainment', type: 'expense', amount: -649, account: 'Credit Card' },
  { id: 3, date: '2024-01-05', description: 'Swiggy Order', category: 'Food & Dining', type: 'expense', amount: -520, account: 'UPI' },
  { id: 4, date: '2024-01-07', description: 'Electricity Bill', category: 'Utilities', type: 'expense', amount: -1800, account: 'Net Banking' },
  { id: 5, date: '2024-01-08', description: 'Freelance Payment', category: 'Income', type: 'income', amount: 25000, account: 'Savings' },
  { id: 6, date: '2024-01-10', description: 'Amazon Shopping', category: 'Shopping', type: 'expense', amount: -3200, account: 'Credit Card' },
  { id: 7, date: '2024-01-12', description: 'Gym Membership', category: 'Health & Fitness', type: 'expense', amount: -2500, account: 'UPI' },
  { id: 8, date: '2024-01-14', description: 'Zomato Order', category: 'Food & Dining', type: 'expense', amount: -450, account: 'UPI' },
  { id: 9, date: '2024-01-15', description: 'Investment Return', category: 'Income', type: 'income', amount: 12000, account: 'Savings' },
  { id: 10, date: '2024-01-18', description: 'Fuel - Petrol', category: 'Transportation', type: 'expense', amount: -2200, account: 'UPI' },
  { id: 11, date: '2024-01-20', description: 'Internet Bill', category: 'Utilities', type: 'expense', amount: -999, account: 'Net Banking' },
  { id: 12, date: '2024-01-22', description: 'Book Store', category: 'Education', type: 'expense', amount: -850, account: 'UPI' },
  { id: 13, date: '2024-01-25', description: 'Rent Payment', category: 'Housing', type: 'expense', amount: -18000, account: 'Net Banking' },
  { id: 14, date: '2024-01-27', description: 'Coffee & Snacks', category: 'Food & Dining', type: 'expense', amount: -380, account: 'UPI' },
  { id: 15, date: '2024-01-30', description: 'Spotify Premium', category: 'Entertainment', type: 'expense', amount: -119, account: 'Credit Card' },
  { id: 16, date: '2024-02-01', description: 'Salary Deposit', category: 'Income', type: 'income', amount: 85000, account: 'Savings' },
  { id: 17, date: '2024-02-03', description: 'Doctor Visit', category: 'Health & Fitness', type: 'expense', amount: -1500, account: 'UPI' },
  { id: 18, date: '2024-02-05', description: 'Grocery Store', category: 'Food & Dining', type: 'expense', amount: -3400, account: 'Credit Card' },
  { id: 19, date: '2024-02-07', description: 'Online Course', category: 'Education', type: 'expense', amount: -4999, account: 'Credit Card' },
  { id: 20, date: '2024-02-10', description: 'Movie Tickets', category: 'Entertainment', type: 'expense', amount: -800, account: 'UPI' },
  { id: 21, date: '2024-02-12', description: 'Freelance Payment', category: 'Income', type: 'income', amount: 18000, account: 'Savings' },
  { id: 22, date: '2024-02-14', description: 'Valentine Dinner', category: 'Food & Dining', type: 'expense', amount: -2800, account: 'Credit Card' },
  { id: 23, date: '2024-02-17', description: 'Electricity Bill', category: 'Utilities', type: 'expense', amount: -1650, account: 'Net Banking' },
  { id: 24, date: '2024-02-20', description: 'Uber Rides', category: 'Transportation', type: 'expense', amount: -1100, account: 'UPI' },
  { id: 25, date: '2024-02-22', description: 'Clothes Shopping', category: 'Shopping', type: 'expense', amount: -5500, account: 'Credit Card' },
  { id: 26, date: '2024-02-25', description: 'Rent Payment', category: 'Housing', type: 'expense', amount: -18000, account: 'Net Banking' },
  { id: 27, date: '2024-02-27', description: 'Stock Dividend', category: 'Income', type: 'income', amount: 3500, account: 'Savings' },
  { id: 28, date: '2024-03-01', description: 'Salary Deposit', category: 'Income', type: 'income', amount: 85000, account: 'Savings' },
  { id: 29, date: '2024-03-04', description: 'Swiggy Instamart', category: 'Food & Dining', type: 'expense', amount: -1200, account: 'UPI' },
  { id: 30, date: '2024-03-06', description: 'Insurance Premium', category: 'Health & Fitness', type: 'expense', amount: -8000, account: 'Net Banking' },
  { id: 31, date: '2024-03-08', description: 'Airpods Purchase', category: 'Shopping', type: 'expense', amount: -14999, account: 'Credit Card' },
  { id: 32, date: '2024-03-10', description: 'Consulting Fee', category: 'Income', type: 'income', amount: 32000, account: 'Savings' },
  { id: 33, date: '2024-03-12', description: 'Petrol', category: 'Transportation', type: 'expense', amount: -2500, account: 'UPI' },
  { id: 34, date: '2024-03-15', description: 'Internet Bill', category: 'Utilities', type: 'expense', amount: -999, account: 'Net Banking' },
  { id: 35, date: '2024-03-18', description: 'Restaurant Dinner', category: 'Food & Dining', type: 'expense', amount: -3200, account: 'Credit Card' },
  { id: 36, date: '2024-03-20', description: 'Gym Membership', category: 'Health & Fitness', type: 'expense', amount: -2500, account: 'UPI' },
  { id: 37, date: '2024-03-22', description: 'Weekend Trip', category: 'Transportation', type: 'expense', amount: -8500, account: 'Credit Card' },
  { id: 38, date: '2024-03-25', description: 'Rent Payment', category: 'Housing', type: 'expense', amount: -18000, account: 'Net Banking' },
  { id: 39, date: '2024-03-27', description: 'Amazon Prime', category: 'Entertainment', type: 'expense', amount: -1499, account: 'Credit Card' },
  { id: 40, date: '2024-03-30', description: 'Freelance Bonus', category: 'Income', type: 'income', amount: 15000, account: 'Savings' },
];

export const CATEGORIES = [
  'All', 'Income', 'Food & Dining', 'Shopping', 'Housing', 'Transportation',
  'Entertainment', 'Health & Fitness', 'Utilities', 'Education',
];

export const CATEGORY_COLORS = {
  'Food & Dining': '#FF6B6B',
  'Shopping': '#F59E0B',
  'Housing': '#6366F1',
  'Transportation': '#3B82F6',
  'Entertainment': '#EC4899',
  'Health & Fitness': '#00B37E',
  'Utilities': '#8B5CF6',
  'Education': '#14B8A6',
  'Income': '#00D994',
};

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const MONTHLY_DATA = [
  { month: 'Jan', income: 122000, expenses: 31167, balance: 90833 },
  { month: 'Feb', income: 106500, expenses: 35750, balance: 70750 },
  { month: 'Mar', income: 132000, expenses: 60197, balance: 71803 },
];
