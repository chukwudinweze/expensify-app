import React from "react";

const ExpenseListItem = ({ description, amount, date, note }) => (
  <div>
    <p>{description}</p>
    <p>{amount}</p>
    <p>{date}</p>
    <p>{note}</p>
  </div>
);

export default ExpenseListItem
