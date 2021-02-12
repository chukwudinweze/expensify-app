import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "./actions/expense";


const EditExpense = props => (
  <div>
    <h3>Add expense</h3>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push('./')
      }}
    />
  </div>
);

export default connect()(EditExpense);
