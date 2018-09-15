import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please enter Post Title' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note
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
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <textarea className="textarea" placeholder="Post body" value={this.state.note} onChange={this.onNoteChange} />

        <div>
          <button className="button">Save Post</button>
        </div>
      </form>
    );
  }
}
