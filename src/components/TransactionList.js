import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import TransactionGroups from './TransactionGroups';
import AddAccount from './AddAccount';

import { removeAccount } from '../actions';
import AccountItem from "./AccountItem";

class TransactionList extends React.Component {

  render() {
    const transactionList = this.props.transactions.sort((a, b) => {
      return b.name - a.name}).map((trans, index) => {
      return <AccountItem trans={trans} key={trans.id} removeAccount={this.props.removeAccount}/>
    });

    return (
      <div className="card">
        <h3>Transaction List</h3>
        <ul className="list-group">
          { transactionList }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transaction: state.transactions.transactions,
  };
};

export default connect(mapStateToProps, {removeAccount})(TransactionList);
