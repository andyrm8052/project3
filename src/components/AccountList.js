import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import AccountGroups from './AccountGroups';
import AddAccount from './AddAccount';

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
    const { title, accountType } = this.props;

    const accountArr = this.props[this.props.stateList];
    const accountList = accountArr.map((user, index) => {
      return (
        <AccountGroups
          key={index}
          index={index}
          user={user}
          removeAccount={this.onRemoveAccount}
          editAccount={this.onEditAccount}
          depositAccount={this.onDepositAccount}
        />
      );
    });
    return (
      <div className="card">
        <h3>{title} List</h3>
      
        <ul className="list-group">
          { accountList }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.users.accounts,
    //enemies: state.accounts.enemies,
  };
};

export default connect(mapStateToProps, { removeAccount, depositAccount, editAccount })(AccountList);
