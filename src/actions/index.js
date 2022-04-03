// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (email) => ({
  type: USER_ACTION,
  email,
});

export const walletAction = (currencies, expenses) => ({
  type: WALLET_ACTION,
  currencies,
  expenses,
});
