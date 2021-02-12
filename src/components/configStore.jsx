const rootReducer = combineReducers({
  expense: ExpenseReducer,
  filters: FilterReducer
});

export const store = createStore(rootReducer);
