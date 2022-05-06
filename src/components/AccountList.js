import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css'

import AccountGroups from './AccountGroups';
import AddAccount from './AddPlayer';

import { removeAccount } from '../actions';

class AccountList extends React.Component {

  onRemoveAccount = (id) => {
    this.props.removeAccount(id);
  }

  render() {
    const { title, accountType } = this.props;

    const accountArr = this.props[this.props.stateList];
    const accountList = accountArr.map((accounts, index) => {
      return (
        <AccountGroups
          key={index}
          index={index}
          accounts={accounts}
          removeAccount={this.onRemoveAccount}
        />
      );
    });
    return (
      <div className="card">
        <h3>{title} List</h3>
        <AddAccount accountType={accountType} />
        <ul className="list-group">
          { accountList }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.accounts.account,
    //enemies: state.accounts.enemies,
  };
};

export default connect(mapStateToProps, { removeAccount })(AccountList);
