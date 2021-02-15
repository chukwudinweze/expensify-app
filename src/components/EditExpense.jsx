import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "./actions/expense";

//edit component
const EditExpense = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expenseUpdate => {
          props.dispatch(editExpense(props.expense.id, expenseUpdate));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
        }}
      >
        Remove Expense
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expense.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpense);
