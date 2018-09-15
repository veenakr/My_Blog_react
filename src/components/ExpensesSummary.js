import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

export const ExpensesSummary = () => {
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
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
