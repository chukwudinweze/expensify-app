import React from "react";
import { Link } from "react-router-dom";


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
   
  </div>
);

export default ExpenseListItem;
