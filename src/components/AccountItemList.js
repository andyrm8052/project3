import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import AccountItem from './AccountItem';

import { nextTurn, prevTurn } from '../actions';

function isCurrentTurn (currentTurn, index) {
  return currentTurn === index;
}

const AccountItemList = (props) => {
  const { accounts, currentTurn } = props;

  const characterList = accounts
    .sort((a, b) => {
      return b.initiative - a.initiative;
    })
    .map((char, index) => {
      return (
        <AccountItem key={index}
                     name={char.name}
                     accBalance={char.balance}
                     isCurrentTurn={isCurrentTurn(currentTurn, index)}
       />
      );
    });

  return (
    <div className="card">
        <ul className="list-group">
          <div className="name_title">Name</div>
          <div className="balance_title">Balance</div>
            { characterList }
        </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
      accounts: state.accounts.accounts,
      currentTurn: state.turn.current,
  };
}

export default connect(mapStateToProps, { prevTurn, nextTurn })(AccountItemList);
