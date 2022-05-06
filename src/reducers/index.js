import { combineReducers } from 'redux';

import accountReducer from './accountReducer';
import transactionReducer from './transactionReducer';
import turnReducer from './turnReducer';

export default combineReducers({
    accounts: accountReducer,
    transactions: transactionReducer,
    turn: turnReducer,
});
