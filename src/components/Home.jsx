import React from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import FilterExpense from "./FilterExpense";

const Home = () => (
  <div>
    <FilterExpense />
    <ExpenseList />
  </div>
);

export default Home;
