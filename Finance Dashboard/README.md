# FinFlow — Finance Dashboard

A clean, modern, and interactive finance dashboard built with React + Tailwind CSS for tracking and understanding financial activity.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 Features

### Dashboard Overview
- **Summary Cards** — Total Balance, Income, Expenses, Net Savings with savings rate
- **Balance Trend Chart** — Area chart showing monthly income, expenses, and balance over time
- **Spending Breakdown** — Donut chart with category-wise spending percentages
- **Recent Transactions** — Quick view of the 6 most recent transactions

### Transactions Section
- Full transaction list with date, description, category, account, and amount
- **Search** — Live text search across description, category, and account
- **Filters** — Filter by type (income/expense) and category
- **Sorting** — Sort by date (newest/oldest) or amount (highest/lowest)
- **Export** — Download filtered transactions as CSV or JSON

### Role-Based UI
- **Admin** — Can add, edit, and delete transactions
- **Viewer** — Read-only access (add/edit/delete buttons hidden)
- Switch roles using the toggle in the sidebar (for demo purposes)

### Insights Section
- Highest spending category
- Expense ratio and savings rate with visual indicators
- Month-over-month expense trend
- Full category spending breakdown ranked by amount
- Monthly comparison bar chart

### State Management
- React `useReducer` + `useContext` pattern
- State persisted in **localStorage** (transactions, role, dark mode preference survive page refresh)
- Filters are session-only (not persisted)

### UI/UX
- **Dark / Light mode** toggle (persistent)
- Fully **responsive** — works on mobile, tablet, and desktop
- Custom typography using Google Fonts (Syne + DM Sans + DM Mono)
- Smooth animations and staggered entrance effects
- Empty state handling for filtered transaction list
- Confirmation before deleting a transaction

---

## 🗂️ Project Structure

```
src/
├── context/
│   └── AppContext.jsx      # Global state (useReducer + Context)
├── data/
│   └── mockData.js         # Mock transactions, categories, colors
├── utils/
│   └── helpers.js          # Formatting, filtering, CSV/JSON export
├── components/
│   ├── Sidebar.jsx          # Navigation + role switcher + dark mode
│   ├── SummaryCards.jsx     # 4 KPI summary cards
│   ├── BalanceTrend.jsx     # Area chart (monthly trend)
│   ├── SpendingBreakdown.jsx # Pie chart (category breakdown)
│   ├── RecentTransactions.jsx # Last 6 transactions
│   └── TransactionModal.jsx  # Add / Edit transaction modal
├── views/
│   ├── Dashboard.jsx        # Main dashboard page
│   ├── Transactions.jsx     # Full transactions table page
│   └── Insights.jsx         # Insights & analytics page
├── App.jsx                  # Root layout, routing, mobile header
├── main.jsx
└── index.css                # Tailwind + custom animations
```

---

## 🛠️ Tech Stack

| Tool | Usage |
|------|-------|
| **React 18** | UI library |
| **Vite** | Build tool & dev server |
| **Tailwind CSS v3** | Utility-first styling |
| **Recharts** | Charts (area, bar, pie) |
| **Lucide React** | Icons |
| **Google Fonts** | Syne, DM Sans, DM Mono |

---

## 💡 Design Decisions

- **Dark-first design** with a clean ink-black palette, jade green accents, and coral for expenses
- **Syne** (display) + **DM Sans** (body) + **DM Mono** (numbers) — intentional font pairing for financial data readability
- Role switching in sidebar for easy demo without backend
- localStorage persistence to simulate real-world data retention
- All amounts in Indian Rupees (₹) with en-IN locale formatting

---

## 📌 Assumptions

- All data is mock/static — no backend or API required
- Role switching is frontend-only for demonstration
- The app supports Jan–Mar 2024 as sample data period
