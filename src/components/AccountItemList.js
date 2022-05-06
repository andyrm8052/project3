import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import AccountItem from './AccountItem';

const AccountItemList = (props) => {
  const { users } = props;

  const characterList = users
    .sort((a, b) => {
      return b.balance - a.balance;
    })
    .map((acc, index) => {
      return (
        <AccountItem key={index}
                     name={acc.name}
                     accBalance={acc.balance}
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
      users: state.users.users,
  };
}

export default connect(mapStateToProps)(AccountItemList);
