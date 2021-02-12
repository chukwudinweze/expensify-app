import { createStore, combineReducers } from "redux";
import ExpenseReducer from "./reducers/expense";
import FilterReducer from "./reducers/filters";
import {addExpense} from './actions/expense'

const rootReducer = combineReducers({
  expense: ExpenseReducer,
  filters: FilterReducer
});

const store = createStore(rootReducer);

store.subscribe(()=>{
  console.log(store.getState())
})

const expenseOne = store.dispatch(
  addExpense({
    description: "book",
    amount: 100,
    createdAt: 200,
    note: "renting"
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "learning coding",
    amount: "undeserved",
    createdAt: 100000
  })
);

export default store;
