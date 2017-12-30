import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => (
  <div className="expense">
    <Link to={`/edit/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>
    {props.amount} - {props.createdAt}
  </div>
);

export default ExpenseListItem;