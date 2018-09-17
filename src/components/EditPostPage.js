import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class EditPostPage extends React.Component {
  onSubmit = post => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="dashboard--edit">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit post</h1>
          </div>
          <div className="link-id">
            <Link target="_blank" className="link-id__content" to={`/edit/${this.props.post.id}`}>
              Post Readable at https://my-blog-app-react.herokuapp.com/edit/
              {this.props.post.id}
            </Link>
          </div>
        </div>
        <div className="content-container">
          <PostForm post={this.props.post} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onRemove}>
            Remove Post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: data => dispatch(startRemovePost(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostPage);
