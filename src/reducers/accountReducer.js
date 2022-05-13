import axios from "axios";

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
  };
};

const accountReducer = (state = sortAccounts(DEFAULT_STATE), action) => {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return {users: action.payload}

    case 'ADD_ACCOUNT':
      const user = action.payload;
      user.id = generateID();
      state.users.push(user);
      return sortAccounts(state);

    case 'DEPOSIT_ACCOUNT':
      const username = action.payload;
      username.id = generateID();
      const amount = document.getElementById('BalanceAmount');
      const curName = document.getElementById('AccName');
      const selectedName = curName.value;
      if (username === selectedName){
        state.balance = state.balance+amount;
      }
      state.balance.push(username);
      return {balance: action.payload}

    case 'EDIT_ACCOUNT':
      const accName = document.getElementById('newName');
      const inputName = document.getElementById('EditAccName');
      const option = accName.value;
      let newName = '';
      if (inputName === option){
        newName = inputName;
      }
      const edit = action.payload;
      let accounts = state.users;
      accounts.push({
        title: accName,
        name: newName
      });
      this.setState({ accounts });

      edit.id = generateID();
      newName.users.push(edit);
      state.users.push(edit);
      return { users: action.payload };

    case 'REMOVE_ACCOUNT':
      const { id } = action.payload;
      state.users = state.users.filter(acc => {
        return acc._id !== id;
      });
      return sortAccounts(state);

    case 'GET_TODO_ERROR':
      return {
        ...state,
        users: 'Unable to get Todos from API. Please Try again later'
      }

    default:
      return state;
  }
};

export default accountReducer;
