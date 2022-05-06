import React from 'react';
import '../css/index.css'

const TransactionItem = (props) => {
  const { accountId, type, amount, name } = props;

  let classNames = 'list-group-item d-flex justify-content-between align-items-center';

  return (
    <li className={classNames}>
        <div className="transaction_items">
            <div className="transactions_id">
                { accountId }
            </div>
            <div className="transactions_type">
                { type }
            </div>
          <div className="transactions_amount">
              ${ amount }
          </div>
            <div className="transactions_name">
                { name }
            </div>
        </div>
    </li>
  );
};

export default TransactionItem;
