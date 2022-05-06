
const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};


const DEFAULT_STATE = {
  users: [
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
  accounts: [],
  //enemies: [],
};

const sortAccounts = (state) => {
  return {
    users: [...state.users],
    accounts: state.users.filter(char => char.type === 'account'),
  };
};

const accountReducer = (state = sortAccounts(DEFAULT_STATE), action) => {
  switch (action.type) {
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
      state.users = state.users.filter(char => {
        return char.id !== id;
      });
      return sortAccounts(state);

    default:
      return state;
  }
};

export default accountReducer;
