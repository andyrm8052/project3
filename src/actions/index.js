export const addAccount = (name, balance) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      name, balance,
    }
  };
};

export const depositAccount = (name, balance) => {
  return {
    type: 'DEPOSIT_ACCOUNT',
    payload: {
      name, balance,
    }
  };
};

export const removeAccount = (id) => {
  return {
    type: 'REMOVE_ACCOUNT',
    payload: {
      id
    },
  };
};

export const editAccount = (id) => {
  return {
    type: 'EDIT_ACCOUNT',
    payload: {
      id
    },
  };
};
