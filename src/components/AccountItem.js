import React from 'react';
import '../css/index.css'

const AccountItem = (props) => {
  const { name, accBalance} = props;

  let classNames = 'list-group-item d-flex justify-content-between align-items-center';

  return (
    <li className={classNames}>
        <div className="accounts_name">
            { name }
        </div>
        <span className="badge badge-primary badge-pull">
            ${ accBalance }
            <button
                type="button"
                className="deleteAccount"
                onClick={() => props.removeAccount(props.accounts.id)}>
                Delete
            </button>
        </span>
    </li>
  );
};

export default AccountItem;
