import moment from 'moment'
// this function enables filtering of expenses by description and sorting of expenses either by date or by amount

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        expense ? moment('2010-10-20').isBefore('2010-10-21'):true;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.expense.amount < b.expense.amount ? 1 : -1;
      }
    });
};
