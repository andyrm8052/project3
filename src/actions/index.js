export const addAccount = (name, balance) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      name, balance
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

export const nextTurn = () => {
  return { type: 'NEXT_TURN' };
};

export const prevTurn = () => {
  return { type: 'PREV_TURN' };
};
