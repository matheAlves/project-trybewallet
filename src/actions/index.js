import getCurrencies from '../services/currencyAPI';

export const USER_ACTION = 'USER_ACTION';
export const CURRENCIES_ACTION = 'CURRENCIES_ACTION';

export const userAction = (email) => ({
  type: USER_ACTION,
  email,
});

export const currenciesAction = (currencies) => ({
  type: CURRENCIES_ACTION,
  currencies,
});

const fetchCurrencies = async (dispatch) => {
  const response = await getCurrencies();
  const currencies = Object.keys(response);
  // source: https://love2dev.com/blog/javascript-remove-from-array/#:~:text=pop%20%2D%20Removes%20from%20the%20End,remove%20elements%20from%20an%20Array
  const filteredCurrencies = currencies.filter((value) => value !== 'USDT');
  dispatch(currenciesAction(filteredCurrencies));
};

export const actionFetchCurrencies = () => fetchCurrencies;
