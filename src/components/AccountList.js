import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import AccountItem from "./AccountItem";
import { removeAccount, depositAccount, editAccount } from '../actions';

class AccountList extends React.Component {

  onRemoveAccount = (id) => {
    this.props.removeAccount(id);
  }

  onDepositAccount = (id) => {
    this.props.depositAccount(id);
  }


  onEditAccount = (id) => {
    this.props.editAccount(id);
  }

  render() {
    const accountList = this.props.accounts.sort((a, b) => {
      return b.balance - a.balance}).map((user, index) => {
      return <AccountItem user={user} key={user.id} removeAccount={this.props.removeAccount}/>
    });

    return (
      <div className="card">
        <h3>Account List</h3>
        <ul className="list-group">
          { accountList }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.users.users,
  };
};

export default connect(mapStateToProps, { removeAccount, depositAccount, editAccount })(AccountList);
