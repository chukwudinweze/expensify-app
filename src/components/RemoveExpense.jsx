import React from "react";

const RemoveExpene = () => (
  <div>
    <button>Remove Expense</button>
  </div>
);

const mapStateToProps = state => ({
  expenseId: state.expense.id
});
export default connect(mapStateToProps)(RemoveExpene);
