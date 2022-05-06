
const generateID = () => {
    return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
    transactions: [
        { id: generateID(), accountId: 1, type: "deposit", amount: 677.4, name: 'Account Opened'},
        { id: generateID(), accountId: 1, type: "deposit", amount: 1000, name: 'Gold Mine Profits'},
        { id: generateID(), accountId: 1, type: "withdraw", amount: 300, name: 'Iron Bank Interest'},
        { id: generateID(), accountId: 1, type: "withdraw", amount: 402.34, name: 'Defenses of Kings Landing'},
        { id: generateID(), accountId: 2, type: "deposit", amount: 214.72, name: 'Taxes from Kingdoms'},
        { id: generateID(), accountId: 2, type: "deposit", amount: 500, name: 'Account Opened'},
        { id: generateID(), accountId: 2, type: "deposit", amount: 120.34, name: 'Taxes from bannermen'},
        { id: generateID(), accountId: 2, type: "withdraw", amount: 204.23, name: 'Sending Lord to Capital'},
        { id: generateID(), accountId: 2, type: "withdraw", amount: 11.34, name: 'Camping at Twins'},
        { id: generateID(), accountId: 3, type: "deposit", amount: 162.94, name: 'Spoils of War'},
        { id: generateID(), accountId: 3, type: "deposit", amount: 934.36, name: 'Account Opened'},
        { id: generateID(), accountId: 3, type: "withdraw", amount: 394.95, name: 'Younger Brother Rebelled'},
        { id: generateID(), accountId: 3, type: "withdraw", amount: 183.48, name: "Attacked King's Landing"},
        { id: generateID(), accountId: 3, type: "deposit", amount: 500, name: 'Iron Bank Loan'},
        { id: generateID(), accountId: 3, type: "withdraw", amount: 643.03, name: 'withdraw'},
        { id: generateID(), accountId: 3, type: "withdraw", amount: 138.4, name: 'Transit to Wall'},
    ],
    transaction: [],
    //enemies: [],
};

const sortTransactions = (state) => {
    return {
        transactions: [...state.transactions],
        transaction: state.transactions.filter(char => char.name === 'name'),
    };
};

const transactionReducer = (state = sortTransactions(DEFAULT_STATE), action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            const transaction = action.payload;
            transaction.id = generateID();
            transaction.type = "deposit";
            //transaction.balance = balance
            //transaction.name = "Account Opened";
            state.transactions.push(transaction);
            return sortTransactions(state);

        case 'REMOVE_ACCOUNT':
            const { id } = action.payload;
            state.transactions = state.transactions.filter(char => {
                return char.id !== id;
            });
            return sortTransactions(state);

        default:
            return state;
    }
};

export default transactionReducer;
