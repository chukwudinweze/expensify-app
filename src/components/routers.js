import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpense";
import Help from "./Help";
import ErrorPage from "./ErrorPage";

const AppRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/AddExpense" component={AddExpense} />
      <Route path="/EditExpense/:id" component={EditExpense} />
      <Route path="/Help" component={Help} />
      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default AppRouter;
