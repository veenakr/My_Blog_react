import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <h3 className="list-item__title">{description}</h3>
  </Link>
);

export default ExpenseListItem;
