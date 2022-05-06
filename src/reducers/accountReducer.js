
const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
  accounts: [
    { id: generateID(), name: 'Lannisters', balance: 1189.78 },
    { id: generateID(), name: 'Starks', balance: 567.71 },
    { id: generateID(), name: 'Baratheons', balance: 31.26 },
    { id: generateID(), name: 'Targaryens', balance: 34.75 },
    { id: generateID(), name: 'Greyjoys', balance: 9.03 },
    { id: generateID(), name: 'Tyrells', balance: 1133.45 },
    { id: generateID(), name: 'Martells', balance: 737.9 },
    { id: generateID(), name: 'Tullys', balance: 483.56 },
    { id: generateID(), name: 'Arryns', balance: 1035.83 },
    { id: generateID(), name: 'Free Folk', balance: -134.34 },
  ],
  account: [],
  //enemies: [],
};

const sortAccounts = (state) => {
  let newState = {
    accounts: [ ...state.accounts ],
    //account: state.accounts.filter(char => char.type === 'account'),
    //enemies: state.accounts.filter(char => char.type === 'enemy'),
  };

  return newState;
};

const accountReducer = (state = sortAccounts(DEFAULT_STATE), action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      const account = action.payload;
      account.id = generateID();
      state.accounts.push(account);
      return sortAccounts(state);

    case 'REMOVE_ACCOUNT':
      const { id } = action.payload;
      state.accounts = state.accounts.filter(char => {
        return char.id !== id;
      });
      return sortAccounts(state);

    default:
      return state;
  }
};

export default accountReducer;
