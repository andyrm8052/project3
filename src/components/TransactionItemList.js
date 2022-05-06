import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import TransactionItem from './TransactionItem';

const TransactionItemList = (props) => {
  const { transactions } = props;

  const transactionList = transactions
    .sort((a, b) => {
      return b.name - a.name;
    })
    .map((tran, index) => {
      return (
        <TransactionItem key={index}
                     accountId={tran.accountId}
                     type={tran.type}
                     amount={tran.amount}
                     name={tran.name}
       />
      );
    });

  return (
    <div className="card">
        <ul className="list-group">
            <div className="title_lists">
                <div className="id_title">Account ID</div>
                <div className="type_title">Type</div>
                <div className="amount_title">Amount</div>
                <div className="transaction_name_title">Name</div>
            </div>
            { transactionList }
        </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
      transactions: state.transactions.transactions,
  };
}

export default connect(mapStateToProps)(TransactionItemList);
