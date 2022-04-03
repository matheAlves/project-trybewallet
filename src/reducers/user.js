// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_ACTION } from '../actions';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_ACTION:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default userReducer;
