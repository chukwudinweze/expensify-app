import React from "react";

const ExpenseListItem = ({ description, amount, createdAt, note }) => (
  <div>
    <p>{description}</p>
    <p>{amount}</p>
    <p>{createdAt}</p>
    <p>{note}</p>
  </div>
);

export default ExpenseListItem
