import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>
      Home Master <Link to="/AddExpense">add</Link>
    </h1>
  </div>
);

export default Home;
