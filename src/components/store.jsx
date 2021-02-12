import { createStore, combineReducers } from "redux";
import ExpenseReducer from "./reducers/expense";
import FilterReducer from "./reducers/filters";

const rootReducer = combineReducers({
  expense: ExpenseReducer,
  filters: FilterReducer
});

const store = createStore(rootReducer);

export default store;
