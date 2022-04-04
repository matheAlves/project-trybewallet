import { CURRENCIES_ACTION } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case CURRENCIES_ACTION:
    return { ...state, currencies: action.currencies };
  case 'EXPENSES_ACTION':
    return { ...state, expenses: action.expenses };
  default:
    return state;
  }
};

export default walletReducer;
