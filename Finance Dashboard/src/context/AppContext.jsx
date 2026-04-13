import { createContext, useContext, useReducer, useEffect } from 'react';
import { TRANSACTIONS } from '../data/mockData';

const AppContext = createContext(null);

const initialState = {
  transactions: TRANSACTIONS,
  role: 'admin', // 'admin' | 'viewer'
  darkMode: true,
  filters: { type: 'all', category: 'All', search: '', sort: 'date-desc' },
  activeTab: 'dashboard',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ROLE': return { ...state, role: action.payload };
    case 'TOGGLE_DARK': return { ...state, darkMode: !state.darkMode };
    case 'SET_FILTER': return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_TAB': return { ...state, activeTab: action.payload };
    case 'ADD_TRANSACTION': return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'UPDATE_TRANSACTION':
      return { ...state, transactions: state.transactions.map(t => t.id === action.payload.id ? action.payload : t) };
    case 'DELETE_TRANSACTION':
      return { ...state, transactions: state.transactions.filter(t => t.id !== action.payload) };
    case 'LOAD_STATE': return action.payload;
    default: return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const saved = localStorage.getItem('finDashState');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...init, ...parsed, filters: init.filters };
      }
    } catch {}
    return init;
  });

  useEffect(() => {
    localStorage.setItem('finDashState', JSON.stringify({
      transactions: state.transactions,
      role: state.role,
      darkMode: state.darkMode,
    }));
  }, [state.transactions, state.role, state.darkMode]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
