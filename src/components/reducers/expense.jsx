// expense reducer
const ExpenseDefaultState = [];
const ExpenseReducer = (state = ExpenseDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => {
        return action.id !== expense.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense =>
        action.id === expense.id ? { ...expense, ...action.updates } : expense
      );
    default:
      return state;
  }
};

export default ExpenseReducer;
