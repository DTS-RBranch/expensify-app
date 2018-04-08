import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({
  expenseCount, 
  expensesTotal, 
  hiddenExpenseCount, 
  hiddenExpenseTotal 
}) => {
  const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
  const hiddenExpensesWord = hiddenExpenseCount === 1 ? 'expense' : 'expenses';
  const hiddenExpensesWord2 = hiddenExpenseCount === 1 ? 'is' : 'are';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const formattedHiddenExpenseTotal = numeral(hiddenExpenseTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expensesWord} totalling <span>{formattedExpenseTotal}</span>
        </h1>
        {hiddenExpenseCount > 0 &&
        
        <h3 className="page-header__subtitle">
          <span>
            {hiddenExpenseCount} {hiddenExpensesWord} totalling {formattedHiddenExpenseTotal} {hiddenExpensesWord2} not shown.
          </span>
        </h3>}
        
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const visibleExpensesTotal = selectExpensesTotal(visibleExpenses);
  const expensesTotal = selectExpensesTotal(state.expenses);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: visibleExpensesTotal,
    hiddenExpenseCount: state.expenses.length - visibleExpenses.length,
    hiddenExpenseTotal: expensesTotal - visibleExpensesTotal
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
