import { CURRENCIES_ACTION } from '../actions';
import { ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case CURRENCIES_ACTION:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.newExpense] };
  default:
    return state;
  }
};

export default walletReducer;
