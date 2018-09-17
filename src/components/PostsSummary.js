import React from 'react';
import { connect } from 'react-redux';
import selectPosts from '../selectors/posts';
import selectPostsTotal from '../selectors/Posts-total';
import { Link } from 'react-router-dom';

export const PostsSummary = () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button button--add" to="/create">
            Add Post
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visiblePosts = selectPosts(state.posts, state.filters);

  return {
    postCount: visiblePosts.length,
    postsTotal: selectPostsTotal(visiblePosts)
  };
};

export default connect(mapStateToProps)(PostsSummary);
