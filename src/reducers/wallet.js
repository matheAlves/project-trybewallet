// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
    currencies: [],
    expenses: [],
}

const walletReducer = (state = initialState, action) => ({
  ...state,
  currencies: [...state.currencies, action.currencies],
  expenses: [...state.expenses, action.expenses],
})

export default walletReducer;