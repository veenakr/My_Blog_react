import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <h3 className="list-item__title">{title}</h3>
  </Link>
);

export default PostListItem;
