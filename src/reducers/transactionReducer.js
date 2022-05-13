
const generateID = () => {
    return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
    transactions: '',
    transaction: [],
};

const sortTransactions = (state) => {
    return {
        transactions: [...state.transactions],
    };
};

const transactionReducer = (state = sortTransactions(DEFAULT_STATE), action) => {
    switch (action.type) {
        case 'SET_TRANSACTION':
            return {transactions: action.payload}

        case 'ADD_ACCOUNT':
            const transaction = action.payload;
            transaction.id = generateID();
            transaction.type = "deposit";
            transaction.name = "Account Opened";
            state.transactions.push(transaction);
            return sortTransactions(state);

        case 'REMOVE_ACCOUNT':
            const { id } = action.payload;
            const transactionName = action.payload;
            transactionName.name = 'Account Removed';
            state.transactions = state.transactions.filter(char => {
                return char._id !== id;
            });
            return sortTransactions(state);

        default:
            return state;
    }
};

export default transactionReducer;
