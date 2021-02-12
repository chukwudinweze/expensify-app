// filter action generators
export const filterByText = text => ({
  type: "FILTER_BY_TEXT",
  text
});

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

export const sortByDate = () => ({
  type: "SORT_BY_Date"
});

export const startDateFilter = startDate => ({
  type: "START_DATE_FILTER",
  startDate
});

export const endDateFilter = endDate => ({
  type: "END_DATE_FILTER",
  endDate
});
