import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters';

class PostListFilters extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search posts"
              value={this.props.filters.text}
              onChange={e => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={e => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === 'title') {
                  this.props.dispatch(sortByTitle());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(PostListFilters);
