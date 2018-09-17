import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const formattedTime = createdAt => {
  const now = moment(createdAt);
  return now.format('MMM Do, YYYY');
};

const PostListItem = ({ id, title, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <h3 className="list-item__title">{title}</h3>
    <p className="date1">{formattedTime(createdAt)}</p>
  </Link>
);

export default PostListItem;
