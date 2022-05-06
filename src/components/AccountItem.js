import React from 'react';
import '../css/index.css'

const AccountItem = (props) => {
  const { name, accBalance, isCurrentTurn } = props;

  let classNames = 'list-group-item d-flex justify-content-between align-items-center';

  if (isCurrentTurn) {
    classNames = classNames.concat(' active');
  }

  return (
    <li className={classNames}>
        <div className="accounts_name">
            { name }
        </div>
      <span className="badge badge-primary badge-pull">
          ${ accBalance }
      </span>
    </li>
  );
};

export default AccountItem;
