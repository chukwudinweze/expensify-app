import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "./selectors/expense";

const ExpenseList = props => (
  <div>
    {React.Children.toArray(
      props.expenses.map(expense => <ExpenseListItem {...expense} />)
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expense, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
