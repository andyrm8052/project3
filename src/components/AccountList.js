import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import AccountMember from './AccountMember';
import AddAccount from './AddAccount';
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
    const { title } = this.props;

    //const accountArr = this.props[this.props.stateList];
    //const accountList = accountArr.map((user, index) => {
    const accountList = this.props.accounts.map((user, index) => {
      return <AccountItem user={user} key={user.id}/>
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
    accounts: state.accounts
    //accounts: state.users.accounts,
    //enemies: state.accounts.enemies,
  };
};

export default connect(mapStateToProps, { removeAccount, depositAccount, editAccount })(AccountList);

/*
<AccountMember
    key={index}
    index={index}
    user={user}
    removeAccount={this.onRemoveAccount}
    editAccount={this.onEditAccount}
    depositAccount={this.onDepositAccount}
/>
*/
