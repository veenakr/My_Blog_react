import React from 'react';
import PostList from './PostList';
import PostListFilters from './PostListFilters';
import PostSummary from './PostsSummary';

const PostDashboardPage = () => (
  <div className="dashboard dashboard--extend">
    <PostSummary />
    <PostListFilters />
    <PostList />
  </div>
);

export default PostDashboardPage;
