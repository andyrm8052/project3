import React from 'react';
import '../css/index.css'

const AccountItem = (props) => {
  //const { name, accBalance } = props;

  let classNames = 'list-group-item d-flex justify-content-between align-items-center';

  return (
    <li className={classNames}>
        <div className="accounts_name" id="accounts_name">
            { props.user.name }
        </div>
        <span className="badge badge-primary badge-pull">
            ${ props.user.balance }
            <button
                type="button"
                className="btn btn-danger float-right deleteAccount"
                onClick={() => props.removeAccount(props.user._id)}>
                Delete
            </button>
        </span>
    </li>
  );
};

export default AccountItem;

// inside span or below span
// <AccountMember/>
//
