import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import TransactionItem from './TransactionItem';

import { nextTurn, prevTurn } from '../actions';

function isCurrentTurn (currentTurn, index) {
  return currentTurn === index;
}

const TransactionItemList = (props) => {
  const { transactions, currentTurn } = props;

  const transactionList = transactions
    .sort((a, b) => {
      return b.initiative - a.initiative;
    })
    .map((char, index) => {
      return (
        <TransactionItem key={index}
                     type={char.type}
                     amount={char.amount}
                     name={char.name}
                     isCurrentTurn={isCurrentTurn(currentTurn, index)}
       />
      );
    });

  return (
    <div className="card">
        <ul className="list-group">
            <div className="title_lists">
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
      currentTurn: state.turn.current,
  };
}

export default connect(mapStateToProps, { prevTurn, nextTurn })(TransactionItemList);
