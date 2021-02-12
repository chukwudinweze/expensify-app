import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routers";
import { Provider } from 'react-redux'
import store from './components/store'


export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
