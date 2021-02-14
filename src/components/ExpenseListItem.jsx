import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "./actions/expense";

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  createdAt,
  note
}) => (
  <div>
    <p>{description}</p>
    <p>{amount}</p>
    <p>{createdAt}</p>
    <p>{note}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove Expense
    </button>
  </div>
);

export default connect()(ExpenseListItem);
