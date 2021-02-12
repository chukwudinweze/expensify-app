import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <div>
    {React.Children.toArray(
      props.expenses.map(expense => <ExpenseListItem {...expense} />)
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expense
});

export default connect(mapStateToProps)(ExpenseList);
