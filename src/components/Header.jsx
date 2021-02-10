import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/AddExpense" activeClassName="active">
      AddExpense
    </NavLink>
    <NavLink to="/Help" activeClassName="active">
      Help
    </NavLink>
  </div>
);

export default Header;
