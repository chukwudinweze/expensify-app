// filter reducer
const FilterDefaultState = {
  text: "",
  sortBy: " date", //or amount
  startDate: 0,
  endDate: 0
};
const FilterReducer = (state = FilterDefaultState, action) => {
  switch (action.type) {
    case "FILTER_BY_TEXT":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_Date":
      return { ...state, sortBy: "date" };
    case "START_DATE_FILTER":
      return { ...state, startDate: action.startDate };
    case "END_DATE_FILTER":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default FilterReducer;
