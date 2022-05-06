import React from 'react';
import '../css/index.css'

//displays the accounts w/ balance
const TransactionGroups = (props) => {
  return (
    <li className='list-group-item'
        key={props.index}>
      { props.transactions.name }
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => props.removeAccount(props.transactions.id)}>
        Delete
      </button>
    </li>
  );
};

export default TransactionGroups;
