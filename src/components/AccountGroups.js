import React from 'react';
import '../css/index.css'

//displays the accounts w/ balance
const AccountGroups = (props) => {
  return (
    <li className='list-group-item'
        key={props.index}>
      { props.accounts.name }
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => props.removeAccount(props.accounts.id)}>
        Delete
      </button>
    </li>
  );
};

export default AccountGroups;
