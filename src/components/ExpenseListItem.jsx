import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    <Link to={`/EditExpense/${id}`}>
      <p>{description}</p>
    </Link>

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
