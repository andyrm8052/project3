import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import TransactionGroups from './TransactionGroups';
import AddAccount from './AddAccount';

import { removeAccount } from '../actions';

class TransactionList extends React.Component {

  onRemoveAccount = (id) => {
    this.props.removeAccount(id);
  }

  render() {
    const { title, transactionType } = this.props;

    const accountArr = this.props[this.props.stateList];
    const accountList = accountArr.map((transactions, index) => {
      return (
        <TransactionGroups
          key={index}
          index={index}
          transactions={transactions}
          removeAccount={this.onRemoveAccount}
        />
      );
    });
    return (
      <div className="card">
        <h3>{title} List</h3>
        <AddAccount transactionType={transactionType} />
        <ul className="list-group">
          { accountList }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transaction: state.transactions.transaction,
    //enemies: state.accounts.enemies,
  };
};

export default connect(mapStateToProps, { removeAccount })(TransactionList);
