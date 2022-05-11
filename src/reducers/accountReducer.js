import axios from "axios";
import {fetchUsers} from "../components/accountAPI";

const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
    users: '',
    accounts: [],
};

const sortAccounts = (state) => {
  return {
    users: [...state.users],
    //accounts: state.getAccounts.filter(char => char.type === 'account'),
  };
};

const accountReducer = (state = sortAccounts(DEFAULT_STATE), action) => {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return action.payload;

    case 'ADD_ACCOUNT':
      const user = action.payload;
      user.id = generateID();
      state.users.push(user);
      return sortAccounts(state);

    case 'DEPOSIT_ACCOUNT':
      const username = action.payload;
      username.id = generateID();
      state.users.push(username);
      return sortAccounts(state);

    case 'EDIT_ACCOUNT':
      const edit = action.payload;
      edit.id = generateID();
      state.users.push(edit);
      edit.name = document.getElementById('newName');
      return sortAccounts(state);

    case 'REMOVE_ACCOUNT':
      const { id } = action.payload;
      state.users = state.users.filter(acc => {
        return acc.id !== id;
      });
      return sortAccounts(state);

    case 'GET_TODO_ERROR':
      return {
        ...state,
        users: 'Unable to get Todos from API. Please Try again later'
      }

    default:
      return true;
  }
};

export default accountReducer;
