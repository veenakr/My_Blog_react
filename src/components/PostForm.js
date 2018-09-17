import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      error: ''
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBodyChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.title) {
      this.setState(() => ({ error: 'Please enter Post Title' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Post Title"
          className="text-input"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />

        <textarea className="textarea" placeholder="Post body" value={this.state.body} onChange={this.onBodyChange} />

        <div>
          <button className="button">Save Post</button>
        </div>
      </form>
    );
  }
}
